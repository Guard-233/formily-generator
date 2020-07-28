/** @format */

import React from 'react'
import { BuiltInComponent } from './builtInComponent'
import { ArrayComponent } from './arrayComponent'
import { LayoutComponent } from './layoutComponent'
import { PageHeader } from 'antd'

export const BaseComponent = () => {
	return (
		<div
			style={{
				width: '20%',
				height: '100%',
				overflow: 'auto'
			}}
		>
			<PageHeader className="site-page-header" backIcon={false} title="基础组件" />
			<BuiltInComponent></BuiltInComponent>
			<PageHeader className="site-page-header" backIcon={false} title="数组组件" />
			<ArrayComponent></ArrayComponent>
			<PageHeader className="site-page-header" backIcon={false} title="布局组件" />
			<LayoutComponent></LayoutComponent>
		</div>
	)
}
