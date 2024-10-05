import React, { useState, useEffect } from 'react';
import HomepageImage from './../images/homepage/Homepage.png';
import DigitalOcean from './../images/homepage/brands/digital-ocean.png';
import ModanydotCom from './../images/homepage/brands/monday-com.png';
import AWS from './../images/homepage/brands/logo-aws.png';
import Stratos from './../images/homepage/brands/stratos.png';
import Meka from './../images/homepage/brands/meka.webp';
import GoogleCloud from './../images/homepage/brands/logo-google-cloud.png';
import PipeDrive from './../images/homepage/brands/pipedrive.svg';
import Ion8 from './../images/homepage/brands/ion8.jpeg';
import GSConsite from './../images/homepage/brands/gsconsite.png';
import ProtonMail from './../images/homepage/brands/proton-mail.png';
import GoogleDrive from './../images/homepage/google-drive.png';
import OneDrive from './../images/homepage/one-drive.png';
import PipeDrivePng from './../images/homepage/pipedrive.png';
import Salesforce from './../images/homepage/salesforce.png';
import CentilioSign from './../images/homepage/centilio-sign.jpg';
import CentilioSign2 from './../images/homepage/centilio-sign-2.jpg';
import CentilioSign3 from './../images/homepage/centilio-sign-3.jpg';

import ReadMore from './ReadMore.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Button from './Button.js';


