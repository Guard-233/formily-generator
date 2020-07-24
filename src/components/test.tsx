/** @format */

import React, { useState } from 'react'
import { SchemaForm, SchemaMarkupField as Field, ISchema } from '@formily/antd' // 或者 @formily/next
// import { Input, Select } from 'antd'
import { FormCard, Input } from '@formily/antd-components'
import { ReactSortable } from 'react-sortablejs'
import 'antd/dist/antd.css'
import { FormilyToDraggable, DraggableToFormily } from '../utils/transform'

const formItemComponent = (props: { children: React.ReactNode; props: ISchema }) => {
	// debugger

	let list = FormilyToDraggable(props.props)

	return (
		<ReactSortable
			group={{
				name: 'g1',
				put: true
			}}
			list={list}
			setList={(value) => {
				list = value
			}}
		>
			{props.children}
		</ReactSortable>
	)
}

export const Test = () => {
	return (
		<SchemaForm
			formItemComponent={formItemComponent}
			components={{ FormCard, Input }}
			onSubmit={(values) => {
				console.log(values)
			}}
			schema={{
				type: 'object',
				properties: {
					input: {
						'x-component': 'FormCards',
						type: 'string',
						title: 'test',
						properties: {
							aa: {
								title: '哈哈',
								'x-component': 'input'
							}
						}
					}
				}
			}}
		></SchemaForm>
	)
}
