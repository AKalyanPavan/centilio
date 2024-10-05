import React, { useState } from 'react';

import Header from './Header.js';
import Button from './Button.js';
import PriceItem from './PriceItem.js';
import PricingCard from './PricingCard.js';
import Footer from './Footer.js';

function Pricing() {

	let yearlyPriceStructure = [
		"User/month",
		"Billed anually",
	];

	let monthlyPriceStructure = [
		"User/month",
		"Billed monthly",
	];

	let basicPriceItems = [
		"1 User",
		"Signature requests: Unlimited",
		"Document management",
		"Google Drive integration",
		"Dropbox integration",
		"Box Integration",
		"Salesforce Integration(Coming soon)",
		"Hubspot Integration(Coming soon)",
		"Notifications and reminders",
		"Audit log and history",
	];

	let professionalPriceItems = [
		"Upto 50 Users",
		"Signature requests: Unlimited",
		"Document management",
		"Google Drive integration",
		"Dropbox integration",
		"Box Integration",
		"Salesforce Integration(Coming soon)",
		"Hubspot Integration(Coming soon)",
		"Notifications and reminders",
		"Audit log and history",
	];

	let enterprisePriceItems = [
		"Upto 50 Users",
		"Signature requests: Unlimited",
		"Document management",
		"Google Drive integration",
		"Dropbox integration",
		"Box Integration",
		"Salesforce Integration(Coming soon)",
		"Hubspot Integration(Coming soon)",
		"Notifications and reminders",
		"Audit log and history",
		"Team Management",
		"Custom business branding",
	];

	let yearlyPricingPlans = [
		{
			title: "Basic",
			price: "$10",
			priceStructure: yearlyPriceStructure,
			pricingItems: basicPriceItems,
		},
		{
			title: "Professional",
			price: "$15",
			priceStructure: yearlyPriceStructure,
			pricingItems: professionalPriceItems,
		},
		{
			title: "Enterprise",
			price: "$20",
			priceStructure: yearlyPriceStructure,
			pricingItems: enterprisePriceItems,
			style: "xl:col-start-5 min-[900px]:col-start-2 col-start-1",
		}
	];

	let monthlyPricingPlans = [
		{
			title: "Basic",
			price: "$12",
			priceStructure: monthlyPriceStructure,
			pricingItems: basicPriceItems,
		},
		{
			title: "Professional",
			price: "$18",
			priceStructure: monthlyPriceStructure,
			pricingItems: professionalPriceItems,
		},
		{
			title: "Enterprise",
			price: "$24",
			priceStructure: monthlyPriceStructure,
			pricingItems: enterprisePriceItems,
			style: "xl:col-start-5 min-[900px]:col-start-2 col-start-1",
		}
	];

	let [currentPricingPlans, setCurrentPricingPlans] = useState(yearlyPricingPlans);

	function toggleSubscription(tagName) {

		let monthly = document.getElementById("monthly");
		let yearly = document.getElementById("yearly");

		if (tagName == "monthly" && !monthly.classList.contains("text-white")) {

			yearly.classList.remove("text-white");
			yearly.classList.remove("bg-[#4f1e8e]");

			monthly.classList.add("text-white");
			monthly.classList.add("bg-[#4f1e8e]");

			setCurrentPricingPlans(monthlyPricingPlans);

		} else if (tagName == "yearly" && !yearly.classList.contains("text-white")) {

			monthly.classList.remove("text-white");
			monthly.classList.remove("bg-[#4f1e8e]");

			yearly.classList.add("text-white");
			yearly.classList.add("bg-[#4f1e8e]");

			setCurrentPricingPlans(yearlyPricingPlans);

		}
	}

	return (
		<>
			<Header />
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto mt-[150px]">
				<div className="sm:text-[56px] text-[40px] font-bold leading-[60px]">
					Choose the plan <br className="max-sm:hidden" />that suits for you.
				</div>
				<div className="bg-[#f5f5f5] w-fit px-[10px] py-[5px] mx-auto mt-[100px] rounded-[50px] text-[14px] flex items-center">
					<span id="monthly" className="px-[20px] py-[10px] rounded-[50px] cursor-pointer" onClick={() => toggleSubscription("monthly")}>Monthly</span>
					<span id="yearly" className="text-white bg-[#4f1e8e] cursor-pointer rounded-[50px] px-[20px] py-[10px]" onClick={() => toggleSubscription("yearly")}>Yearly (Save 25%)</span>
				</div>
			</section>
			<section className="max-w-[1400px] min-[500px]:px-[40px] px-[20px] mx-auto mt-[50px]">
				<div className="">
					<div className="grid xl:grid-cols-6 min-[900px]:grid-cols-4 grid-cols-2 gap-[30px]">
						{currentPricingPlans.map((pricingPlan, i) =>
	                        <PricingCard cardData={pricingPlan} style={pricingPlan.style} />
	                    )}
					</div>
				</div>
				<div className="bg-[#f5f5f5] mt-[64px] py-[72px] sm:px-[56px] px-[40px] rounded-[24px] flex lg:flex-row flex-col gap-[20px] justify-between lg:items-center">
					<div>
						<span className="text-[24px] font-bold">Free Plan</span>
						<div className="mt-[24px] text-[18px]">
							Try Centilio Sign with 3 signs per month, that's usually enough for <br />hobby projects, students or new businesses.
						</div>
					</div>
					<div>
						<div className="flex items-center gap-[20px]">
							<div className="text-[48px] font-bold">$0</div>
							<div className="leading-[22px] text-[#6f686c]">
								<div>Upto 3 users &</div>
								<div>14 days of enterprise trial</div>
							</div>
						</div>
						<Button title="Try for free" style="text-center font-bold mt-[32px] w-fit" />
					</div>
				</div>
			</section>
			<Footer showImage={false} />
		</>
	)
}

export default Pricing;