/** @format */

import React, { useContext } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { INestedProps, IDraggableList } from './draggable'
import {
	SchemaForm,
	SchemaMarkupField as Field,
	ISchemaFieldComponentProps
} from '@formily/antd'
import { DraggableToFormily } from '../../utils/transform'
import { merge } from 'lodash'
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
	FormBlock,
	FormMegaLayout,
	FormTab,
	ArrayCards,
	ArrayTable
} from '@formily/antd-components'
import { Card, Form, Tabs } from 'antd'
import { cloneDeep } from 'lodash'
import { ActiveItem } from '../core/context'
import 'antd/dist/antd.css'
import './nested.scss'
import { GenNonDuplicateID } from '../../utils'

const { TabPane } = Tabs

// 内置的非布局组件
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
	Transfer
}

// 布局组件
const LayoutComponents = {
	FormCard,
	FormBlock,
	FormMegaLayout,
	FormTab
}

const ArrayComponent = {
	ArrayCards,
	ArrayTable
}

/**
 * 合并后的组件
 * @todo 是否可以考虑进行动态引入
 */
const margeComponents = {
	...BuiltInComponents,
	...LayoutComponents,
	...ArrayComponent
}

interface INested {
	(props: INestedProps): JSX.Element
	(props: { value: INestedProps }): JSX.Element
}

export const isInestedProps = (value: any): value is INestedProps => {
	return !value.value
}

const NestedObject = (props: ISchemaFieldComponentProps) => {
	const { list, setList } = props.value

	return (
		<Nested
			{...({} as any)}
			group={{
				name: 'g1',
				put: true
			}}
			list={list}
			setList={setList}
			allowActive={true}
		></Nested>
	)
}

/**
 * 项目核心函数式组件，用于递归渲染
 * @param props
 */
