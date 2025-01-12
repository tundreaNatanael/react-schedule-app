import React from "react";
import Icon from "./Icon";

const Button = ({icon = "", iconColor = "white", onClick, label, className, disabled}) => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center justify-center gap-3 px-5 py-3  font-medium text-sm sm:text-base rounded-lg shadow-lg ${className}`}
			disabled={disabled}
		>
			<Icon name={icon} size={24} color={iconColor} />
			{label}
		</button>
	);
};

export default Button;
