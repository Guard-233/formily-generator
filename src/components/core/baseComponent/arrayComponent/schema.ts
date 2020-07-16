import { ISchema } from "@formily/antd";
export const schema: ISchema = {
	type: "object",
	properties: {
		arrayTable: {
			title: "数组",
			maxItems: 3,
			type: "array",
			"x-component": "arraytable",
			"x-component-props": {
				// operationsWidth: 300,
			},
			items: {
				type: "object",
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
					// cc: {
					// 	"x-component": "input",
					// 	title: "字段3",
					// },
					// dd: {
					// 	"x-component": "input",
					// 	title: "字段4",
					// 	"x-index": 1,
					// },
					// ee: {
					// 	"x-component": "input",
					// 	title: "字段5",
					// },
					// ff: {
					// 	"x-component": "input",
					// 	title: "字段6",
					// },
					// gg: {
					// 	"x-component": "input",
					// 	title: "字段7",
					// },
					// hh: {
					// 	"x-component": "rangepicker",
					// 	title: "字段8",
					// },
				},
			},
		},
		arrayCards: {
			title: "数组Cards",
			maxItems: 3,
			type: "array",
			"x-component": "arraycards",
			items: {
				type: "object",
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
	},
};
