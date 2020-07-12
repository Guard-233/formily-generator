import React from "react";
import { ReactSortable } from "react-sortablejs";
import { INestedProps, SetList, IDraggableList } from "./draggable";
import { SchemaForm, ISchema, Form } from "@formily/antd";
import { DraggableToFormily } from "../../utils/transform";
import { merge } from "lodash";
import {
	Input,
	Select,
	Password,
	NumberPicker,
	Switch,
	DatePicker,
	TimePicker,
	Range,
	Upload,
	Checkbox,
	Radio,
	Rating,
	Transfer,
} from "@formily/antd-components";
import { Card, Table } from "antd";
import "antd/dist/antd.css";
import "./nested.scss";

export const Nested = (props: INestedProps) => {
	const setList = (item: IDraggableList) => {
		const fun: SetList = (newState, sortable, store) => {
			props.setList(
				props.list.map((t) => {
					if (t.id === item.id) {
						return {
							...item,
							id: item.id,
							properties: newState,
						};
					}
					return t;
				}),
				sortable,
				store
			);
		};
		return fun;
	};

	const BuiltInComponents = {
		Input,
		Select,
		TextArea: Input.TextArea,
		Password,
		NumberPicker,
		Switch,
		DatePicker,
		RangePicker: DatePicker.RangePicker,
		WeekPicker: DatePicker.WeekPicker,
		MonthPicker: DatePicker.MonthPicker,
		YearPicker: DatePicker.YearPicker,
		TimePicker,
		Range,
		Upload,
		Checkbox,
		CheckboxGroup: Checkbox.Group,
		Radio,
		RadioGroup: Radio.Group,
		Rating,
		Transfer,
	};

	const { Column } = Table;

	return (
		<div>
			<ReactSortable
				{...merge(
					{
						group: {
							name: "g1",
						},
					},
					props
				)}
				list={props.list}
				setList={props.setList}
				style={{
					minHeight: "100px",
				}}
			>
				{props.list.map((item) => {
					if (item.type === "object" || item.type === "array") {
						if (item.type === "array") {
							return (
								<Table key={item.id}>
									<Column
										title={item.title}
										render={() => {
											return (
												<Nested
													{...props}
													list={(item.items as IDraggableList[]) || []}
													setList={setList(item)}
												></Nested>
											);
										}}
									/>
								</Table>
							);
						}
						return (
							<React.Fragment key={item.id}>
								<Form component={"div"}>
									<Card title={item.title}>
										<Nested
											{...props}
											list={item.properties || []}
											setList={setList(item)}
										></Nested>
									</Card>
								</Form>
							</React.Fragment>
						);
					} else {
						return (
							<React.Fragment key={item.id}>
								<SchemaForm
									components={BuiltInComponents}
									formComponent={"div"}
									schema={{
										type: "object",
										properties: DraggableToFormily([item]) as {
											[key: string]: ISchema;
										},
									}}
								></SchemaForm>
							</React.Fragment>
						);
					}
				})}
			</ReactSortable>
		</div>
	);
};
