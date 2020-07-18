/** @format */

import React, { useContext } from 'react'
import {
	SchemaForm,
	FormButtonGroup,
	Submit,
	LifeCycleTypes,
	FormProvider,
	FormSpy
} from '@formily/antd'
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
				height: '600px',
				overflow: 'auto'
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
					...ArrayComponents
				}}
				schema={schema}
			>
				<FormButtonGroup>
					<Submit>提交</Submit>
				</FormButtonGroup>
				<FormSpy
					selector={LifeCycleTypes.ON_FORM_VALUES_CHANGE}
					reducer={(state, action, form) => {
						setList(action.payload.values)
						return state
					}}
				>
					{({ form: spyForm, state }) => {
						return <div></div>
					}}
				</FormSpy>
			</SchemaForm>
		</div>
	)
}
