import { ISchema } from "@formily/antd";

export const schema: ISchema = {
	type: "object",
	properties: {
		// import { Input } from '@formily/antd-components'
		string: {
			title: "String",
			"x-component": "Input",
			"x-component-props": {
				placeholder: "input",
			},
			type: "string",
		},
		// import { Select } from '@formily/antd-components'
		select: {
			title: "Object Select",
			"x-component": "Select",
			enum: [
				{ label: "One", value: "1" },
				{ label: "Two", value: "2" },
				{ label: "Three", value: "3" },
				{ label: "Four", value: "4" },
			],
			"x-component-props": {
				placeholder: "select",
			},
		},
		//  components={{
		//   TextArea: Input.TextArea
		// }}
		textarea: {
			title: "String",
			"x-component": "TextArea",
			"x-component-props": {
				placeholder: "textarea",
			},
		},
		// import { Password } from '@formily/antd-components'
		Password: {
			title: "Password",
			"x-component": "Password",
			"x-component-props": {
				placeholder: "Password",
			},
		},
		// import { NumberPicker } from '@formily/antd-components'
		NumberPicker: {
			title: "NumberPicker",
			"x-component": "NumberPicker",
		},
		// import { Switch } from '@formily/antd-components'
		Switch: {
			title: "Switch",
			"x-component": "Switch",
		},
		// import { DatePicker } from '@formily/antd-components'
		DatePicker: {
			title: "DatePicker",
			"x-component": "DatePicker",
			"x-component-props": {
				format: "YYYY-MM-DD HH:mm:ss",
			},
		},
		// RangePicker: DatePicker.RangePicker
		"[start,end]": {
			title: "RangePicker",
			"x-component": "RangePicker",
		},
		// WeekPicker: DatePicker.WeekPicker
		WeekPicker: {
			title: "WeekPicker",
			"x-component": "WeekPicker",
		},
		// MonthPicker: DatePicker.MonthPicker
		MonthPicker: {
			title: "MonthPicker",
			"x-component": "MonthPicker",
		},
		// YearPicker: DatePicker.YearPicker
		YearPicker: {
			title: "YearPicker",
			"x-component": "YearPicker",
		},
		// import { TimePicker } from '@formily/antd-components'
		TimePicker: {
			title: "TimePicker",
			"x-component": "TimePicker",
			"x-component-props": {
				format: "YYYY-MM-DD HH:mm:ss",
			},
		},
		// import { Range } from '@formily/antd-components'
		Range: {
			title: "Range",
			"x-component": "Range",
			"x-component-props": {
				min: 0,
				max: 1024,
				marks: [0, 1024],
			},
		},
		// import { Upload } from '@formily/antd-components'
		upload: {
			title: "Card Upload",
			"x-component": "Upload",
			"x-component-props": {
				listType: "card",
			},
		},
		// import { Checkbox } from '@formily/antd-components'
		checkbox: {
			title: "Object Checkbox",
			"x-component": "CheckboxGroup",
			enum: [
				{ label: "One", value: "1" },
				{ label: "Two", value: "2" },
				{ label: "Three", value: "3" },
				{ label: "Four", value: "4" },
			],
		},
		// import { Radio } from '@formily/antd-components'
		radio: {
			title: "Object Radio",
			"x-component": "RadioGroup",
			enum: [
				{ label: "One", value: "1" },
				{ label: "Two", value: "2" },
				{ label: "Three", value: "3" },
				{ label: "Four", value: "4" },
			],
		},
		// import { Rating } from '@formily/antd-components'
		rating: {
			title: "Rating",
			"x-component": "Rating",
			"x-component-props": {
				allowHalf: true,
			},
		},
		// import { Transfer } from '@formily/antd-components'
		transfer: {
			title: "Transfer",
			"x-component": "Transfer",
			enum: [
				{ label: "One", value: "1", key: "1" },
				{ label: "Two", value: "2", key: "2" },
				{ label: "Three", value: "3", key: "3" },
				{ label: "Four", value: "4", key: "4" },
			],
			"x-component-props": {
				showSearch: true,
				render: (record: { label: any }) => record.label,
			},
		},
	},
};