function Homepage() {

	useEffect(() => {

		setTimeout(function(){
			let uploadedDocments = document.getElementById("uploadedDocments");
			let uploadedDocmentsRolled = false;
			const uploadedDocmentsObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach((entry) => {
					if ( entry.isIntersecting && !uploadedDocmentsRolled ) {
						let i = 0;
						let uploadedInterval = setInterval(setUploadedDocuments, 10);

						function setUploadedDocuments() {
							if (i < 10000){
								uploadedDocments.innerHTML = '+' + i;
								i = i + 399;
							} else {
								clearInterval(uploadedInterval);
								uploadedInterval = setInterval(setUploadedDocumentsSlow, 50);
							}
						}

						function setUploadedDocumentsSlow() {
							if (i < 12000){
								uploadedDocments.innerHTML = '+' + i;
								i = i + 99;
							} else {
								uploadedDocments.innerHTML = '+12K';
								clearInterval(uploadedInterval);
								uploadedDocmentsRolled = true;
							}
						}
					}
				});
			});
			uploadedDocmentsObserver.observe(uploadedDocments);

			let signedDocuments = document.getElementById("signedDocuments");
			let signedDocmentsRolled = false;
			const signedDocumentsObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach((entry) => {
					if ( entry.isIntersecting && !signedDocmentsRolled ) {
						let j = 0;
						let signedInterval = setInterval(setSignedDocuments, 10);

						function setSignedDocuments() {
							if (j < 15000){
								signedDocuments.innerHTML = '+' + j;
								j = j + 399;
							} else {
								clearInterval(signedInterval);
								signedInterval = setInterval(setSignedDocumentsSlow, 50);
							}
						}

						function setSignedDocumentsSlow() {
							if (j < 17000){
								signedDocuments.innerHTML = '+' + j;
								j = j + 99;
							} else {
								signedDocuments.innerHTML = '+17K';
								clearInterval(signedInterval);
								signedDocmentsRolled = true;
							}
						}
					}
				});
			});
			signedDocumentsObserver.observe(signedDocuments);

			let minutesSaved = document.getElementById("minutesSaved");
			let minutesSavedRolled = false;
			const minutesSavedObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach((entry) => {
					if ( entry.isIntersecting && !minutesSavedRolled ) {
						let k = 0;
						let minutesSavedInterval = setInterval(setMinutesSaved, 10);

						function setMinutesSaved() {
							if (k < 600000){
								minutesSaved.innerHTML = '+' + k;
								k = k + 9999;
							} else {
								clearInterval(minutesSavedInterval);
								minutesSavedInterval = setInterval(setMinutesSavedSlow, 50);
							}
						}

						function setMinutesSavedSlow() {
							if (k < 800000){
								minutesSaved.innerHTML = '+' + k;
								k = k + 9999;
							} else {
								minutesSaved.innerHTML = '+800K';
								clearInterval(minutesSavedInterval);
								minutesSavedRolled = true;
							}
						}
					}
				});
			});
			minutesSavedObserver.observe(minutesSaved);
		}, 500)
	});

	return(
		<>
			{/* Header */}
			<Header />

			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto">
				<div className="mx-auto font-bold w-fit min-[700px]:text-[56px] text-[45px] pt-[150px] text-center">
					Send, <span className="font-['Dahlia'] font-medium">Sign</span> & Share.
				</div>
				<div className="text-center text-[18px] max-w-[700px] mx-auto leading-[28px]">
					Centilio Sign is a trusted electronic signature solution to keep your company operating smoothly. Document creation, contract management, payment processing, and the development of automated workflows are all within your reach.
				</div>
				<Button title="SIGN UP FOR FREE" style="mx-auto font-medium w-fit" />
				<img className="mt-[125px]" src={HomepageImage} />
				<div className="min-[990px]:flex block justify-between mt-[100px] font-semibold text-center lg:w-[90%] mx-auto">
		            <div className="">
		                <h1 className="font-bold text-[60px]" id="uploadedDocments">+12K</h1>
		                <div className="text-[18px] mt-[10px] w-[250px] mx-auto">Uploaded Documents</div>
		            </div>
		            <div className="max-[990px]:my-[50px]">
		                <h1 className="font-bold text-[60px]" id="signedDocuments">+17K</h1>
		                <div className="text-[18px] mt-[10px] w-[250px] mx-auto">Documents Signed</div>
		            </div>
		            <div className="">
		                <h1 className="font-bold text-[60px]" id="minutesSaved">+800K</h1>
		                <div className="text-[18px] mt-[10px] w-[300px] mx-auto">Minutes Saved on Paperwork</div>
		            </div>
		        </div>
		        <div className="my-[150px]">
			        <h2 className="text-[48px] font-bold text-center">Trusted by</h2>
			        <div className="flex gap-[50px] justify-center flex-wrap items-center mt-[30px] lg:px-[50px]">
			            <img className="w-auto h-[40px]" src={DigitalOcean} />
			            <img className="w-auto h-[60px]" src={ModanydotCom} />
			            <img className="w-auto h-[40px]" src={AWS} />
			            <img className="w-auto h-[40px]" src={Stratos} />
			            <img className="w-auto h-[40px]" src={Meka} />
			            <img className="w-auto h-[40px]" src={GoogleCloud} />
			            <img className="w-auto h-[40px]" src={PipeDrive} />
			            <img className="w-auto h-[40px]" src={Ion8} />
			            <img className="w-auto h-[40px]" src={GSConsite} />
			            <img className="w-auto h-[40px]" src={ProtonMail} />
			        </div>
		        </div>
		        <div className="grid lg:grid-cols-3 min-[600px]:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-[70px] max-w-[1100px] mx-auto">
		        	<div>
		        		<div className="text-[20px] font-bold mb-[20px]">Sign With Ease</div>
		        		<div>
		        			Increase efficiency by up to 80% by having all parties to an agreement be able to send and sign contracts from any location at any time.
		        		</div>
		        	</div>
		        	<div>
		        		<div className="text-[20px] font-bold mb-[20px]">Integrate Effortlessly</div>
		        		<div>
		        			Centilio can be used in conjunction with other channels to streamline business processes and increase efficiency.
		        		</div>
		        	</div>
		        	<div>
		        		<div className="text-[20px] font-bold mb-[20px]">Customisable Layouts</div>
		        		<div>
		        			Make your own unique templates and you may use them indefinitely, which will save you both time and hassle.
		        		</div>
		        	</div>
		        	<div>
		        		<div className="text-[20px] font-bold mb-[20px]">Maximum Data Confidentiality</div>
		        		<div>
		        			With Centilio, your data is protected with multiple layers of encryption. It compliances of both ESIGN and eIDAS, the newest regulations governing electronic signatures.
		        		</div>
		        	</div>
		        	<div>
		        		<div className="text-[20px] font-bold mb-[20px]">Track the Status</div>
		        		<div>
		        			Stay up-to-date on the current standing of any given document with immediate alerts and notifications.
		        		</div>
		        	</div>
		        </div>
		        <div className="mt-[200px]">
		        	<div className="text-center font-bold text-[40px] leading-[52px]">Connect with the apps you<br className="sm:block hidden" /> use every day</div>
		        	<div className="mt-[100px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
		        		<div className="p-[32px] rounded-[24px] border-solid border-[1px] broder-[#e5e5e5]">
		        			<img className="h-[50px]" src={GoogleDrive} />
		        			<div className="mt-[20px] text-[#625e6d] text-[14px]">
		        				Convert existing files into PandaDoc templates and documents and send them out for eSignatures.
		        			</div>
		        		</div>
		        		<div className="p-[32px] rounded-[24px] border-solid border-[1px] broder-[#e5e5e5]">
		        			<img className="h-[30px]" src={OneDrive} />
		        			<div className="mt-[35px] text-[#625e6d] text-[14px]">
		        				Add a payment request to your next proposal with only a few clicks.
		        			</div>
		        		</div>
		        		<div className="p-[32px] rounded-[24px] border-solid border-[1px] broder-[#e5e5e5]">
		        			<img className="h-[40px]" src={Salesforce} />
		        			<div className="mt-[25px] text-[#625e6d] text-[14px]">
		        				Expand the ROI from your CRM and unlock easy document generation and eSignature capabilities.
		        			</div>
		        		</div>
		        		<div className="p-[32px] rounded-[24px] border-solid border-[1px] broder-[#e5e5e5]">
		        			<img className="h-[40px]" src={PipeDrivePng} />
		        			<div className="mt-[25px] text-[#625e6d] text-[14px]">
		        				Expand the ROI from your CRM and unlock easy document generation and eSignature capabilities.
		        			</div>
		        		</div>
		        	</div>
		        </div>
		        <div className="mt-[150px]">
		        	<div className="text-center font-bold text-[40px] leading-[52px]">
		        		Master marketing with these <br className="sm:block hidden" /> resources
		        	</div>
		        	<div className="text-center text-[#625e6d] text-[18px] leading-[28px] mt-[24px]">
		        		We've put together valuable insights in the form of blogs, guides, and <br className="sm:block hidden" />podcasts. Check 'em out!
		        	</div>
		        	<div className="grid lg:grid-cols-3 grid-cols-1 gap-[20px]">
		        		<div className="mt-[100px]">
		        			<img className="rounded-[20px]" src={CentilioSign} />
		        			<div className="mt-[24px] text-[24px] font-bold">
		        				What is an electronic signature?
		        			</div>
		        			<div className="text-[#625e6d] text-[16px] leading-[24px] w-[95%] mt-[16px]">
		        				In today's world, almost everything is done online. We shop online, we bank online, and we even sign documents online.
		        			</div>
		        			<div className="w-fit text-[14px] font-semibold text-[#3c4bd7]">
		        				<ReadMore />
		        			</div>
		        		</div>
		        		<div className="mt-[100px]">
		        			<img className="rounded-[20px]" src={CentilioSign2} />
		        			<div className="mt-[24px] text-[24px] font-bold">
		        				How to Create Your Signature?
		        			</div>
		        			<div className="text-[#625e6d] text-[16px] leading-[24px] w-[95%] mt-[16px]">
		        				Your signature is more than just your name - it's your personal brand. In today's business world, first impressions are everything.
		        			</div>
		        			<div className="w-fit text-[14px] font-semibold text-[#3c4bd7]">
		        				<ReadMore />
		        			</div>
		        		</div>
		        		<div className="mt-[100px]">
		        			<img className="rounded-[20px]" src={CentilioSign3} />
		        			<div className="mt-[24px] text-[24px] font-bold">
		        				The Benefits of Digital Signatures For Your Business
		        			</div>
		        			<div className="text-[#625e6d] text-[16px] leading-[24px] w-[95%] mt-[16px]">
		        				In the business world, speed and efficiency are crucial. Any delays can cost a company time and money. That's why digital signatures are so valuable.
		        			</div>
		        			<div className="w-fit text-[14px] font-semibold text-[#3c4bd7]">
		        				<ReadMore />
		        			</div>
		        		</div>
		        	</div>
		        </div>
		    </section>

		    <Footer />
		</>
	)
}

export default Homepage;