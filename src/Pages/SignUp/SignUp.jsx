import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import Container from "../../Components/Shared/Container/Container";
import img from '../../assets/images/login.jpg'
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
	const { loading, setLoading, createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		// Image Upload
		const image = form.image.files[0];
		const formData = new FormData();
		formData.append("image", image);
		const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`;
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imageData) => {
				const imageUrl = imageData.data.display_url;
				createUser(email, password)
					.then((res) => {
						const loggedUser = res.user;
						console.log(loggedUser);
						updateUserProfile(name, imageUrl)
							.then(() => {
								toast.success("Successfully Sign Up");
								// saveUser(res.user);
								navigate(from, { replace: true });
							})
							.catch((err) => {
								setLoading(false);
								console.log(err.message);
								toast(err.message);
							});
					})
					.catch((err) => {
						setLoading(false);
						console.log(err.message);
						toast.error(err.message);
					});
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});
		return;
	};

	return (
		<Container>
			<div className="grid md:grid-cols-2 justify-center items-center mt-[50px]">
            <img className="w-[80%]" src={img} alt="" />
				<div className="flex justify-center items-center min-h-screen mt-[50px] md:mt-0">
					<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
						<div className="mb-8 text-center">
							<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
							<p className="text-sm text-gray-400">Welcome to AirCNC</p>
						</div>
						<form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6">
							<div className="space-y-4">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										placeholder="Enter Your Name Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
								<div>
									<label htmlFor="image" className="block mb-2 text-sm">
										Select Image:
									</label>
									<input
										required
										type="file"
										id="image"
										name="image"
										accept="image/*"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Email address
									</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										placeholder="Enter Your Email Here"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
										data-temp-mail-org="0"
									/>
								</div>
								<div>
									<div className="flex justify-between">
										<label htmlFor="password" className="text-sm mb-2">
											Password
										</label>
									</div>
									<input
										type="password"
										name="password"
										id="password"
										required
										placeholder="*******"
										className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="bg-rose-500 w-full rounded-md py-3 text-white"
								>
									{loading ? (
										<TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
									) : (
										"Continue"
									)}
								</button>
							</div>
						</form>
						<div className="flex items-center pt-4 space-x-1">
							<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
							<p className="px-3 text-sm dark:text-gray-400">
								Signup with social accounts
							</p>
							<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
						</div>
						<SocialLogin />
						<p className="px-6 text-sm text-center text-gray-400">
							Already have an account?{" "}
							<Link
								to="/login"
								className="hover:underline hover:text-rose-500 text-gray-600"
							>
								Login
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default SignUp;
