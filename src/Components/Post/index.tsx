import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../pages/Home";
import { RelativeDateFormater } from "../../utils/formater";

import "./index.css";

interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps) {

	const formattedDate = RelativeDateFormater(post.created_at);

	return (
		<Link to={`/post/${post.number}`} className="PostContainer">
			<div className="flex gap-4 mb-5">
				<strong className="Title">{post.title}</strong>
				<span className="w-max text-sm text-base-span">{formattedDate}</span>
			</div>


			<p className="Content">
				{post.body}
			</p>
		</Link>
	);
}
