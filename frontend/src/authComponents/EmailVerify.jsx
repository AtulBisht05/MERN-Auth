import { useEffect, useState } from "react";
import { useParams, Link,useNavigate  } from "react-router-dom";
import axios from "axios";
import success from "../assets/success.jpg";


const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();
    // const navigate = useNavigate();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:4000/api/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
                // navigate("/login");
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div className='text-center mt-5'>
					<img className="m-auto" src={success} alt="success_img" height={250} width={250} />
					<h1 className="p-2">Email verified successfully</h1>
					<Link to="/login">
						<button className='p-2 text-white hover:bg-blue-600 bg-blue-900 rounded-2xl'>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;