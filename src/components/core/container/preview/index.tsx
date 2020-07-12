import React, { useState } from "react";
import { SchemaForm, ISchema } from "@formily/antd";
import { Modal, Button } from "antd";
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
} from "@formily/antd-components";

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

const ArrayComponents = {
	ArrayTable,
};

export const Preview = (props: ISchema) => {
	const [state, setState] = useState({
		visible: false,
	});

	const handleOk = (e: any) => {
		setState({
			visible: false,
		});
	};

	const handleCancel = (e: any) => {
		setState({
			visible: false,
		});
	};

	return (
		<div>
			<Button
				type="primary"
				onClick={() =>
					setState({
						visible: true,
					})
				}
			>
				预览
			</Button>
			<Modal
				title="Basic Modal"
				visible={state.visible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={"80%"}
				centered={true}
				bodyStyle={{
					maxHeight: "600px",
					overflow: "auto",
				}}
			>
				<SchemaForm
					components={{
						...BuiltInComponents,
						...LayoutComponents,
						...ArrayComponents,
					}}
					schema={props}
				></SchemaForm>
			</Modal>
		</div>
	);
};
