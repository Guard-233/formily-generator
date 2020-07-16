import React, { useState, useEffect } from "react";
import {
	SchemaForm,
	ISchema,
	FormButtonGroup,
	Submit,
	Reset,
	LifeCycleTypes,
	createFormActions,
} from "@formily/antd";
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
	ArrayTable,
	ArrayCards,
	FormMegaLayout,
} from "@formily/antd-components";
import { schema } from "./schema";
import { ActiveItem } from "../context/activeItem";
import { ContainerState } from "../context/container-state";
import { IDraggableList } from "../../draggable/draggable";

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
	FormMegaLayout,
};

const ArrayComponents = {
	ArrayTable,
	ArrayCards,
};

export const PropertiesEdit = () => {
	const [test, setTest] = useState<any>({});

	return (
		<div
			style={{
				width: "30%",
				height: "600px",
				overflow: "auto",
			}}
		>
			<ActiveItem.Consumer>
				{({ active }) => {
					// console.log(active);
					return (
						<ContainerState.Consumer>
							{({ containerStateValue, setContianerStateValue }) => {
								return (
									<SchemaForm
										onSubmit={(value) => {
											let v = containerStateValue.map((pro, index) => {
												if (index === 0) {
													return {
														...pro,
														properties: pro.properties?.map((item) => {
															if (item.id === active.item.id) {
																return value;
															}
															return item;
														}),
													};
												}
												return pro;
											});
											console.log(v);

											setContianerStateValue(v);
										}}
										value={active.item}
										components={{
											...BuiltInComponents,
											...LayoutComponents,
											...ArrayComponents,
										}}
										schema={schema}
									>
										<FormButtonGroup>
											<Submit>提交</Submit>
										</FormButtonGroup>
									</SchemaForm>
								);
							}}
						</ContainerState.Consumer>
					);
				}}
			</ActiveItem.Consumer>
		</div>
	);
};
