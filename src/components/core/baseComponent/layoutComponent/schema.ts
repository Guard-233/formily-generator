/** @format */

import { ISchema } from '@formily/antd'
export const schema: ISchema = {
	type: 'object',
	properties: {
		formCards: {
			title: 'formcards',
			type: 'object',
			'x-component': 'card',
			'x-component-props': {
				title: 'formCards'
			},
			properties: {}
		},
		formblock: {
			title: 'formblock',
			type: 'object',
			'x-component': 'block',
			'x-component-props': {
				title: 'formblock'
			},
			properties: {}
		},
		tabs: {
			type: 'object',
			'x-component': 'tab',
			'x-component-props': {
				defaultActiveKey: 'tab-1'
			},
			properties: {
				'tab-1': {
					type: 'object',
					'x-component': 'tabpane',
					'x-component-props': {
						tab: '选项1'
					},
					properties: {}
				},
				'tab-2': {
					type: 'object',
					'x-component': 'tabpane',
					'x-component-props': {
						tab: '选项2'
					},
					properties: {}
				}
			}
		},
		FormMegaLayout: {
			'x-component': 'mega-layout',
			'x-component-props': {
				labelCol: 4
			},
			type: 'object',
			properties: {}
		},
		pureObject: {
			type: 'object',
			'x-component': '',
			properties: {}
		}
	}
}
