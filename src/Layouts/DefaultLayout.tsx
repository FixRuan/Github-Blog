import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";


export function DefaultLayout() {
	return (
		<div className="">
			<Header />
			<main className="w-full max-w-[54rem] my-0 mx-auto">
				<Outlet />
			</main>
		</div>
	);
}
