import React from "react";
import { ReactSortable } from "react-sortablejs";
import { INestedProps, SetList, IDraggableList } from "./draggable";
import { SchemaForm, ISchema, SchemaMarkupField as Field } from "@formily/antd";
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
	FormCard,
} from "@formily/antd-components";
import { Card, Form } from "antd";
import { cloneDeep } from "lodash";
import { ActiveItem } from "../core/context/activeItem";
import "antd/dist/antd.css";
import "./nested.scss";
import { active } from "sortablejs";

export const Nested = (props: INestedProps | any) => {
	if ((props as { value: INestedProps }).value) {
		props = (props as { value: INestedProps }).value;
	}

	const setList = (item: IDraggableList) => {
		const fun: SetList = (newState, sortable, store) => {
			props.setList(
				props.list.map((t: { id: React.ReactText; type: string }) => {
					if (t.id === item.id) {
						if (t.type === "object") {
							return {
								...item,
								id: item.id,
								properties: cloneDeep(newState),
							};
						} else {
							return {
								...item,
								id: item.id,
								items: cloneDeep(newState),
							};
						}
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

	const LayoutComponents = {
		FormCard,
	};

	const margeComponents = {
		...BuiltInComponents,
		...LayoutComponents,
	};

	return (
		<div>
			<ActiveItem.Consumer>
				{({ active, changeActive }) => {
					return (
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
							{props.list.map((item: IDraggableList, index: number) => {
								if (item.type === "object" || item.type === "array") {
									switch (item["x-component"]?.toLocaleLowerCase()) {
										// case "card":
										// 	return (
										// 		<SchemaForm
										// 			component={"div"}
										// 			components={{ ...margeComponents, Nested }}
										// 			key={item.id}
										// 		>
										// 			<FormCard title="block">
										// 				<Field
										// 					x-component="Nested"
										// 					default={{
										// 						...props,
										// 						group: {
										// 							name: "g1",
										// 							put: ["g2", "g1"],
										// 						},
										// 						list: cloneDeep(item.properties) || [],
										// 						setList: setList(cloneDeep(item)),
										// 					}}
										// 				/>
										// 			</FormCard>
										// 		</SchemaForm>
										// 	);
										default:
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
									}
								} else {
									return (
										<React.Fragment key={item.id}>
											<SchemaForm
												components={margeComponents}
												formComponent={"div"}
												onClick={() => {
													changeActive({
														parent: (props as INestedProps).list,
														index,
														item,
													});
												}}
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
					);
				}}
			</ActiveItem.Consumer>
		</div>
	);
};
