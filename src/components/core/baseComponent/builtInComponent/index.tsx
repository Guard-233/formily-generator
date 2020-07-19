/** @format */

import React, { useState } from 'react'
import { schema } from './schema'
import { ReactDraggable } from '../../../draggable/index'
import { IDraggableList } from '../../../draggable/draggable'
import { FormilyToDraggable } from '../../../../utils/transform'
import { GenNonDuplicateID } from '../../../../utils'

export const BuiltInComponent = () => {
	const [list, setList] = useState<IDraggableList[]>(FormilyToDraggable(schema))

	return (
		<ReactDraggable
			group={{
				pull: 'clone',
				name: 'g2',
				put: false
			}}
			list={list}
			setList={setList}
			sort={false}
			allowActive={false}
			clone={(item) => ({ ...item, id: item.id + '-' + GenNonDuplicateID() })}
		></ReactDraggable>
	)
}
