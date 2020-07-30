/** @format */

import React, { useState, useEffect } from 'react'
import { ReactDraggable } from '../../draggable'
import { IDraggableList } from '../../draggable/draggable'
import { GenNonDuplicateID } from '../../../utils'
import { Preview } from './preview'
import { EditSchema } from './editSchema'
import { DraggableToFormily } from '../../../utils/transform'
import { Layout, Tag } from 'antd'
import { Ashcan } from './ashcan'

const { Content, Header } = Layout

class ErrorBoundary extends React.Component<
	any,
	{
		hasError: boolean
	}
> {
	constructor(props: Readonly<{}>) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: any, info: any) {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, info);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>
		}

		return this.props.children
	}
}

export const Container = () => {
	const [list, setList] = useState<Array<IDraggableList>>([
		{
			type: 'object',
			id: 'schema'
		}
	])

	const tag = <Tag color="warning">请拖拽至下方框体内部</Tag>

	useEffect(() => {
		if (list.length > 1) {
			setList(
				list.filter((item) => {
					return item.id === 'schema'
				})
			)
		}
	}, [list])

	return (
		<Layout
			style={{
				width: '60%',
				height: '100%',
				overflow: 'auto'
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
			<Content
				style={{
					overflow: 'auto'
				}}
			>
				<ErrorBoundary>
					{list.length > 1 ? tag : ''}
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
				</ErrorBoundary>
				<Ashcan />
			</Content>
		</Layout>
	)
}
