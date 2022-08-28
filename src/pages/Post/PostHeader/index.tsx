import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../Components/ExternalLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../Home";
import { RelativeDateFormater } from "../../../utils/formater";
import { Loading } from "../../../Components/Loading";

interface PostHeaderProps {
	postData: IPost;
	isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
	const navigate = useNavigate();
	const formattedDate = RelativeDateFormater(postData?.created_at);

	function goBack() {
		navigate(-1);
	}


	return (
		<section className="w-full min-h-[10.5rem] mt-[-5.5rem] bg-base-profile shadow-md rounded-[10px] p-8 flex flex-col">
			{isLoading ? <Loading /> : (
				<>
					<header className="flex items-center justify-between w-full mb-5">
						<button onClick={goBack}>
							<ExternalLink
								variant="iconLeft"
								icon={<FontAwesomeIcon icon={faChevronLeft} />}
								text="Voltar"
							/>
						</button>
						<ExternalLink text="Ver no Github" href={postData.html_url} target="_blank" />
					</header>

					<h1 className="text-2xl font-bold text-base-title leading-[130%]">
						{postData.title}
					</h1>

					<ul className="PostHeaderUL">
						<li><FontAwesomeIcon icon={faGithub} />{postData.user.login}</li>
						<li><FontAwesomeIcon icon={faCalendar} />{formattedDate}</li>
						<li><FontAwesomeIcon icon={faComment} />{postData.comments} comentários</li>
					</ul>
				</>
			)}
		</section>
	);
}
