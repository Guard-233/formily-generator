import React from "react";
import { BuiltInComponent } from "./builtInComponent";
import { ArrayComponent } from "./arrayComponent";

export const BaseComponent = () => {
	return (
		<div
			style={{
				width: "300px",
				height: "768px",
				overflow: "auto",
			}}
		>
			<BuiltInComponent></BuiltInComponent>
			<ArrayComponent></ArrayComponent>
		</div>
	);
};
