/** @format */

import { cloneDeep } from 'lodash'
import { IDraggableList } from '../components/draggable/draggable'
import { ISchema } from '@formily/antd'

/**
 * 将 Draggable(ReactSortable) 的数据格式转换为 formily 所需的数据格式
 * @param list 传入 IDrIDraggableList[] 格式的数据
 */
export const DraggableToFormily = (list: IDraggableList[]): ISchema => {
	const arrayToObject = (
		properties: IDraggableList[]
	): {
		[key: string]: ISchema
	} => {
		return properties.reduce((propertiesPre, PropertiesNow) => {
			return {
				...propertiesPre,
				[PropertiesNow.id]: DraggableToFormily([PropertiesNow])
			}
		}, {})
	}

	const Schema = list.reduce((pre, now) => {
		const DeepPropertise: ISchema = Object.create(null)

		Object.assign(DeepPropertise, now)

		if (now.properties) {
			DeepPropertise.properties = arrayToObject(now.properties)
		}

		if (now.patternProperties) {
			DeepPropertise.patternProperties = arrayToObject(now.patternProperties)
		}

		if (now.items) {
			if (!Array.isArray(now.items)) {
				now.items = [now.items]
			}
			DeepPropertise.items = now.items.map((item) => DraggableToFormily([item]))
		}

		delete (DeepPropertise as { id: string }).id

		return {
			...pre,
			...DeepPropertise
		}
	}, {})

	return Schema
}

/**
 * 将 formily 的数据格式转换为 Draggable(ReactSortable) 所需的数据格式
 * @param vSchema 传入 ISchema 格式的数据
 * @param key 可控制ISchema数据格式的第一个对象转换为 Draggable(ReactSortable) 格式时的id名
 */
export const FormilyToDraggable = (vSchema: ISchema, key?: string): IDraggableList[] => {
	const schema = {
		[key || 'schema']: cloneDeep(vSchema)
	}
	const keys = Object.keys(schema)

	const ObjectToArray = (properties: { [key: string]: ISchema }) => {
		return Object.keys(properties).map((propertiesKey) => {
			return FormilyToDraggable(properties[propertiesKey], propertiesKey)[0]
		})
	}

	const result = keys.reduce((pre: Array<IDraggableList>, nowKey: string) => {
		const value: any = schema[nowKey]

		if (value.properties) {
			value.properties = ObjectToArray(value.properties)
		}

		if (value.patternProperties) {
			value.patternProperties = ObjectToArray(value.patternProperties)
		}

		if (value.items) {
			if (typeof value.items === 'object' && !Array.isArray(value.items)) {
				value.items = [value.items]
			}
			value.items = value.items.map(
				(item: ISchema | { [key: string]: ISchema }) => FormilyToDraggable(item)[0]
			)
		}

		return [
			...pre,
			{
				id: nowKey,
				...value
			}
		]
	}, [])

	return result
}
