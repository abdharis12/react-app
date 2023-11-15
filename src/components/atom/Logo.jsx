import React from "react";
import LogoReact from "../../assets/react.svg";

export default function Logo() {
	return (
		<div>
			<a href='https://reactjs.org' target='_blank'>
				<img src={LogoReact} alt='React JS Logo' className='h-8 w-auto' />
			</a>
		</div>
	);
}
