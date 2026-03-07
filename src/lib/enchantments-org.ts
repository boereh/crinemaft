const ENCHANTS = [
	{
		displayname: 'Unbreaking',
		levelMax: 3,
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
		displayname: 'Mending',
		levelMax: 1,
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
		displayname: 'Protection',
		levelMax: 4,
		weight: 1,
		incompatible: ['blast_protection', 'fire_protection', 'projectile_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		displayname: 'Blast Protection',
		levelMax: 4,
		weight: 2,
		incompatible: ['fire_protection', 'protection', 'projectile_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		displayname: 'Fire Protection',
		levelMax: 4,
		weight: 1,
		incompatible: ['blast_protection', 'protection', 'projectile_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		displayname: 'Projectile Protection',
		levelMax: 4,
		weight: 1,
		incompatible: ['protection', 'blast_protection', 'fire_protection'],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		displayname: 'Thorns',
		levelMax: 3,
		weight: 4,
		incompatible: [],
		items: ['helmet', 'chestplate', 'leggings', 'boots', 'turtle_shell', 'book']
	},
	{
		displayname: 'Feather Falling',
		levelMax: 4,
		weight: 1,
		incompatible: [],
		items: ['boots', 'book']
	},
	{
		displayname: 'Aqua Affinity',
		levelMax: 1,
		weight: 2,
		incompatible: [],
		items: ['helmet', 'turtle_shell', 'book']
	},
	{
		displayname: 'Respiration',
		levelMax: 3,
		weight: 2,
		incompatible: [],
		items: ['helmet', 'turtle_shell', 'book']
	},
	{
		displayname: 'Frost Walker',
		levelMax: 2,
		weight: 2,
		incompatible: ['depth_strider'],
		items: ['boots', 'book']
	},
	{
		displayname: 'Depth Strider',
		levelMax: 3,
		weight: 2,
		incompatible: ['frost_walker'],
		items: ['boots', 'book']
	},
	{ displayname: 'Soul Speed', levelMax: 3, weight: 4, incompatible: [], items: ['boots', 'book'] },
	{
		displayname: 'Swift Sneak',
		levelMax: 3,
		weight: 4,
		incompatible: [],
		items: ['leggings', 'book']
	},
	{
		displayname: 'Density',
		levelMax: 5,
		weight: 1,
		incompatible: ['breach', 'smite', 'bane_of_arthropods'],
		items: ['mace', 'book']
	},
	{
		displayname: 'Breach',
		levelMax: 4,
		weight: 2,
		incompatible: ['density', 'smite', 'bane_of_arthropods'],
		items: ['mace', 'book']
	},
	{ displayname: 'Wind Burst', levelMax: 3, weight: 2, incompatible: [], items: ['mace', 'book'] },
	{ displayname: 'Lunge', levelMax: 3, weight: 1, incompatible: [], items: ['spear', 'book'] },
	{
		displayname: 'Channeling',
		levelMax: 1,
		weight: 4,
		incompatible: ['riptide'],
		items: ['trident', 'book']
	},
	{
		displayname: 'Riptide',
		levelMax: 3,
		weight: 2,
		incompatible: ['channeling', 'loyalty'],
		items: ['trident', 'book']
	},
	{ displayname: 'Impaling', levelMax: 5, weight: 2, incompatible: [], items: ['trident', 'book'] },
	{
		displayname: 'Loyalty',
		levelMax: 3,
		weight: 1,
		incompatible: ['riptide'],
		items: ['trident', 'book']
	},
	{
		displayname: 'Sharpness',
		levelMax: 5,
		weight: 1,
		incompatible: ['bane_of_arthropods', 'smite'],
		items: ['sword', 'axe', 'spear', 'book']
	},
	{
		displayname: 'Bane of Arthropods',
		levelMax: 5,
		weight: 1,
		incompatible: ['smite', 'sharpness', 'density', 'breach'],
		items: ['sword', 'axe', 'mace', 'spear', 'book']
	},
	{
		displayname: 'Smite',
		levelMax: 5,
		weight: 1,
		incompatible: ['bane_of_arthropods', 'sharpness', 'density', 'breach'],
		items: ['sword', 'axe', 'mace', 'spear', 'book']
	},
	{
		displayname: 'Sweeping Edge',
		levelMax: 3,
		weight: 2,
		incompatible: [],
		items: ['sword', 'book']
	},
	{
		displayname: 'Fire Aspect',
		levelMax: 2,
		weight: 2,
		incompatible: [],
		items: ['sword', 'mace', 'spear', 'book']
	},
	{
		displayname: 'Knockback',
		levelMax: 2,
		weight: 1,
		incompatible: [],
		items: ['sword', 'spear', 'book']
	},
	{
		displayname: 'Looting',
		levelMax: 3,
		weight: 2,
		incompatible: [],
		items: ['sword', 'spear', 'book']
	},
	{ displayname: 'Flame', levelMax: 1, weight: 2, incompatible: [], items: ['bow', 'book'] },
	{
		displayname: 'Infinity',
		levelMax: 1,
		weight: 4,
		incompatible: ['mending'],
		items: ['bow', 'book']
	},
	{ displayname: 'Power', levelMax: 5, weight: 1, incompatible: [], items: ['bow', 'book'] },
	{ displayname: 'Punch', levelMax: 2, weight: 2, incompatible: [], items: ['bow', 'book'] },
	{
		displayname: 'Quick Charge',
		levelMax: 3,
		weight: 1,
		incompatible: [],
		items: ['crossbow', 'book']
	},
	{
		displayname: 'Multishot',
		levelMax: 1,
		weight: 2,
		incompatible: ['piercing'],
		items: ['crossbow', 'book']
	},
	{
		displayname: 'Piercing',
		levelMax: 4,
		weight: 1,
		incompatible: ['multishot'],
		items: ['crossbow', 'book']
	},
	{
		displayname: 'Efficiency',
		levelMax: 5,
		weight: 1,
		incompatible: [],
		items: ['pickaxe', 'shovel', 'axe', 'hoe', 'shears', 'book']
	},
	{
		displayname: 'Fortune',
		levelMax: 3,
		weight: 2,
		incompatible: ['silk_touch'],
		items: ['pickaxe', 'shovel', 'axe', 'hoe', 'book']
	},
	{
		displayname: 'Silk Touch',
		levelMax: 1,
		weight: 4,
		incompatible: ['fortune'],
		items: ['pickaxe', 'shovel', 'axe', 'hoe', 'book']
	},
	{
		displayname: 'Luck of the Sea',
		levelMax: 3,
		weight: 2,
		incompatible: [],
		items: ['fishing_rod', 'book']
	},
	{ displayname: 'Lure', levelMax: 3, weight: 2, incompatible: [], items: ['fishing_rod', 'book'] },
	{
		displayname: 'Curse of Binding',
		levelMax: 1,
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
		displayname: 'Curse of Vanishing',
		levelMax: 1,
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
const ITEMS = [
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
];
function getEnchantDataByName(name) {
	return ENCHANTS.find((e) => {
		let n = e.displayname
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '_')
			.replace(/^_+|_+$/g, '');
		return n === name;
	});
}
function getBaseValueForEnchantment(enchantName) {
	const data = getEnchantDataByName(enchantName);
	return data ? data.weight : 1;
}
function getMaxLevelForEnchantment(enchantName) {
	const data = getEnchantDataByName(enchantName);
	return data ? data.levelMax : 1;
}
function areEnchantmentsIncompatible(nameA, nameB) {
	const dataA = getEnchantDataByName(nameA);
	if (!dataA) return false;
	return dataA.incompatible.includes(nameB);
}
function makeEnchantment(name, level) {
	return {
		name,
		level,
		weight: getBaseValueForEnchantment(name),
		maxLevel: getMaxLevelForEnchantment(name)
	};
}
function makeItem(type, enchantments, priorWork = 0, source = null) {
	return {
		type,
		enchantments: enchantments.slice().sort((a, b) => a.name.localeCompare(b.name)),
		priorWork,
		source
	};
}
function itemHash(item) {
	const ench = item.enchantments
		.map((e) => e.name + ':' + e.level)
		.sort()
		.join(',');
	return `${item.type}|${ench}|${item.priorWork}`;
}
function mergeEnchantments(list1, list2) {
	let result = {};
	for (let e of list1) result[e.name] = { ...e };
	for (let e of list2) {
		if (result[e.name]) {
			if (e.level === result[e.name].level && e.level < result[e.name].maxLevel) {
				result[e.name].level++;
			} else {
				result[e.name].level = Math.max(result[e.name].level, e.level);
			}
		} else {
			let isCompatible = true;
			for (let ex of Object.keys(result)) {
				if (areEnchantmentsIncompatible(e.name, ex) || areEnchantmentsIncompatible(ex, e.name)) {
					isCompatible = false;
					break;
				}
			}
			if (isCompatible) result[e.name] = { ...e };
		}
	}
	return Object.values(result);
}
function calculateMergeCost(target, sacrifice) {
	let enchantmentCost = 0;
	for (let ench of sacrifice.enchantments) {
		enchantmentCost += (ench.weight || 1) * ench.level;
	}
	let priorWorkPenalty = Math.pow(2, target.priorWork) - 1 + (Math.pow(2, sacrifice.priorWork) - 1);
	let baseOperationCost = 0;
	return enchantmentCost + priorWorkPenalty + baseOperationCost;
}
function getSelectedItemsForCalculation() {
	const selectedItemCard = document.querySelector('.item-card.active');
	if (!selectedItemCard) return [];
	const itemType = selectedItemCard.dataset.item;

	let selected = [];
	selected.push(makeItem(itemType, []));
	const enchantRows = document.querySelectorAll('#enchants-for-item .enchant-row');
	for (const row of enchantRows) {
		const btn = row.querySelector('.level-btn.active');
		if (btn) {
			const enchantName = btn.dataset.enchant;
			const level = parseInt(btn.dataset.level, 10);
			selected.push(makeItem('book', [makeEnchantment(enchantName, level)]));
		}
	}
	return selected;
}
function enchantmentsToString(enchantments) {
	return enchantments
		.map((e) => {
			const data = getEnchantDataByName(e.name);
			const disp = data ? data.displayname : e.name;
			return `${disp} ${e.level}`;
		})
		.join(', ');
}
function renderCalculationResult(result) {
	const resultCard = document.getElementById('result-card');
	const resultSummary = resultCard.querySelector('.result-summary');
	const resultTotal = resultSummary.querySelector('.result-total');
	const resultSteps = resultSummary.querySelector('.result-steps');
	const resultXp = resultSummary.querySelector('.result-xp');

	function levelToXp(level) {
		if (level <= 16) return level * level + 6 * level;
		if (level <= 31) return 2.5 * level * level - 40.5 * level + 360;
		return 4.5 * level * level - 162.5 * level + 2220;
	}

	function getItemImg(type, enchanted = false) {
		// Sonderfall: Wenn kein Bild existiert, Standardbild nehmen
		if (!type) return '../assets/img/tools/_default.png';
		if (typeof ITEMS === 'undefined' || !ITEMS.includes(type))
			return '../assets/img/tools/_default.png';
		if (enchanted) {
			// use enchanted version if available
			return `../assets/img/tools/${type}_enchanted.webp`;
		}
		return `../assets/img/tools/${type}.webp`;
	}

	function getEnchantmentsHtml(enchantments, bold = false) {
		return enchantments
			.map((e) => {
				const data = getEnchantDataByName(e.name);
				const disp = data ? data.displayname : e.name;
				// Wenn maxLevel == 1, dann keine Zahl anzeigen
				if (data && data.levelMax === 1) {
					return `<div class=\"enchant-step-text${bold ? '-bold' : ''}\">${disp}</div>`;
				} else {
					return `<div class=\"enchant-step-text${bold ? '-bold' : ''}\">${disp} ${e.level}</div>`;
				}
			})
			.join('');
	}

	let totalLevels = 0;
	let totalXp = 0;
	let stepsHtml = '';
	// Steps to reverse so that the first step is shown first
	for (let idx = result.steps.length - 1; idx >= 0; idx--) {
		const step = result.steps[idx];
		totalLevels += step.cost;
		totalXp += Math.round(levelToXp(step.cost));
		// first Item
		const leftType = step.target.type;
		const leftEnchanted = step.target.enchantments && step.target.enchantments.length > 0;
		const leftImg = getItemImg(leftType, leftEnchanted);
		const leftAlttxt = leftType.charAt(0).toUpperCase() + leftType.slice(1);
		const leftEnchs = getEnchantmentsHtml(step.target.enchantments);
		// second Item
		const rightType = step.sacrifice.type;
		const rightEnchanted = step.sacrifice.enchantments && step.sacrifice.enchantments.length > 0;
		const rightImg = getItemImg(rightType, rightEnchanted);
		const rightAlttxt = rightType.charAt(0).toUpperCase() + rightType.slice(1);
		const rightEnchs = getEnchantmentsHtml(step.sacrifice.enchantments);
		// result Item
		const resultType = step.result.type;
		const resultEnchanted = step.result.enchantments && step.result.enchantments.length > 0;
		const resultImg = getItemImg(resultType, resultEnchanted);
		const resultAlttxt = resultType.charAt(0).toUpperCase() + resultType.slice(1);
		const resultEnchs = getEnchantmentsHtml(step.result.enchantments, true);
		// Cost
		const costLevels = step.cost;
		const costXp = Math.round(levelToXp(step.cost));
		const priorWorkPenalty = Math.max(step.priorWorkA, step.priorWorkB) + 1;

		stepsHtml += `
            <div class=\"enchant-step-row\">\n
                <div class=\"enchant-step-col\">\n
                    <img src=\"${leftImg}\" alt=\"${leftAlttxt}\" class=\"enchant-step-icon\">\n
                    ${leftEnchs}\n
                </div>\n
                <span class=\"enchant-step-plus\">+</span>\n
                <div class=\"enchant-step-col\">\n
                    <img src=\"${rightImg}\" alt=\"${rightAlttxt}\" class=\"enchant-step-icon\">\n
                    ${rightEnchs}\n
                </div>\n
                <span class=\"enchant-step-divider\"></span>\n
                <div class=\"enchant-step-col\">\n
                    <img src=\"${resultImg}\" alt=\"${resultAlttxt}\" class=\"enchant-step-icon\">\n
                    ${resultEnchs}\n
                </div>\n
            </div>\n
            <div class=\"enchant-step-cost-row\">\n
                <div class=\"enchant-step-cost-text\">
                    Cost: ${costLevels} levels (${costXp} xp), Prior Work Penalty: ${priorWorkPenalty} level
                </div>\n
            </div>\n`;
		if (idx > 0) {
			stepsHtml += '<hr class="enchant-step-hr">\n';
		}
	}

	// Total Cost Calculation
	let maxLevel = totalLevels;
	function xpToLevel(xp) {
		let level = 0;
		while (levelToXp(level + 1) <= xp) level++;
		return level;
	}
	let minLevel = xpToLevel(totalXp);
	let totalHtml = ` - <b>Costs:</b> ${minLevel} - ${maxLevel} Level (${totalXp} XP)`;

	// Display Steps heading
	document.querySelector('h3.enchant-steps').innerHTML =
		'Steps<span id="costs" class="enchant-step-cost-text"></span>';

	// Adjust the heading: Display total cost under "Steps"
	const stepsHeader = resultSummary.querySelector('#costs');
	if (stepsHeader) {
		stepsHeader.innerHTML = totalHtml;
	}
	if (resultTotal) resultTotal.innerHTML = '';
	if (resultXp) resultXp.textContent = '';
	if (resultSteps) resultSteps.innerHTML = stepsHtml;
}
export function findOptimalOrder(items, toolType) {
	const memo = new Map();

	function stateHash(items) {
		return items
			.map((item) => {
				const ench = item.enchantments
					.map((e) => e.name + ':' + e.level)
					.sort()
					.join(',');
				return `${item.type}|${ench}|${item.priorWork}`;
			})
			.sort()
			.join('#');
	}

	function recurse(currentItems) {
		const key = stateHash(currentItems);
		if (memo.has(key)) return memo.get(key);

		if (currentItems.length === 1) {
			const only = currentItems[0];
			if (only.type && only.type.toLowerCase() === toolType.toLowerCase()) {
				return { cost: 0, item: only, steps: [] };
			} else {
				return null;
			}
		}

		let minResult = null;

		for (let i = 0; i < currentItems.length; i++) {
			for (let j = 0; j < currentItems.length; j++) {
				if (i === j) continue;

				let itemsRest = [];
				for (let k = 0; k < currentItems.length; k++) {
					if (k !== i && k !== j) itemsRest.push(currentItems[k]);
				}

				let A = currentItems[i];
				let B = currentItems[j];

				// Tool + Buch (in beiden Richtungen!)
				if (A.type && A.type.toLowerCase() === toolType.toLowerCase() && B.type === 'book') {
					let newEnchantments = mergeEnchantments(A.enchantments, B.enchantments);
					let newPriorWork = Math.max(A.priorWork, B.priorWork) + 1;
					let mergedTool = makeItem(toolType, newEnchantments, newPriorWork, [A, B]);
					let xpCost = calculateMergeCost(A, B);

					let rec = recurse([...itemsRest, mergedTool]);
					if (rec) {
						let totalCost = xpCost + rec.cost;
						let steps = [
							...rec.steps,
							{
								target: A,
								sacrifice: B,
								result: mergedTool,
								cost: xpCost,
								priorWorkA: A.priorWork,
								priorWorkB: B.priorWork
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
					let newEnchantments = mergeEnchantments(B.enchantments, A.enchantments);
					let newPriorWork = Math.max(B.priorWork, A.priorWork) + 1;
					let mergedTool = makeItem(toolType, newEnchantments, newPriorWork, [B, A]);
					let xpCost = calculateMergeCost(B, A);

					let rec = recurse([...itemsRest, mergedTool]);
					if (rec) {
						let totalCost = xpCost + rec.cost;
						let steps = [
							...rec.steps,
							{
								target: B,
								sacrifice: A,
								result: mergedTool,
								cost: xpCost,
								priorWorkA: B.priorWork,
								priorWorkB: A.priorWork
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
				// Buch+Buch
				if (A.type === 'book' && B.type === 'book') {
					let newEnchantments = mergeEnchantments(A.enchantments, B.enchantments);
					let newPriorWork = Math.max(A.priorWork, B.priorWork) + 1;
					let mergedBook = makeItem('book', newEnchantments, newPriorWork, [A, B]);
					let xpCost = calculateMergeCost(A, B);

					let rec = recurse([...itemsRest, mergedBook]);
					if (rec) {
						let totalCost = xpCost + rec.cost;
						let steps = [
							...rec.steps,
							{
								target: A,
								sacrifice: B,
								result: mergedBook,
								cost: xpCost,
								priorWorkA: A.priorWork,
								priorWorkB: B.priorWork
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
