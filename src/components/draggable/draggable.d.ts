/** @format */

import { ReactSortableProps } from 'react-sortablejs'
import { ISchema } from '@formily/antd'

export type SetList = ReactSortableProps<IDraggableList>['setList']

type OmitISchemaKey =
	| 'properties'
	| 'patternProperties'
	| 'items'
	| 'additionalItems'
	| 'additionalProperties'

type ExcluedISchema = Omit<ISchema, OmitISchemaKey>

export interface IDraggableList extends ExcluedISchema {
	id: string | number
	properties?: IDraggableList[]
	patternProperties?: IDraggableList[]
	items?: IDraggableList | IDraggableList[]
	additionalItems?: IDraggableList
	additionalProperties?: IDraggableList
}

export interface IReactDraggableProps
	extends ReactSortableProps<IDraggableList> {}

export interface INestedProps extends ReactSortableProps<IDraggableList> {}
