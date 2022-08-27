import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import "./index.css";

interface ExternalLinkProps {
	href?: string;
	text: string;
	target?: string;
	icon?: ReactNode;
	variant?: "iconLeft";
}

export function ExternalLink({ text, href, target, icon, variant }: ExternalLinkProps) {
	return (
		<a href={href} target={target} className={`ExternalLink ${variant === "iconLeft" && "flex-row-reverse"}`}>
			{text}
			{icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
		</a>
	);
}
