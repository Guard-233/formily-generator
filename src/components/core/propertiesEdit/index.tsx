/** @format */

import React, { useContext } from 'react'
import { SchemaForm, LifeCycleTypes, FormSpy } from '@formily/antd'
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
	FormMegaLayout
} from '@formily/antd-components'
import { schema } from './schema'
import { ActiveItem } from '../context'
import { CustomMonacoEditor } from '../../customComponent/custom-monaco-editor'

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

const LayoutComponents = {
	FormCard,
	FormMegaLayout
}

const ArrayComponents = {
	ArrayTable,
	ArrayCards
}

export const PropertiesEdit = () => {
	const { active } = useContext(ActiveItem)

	const { list, setList } = active

	return (
		<div
			style={{
				width: '30%',
				height: '100%',
				overflow: 'auto',
				padding: '15px'
			}}
		>
			<SchemaForm
				onSubmit={(value) => {
					setList(value)
				}}
				value={list}
				components={{
					...BuiltInComponents,
					...LayoutComponents,
					...ArrayComponents,
					CustomMonacoEditor
				}}
				schema={schema}
			>
				{/* <FormButtonGroup>
					<Submit>提交</Submit>
				</FormButtonGroup> */}
				<FormSpy
					selector={LifeCycleTypes.ON_FORM_VALUES_CHANGE}
					reducer={(state, action, form) => {
						if (list.id === action.payload.values.id) {
							setList(action.payload.values)
							return state
						}
					}}
				>
					{({ form: spyForm, state }) => {
						return <div>{JSON.stringify(state)}</div>
					}}
				</FormSpy>
			</SchemaForm>
		</div>
	)
}
