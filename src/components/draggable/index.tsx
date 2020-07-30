/** @format */

import React from 'react'
import { IReactDraggableProps } from './draggable'
import { Nested } from './nested'

export const ReactDraggable = (props: IReactDraggableProps) => {
	return <Nested {...props} list={props.list} setList={props.setList}></Nested>
}
