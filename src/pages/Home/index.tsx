/* eslint-disable no-empty */

import React, { useCallback, useEffect, useState } from "react";
import { Post } from "../../Components/Post";
import { api } from "../../lib/axios";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";

export interface IPost {
	title: string;
	body: string;
	created_at: string;
	number: number;
	html_url: string;
	comments: number;
	user: {
		login: string;
	}
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

export function Home() {
	const [posts, setPosts] = useState<IPost[]>();
	const [isLoading, setIsLoading] = useState(true);

	const getPosts = useCallback(async (query = "") => {
		try {
			setIsLoading(true);
			const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${reponame}`);
			setPosts(response.data.items);
		} finally {
			setIsLoading(false);
		}

	}, [posts]);

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<>
			<Profile />
			<SearchInput />

			<section className="w-full grid gap-8 mb-56 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
				{posts?.map(post => (
					<Post key={post.number} post={post} />
				))}
			</section>
		</>
	);
}