export const Nested: INested = (args: any) => {
	let props: INestedProps = args

	if (!isInestedProps(args)) {
		props = args.value
	}

	const { list, setList } = props

	/**
	 * 重写setList,使其对于递归组件也有效果
	 * @param item
	 */
	const nestedSetList = (item: IDraggableList) => {
		return (newState: IDraggableList | IDraggableList[]) => {
			setList(
				list.map((t) => {
					if (t.id === item.id) {
						if (t.type === 'object') {
							return {
								...item,
								id: item.id,
								properties: cloneDeep(newState) as IDraggableList[]
							}
						} else if (item.type === 'array') {
							return {
								...item,
								id: item.id,
								items: cloneDeep(newState) as IDraggableList[]
							}
						} else {
							return newState as IDraggableList
						}
					}
					return t
				}),
				null,
				{
					dragging: null
				}
			)
		}
	}

	const { changeActive } = useContext(ActiveItem)

	const ObjOnclick = (item: IDraggableList, list: IDraggableList[]) => {
		return (event: React.MouseEvent) => {
			event.stopPropagation()

			if (props.allowActive) {
				changeActive({
					list: item,
					setList: (newState) => {
						setList(
							list.map((card) => {
								if (card.id === newState.id) {
									return newState
								}
								return card
							}),
							null,
							{
								dragging: null
							}
						)
					}
				})
			}
		}
	}

	/**
	 * 目前的默认渲染机制
	 * @param item
	 */
	const DefaultRender = (item: IDraggableList) => {
		if (item.id === 'formCards' || item.id === 'schema') {
			debugger
		}

		return (
			<React.Fragment key={item.id}>
				<SchemaForm
					components={margeComponents}
					formComponent={'div'}
					onClick={(event) => {
						event.stopPropagation()

						if (props.allowActive) {
							changeActive({
								list: item,
								setList: (newState) => {
									if (!/\{\{ *\}\}/.test(JSON.stringify(newState))) {
										nestedSetList(item)(newState)
									}
								}
							})
						}
					}}
					schema={{
						type: 'object',
						properties: { [item.id]: DraggableToFormily([item]) }
					}}
				></SchemaForm>
			</React.Fragment>
		)
	}

	/**
	 * 对于对象的渲染机制
	 * @param item
	 * @todo 目前样式上之对于Cards有效
	 */
	const ObjectRender = (item: IDraggableList) => {
		let ObjRenderCom: any = FormCard

		switch (item['x-component']?.toLocaleLowerCase()) {
			case 'block':
				ObjRenderCom = FormBlock
				break
			case 'tab':
				ObjRenderCom = Tabs
				break
			case 'tabpane':
				ObjRenderCom = TabPane
				break
			case 'mega-layout':
				ObjRenderCom = FormMegaLayout
		}

		switch (item['x-component']?.toLocaleLowerCase()) {
			case 'block':
				return (
					<React.Fragment key={item.id}>
						<SchemaForm
							components={{ ...margeComponents, NestedObject }}
							value={{
								[item.id]: {
									list: item.properties,
									setList: nestedSetList(item)
								}
							}}
							component="div"
							onClick={ObjOnclick(item, list)}
						>
							<ObjRenderCom {...item['x-component-props']}>
								<Field x-component={'NestedObject'} name={item.id as string} />
							</ObjRenderCom>
						</SchemaForm>
					</React.Fragment>
				)
			case 'mega-layout':
			case '':
				return (
					<React.Fragment key={item.id}>
						<div
							style={{
								minHeight: '80px',
								border: '1px solid blue'
							}}
							onClick={ObjOnclick(item, list)}
						>
							<div>{item['x-component'] || 'pureObject'}</div>
							<Nested
								{...props}
								list={item.properties || []}
								setList={nestedSetList(item)}
							></Nested>
						</div>
					</React.Fragment>
				)
			case 'tab':
				let active: string | undefined = undefined

				const activeObj = {
					add(activeKey: string | React.MouseEvent<HTMLElement, MouseEvent>) {
						const id = GenNonDuplicateID()

						setList(
							list.map((i) => {
								if (i.id === item.id) {
									return {
										...item,
										properties: [
											...item.properties,
											{
												id: 'schema' + id,
												type: 'object',
												'x-component': 'tabpane',
												'x-component-props': {
													tab: '选项' + id
												},
												properties: []
											}
										]
									}
								}
								return i
							}),
							null,
							{ dragging: null }
						)
					},
					remove(activeKey: string | React.MouseEvent<HTMLElement, MouseEvent>) {
						setList(
							list.map((i) => {
								if (i.id === item.id) {
									return {
										...item,
										properties: item.properties?.filter((j) => {
											return j.id !== activeKey
										})
									}
								}
								return i
							}),
							null,
							{ dragging: null }
						)
					}
				}

				const onChange = (activeKey: string) => {
					active = activeKey
				}

				const onEdit = (
					targetKey: string | React.MouseEvent<HTMLElement>,
					action: 'add' | 'remove'
				) => {
					activeObj[action](targetKey)
				}

				return (
					<React.Fragment key={item.id}>
						<div onClick={ObjOnclick(item, list)}>
							<Tabs
								{...item['x-component-props']}
								type="editable-card"
								onChange={onChange}
								activeKey={active}
								onEdit={onEdit}
							>
								{item.properties?.map((tabp) => {
									return (
										<TabPane {...tabp['x-component-props']} key={tabp.id as string}>
											<Nested
												{...props}
												list={tabp.properties || []}
												setList={(newState: IDraggableList | IDraggableList[]) => {
													setList(
														list.map((i) => {
															if (item.id === i.id) {
																return {
																	...item,
																	properties: item.properties!.map((t) => {
																		if (t.id === tabp.id) {
																			return {
																				...tabp,
																				id: tabp.id,
																				properties: cloneDeep(
																					newState
																				) as IDraggableList[]
																			}
																		}
																		return t
																	})
																}
															}
															return i
														}),
														null,
														{ dragging: null }
													)
												}}
											></Nested>
										</TabPane>
									)
								})}
							</Tabs>
						</div>
					</React.Fragment>
				)
			default:
				return (
					<React.Fragment key={item.id}>
						<Form component={'div'} onClick={ObjOnclick(item, list)}>
							<Card {...item['x-component-props']}>
								<Nested
									{...props}
									list={item.properties || []}
									setList={nestedSetList(item)}
								></Nested>
							</Card>
						</Form>
					</React.Fragment>
				)
		}
	}

	/**
	 * 对于数组的渲染机制
	 * @param item
	 * @todo 暂未完善
	 */
	const ArrayRender = (item: IDraggableList) => {
		return (
			<Card
				onClick={ObjOnclick(item, list)}
				{...item['x-component-props']}
				title={item.title}
			>
				<Nested
					{...props}
					list={(item.items as IDraggableList[]) || []}
					setList={nestedSetList(item)}
				></Nested>
			</Card>
		)
	}

	return (
		<ReactSortable
			{...merge(
				{
					group: {
						name: 'g1'
					}
				},
				props
			)}
			list={list}
			setList={setList}
			style={{
				minHeight: '100px'
			}}
		>
			{list.map((item: IDraggableList, index: number) => {
				switch (item.type) {
					case 'object':
						return ObjectRender(item)
					case 'array':
						return ArrayRender(item)
					default:
						return DefaultRender(item)
				}
			})}
		</ReactSortable>
	)
}
