import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";


export function DefaultLayout() {
	return (
		<div className="">
			<Header />
			<main className="w-full max-w-[54rem] my-0 mx-auto md:py-0 md:px-4 sm:py-0 sm:px-4">
				<Outlet />
			</main>
		</div>
	);
}
