const contactModels =require('../models/contactModel.js');

const contact = async (req, res) => {
    try {
        const { fullname, phone, email, subject, message } = req.body;
        const newContact = new contactModels({ fullname, phone, email, subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Message added successfully' });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { contact }