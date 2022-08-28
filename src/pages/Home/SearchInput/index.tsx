import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
	query: z.string()
});

type searchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
	postsLength: number;
	getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ getPosts, postsLength }: SearchInputProps) {
	const { register, handleSubmit } = useForm<searchFormInput>({
		resolver: zodResolver(searchFormSchema)
	});

	async function handleSearchPost(data: searchFormInput) {
		await getPosts(data.query);
	}


	return (
		<form onSubmit={handleSubmit(handleSearchPost)} className="w-full mt-[4.5rem] mb-12">
			<header className="flex items-center justify-between mb-3">
				<h3 className="text-lg font-bold text-base-subtitle">Publicações</h3>
				<span className="text-sm text-base-span">{postsLength} publicações</span>
			</header>

			<input
				{...register("query")}
				className="w-full py-3 px-4 rounded-md bg-base-input border border-solid transition ease-in-out duration-500
				border-base-border text-base-text focus:border-blue focus:outline-none placeholder:text-base-label"
				type="text"
				placeholder="Buscar conteúdo"
			/>
		</form>
	);
}
