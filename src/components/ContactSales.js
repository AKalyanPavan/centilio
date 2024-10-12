import Header from './Header.js';
import StarIcon from './StarIcon.js';
import Button from './Button.js';
import Footer from './Footer.js';

function ContactSales() {
	return(
		<>
			<Header />
			<div className="w-[500px] mt-[50px] mx-auto p-[20px]" style={{
				boxShadow: "0 0 15px -1px #00000014",
			}}>
				<div className="mx-auto text-center font-bold text-[24px]">Contact Sales</div>
				<form className="mt-[20px]" action="https://centilio.myfreshworks.com/crm/sales/smart_form/create_entity" novalidate="novalidate" method="POST">
					<div>
						<div className="flex items-center">
							<span className="text-[13px] tracking-wider">First Name</span>
							<StarIcon />
						</div>
						<input className="outline-none w-[100%] border-solid border-[1.5px] border-[#e8e8e8] focus:border-[#5f5dea] px-[10px] text-[#12344d] py-[10px] mt-[5px] rounded-[5px] text-[14px]" type="text" placeholder="Enter your first name" />
					</div>
					<div className="mt-[15px]">
						<div className="flex items-center">
							<span className="text-[13px] tracking-wider">Last Name</span>
						</div>
						<input className="outline-none w-[100%] border-solid border-[1.5px] border-[#e8e8e8] focus:border-[#5f5dea] px-[10px] text-[#12344d] py-[10px] mt-[5px] rounded-[5px] text-[14px]" type="text" placeholder="Enter your last name" />
					</div>
					<div className="mt-[15px]">
						<div className="flex items-center">
							<span className="text-[13px] tracking-wider">Company Name</span>
						</div>
						<input className="outline-none w-[100%] border-solid border-[1.5px] border-[#e8e8e8] focus:border-[#5f5dea] px-[10px] text-[#12344d] py-[10px] mt-[5px] rounded-[5px] text-[14px]" type="text" placeholder="Enter your company name" />
					</div>
					<div className="mt-[15px]">
						<div className="flex items-center">
							<span className="text-[13px] tracking-wider">Email Address</span>
							<StarIcon />
						</div>
						<input className="outline-none w-[100%] border-solid border-[1.5px] border-[#e8e8e8] focus:border-[#5f5dea] px-[10px] text-[#12344d] py-[10px] mt-[5px] rounded-[5px] text-[14px]" type="text" placeholder="Enter your email address" />
					</div>
					<div className="mt-[15px]">
						<div className="flex items-center">
							<span className="text-[13px] tracking-wider">Mobile</span>
						</div>
						<input className="outline-none w-[100%] border-solid border-[1.5px] border-[#e8e8e8] focus:border-[#5f5dea] px-[10px] text-[#12344d] py-[10px] mt-[5px] rounded-[5px] text-[14px]" type="text" placeholder="Enter your mobile number" />
					</div>
					<div className="mt-[15px]">
						<div className="flex items-center">
							<span className="text-[13px] tracking-wider">Description</span>
							<StarIcon />
						</div>
						<textarea className="outline-none w-[100%] border-solid border-[1.5px] border-[#e8e8e8] focus:border-[#5f5dea] px-[10px] text-[#12344d] py-[10px] mt-[5px] rounded-[5px] text-[14px] h-[150px]" type="text" placeholder="Enter your message" />
					</div>
					<div className="flex justify-center">
						<button className="text-[14px] bg-[#12344d] text-white font-semibold px-[25px] py-[10px] mt-[20px]">Submit</button>
					</div>
				</form>
			</div>
			<Footer showImage={false} />
		</>
	)
}

export default ContactSales;