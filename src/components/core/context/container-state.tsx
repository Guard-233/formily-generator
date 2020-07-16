import { createContext, useState } from "react";
import { IDraggableList } from "../../draggable/draggable";

export const ContainerState = createContext<{
	containerStateValue: IDraggableList[];
	setContianerStateValue: any;
}>({
	containerStateValue: [
		{
			type: "object",
			id: "object1",
			title: "test",
			properties: [],
		},
	],
	setContianerStateValue: () => {},
});
