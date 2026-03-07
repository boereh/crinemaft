import { array, map, number, object, string, type InferInput } from 'valibot';

export type Build = InferInput<typeof BUILD_SCHEMA>;

export const BUILD_SCHEMA = object({
	id: string(),
	name: string(),
	materials: array(map(number(), number())),
	layers: array(array(array(number())))
});
