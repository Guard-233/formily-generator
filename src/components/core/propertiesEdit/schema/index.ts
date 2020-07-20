/** @format */

import { ISchema } from '@formily/antd'
export const schema: ISchema = {
	type: 'object',
	properties: {
		card: {
			type: 'object',
			'x-component': 'tab',
			'x-component-props': {
				defaultActiveKey: 'base-config'
			},
			properties: {
				'base-config': {
					type: 'object',
					'x-component': 'tabpane',
					'x-component-props': {
						tab: '基础配置'
					},
					properties: {
						label: {
							type: 'object',
							'x-component': 'mega-layout',
							'x-component-props': {
								labelCol: 8,
								wrapperCol: 16,
								full: true,
								labelAlign: 'left'
							},
							properties: {
								id: {
									'x-component': 'Input',
									type: 'string',
									title: 'id',
									description: '字段的key值'
								},
								type: {
									'x-component': 'Input',
									type: 'string',
									title: 'type',
									default: 'string',
									description: '字段类型'
								},
								DEFAULT_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										default: {
											'x-component': 'CustomMonacoEditor',
											type: 'string',
											title: 'default',
											description: '字段默认值'
										}
									}
								}
							}
						}
					}
				},
				'component-config': {
					type: 'object',
					'x-component': 'tabpane',
					'x-component-props': {
						tab: '组件配置'
					},
					properties: {
						label: {
							type: 'object',
							'x-component': 'mega-layout',
							'x-component-props': {
								labelCol: 8,
								wrapperCol: 16,
								full: true,
								labelAlign: 'left'
							},
							properties: {
								title: {
									'x-component': 'Input',
									type: 'string',
									title: 'title',
									description: '字段标题'
								},
								description: {
									'x-component': 'Input',
									type: 'string',
									title: 'description',
									description: '字段描述'
								},
								READONLY_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 16,
										full: false,
										labelAlign: 'left'
									},
									properties: {
										readOnly: {
											type: 'boolean',
											'x-component': 'Switch',
											title: 'readOnly',
											description: '是否只读与 editable 一致'
										},
										// writeOnly: {
										// 	type: 'boolean',
										// 	'x-component': 'Switch',
										// 	title: 'writeOnly'
										// },
										// editable	字段是否可编辑	boolean
										editable: {
											type: 'boolean',
											title: 'editable',
											description: '字段是否可编辑',
											'x-component': 'Switch'
										},
										// visible	字段是否可见(数据+样式)	boolean
										visible: {
											type: 'boolean',
											title: 'visible',
											description: '字段是否可见(数据+样式)',
											'x-component': 'Switch'
										},
										// display	字段样式是否可见	boolean
										display: {
											type: 'boolean',
											title: 'display',
											description: '字段样式是否可见',
											'x-component': 'Switch'
										}
									}
								},
								ENUM_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										// enum: {
										// 	type: 'array',
										// 	'x-component': 'arraytable',
										// 	title: 'enum',
										// 	items: {
										// 		type: 'object',
										// 		properties: {
										// 			label: {
										// 				title: 'label',
										// 				'x-component': 'input',
										// 				default: ''
										// 			},
										// 			value: {
										// 				title: 'value',
										// 				'x-component': 'input',
										// 				default: ''
										// 			}
										// 		}
										// 	},
										// 	description: '某些组件的枚举值'
										// },
										ENUM_NO_NAME: {
											'x-component': 'mega-layout',
											'x-component-props': {
												labelCol: 8,
												wrapperCol: 24,
												full: true,
												labelAlign: 'top'
											},
											properties: {
												enum: {
													'x-component': 'CustomMonacoEditor',
													title: 'enum',
													description: '某些组件的枚举值'
												}
											}
										}
									}
								},
								// maxItems	最大条目数	number
								maxItems: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'maxItems',
									description: '最大条目数'
								},
								// minItems	最小条目数	number
								minItems: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'minItems',
									description: '最小条目数'
								},
								// maxProperties	最大属性数量	number
								maxProperties: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'maxProperties',
									description: '最大属性数量'
								},
								// minProperties	最小属性数量	number
								minProperties: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'minProperties',
									description: '最小属性数量'
								}
							}
						}
					}
				},
				'rules-config': {
					type: 'object',
					'x-component': 'tabpane',
					'x-component-props': {
						tab: '校验配置'
					},
					properties: {
						label: {
							type: 'object',
							'x-component': 'mega-layout',
							'x-component-props': {
								labelCol: 8,
								wrapperCol: 16,
								full: true,
								labelAlign: 'left'
							},
							properties: {
								CONST_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										const: {
											'x-component': 'CustomMonacoEditor',
											title: 'const',
											description: '校验字段值是否与 const 的值相等'
										}
									}
								},
								// validate
								multipleOf: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'multipleOf',
									description: '校验字段值是否可被 multipleOf 的值整除'
								},
								// maximum	校验最大值(大于)	number
								maximum: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'maximum',
									description: '校验最大值(大于)'
								},
								// exclusiveMaximum	校验最大值（大于等于）	number
								exclusiveMaximum: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'exclusiveMaximum',
									description: '校验最大值（大于等于）'
								},
								// minimum	校验最小值(小于)	number
								minimum: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'minimum',
									description: '校验最小值(小于)'
								},
								// exclusiveMinimum	最小值（小于等于）	number
								exclusiveMinimum: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'exclusiveMinimum',
									description: '最小值（小于等于）'
								},
								// maxLength	校验最大长度	number
								maxLength: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'maxLength',
									description: '校验最大长度'
								},
								// minLength	校验最小长度	number
								minLength: {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'minLength',
									description: '校验最小长度'
								},
								// pattern	正则校验规则	string | RegExp
								pattern: {
									'x-component': 'Input',
									type: 'string',
									title: 'pattern',
									description: '正则校验规则'
								},
								// uniqueItems	是否校验重复	boolean
								uniqueItems: {
									type: 'boolean',
									title: 'uniqueItems',
									description: '是否校验重复',
									'x-component': 'RadioGroup',
									enum: [
										{
											label: 'true',
											value: true
										},
										{
											label: 'false',
											value: false
										}
									]
								},
								// required	必填 boolean
								required: {
									type: 'boolean',
									title: 'required',
									description: '是否必填',
									'x-component': 'RadioGroup',
									enum: [
										{
											label: 'true',
											value: true
										},
										{
											label: 'false',
											value: false
										}
									]
								},
								// format	正则规则类型，详细类型可以往后看	InternalFormats ！！！
								format: {
									'x-component': 'Select',
									'x-component-props': {
										mode: 'tags'
									},
									title: 'format',
									description: '正则规则类型',
									enum: [
										'url',
										'email',
										'ipv6',
										'ipv4',
										'idcard',
										'taodomain',
										'qq',
										'phone',
										'money',
										'zh',
										'date',
										'zip'
									]
								},
								// triggerType	字段校验时机	"onChange" | "onBlur"
								triggerType: {
									'x-component': 'Input',
									type: 'string',
									title: 'triggerType',
									description: '字段校验时机',
									enum: [
										{ label: 'onChange', value: 'onChange' },
										{ label: 'onBlur', value: 'onBlur' }
									],
									'x-component-props': {
										placeholder: '字段校验时机'
									}
								}
							}
						}
					}
				},
				'x-config': {
					type: 'object',
					'x-component': 'tabpane',
					'x-component-props': {
						tab: 'x扩展配置'
					},
					properties: {
						label: {
							type: 'object',
							'x-component': 'mega-layout',
							'x-component-props': {
								labelCol: 8,
								wrapperCol: 16,
								full: true,
								labelAlign: 'left'
							},
							properties: {
								// x-component	字段 UI 组件名称，大小写不敏感	string
								'x-component': {
									'x-component': 'Input',
									type: 'string',
									title: 'x-component'
								},
								// x-index	字段顺序	number
								'x-index': {
									'x-component': 'NumberPicker',
									type: 'number',
									title: 'x-index',
									description: '字段顺序'
								},
								// x-component-props	字段 UI 组件属性	{}
								X_COMPONENT_PROPS_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										'x-component-props': {
											'x-component': 'CustomMonacoEditor',
											title: 'x-component-props',
											description: '字段 UI 组件属性'
										}
									}
								},
								// x-props	字段扩展属性	{ [name: string]: any } ！！！
								X_PROPS_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										'x-props': {
											'x-component': 'CustomMonacoEditor',
											type: 'string',
											title: 'x-props',
											description: '字段扩展属性'
										}
									}
								},
								// x-rules	字段校验规则，详细描述可以往后看	ValidatePatternRules
								X_RULES_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										'x-rules': {
											'x-component': 'CustomMonacoEditor',
											title: 'x-rules',
											description: '字段校验规则'
										}
									}
								},
								// x-linkages	字段间联动协议，详细描述可以往后看	Array<{ target: FormPathPattern, type: string, [key: string]: any }>
								X_LINKAGES_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										'x-linkages': {
											'x-component': 'CustomMonacoEditor',
											type: 'string',
											title: 'x-linkages',
											description: '字段间联动协议，详细描述可以往后看'
										}
									}
								},
								X_MEGA_PROPS_NO_NAME: {
									'x-component': 'mega-layout',
									'x-component-props': {
										labelCol: 8,
										wrapperCol: 24,
										full: true,
										labelAlign: 'top'
									},
									properties: {
										'x-mega-props': {
											'x-component': 'CustomMonacoEditor',
											type: 'string',
											title: 'x-mega-props',
											description: '字段布局属性'
										}
									}
								}
							}
						}
					}
				}
			}
		}
		// label: {
		// 	type: "object",
		// 	"x-component": "mega-layout",
		// 	"x-component-props": {
		// 		labelAlign: "top",
		// 	},
		// 	properties: {

		// 		// properties	对象属性	{[key : string]:Schema} ！！！
		// 		// properties: {
		// 		// 	"x-component": "Input",
		// 		// 	type: "string",
		// 		// 	title: "properties",
		// 		// 	description: "正则规则类型，详细类型可以往后看",
		// 		// },
		// 		// items	数组描述	Schema | Schema[] ！！！
		// 		// items: {
		// 		// 	"x-component": "Input",
		// 		// 	type: "string",
		// 		// 	title: "items",
		// 		// 	description: "数组描述",
		// 		// },
		// 		// additionalItems	额外数组元素描述	Schema ！！！
		// 		additionalItems: {
		// 			"x-component": "Input",
		// 			type: "string",
		// 			title: "additionalItems",
		// 			description: "额外数组元素描述",
		// 		},
		// 		// patternProperties	动态匹配对象的某个属性的 Schema	{[key : string]:Schema} ！！！
		// 		patternProperties: {
		// 			"x-component": "Input",
		// 			type: "string",
		// 			title: "patternProperties",
		// 			description: "动态匹配对象的某个属性的 Schema",
		// 		},
		// 		// additionalProperties	匹配对象额外属性的 Schema	Schema ！！！
		// 		additionalProperties: {
		// 			"x-component": "Input",
		// 			type: "string",
		// 			title: "additionalProperties",
		// 			description: "匹配对象额外属性的 Schema",
		// 		},
		// 	},
		// },
	}
}
