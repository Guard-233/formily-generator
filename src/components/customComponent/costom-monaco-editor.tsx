/** @format */

import React from 'react'
import MonacoEditor from 'react-monaco-editor'
import { ISchemaFieldComponentProps } from '@formily/antd'

const CustomMonacoEditor = (props: ISchemaFieldComponentProps) => {
	let { value = '' } = props

	try {
		value = JSON.stringify(value)
	} catch {
		value = ''
	}

	return (
		<MonacoEditor
			value={value || ''}
			width="100%"
			height="80"
			language="json"
			theme="vs-dark"
			onChange={(value, event) => {
				const [firstStr] = value

				let result: any = value

				if (firstStr === '"') {
					result = value.slice(1, -1)
				} else if (firstStr === '{' || firstStr === '[') {
					result = JSON.parse(value)
				} else {
					result = Number(value)
				}
				props.onChange(result, event)
			}}
		/>
	)
}

CustomMonacoEditor.CostomMonacoEditor = true

export { CustomMonacoEditor }
