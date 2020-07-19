/** @format */
import React, { useState, useEffect, useContext } from 'react'
import { ISchema } from '@formily/antd'
import MonacoEditor from 'react-monaco-editor'

import { Modal, Button } from 'antd'
import { IDraggableList } from '../../../draggable/draggable'
import { FormilyToDraggable } from '../../../../utils/transform'
import { ActiveItem } from '../../context'

export const EditSchema = (props: {
	schema: ISchema
	setSchema: React.Dispatch<React.SetStateAction<IDraggableList[]>>
}) => {
	const { schema, setSchema } = props

	const [state, setState] = useState({
		visible: false
	})

	const [code, setCode] = useState(JSON.stringify(schema, undefined, 2))

	const { changeActive } = useContext(ActiveItem)

	useEffect(() => {
		setCode(JSON.stringify(schema, undefined, 2))
	}, [schema])

	const handleOk = (e: any) => {
		setSchema(FormilyToDraggable(JSON.parse(code)))

		changeActive({
			list: {
				id: 'schema',
				properties: [],
				type: 'object'
			},
			setList: () => {}
		})

		setState({
			visible: false
		})
	}

	const handleCancel = (e: any) => {
		setState({
			visible: false
		})
	}

	return (
		<div>
			<Button
				type="primary"
				onClick={() =>
					setState({
						visible: true
					})
				}
			>
				编辑schema
			</Button>
			<Modal
				title="Basic Modal"
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
					value={code}
					width="100%"
					height="600"
					language="json"
					theme="vs-dark"
					onChange={setCode}
				/>
			</Modal>
		</div>
	)
}
