import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ExternalLink } from "../../../Components/ExternalLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

export function Profile() {
	return (
		<section className="w-full min-h-[13.5rem] bg-base-profile shadow-md rounded-[10px] flex gap-8 py-8 px-10 mt-[-5.5rem]">
			<img src="https://github.com/fixruan.png" alt="" className="w-[9.25rem] h-[9.25rem] rounded-lg object-cover" />

			<div className="flex-1 flex flex-col">
				<header className="flex items-center justify-between mb-2">
					<h1 className="text-2xl text-base-title leading-[130%]">Ruan Pablo</h1>
					<ExternalLink text="Github" href="#" />
				</header>

				<p>
					Tristique volutpat pulvinar vel massa,
					pellentesque egestas. Eu viverra massa quam dignissim
					aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
				</p>

				<ul className="UserInfo">
					<li><FontAwesomeIcon icon={faGithub} /> fixruan</li>
					<li><FontAwesomeIcon icon={faBuilding} /> Devlândia</li>
					<li><FontAwesomeIcon icon={faUserGroup} /> 123 seguidores</li>
				</ul>
			</div>
		</section>
	);
}
