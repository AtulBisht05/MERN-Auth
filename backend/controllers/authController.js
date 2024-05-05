const userModels = require('../models/userModel.js');
const Token = require('../models/token.js');
const sendEmail = require('../utils/sendMail.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

//register user
const register = async (req, res) => {

  try {
    const { username, email, password } = req.body;

    if (!username | !email | !password) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    const existEmail = await userModels.findOne({ email: email });

    if (existEmail) {
      return res.status(400).json({ message: 'Email already exist' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new userModels({
      username,
      email,
      password: hashPassword
    });

    await newUser.save();
    // res.status(200).json({ success: true, message: 'User registered successfully', user: newUser });

    const token = await new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}api/${newUser.id}/verify/${token.token}`;
    await sendEmail(newUser.email, "Verify Email", url);

    res.status(201).send({ message: "An Email sent to your account please verify" });

  }
  catch (err) {
     res.status(500).send({ message: err.message })
  }

}

//Login user
const login = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email | !password) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    const user = await userModels.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    
    if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.BASE_URL}api/${user.id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
		}

		// const token = user.generateAuthToken();
		// res.status(200).send({ data: token, message: "logged in successfully" });

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '4h' });
    res.status(200).json({ success: true, message: 'User logged in successfully', data: { user: user, token: token } });

  }
  catch (err) {
    res.status(500).send({ message: err.message })
  }

}

const forgotPassword = async (req, res) => {

  try {
    // Find the user by email
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Please Enter a valid email' });
    }

    const user = await userModels.findOne({ email: email });

    // If user not found, send error message
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Generate a unique JWT token for the user that contains the user's id
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "10m" });

    // Send the token to the user's email
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: Number(process.env.EMAIL_PORT),
      service: process.env.SERVICE,
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // Email configuration
    const mailOptions = {
      from: process.env.USER,
      to: req.body.email,
      subject: "Reset Password",
      text: `http://localhost:5173/resetPassword/${user._id}/${token}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log({ message: err.message });
      } else {
        return res.status(200).send({ message: "Email sent successfully" });
      }
    });

  } catch (err) {
    res.status(500).send({ message: err.message });
  }

};

const resetPassword = (req, res) => {

  const { id, token } = req.params;
  const { password } = req.body;

  console.log("token", token);

  jwt.verify(token, "JWT_SECRET_KEY", (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err)

      // return res.status(400).send({ message: "Invalid Token" })
    } else {
      bcrypt.hash(password, 10)
        .then(hash => {
          userModels.findByIdAndUpdate({ _id: id }, { password: hash })
            .then(res => res.send({ Status: "Success" }))
            .catch(err => res.send({ Status: err }))
        })
        .catch(err => res.send({ Status: err }))
    }
  });
};

const verifyEmail = async (req, res) => {
  try {

    const user = await userModels.findOne({ _id: req.params.id });
    console.log("user id is ",user)
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,

    });

    if (!token) return res.status(400).send({ message: "Invalid link" });

    await userModels.updateOne({ _id: user._id, verified: true });
   
    res.status(200).send({ message: "Email verified successfully" });
    // await token.remove();
   

  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { register, login, forgotPassword, resetPassword, verifyEmail };