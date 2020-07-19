/** @format */

import React, { useState } from 'react'
import { ReactDraggable } from '../../draggable'
import { IDraggableList } from '../../draggable/draggable'
import { GenNonDuplicateID } from '../../../utils'
import { Preview } from './preview'
import { EditSchema } from './editSchema'
import { DraggableToFormily } from '../../../utils/transform'
import { Layout } from 'antd'

const { Content, Header } = Layout

export const Container = () => {
	const [list, setList] = useState<Array<IDraggableList>>([
		{
			type: 'object',
			id: 'schema',
			title: 'test'
		}
	])

	return (
		<Layout
			style={{
				width: '60%'
			}}
		>
			<Header
				style={{
					backgroundColor: 'white',
					display: 'flex',
					justifyContent: 'space-evenly'
				}}
			>
				<EditSchema schema={DraggableToFormily(list)} setSchema={setList}></EditSchema>
				<Preview {...DraggableToFormily(list)}></Preview>
			</Header>
			<Content>
				<ReactDraggable
					list={list}
					setList={setList}
					group={{
						name: 'g1',
						put: true
					}}
					allowActive={true}
					clone={(item) => ({
						...item,
						id: item.id + GenNonDuplicateID()
					})}
				></ReactDraggable>
			</Content>
		</Layout>
	)
}
