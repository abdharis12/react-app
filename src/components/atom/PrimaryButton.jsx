import clsx from "clsx";
import React from "react";

export default function PrimaryButton({
	children = "Button Primary",
	className = "",
	type,
	...props
}) {
	return (
		<div>
			<button
				className={clsx(
					"flex items-center gap-2 bg-blue-500 text-white text-sm mx-auto shadow-lg rounded-lg py-2 px-4 hover:bg-blue-700",
					className
				)}
				type={type}
				{...props}
			>
				{children}
			</button>
		</div>
	);
}
