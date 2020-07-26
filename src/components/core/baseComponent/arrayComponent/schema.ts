/** @format */

import { ISchema } from '@formily/antd'
export const schema: ISchema = {
	type: 'object',
	properties: {
		arrayTable: {
			title: '数组table',
			maxItems: 3,
			type: 'array',
			'x-component': 'arraytable',
			'x-component-props': {
				// operationsWidth: 300,
			},
			items: [
				{
					type: 'object',
					properties: {
						// aa: {
						// 	'x-component': 'input',
						// 	description: 'hello world',
						// 	title: '字段1'
						// },
						// bb: {
						// 	'x-component': 'input',
						// 	title: '字段2'
						// }
					}
				}
				// {
				// 	type: 'object',
				// 	properties: {
				// 		cc: {
				// 			'x-component': 'input',
				// 			description: 'hello world',
				// 			title: '字段3'
				// 		},
				// 		dd: {
				// 			'x-component': 'input',
				// 			title: '字段4'
				// 		}
				// 	}
				// }
			]
		},
		arrayCards: {
			title: '数组Cards',
			maxItems: 3,
			type: 'array',
			'x-component': 'arraycards',
			items: [
				{
					type: 'object',
					properties: {
						// aa: {
						// 	'x-component': 'input',
						// 	description: 'hello world',
						// 	title: '字段1'
						// },
						// bb: {
						// 	'x-component': 'input',
						// 	title: '字段2'
						// }
					}
				}
			]
		}
	}
}
