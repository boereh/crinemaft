export const ITEMS = [
	'sword',
	'axe',
	'pickaxe',
	'shovel',
	'hoe',
	'turtle_shell',
	'helmet',
	'chestplate',
	'leggings',
	'boots',
	'trident',
	'mace',
	'spear',
	'bow',
	'crossbow',
	'elytra',
	'shield',
	'shears',
	'flint_and_steel',
	'brush',
	'fishing_rod',
	'carrot_on_a_stick',
	'warped_fungus_on_a_stick',
	'carved_pumpkin',
	'book'
] as const;

export type Item = (typeof ITEMS)[number];

export type Enchantment = {
	name: string;
	max: number;
	weight: number;
	incompatible: string[];
	items: (typeof ITEMS)[number][];
};

export const ENCHANTMENTS: Enchantment[] = [
	{
		name: 'unbreaking',
		max: 3,
		weight: 1,
		incompatible: [],
		items: [
			'helmet',
			'chestplate',
			'leggings',
			'boots',
			'pickaxe',
			'shovel',
			'axe',
			'sword',
			'hoe',
			'brush',
			'fishing_rod',
			'bow',
			'shears',
			'flint_and_steel',
			'carrot_on_a_stick',
			'warped_fungus_on_a_stick',
			'shield',
			'elytra',
			'trident',
			'turtle_shell',
			'crossbow',
			'mace',
			'spear',
			'book'
		]
	},
	{
		name: 'mending',
		max: 1,
		weight: 2,
		incompatible: ['infinity'],
		items: [
			'helmet',
			'chestplate',
			'leggings',
			'boots',
			'pickaxe',
			'shovel',
			'axe',
			'sword',
			'hoe',
			'brush',
			'fishing_rod',
			'bow',
			'shears',
			'flint_and_steel',
			'carrot_on_a_stick',
			'warped_fungus_on_a_stick',
			'shield',
			'elytra',
			'trident',
			'turtle_shell',
			'crossbow',
			'mace',
			'spear',
			'book'
		]
	},
	{
		name: 'protection',
		max: 4,
		weight: 1,
		incompatible: ['blast_protection', 'fire_protection', 'projectile_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		name: 'blast_protection',
		max: 4,
		weight: 2,
		incompatible: ['fire_protection', 'protection', 'projectile_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		name: 'fire_protection',
		max: 4,
		weight: 1,
		incompatible: ['blast_protection', 'protection', 'projectile_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		name: 'projectile_protection',
		max: 4,
		weight: 1,
		incompatible: ['protection', 'blast_protection', 'fire_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		name: 'thorns',
		max: 3,
		weight: 4,
		incompatible: [],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		name: 'feather_falling',
		max: 4,
		weight: 1,
		incompatible: [],
		items: ['boots', 'book']
	},
	{
		name: 'aqua_affinity',
		max: 1,
		weight: 2,
		incompatible: [],
		items: ['helmet', 'turtle_shell', 'book']
	},
	{
		name: 'respiration',
		max: 3,
		weight: 2,
		incompatible: [],
		items: ['helmet', 'turtle_shell', 'book']
	},
	{
		name: 'frost_walker',
		max: 2,
		weight: 2,
		incompatible: ['depth_strider'],
		items: ['boots', 'book']
	},
	{
		name: 'depth_strider',
		max: 3,
		weight: 2,
		incompatible: ['frost_walker'],
		items: ['boots', 'book']
	},
	{ name: 'soul_speed', max: 3, weight: 4, incompatible: [], items: ['boots', 'book'] },
	{
		name: 'swift_sneak',
		max: 3,
		weight: 4,
		incompatible: [],
		items: ['leggings', 'book']
	},
	{
		name: 'density',
		max: 5,
		weight: 1,
		incompatible: ['breach', 'smite', 'bane_of_arthropods'],
		items: ['mace', 'book']
	},
	{
		name: 'breach',
		max: 4,
		weight: 2,
		incompatible: ['density', 'smite', 'bane_of_arthropods'],
		items: ['mace', 'book']
	},
	{ name: 'wind_burst', max: 3, weight: 2, incompatible: [], items: ['mace', 'book'] },
	{ name: 'lunge', max: 3, weight: 1, incompatible: [], items: ['spear', 'book'] },
	{
		name: 'channeling',
		max: 1,
		weight: 4,
		incompatible: ['riptide'],
		items: ['trident', 'book']
	},
	{
		name: 'riptide',
		max: 3,
		weight: 2,
		incompatible: ['channeling', 'loyalty'],
		items: ['trident', 'book']
	},
	{ name: 'impaling', max: 5, weight: 2, incompatible: [], items: ['trident', 'book'] },
	{
		name: 'loyalty',
		max: 3,
		weight: 1,
		incompatible: ['riptide'],
		items: ['trident', 'book']
	},
	{
		name: 'sharpness',
		max: 5,
		weight: 1,
		incompatible: ['bane_of_arthropods', 'smite'],
		items: ['sword', 'axe', 'spear', 'book']
	},
	{
		name: 'bane_of_arthropods',
		max: 5,
		weight: 1,
		incompatible: ['smite', 'sharpness', 'density', 'breach'],
		items: ['sword', 'axe', 'mace', 'spear', 'book']
	},
	{
		name: 'smite',
		max: 5,
		weight: 1,
		incompatible: ['bane_of_arthropods', 'sharpness', 'density', 'breach'],
		items: ['sword', 'axe', 'mace', 'spear', 'book']
	},
	{
		name: 'sweeping_edge',
		max: 3,
		weight: 2,
		incompatible: [],
		items: ['sword', 'book']
	},
	{
		name: 'fire_aspect',
		max: 2,
		weight: 2,
		incompatible: [],
		items: ['sword', 'mace', 'spear', 'book']
	},
	{
		name: 'knockback',
		max: 2,
		weight: 1,
		incompatible: [],
		items: ['sword', 'spear', 'book']
	},
	{
		name: 'looting',
		max: 3,
		weight: 2,
		incompatible: [],
		items: ['sword', 'spear', 'book']
	},
	{ name: 'flame', max: 1, weight: 2, incompatible: [], items: ['bow', 'book'] },
	{
		name: 'infinity',
		max: 1,
		weight: 4,
		incompatible: ['mending'],
		items: ['bow', 'book']
	},
	{ name: 'power', max: 5, weight: 1, incompatible: [], items: ['bow', 'book'] },
	{ name: 'punch', max: 2, weight: 2, incompatible: [], items: ['bow', 'book'] },
	{
		name: 'quick_charge',
		max: 3,
		weight: 1,
		incompatible: [],
		items: ['crossbow', 'book']
	},
	{
		name: 'multishot',
		max: 1,
		weight: 2,
		incompatible: ['piercing'],
		items: ['crossbow', 'book']
	},
	{
		name: 'piercing',
		max: 4,
		weight: 1,
		incompatible: ['multishot'],
		items: ['crossbow', 'book']
	},
	{
		name: 'efficiency',
		max: 5,
		weight: 1,
		incompatible: [],
		items: ['pickaxe', 'shovel', 'axe', 'hoe', 'shears', 'book']
	},
	{
		name: 'fortune',
		max: 3,
		weight: 2,
		incompatible: ['silk_touch'],
		items: ['pickaxe', 'shovel', 'axe', 'hoe', 'book']
	},
	{
		name: 'silk_touch',
		max: 1,
		weight: 4,
		incompatible: ['fortune'],
		items: ['pickaxe', 'shovel', 'axe', 'hoe', 'book']
	},
	{
		name: 'luck_of_the_sea',
		max: 3,
		weight: 2,
		incompatible: [],
		items: ['fishing_rod', 'book']
	},
	{ name: 'lure', max: 3, weight: 2, incompatible: [], items: ['fishing_rod', 'book'] },
	{
		name: 'curse_of_binding',
		max: 1,
		weight: 4,
		incompatible: [],
		items: [
			'helmet',
			'chestplate',
			'leggings',
			'boots',
			'elytra',
			'carved_pumpkin',
			'helmet',
			'turtle_shell',
			'book'
		]
	},
	{
		name: 'curse_of_vanishing',
		max: 1,
		weight: 4,
		incompatible: [],
		items: [
			'helmet',
			'chestplate',
			'leggings',
			'boots',
			'pickaxe',
			'shovel',
			'axe',
			'sword',
			'hoe',
			'brush',
			'fishing_rod',
			'bow',
			'shears',
			'flint_and_steel',
			'carrot_on_a_stick',
			'warped_fungus_on_a_stick',
			'shield',
			'elytra',
			'carved_pumpkin',
			'helmet',
			'trident',
			'turtle_shell',
			'crossbow',
			'mace',
			'spear',
			'book'
		]
	}
];

export const ENCHANTMENTS_OBJECTED = Object.fromEntries(
	ENCHANTMENTS.map((v) => [v.name, { ...v, level: v.max }])
);

export type EnchantmentWithLevel = Enchantment & {
	level: number;
};

export type CustomItem = {
	type: Item;
	enchantments: EnchantmentWithLevel[];
	prior: number;
	source: CustomItem[] | null;
};

export function makeItem(
	type: Item,
	enchantments: EnchantmentWithLevel[],
	prior = 0,
	source: CustomItem[] | null = null
): CustomItem {
	return {
		type,
		enchantments: enchantments.slice().sort((a, b) => a.name.localeCompare(b.name)),
		prior,
		source
	};
}

export function itemHash(item: CustomItem) {
	const ench = item.enchantments
		.map((e) => e.name + ':' + e.level)
		.sort()
		.join(',');
	return `${item.type}|${ench}|${item.prior}`;
}

export function mergeEnchantments(list1: EnchantmentWithLevel[], list2: EnchantmentWithLevel[]) {
	const result: Record<string, EnchantmentWithLevel> = {};

	for (const item of list1) result[item.name] = { ...item };
	for (const item of list2) {
		if (result[item.name]) {
			if (item.level === result[item.name].level && item.level < result[item.name].max) {
				result[item.name].level++;
			} else {
				result[item.name].level = Math.max(result[item.name].level, item.level);
			}

			continue;
		}

		let isCompatible = true;
		for (const enchant of Object.values(result)) {
			if (item.incompatible.includes(enchant.name) || enchant.incompatible.includes(item.name)) {
				isCompatible = false;
				break;
			}
		}
		if (isCompatible) result[item.name] = { ...item };
	}
	return Object.values(result);
}

export function calculateMergeCost(target: CustomItem, sacrifice: CustomItem) {
	let cost = 0;
	for (const ench of sacrifice.enchantments) cost += (ench.weight || 1) * ench.level;

	const penalty = Math.pow(2, target.prior) - 1 + (Math.pow(2, sacrifice.prior) - 1);
	const base_cost = 0;
	return cost + penalty + base_cost;
}

export interface MergeResult {
	cost: number;
	item: CustomItem;
	steps: {
		target: CustomItem;
		sacrifice: CustomItem;
		result: CustomItem;
		cost: number;
		priorWorkA: number;
		priorWorkB: number;
	}[];
}

export function hashItems(items: CustomItem[]) {
	return items
		.map((item) => {
			const ench = item.enchantments
				.map((e) => e.name + ':' + e.level)
				.sort()
				.join(',');
			return `${item.type}|${ench}|${item.prior}`;
		})
		.sort()
		.join('#');
}

export function lookOptimalOrder(items: CustomItem[], toolType: Item) {
	const memo = new Map<string, MergeResult | null>();

	function recurse(currentItems: CustomItem[]): MergeResult | null {
		const key = hashItems(currentItems);
		if (memo.has(key)) return memo.get(key)!;

		if (currentItems.length === 1) {
			const only = currentItems[0];
			if (only.type && only.type.toLowerCase() === toolType.toLowerCase()) {
				return { cost: 0, item: only, steps: [] };
			} else {
				return null;
			}
		}

		let minResult: MergeResult | null = null;

		for (let i = 0; i < currentItems.length; i++) {
			for (let j = 0; j < currentItems.length; j++) {
				if (i === j) continue;

				const itemsRest = [];
				for (let k = 0; k < currentItems.length; k++) {
					if (k !== i && k !== j) itemsRest.push(currentItems[k]);
				}

				const A = currentItems[i];
				const B = currentItems[j];

				// Tool + Book (in both direction!)
				if (A.type && A.type.toLowerCase() === toolType.toLowerCase() && B.type === 'book') {
					const newEnchantments = mergeEnchantments(A.enchantments, B.enchantments);
					const newPriorWork = Math.max(A.prior, B.prior) + 1;
					const mergedTool = makeItem(toolType, newEnchantments, newPriorWork, [A, B]);
					const xpCost = calculateMergeCost(A, B);

					const rec = recurse([...itemsRest, mergedTool]);
					if (rec) {
						const totalCost = xpCost + rec.cost;
						const steps = [
							...rec.steps,
							{
								target: A,
								sacrifice: B,
								result: mergedTool,
								cost: xpCost,
								priorWorkA: A.prior,
								priorWorkB: B.prior
							}
						];
						if (!minResult || totalCost < minResult.cost) {
							minResult = {
								cost: totalCost,
								item: rec.item,
								steps: steps
							};
						}
					}
				}

				if (B.type && B.type.toLowerCase() === toolType.toLowerCase() && A.type === 'book') {
					const newEnchantments = mergeEnchantments(B.enchantments, A.enchantments);
					const newPriorWork = Math.max(B.prior, A.prior) + 1;
					const mergedTool = makeItem(toolType, newEnchantments, newPriorWork, [B, A]);
					const xpCost = calculateMergeCost(B, A);

					const rec = recurse([...itemsRest, mergedTool]);
					if (rec) {
						const totalCost = xpCost + rec.cost;
						const steps = [
							...rec.steps,
							{
								target: B,
								sacrifice: A,
								result: mergedTool,
								cost: xpCost,
								priorWorkA: B.prior,
								priorWorkB: A.prior
							}
						];
						if (!minResult || totalCost < minResult.cost) {
							minResult = {
								cost: totalCost,
								item: rec.item,
								steps: steps
							};
						}
					}
				}
				// Book & Book
				if (A.type === 'book' && B.type === 'book') {
					const newEnchantments = mergeEnchantments(A.enchantments, B.enchantments);
					const newPriorWork = Math.max(A.prior, B.prior) + 1;
					const mergedBook = makeItem('book', newEnchantments, newPriorWork, [A, B]);
					const xpCost = calculateMergeCost(A, B);

					const rec = recurse([...itemsRest, mergedBook]);
					if (rec) {
						const totalCost = xpCost + rec.cost;
						const steps: MergeResult['steps'] = [
							...rec.steps,
							{
								target: A,
								sacrifice: B,
								result: mergedBook,
								cost: xpCost,
								priorWorkA: A.prior,
								priorWorkB: B.prior
							}
						];
						if (!minResult || totalCost < minResult.cost) {
							minResult = {
								cost: totalCost,
								item: rec.item,
								steps: steps
							};
						}
					}
				}
			}
		}
		memo.set(key, minResult);

		return minResult;
	}

	return recurse(items);
}
