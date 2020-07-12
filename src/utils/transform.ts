import { IDraggableList } from "../components/draggable/draggable";
import { ISchema } from "@formily/antd";

export const DraggableToFormily = (list: IDraggableList[]): ISchema => {
	const Schema = list.reduce((pre, now) => {
		const DeepPropertise = Object.create(null);

		Object.assign(DeepPropertise, now);

		if (now.properties) {
			DeepPropertise.properties = DraggableToFormily(now.properties);
		}

		if (now.patternProperties) {
			DeepPropertise.patternProperties = DraggableToFormily(
				now.patternProperties
			);
		}

		if (now.items) {
			if (!Array.isArray(now.items)) {
				now.items = [now.items];
			}
			DeepPropertise.items = now.items.map(
				(item) => (DraggableToFormily([item]) as any).schema
			);
		}

		delete DeepPropertise.id;

		return {
			...pre,
			[now.id]: DeepPropertise,
		};
	}, {});

	return Schema;
};

export const IsISchema = (data: any): data is ISchema => {
	return typeof data === "object" && data.properties;
};

export const FormilyToDraggable = (
	schema: ISchema | { [key: string]: ISchema }
): IDraggableList[] => {
	if (IsISchema(schema)) {
		schema = {
			schema,
		};
	}

	const keys = Object.keys(schema || {});

	const result = keys.reduce((pre: any, nowKey: string) => {
		const value = schema[nowKey];

		if (value.properties) {
			value.properties = FormilyToDraggable(value.properties);
		}

		if (value.patternProperties) {
			value.patternProperties = FormilyToDraggable(value.patternProperties);
		}

		if (value.items) {
			if (typeof value.items === "object" && !Array.isArray(value.items)) {
				value.items = [value.items];
			}
			value.items = value.items.map(
				(item: ISchema | { [key: string]: ISchema }) =>
					FormilyToDraggable(item)[0]
			);
		}

		return [
			...pre,
			{
				id: nowKey,
				...value,
			},
		];
	}, []);

	return (result as unknown) as IDraggableList[];
};
