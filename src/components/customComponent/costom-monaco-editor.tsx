/** @format */

import React, { useState, useEffect } from 'react'
import MonacoEditor from 'react-monaco-editor'
import { ISchemaFieldComponentProps } from '@formily/antd'
import { Modal, Button, Tag } from 'antd'

const CustomMonacoEditor = (props: ISchemaFieldComponentProps) => {
	let { value = '' } = props

	const [state, setState] = useState({
		visible: false
	})

	const handleOk = (e: any) => {
		onValueChange(code)

		setState({
			visible: false
		})
	}

	const handleCancel = (e: any) => {
		setState({
			visible: false
		})
	}

	const onValueChange = (value: any) => {
		const [firstStr] = value

		let result: any = value

		if (firstStr === '"') {
			result = value.slice(1, -1)
		} else if (firstStr === '{' || firstStr === '[') {
			result = JSON.parse(value)
		} else {
			result = Number(value)
		}

		props.onChange(result)
	}

	/**
	 * 大编辑器与小编辑器共用的代码
	 */
	const [code, setCode] = useState(value || '')

	const [syncFlag, setSyncFlag] = useState(true)

	const ReSetCode = (newValue: any) => {
		setSyncFlag(false)
		setCode(newValue)
	}

	useEffect(() => {
		setCode(JSON.stringify(value, undefined, 2))
	}, [value])

	return (
		<div
			style={{
				width: '100%'
			}}
		>
			<MonacoEditor
				value={code || ''}
				width="100%"
				height="120"
				language="json"
				theme="vs-dark"
				onChange={ReSetCode}
				// onChange={props.onChange}
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end'
				}}
			>
				<Tag
					color="red"
					style={{
						visibility: syncFlag ? 'hidden' : 'visible'
					}}
				>
					{'数据未同步，请点击“同步”按钮'}
				</Tag>
				<Button
					type="ghost"
					onClick={() => {
						setState({
							visible: true
						})
					}}
				>
					展开
				</Button>
				<Button
					type="ghost"
					onClick={() => {
						setSyncFlag(true)
						onValueChange(code)
					}}
				>
					同步
				</Button>
			</div>
			<Modal
				title="属性编辑"
				visible={state.visible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={'80%'}
				centered={true}
				bodyStyle={{
					maxHeight: '600px',
					overflow: 'auto'
				}}
			>
				<MonacoEditor
					value={code || ''}
					width="100%"
					height="600"
					language="json"
					theme="vs-dark"
					onChange={ReSetCode}
				/>
			</Modal>
		</div>
	)
}

CustomMonacoEditor.CostomMonacoEditor = true

export { CustomMonacoEditor }
