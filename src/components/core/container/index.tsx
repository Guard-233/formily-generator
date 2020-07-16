import React, { useState } from "react";
import { ReactDraggable } from "../../draggable";
import { IDraggableList } from "../../draggable/draggable";
import { GenNonDuplicateID } from "../../../utils";
import { Preview } from "./preview";
import { DraggableToFormily } from "../../../utils/transform";
import { ISchema } from "@formily/antd";
import { ActiveItem } from "../context/activeItem";
import { ContainerState } from "../context/container-state";

export const Container = () => {
	const [list, setList] = useState<Array<IDraggableList>>([
		{
			type: "object",
			id: "object1",
			title: "test",
		},
	]);

	return (
		<div
			style={{
				width: "60%",
			}}
		>
			<ActiveItem.Consumer>
				{({ active, changeActive }) => (
					<ContainerState.Consumer>
						{({ containerStateValue, setContianerStateValue }) => (
							<div>
								<Preview
									{...(DraggableToFormily(containerStateValue) as {
										[key: string]: ISchema;
									}).object1}
								></Preview>
								<ReactDraggable
									list={containerStateValue}
									setList={setContianerStateValue}
									group={{
										name: "g1",
										put: true,
									}}
									clone={(item) => ({
										...item,
										id: item.id + GenNonDuplicateID(),
									})}
								></ReactDraggable>
							</div>
						)}
					</ContainerState.Consumer>
				)}
			</ActiveItem.Consumer>
		</div>
	);
};
