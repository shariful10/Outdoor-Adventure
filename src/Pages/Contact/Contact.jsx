import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";

const Contact = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	console.log(watch("example"));
	return (
		<div className="">
			<SectionHeader
				title={"Contact Us"}
				bgImage={"https://i.ibb.co/z7cm0qN/about-bg-2.jpg"}
			></SectionHeader>
			<div className="lg:flex lg:justify-between items-center gap-10">
				<div className="lg:w-1/2 p-8 border-2 border-gray-700">
					<h1 className="text-4xl mb-12">WE'RE READY, LET'S TALK.</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<input
								className="px-4 py-2 border w-full border-gray-500 "
								placeholder="Name"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="text-red-600 mt-3">
									Name field is required
								</span>
							)}
						</div>

						<input
							className="px-4 py-2 my-4 border w-full border-gray-500 "
							placeholder="Email Address"
							{...register("email", { required: true })}
						/>
						{/* errors will return when field validation fails  */}
						{errors.email && <span>Email is required</span>}
						<input
							className="px-4 py-10 border w-full border-gray-500 "
							placeholder="Message"
							{...register("exampleRequired", { required: true })}
						/>
						{/* errors will return when field validation fails  */}
						{errors.message && <span>Message is required</span>}
						<br />

						<input
							className="px-12 rounded-3xl text-white font-semibold mt-4 py-3 bg-red-600"
							type="submit"
						/>
					</form>
				</div>
				<div className="lg:w-1/2 p-8 border-2 border-gray-700">
					<h1 className="text-4xl mb-12">CONTACT INFO</h1>
					<div className="">
						<h3 className="text-md font-semibold">Address​</h3>
						<p className="text-base text-gray-500">
							123 Fifth Avenue, NY 10160, New York, USA
						</p>
					</div>
					<div className="my-2">
						<h3 className="text-md font-semibold">Email Us​</h3>
						<p className="text-base text-gray-500">
							contact@example.com
						</p>
					</div>
					<div className="mb-2">
						<h3 className="text-md font-semibold">Call Us​</h3>
						<p className="text-base text-gray-500">800-123-456</p>
					</div>
					<div>
						<h3 className="text-md font-semibold">Follow Us</h3>
						<div className="flex gap-3 text-white text-xl my-2">
							<button className="py-2 px-3 bg-red-500 rounded-xl">
								<FaFacebookF className=""></FaFacebookF>
							</button>
							<button className="py-2 px-3 bg-red-500 rounded-xl">
								<FaTwitter></FaTwitter>
							</button>
							<button className="py-2 px-3 bg-red-500 rounded-xl">
								<FaYoutube></FaYoutube>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
