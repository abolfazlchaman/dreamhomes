const Footer = () => {
	return (
		<div className="w-full bg-[#F7F7F7] pt-[120px] md:px-[150px] px-8 pb-[56px] mt-[60px]">
			<div className="w-full flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-8">
				<div className="flex flex-col gap-7">
					<span className="text-[#333] font-bold text-[28px]">Dream Homes</span>
					<p className="text-[#333] font-medium text-[15px] max-w-[300px] leading-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus earum
						labore perspiciatis, a alias inventore.
					</p>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="text-[#425e85] font-medium text-[17px] mb-5">Services</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Real Estate Agencies
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Rental Houses
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Real Estate Advisory
					</a>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="text-[#425e85] font-medium text-[17px] mb-5">Collections</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Classic
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Luxury
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Modern
					</a>
				</div>
				<div className="flex flex-col">
					<span className="text-[#425e85] font-medium text-[17px] mb-5">Follow Us</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Facebook
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Twitter
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Instagram
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;