import React from "react";
import { BuiltInComponent } from "./builtInComponent";
import { ArrayComponent } from "./arrayComponent";
import { LayoutComponent } from "./layoutComponent";

export const BaseComponent = () => {
	return (
		<div
			style={{
				width: "20%",
				height: "600px",
				overflow: "auto",
			}}
		>
			<BuiltInComponent></BuiltInComponent>
			<ArrayComponent></ArrayComponent>
			<LayoutComponent></LayoutComponent>
		</div>
	);
};
