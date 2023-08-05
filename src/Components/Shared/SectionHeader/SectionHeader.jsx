import React from "react";

const SectionHeader = ({ bgImage, subTitle, title }) => {
	return (
		<section
			className="relative h-[50vh] md:h-[90vh] bg-cover bg-center text-white bg-fixed"
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
		>
			<div className="absolute inset-0 flex flex-col text-center items-center justify-center z-10">
				<h1 className="font-bold mb-4 font-Montserrat text-2xl my-5">
					{subTitle}
				</h1>
				<p className="text-5xl md:text-7xl font-bold font-Montserrat">
					{title}
				</p>
			</div>
			<div className="absolute inset-0 bg-black opacity-50"></div>
		</section>
	);
};

export default SectionHeader;
