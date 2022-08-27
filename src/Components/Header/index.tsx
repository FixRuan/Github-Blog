import React from "react";
import "./index.css";

import logoImg from "../../assets/Logo.svg";

export function Header() {
	return (
		<div className="HeaderContainer">
			<img src={logoImg} alt="" />
		</div>
	);
}
