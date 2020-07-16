import { IDraggableList } from "./../../draggable/draggable.d";
import { createContext } from "react";

const active = {
	parent: [],
	index: 0,
	item: {
		id: "schema",
	},
};

const changeActive: any = () => {
	return {};
};

export const ActiveItem = createContext<{
	active: {
		parent: IDraggableList[];
		index: number;
		item: IDraggableList;
	};
	changeActive: any;
}>({
	active,
	changeActive,
});
