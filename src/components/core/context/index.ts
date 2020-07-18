/** @format */

import { createContext } from 'react'
import { IDraggableList } from '../../draggable/draggable.d'

const active = {
	list: {
		id: 'schema'
	},
	setList: (IDraggableList: IDraggableList) => {}
}

const changeActive: any = () => {
	return {}
}

export const ActiveItem = createContext<{
	active: {
		list: IDraggableList
		setList(IDraggableList: IDraggableList): void
	}
	changeActive: React.Dispatch<
		React.SetStateAction<{
			list: IDraggableList
			setList(IDraggableList: IDraggableList): void
		}>
	>
}>({
	active,
	changeActive
})
