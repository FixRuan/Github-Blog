import React from "react";


export function SearchInput() {
	return (
		<form className="w-full mt-[4.5rem] mb-12">
			<header className="flex items-center justify-between mb-3">
				<h3 className="text-lg font-bold text-base-subtitle">Publicações</h3>
				<span className="text-sm text-base-span">6 publicações</span>
			</header>

			<input
				className="w-full py-3 px-4 rounded-md bg-base-input border border-solid transition ease-in-out duration-500
				border-base-border text-base-text focus:border-blue focus:outline-none placeholder:text-base-label"
				type="text"
				placeholder="Buscar conteúdo"
			/>
		</form>
	);
}
