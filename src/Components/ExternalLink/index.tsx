import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";

interface ExternalLinkProps {
	href: string;
	text: string;
}

export function ExternalLink({ text, href }: ExternalLinkProps) {
	return (
		<a href={href} className="ExternalLink">
			{text}
			<FontAwesomeIcon icon={faUpRightFromSquare} />
		</a>
	);
}
