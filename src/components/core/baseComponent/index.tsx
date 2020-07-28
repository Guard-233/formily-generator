/** @format */

import React from 'react'
import { BuiltInComponent } from './builtInComponent'
import { ArrayComponent } from './arrayComponent'
import { LayoutComponent } from './layoutComponent'

export const BaseComponent = () => {
	return (
		<div
			style={{
				width: '20%',
				height: '100%',
				overflow: 'auto'
			}}
		>
			<div>基础组件</div>
			<BuiltInComponent></BuiltInComponent>
			<div>数组组件</div>
			<ArrayComponent></ArrayComponent>
			<div>布局组件</div>
			<LayoutComponent></LayoutComponent>
		</div>
	)
}
