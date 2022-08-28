import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../../../Components/ExternalLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import { api } from "../../../lib/axios";
import { Loading } from "../../../Components/Loading";

interface ProfileData {
	login: string;
	bio: string;
	avatar_url: string;
	html_url: string;
	name: string;
	company?: string;
	followers: number;
}


export function Profile() {

	const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);
	const [isLoading, setIsLoading] = useState(true);

	const getProfileData = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await api.get("/users/fixruan");
			setProfileData(response.data);
		} finally {
			setIsLoading(false);
		}
	}, [profileData]);

	useEffect(() => {
		getProfileData();
	}, []);

	return (
		<section className="w-full min-h-[13.5rem] bg-base-profile shadow-md rounded-[10px] flex gap-8 py-8 px-10 mt-[-5.5rem]">
			{isLoading ? <Loading /> : (
				<>
					<img src={profileData.avatar_url} alt="" className="w-[9.25rem] h-[9.25rem] rounded-lg object-cover" />

					<div className="flex-1 flex flex-col">
						<header className="flex items-center justify-between mb-2">
							<h1 className="text-2xl text-base-title leading-[130%]">{profileData.name}</h1>
							<ExternalLink text="Github" href={profileData.html_url} />
						</header>

						<p>{profileData.bio}</p>

						<ul className="UserInfo">
							<li><FontAwesomeIcon icon={faGithub} /> {profileData.login}</li>
							<li><FontAwesomeIcon icon={faBuilding} />Devlândia</li>
							<li><FontAwesomeIcon icon={faUserGroup} />{profileData.followers} seguidores</li>
						</ul>
					</div>
				</>
			)}
		</section>
	);
}
