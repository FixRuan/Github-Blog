import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ExternalLink } from "../../../Components/ExternalLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import { useNavigate } from "react-router-dom";


export function PostHeader() {
	const navigate = useNavigate();

	function goBack() {
		navigate(-1);
	}


	return (
		<section className="w-full min-h-[10.5rem] mt-[-5.5rem] bg-base-profile shadow-md rounded-[10px] p-8 flex flex-col">
			<header className="flex items-center justify-between w-full mb-5">
				<button onClick={goBack}>
					<ExternalLink
						variant="iconLeft"
						icon={<FontAwesomeIcon icon={faChevronLeft} />}
						text="Voltar"
					/>
				</button>
				<ExternalLink text="Ver no Github" href="#" target="_blank" />
			</header>

			<h1 className="text-2xl font-bold text-base-title leading-[130%]">
				JavaScript data types and data structures
			</h1>

			<ul className="PostHeaderUL">
				<li><FontAwesomeIcon icon={faGithub} />fixruan</li>
				<li><FontAwesomeIcon icon={faCalendar} />Há 1 dia</li>
				<li><FontAwesomeIcon icon={faComment} />5 comentários</li>
			</ul>
		</section>
	);
}
