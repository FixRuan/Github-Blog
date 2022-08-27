import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export function Post() {
	return (
		<Link to="/post/1" className="PostContainer">
			<div className="flex gap-4 mb-5">
				<strong className="Title">JavaScript data types and data structures</strong>
				<span className="w-max text-sm text-base-span">Há 1 dia</span>
			</div>


			<p className="Content">
				Programming languages all have built-in data structures,
				but these often differ from one language to another.
				This article attempts to list the built-in data structures available in
				Programming languages all have built-in data structures
			</p>
		</Link>
	);
}
