/** @format */

import React, { useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { ReactSortable } from 'react-sortablejs'
import { Avatar, Popover } from 'antd'
import { IDraggableList } from '../../../draggable/draggable'
import './index.scss'

export const Ashcan = () => {
	const [list, setList] = useState<IDraggableList[]>([{ id: 'delete' }])

	return (
		<ReactSortable
			group={{ name: 'g1' }}
			list={list}
			setList={() => list}
			ghostClass="deleteActive"
		>
			{list.map((item) => {
				return (
					<Popover content="拖动到此删除">
						<Avatar
							size={64}
							style={{
								backgroundColor: '#f56c6c',
								position: 'fixed',
								bottom: '20px',
								right: '30%'
							}}
							icon={<DeleteOutlined />}
						/>
					</Popover>
				)
			})}
		</ReactSortable>
	)
}
