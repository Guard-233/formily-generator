/** @format */

import React, { useContext } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { INestedProps, IDraggableList } from './draggable'
import {
	SchemaForm,
	SchemaMarkupField as Field,
	registerFormItemComponent
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
	FormMegaLayout
} from '@formily/antd-components'
import { Card, Form } from 'antd'
import { cloneDeep } from 'lodash'
import { ActiveItem } from '../core/context'
import 'antd/dist/antd.css'
import './nested.scss'

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
	FormMegaLayout
}

/**
 * 合并后的组件
 * @todo 是否可以考虑进行动态引入
 */
const margeComponents = {
	...BuiltInComponents,
	...LayoutComponents
}

/**
 * 项目核心函数式组件，用于递归渲染
 * @param props
 */
export const Nested = (props: INestedProps) => {
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

	/**
	 * 目前的默认渲染机制
	 * @param item
	 */
	const DefaultRender = (item: IDraggableList) => {
		return (
			<React.Fragment key={item.id}>
				<SchemaForm
					components={margeComponents}
					formComponent={'div'}
					onClick={() => {
						if (props.allowActive) {
							changeActive({
								list: item,
								setList: (newState) => {
									nestedSetList(item)(newState)
								}
							})
						}
					}}
					schema={{
						type: 'object',
						properties: {
							NO_NAME: {
								'x-component': 'mega-layout',
								'x-component-props': {
									labelAlign: 'top',
									full: true
								},
								properties: { [item.id]: DraggableToFormily([item]) }
							}
						}
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
		return (
			<React.Fragment key={item.id}>
				<Form component={'div'}>
					<Card title={item.title}>
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

	/**
	 * 对于数组的渲染机制
	 * @param item
	 * @todo 暂未完善
	 */
	const ArrayRender = (item: IDraggableList) => {
		return (
			<SchemaForm
				component={'div'}
				components={{ ...margeComponents, Nested }}
				key={item.id}
			>
				<FormCard title="block">
					<Field
						x-component="Nested"
						default={{
							...props,
							group: {
								name: 'g1',
								put: ['g2', 'g1']
							},
							list: cloneDeep(item.properties) || [],
							setList: nestedSetList(cloneDeep(item))
						}}
					/>
				</FormCard>
			</SchemaForm>
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
						return ObjectRender(item)

					// return ArrayRender(item)
					default:
						return DefaultRender(item)
				}
			})}
		</ReactSortable>
	)
}
