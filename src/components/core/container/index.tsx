import React, { useState } from "react";
import { ReactDraggable } from "../../draggable";
import { IDraggableList } from "../../draggable/draggable";
import { ReactSortableProps } from "react-sortablejs";
import { GenNonDuplicateID } from "../../../utils";
import { Preview } from "./preview";
import { DraggableToFormily } from "../../../utils/transform";
import { ISchema } from "@formily/antd";

export const Container = () => {
	const [list, setList] = useState<Array<IDraggableList>>([
		{
			type: "object",
			id: "object1",
			title: "test",
		},
	]);

	type ICustomSetList = ReactSortableProps<IDraggableList>;

	const customSetList: ICustomSetList["setList"] = (
		newState,
		sortable,
		store
	) => {
		setList(newState);
	};

	return (
		<div
			style={{
				width: "70%",
			}}
		>
			<Preview
				{...(DraggableToFormily(list) as { [key: string]: ISchema }).object1}
			></Preview>
			<ReactDraggable
				list={list}
				setList={customSetList}
				group={{
					name: "g1",
					put: ["g2"],
				}}
				clone={(item) => ({ ...item, id: item.id + GenNonDuplicateID() })}
			></ReactDraggable>
		</div>
	);
};
