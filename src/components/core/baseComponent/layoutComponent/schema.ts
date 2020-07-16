import { ISchema } from "@formily/antd";
export const schema: ISchema = {
	type: "object",
	properties: {
		formCards: {
			title: "formcards",
			type: "object",
			"x-component": "card",
			properties: {
				aa: {
					"x-component": "input",
					description: "hello world",
					title: "字段1",
				},
				bb: {
					"x-component": "input",
					title: "字段2",
				},
			},
		},
	},
};
