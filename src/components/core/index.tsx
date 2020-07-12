import React from "react";
import { BaseComponent } from "./baseComponent";
import { Container } from "./container";

export const Core = () => {
	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<BaseComponent></BaseComponent>
			<Container></Container>
		</div>
	);
};
