import React from "react";
import { Post } from "../../Components/Post";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";

export function Home() {
	return (
		<>
			<Profile />
			<SearchInput />

			<section className="w-full grid gap-8 mb-56 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
				<Post />
				<Post />
				<Post />
				<Post />
			</section>
		</>
	);
}
