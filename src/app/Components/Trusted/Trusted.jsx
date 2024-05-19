import React from 'react';
import { FaSmile, FaAward, FaClock, FaBuilding } from 'react-icons/fa';

const Trusted = () => {
	const items = [
		{ title: "Satisfied Customers", value: "700+", icon: <FaSmile /> },
		{ title: "Awards Earned", value: "8+", icon: <FaAward /> },
		{ title: "Years of Experience", value: "25+", icon: <FaClock /> },
		{ title: "Property Collection", value: "19+", icon: <FaBuilding /> },
	];
	return (
		<div className="w-full lg:px-[150px] px-5 flex flex-col items-center justify-center pt-8 pb-16 gap-10">
			<div className="flex flex-col items-center gap-2">
				<span className="text-[28px] font-semibold text-[#416477] text-center">
					Your Trust Means Everything To Us
				</span>
				<p className="font-light text-[15px] text-gray-600 text-center">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo earum repellat illum
					officiis in maiores.
				</p>
			</div>
			<div className="flex w-full md:flex-row flex-col items-center justify-between gap-8">
				{items.map((item) => (
					<div
						key={item.title}
						className="flex flex-col gap-3 text-center w-full rounded-lg bg-gray-200 py-3 shadow-sm"
					>
						<span className="text-[#416477] text-[40px] font-semibold">{item.value}</span>
						<span className="text-[#416477] flex justify-center text-[40px]">{item.icon}</span>
						<span className="text-gray-800">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Trusted;