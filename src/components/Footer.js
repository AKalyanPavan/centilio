import Logo from './../images/logo.png';
import footerImage from './../images/foot-ban.png';
import facebook from './../images/facebook.png';
import linkedin from './../images/linkedin.png';
import instagram from './../images/instagram.png';
import twitter from './../images/twitter.png';

function Footer({showImage = true}) {
	return (
		<>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto">
				{showImage && 
			        <div className="mt-[150px] bg-[#0e071e] flex items-center text-white justify-between rounded-[14px] px-[80px] max-lg:py-[80px] max-sm:p-[30px]">
			        	<div className="">
				        	<div className="sm:text-[44px] text-[30px] leading-[54px] font-bold mb-[50px]">
				        		<span>Get Started with <br className="max-sm:hidden" />Centilio Sign Today!</span>
				        	</div>
				        	<span className="text-[18px]">15 day free trial No credit card required.</span>
				        	<a className="">
					        	<div className="cursor-pointer text-[#2c0563] w-fit bg-white font-semibold px-[40px] py-[14px] rounded-[6px] mt-[20px]">
					        		Contact Sales
					        	</div>
				        	</a>
			        	</div>
			        	<img className="w-[40%] pt-[80px] lg:block hidden" src={footerImage} />
			        </div>
		    	}
		        <div className="mt-[150px] md:flex gap-[40px]">
		        	<div className="w-fit max-md:mb-[50px]">
			        	<img className="w-[150px]" src={Logo} />
			        	<div className="text-[32px] font-bold max-w-[400px] mt-[25px]">
			        		Making innovation a predictable driver of growth.
			        	</div>
		        	</div>
		        	<div className="text-left flex flex-col justify-between">
		        		<div className="font-bold text-[18px] mb-[10px] max-md:mb-[30px]">Legal</div>
	        			<a>
	        				<div className="max-md:mb-[20px] text-[#625e6d] cursor-pointer">Terms of use</div>
	        			</a>
	        			<a>
	        				<div className="max-md:mb-[20px] text-[#625e6d] cursor-pointer">Privacy Policy</div>
	        			</a>
	        			<a>
	        				<div className="max-md:mb-[20px] text-[#625e6d] cursor-pointer">Cookies Policy</div>
	        			</a>
	        			<a>
	        				<div className="max-md:mb-[20px] text-[#625e6d] cursor-pointer">GDPR Policy</div>
	        			</a>
		        	</div>
		        </div>
		        <div className="flex justify-end gap-[30px] mt-[100px]">
		        	<img className="h-[18px] cursor-pointer" src={facebook} />
		        	<img className="h-[18px] cursor-pointer" src={linkedin} />
		        	<img className="h-[18px] cursor-pointer" src={instagram} />
		        	<img className="h-[18px] cursor-pointer" src={twitter} />
		        </div>
			</section>

			<section className="my-[20px] border-t-[1px] border-t-solid border-t-[f3f3f4]">
				<div className="pt-[20px] max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto text-[14px] text-[#b7b8ba] sm:flex justify-between">
					<div className="mb-[20px]">© 2022 Centilio, Inc.</div>
					<div className="text-right">Email us: <a className="cursor-pointer">team@centilio.com</a></div>
				</div>
			</section>
		</>
	)
}

export default Footer;