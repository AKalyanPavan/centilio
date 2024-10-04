function Button({title, style}) {
	return(
		<>
			<a href="">
				<div className={"text-[15px] bg-[#4f1e8d] text-white w-fit font-medium py-[14px] px-[48px] rounded-[5px] mt-[30px] " + style}>
					{title}
				</div>
			</a>
		</>
	)
}

export default Button;