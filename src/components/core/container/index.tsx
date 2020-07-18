/** @format */

import React, { useState } from 'react'
import { ReactDraggable } from '../../draggable'
import { IDraggableList } from '../../draggable/draggable'
import { GenNonDuplicateID } from '../../../utils'
import { Preview } from './preview'
import { DraggableToFormily } from '../../../utils/transform'

export const Container = () => {
	const [list, setList] = useState<Array<IDraggableList>>([
		{
			type: 'object',
			id: 'schema',
			title: 'test'
		}
	])

	return (
		<div
			style={{
				width: '60%'
			}}
		>
			<Preview {...DraggableToFormily(list)}></Preview>
			<ReactDraggable
				list={list}
				setList={setList}
				group={{
					name: 'g1',
					put: true
				}}
				clone={(item) => ({
					...item,
					id: item.id + GenNonDuplicateID()
				})}
			></ReactDraggable>
		</div>
	)
}
