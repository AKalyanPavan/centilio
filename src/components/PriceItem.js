function PriceItem({title}) {
	return(
		<>
			<div className="flex gap-[10px]">
				<div className="bg-[#ebebeb] p-[5px] rounded-[20px] w-fit h-fit">
					<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none">
						<g id="SVGRepo_bgCarrier" stroke-width="0"/>
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
						<g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#4f1e8d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> </g> </g>
					</svg>
				</div>
				<div className="font-normal">{title}</div>
			</div>
		</>
	)
}

export default PriceItem;