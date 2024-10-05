import Button from './Button.js';
import PriceItem from './PriceItem.js';

function PricingCard({cardData, style}) {
	return(
		<>
			<div className={"bg-[#f5f5f5] py-[48px] sm:px-[56px] px-[30px] rounded-[32px] col-span-2 max-[900px]:max-w-[420px] max-[900px]:mx-auto " + style}>
				<div className="font-bold text-[24px]">{cardData.title}</div>
				<div className="mt-[24px] text-[18px] leading-[28px]">
					For teams or individuals starting out with process work
				</div>
				<div className="my-[40px] flex items-center gap-[20px]">
					<div className="text-[48px] font-bold">{cardData.price}</div>
					<div className="leading-[22px] text-[#6f686c]">
						<div>{cardData.priceStructure[0]}</div>
						<div>{cardData.priceStructure[1]}</div>
					</div>
				</div>
				<Button title="Try for free" style="w-[100%] text-center font-bold" />
				<div className="mt-[48px] mb-[20px] font-bold text-[18px]">Highlights</div>
				<div className="flex flex-col gap-[20px]">
					{cardData.pricingItems.map((pricingItem, i) =>
                        <PriceItem title={pricingItem} />
                    )}
				</div>
			</div>
		</>
	)
}

export default PricingCard;