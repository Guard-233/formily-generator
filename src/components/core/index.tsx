/** @format */

import React, { useState } from 'react'
import { BaseComponent } from './baseComponent'
import { Container } from './container'
import { PropertiesEdit } from './propertiesEdit'
import { ActiveItem } from './context'
import { IDraggableList } from '../draggable/draggable.d'

export const Core = () => {
	const [active, setActive] = useState<{
		list: IDraggableList
		setList(IDraggableList: IDraggableList): void
	}>({
		list: {
			id: 'schema',
			properties: [],
			type: 'object'
		},
		setList: (list: IDraggableList) => {}
	})

	return (
		<div
			style={{
				display: 'flex',
				height: '100%'
			}}
		>
			<ActiveItem.Provider
				value={{
					active: active,
					changeActive: setActive
				}}
			>
				<BaseComponent></BaseComponent>
				<Container></Container>
				<PropertiesEdit></PropertiesEdit>
			</ActiveItem.Provider>
		</div>
	)
}
