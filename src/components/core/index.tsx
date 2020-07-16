import React, { useState } from "react";
import { BaseComponent } from "./baseComponent";
import { Container } from "./container";
import { PropertiesEdit } from "./propertiesEdit";
import { ActiveItem } from "./context/activeItem";
import { ContainerState } from "./context/container-state";
import { IDraggableList } from "../draggable/draggable";

export const Core = () => {
	const [active, setActive] = useState({
		parent: [],
		index: 0,
		item: {
			id: "schema",
		},
	});

	const [containerStateValue, setContianerStateValue] = useState<
		IDraggableList[]
	>([
		{
			type: "object",
			id: "object1",
			title: "test",
			properties: [],
		},
	]);

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			<ActiveItem.Provider
				value={{
					active: active,
					changeActive: setActive,
				}}
			>
				<ContainerState.Provider
					value={{
						containerStateValue,
						setContianerStateValue,
					}}
				>
					<BaseComponent></BaseComponent>
					<Container></Container>
					<PropertiesEdit></PropertiesEdit>
				</ContainerState.Provider>
			</ActiveItem.Provider>
		</div>
	);
};
