<script lang="ts">
	import {
		ENCHANTMENTS,
		ITEMS,
		lookOptimalOrder,
		type CustomItem,
		type EnchantmentWithLevel,
		type Item,
		type MergeResult
	} from '$lib/echantments';
	import { useDebounce, watch } from 'runed';
	import { titleCase } from 'scule';

	let selected_item = $state<Item>('sword');
	const selected_enchantments = $state<EnchantmentWithLevel[]>([]);
	let optimal_order = $state<MergeResult>();

	const useFindOptimalOrder = useDebounce(() => {
		if (selected_enchantments.length < 1) return (optimal_order = undefined);

		const items: CustomItem[] = [
			{
				type: selected_item,
				enchantments: [],
				prior: 0,
				source: []
			}
		];

		for (const enchant of selected_enchantments) {
			items.push({
				type: 'book',
				enchantments: [enchant],
				prior: 0,
				source: []
			});
		}

		optimal_order = lookOptimalOrder(items, selected_item) || undefined;
	}, 500);

	watch([() => selected_item, () => $state.snapshot(selected_enchantments)], () => {
		useFindOptimalOrder();
	});
</script>

<svelte:head>
	<title>Enchantments - Crinemaft</title>
</svelte:head>

<div class="p-4">
	<div class="container mx-auto">
		<h1 class="text-center py-16 text-3xl sm:text-4xl lg:text-5xl">Enchantment Order</h1>

		<h3 class="text-center py-16 text-lg">Item</h3>

		<div
			class="border-0 border-neutral-700 -neutral-900 border-(b-neutral-800 r-neutral-800) grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-13 gap-4"
		>
			{#each ITEMS as item (item)}
				<button
					class={[
						'ring-2 aspect-square grid place-items-center transition-all',
						selected_item === item
							? 'bg-green-950 border-green-950 ring-green-800 border-b-0'
							: 'bg-neutral-800 border-neutral-900 ring-neutral-700 border-b-6 hover:(bg-neutral-900)'
					]}
					onclick={() => {
						selected_item = item;
						selected_enchantments.splice(0, selected_enchantments.length);
					}}
					title={titleCase(item)}
				>
					<img
						class="h-6 xl:h-12"
						src="https://enchantment.tools/assets/img/tools/{item}.webp"
						alt={item}
					/>
				</button>
			{/each}
		</div>

		<h3 class=" text-center p-16 text-lg">Enchantments</h3>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
			{#if selected_item}
				{#each ENCHANTMENTS.filter((v) => v.items.includes(selected_item)) as ench (ench.name)}
					{@const is_incompatible = selected_enchantments.some((v) =>
						v.incompatible.includes(ench.name)
					)}

					<div
						class={[
							'bg-neutral-950 p-4 flex flex-col justify-between  gap-8 transition',
							is_incompatible ? 'opacity-35 pointer-events-none' : ''
						]}
					>
						<p class=" text-center">
							{titleCase(ench.name)}
						</p>

						<div class="grid grid-cols-5 gap-4 text-xs">
							{#each { length: ench.max }, level (level)}
								{@const index = selected_enchantments.findIndex(
									(v) => v.name === ench.name && v.level === level
								)}

								<button
									class={[
										'aspect-square ring-2 text-lg transition',
										index > -1
											? 'border-0 ring-green-800 bg-green-950 border-green-950'
											: 'ring-neutral-700 bg-neutral-800 border-b-4 border-neutral-900 hover:bg-neutral-900'
									]}
									onclick={() => {
										if (is_incompatible) return;
										if (index > -1) return selected_enchantments.splice(index, 1);

										const diff_level = selected_enchantments.findIndex((v) => v.name === ench.name);
										if (diff_level > -1) return (selected_enchantments[diff_level].level = level);

										selected_enchantments.push({
											...ench,
											level: level
										});
									}}
								>
									{['I', 'II', 'III', 'IV', 'V'][level]}
								</button>
							{/each}
						</div>
					</div>
				{/each}
			{:else}
				{#each { length: ENCHANTMENTS.length }, idx (idx)}
					<div class="p-4 border-4 border-(neutral-700 b-neutral-800 r-neutral-800) bg-neutral-900">
						<p class=" text-center"></p>

						{#each { length: 5 }, level (level)}
							<div></div>
						{/each}
					</div>
				{/each}
			{/if}
		</div>

		<h3 class=" text-center p-16 text-lg">Order</h3>

		<div class="space-y-8">
			{#if selected_enchantments.length < 1 || !optimal_order}
				<div class="h-3xs grid place-items-center text-xs text-neutral-600">
					<p>The optimal combining order will appear here</p>
				</div>
			{:else}
				<div class="flex justify-center">
					<span
						class="h-10 bg-neutral-800 px-6 flex items-center gap-2 border-2 border-neutral-600 border-(b-neutral-900 r-neutral-900)"
					>
						Total cost: <span class="text-green-500">{optimal_order.cost} levels</span>
					</span>
				</div>

				{#each optimal_order.steps.toReversed() as step, idx (idx)}
					<div
						class="p-8 bg-neutral-800 grid grid-cols-5 gap-8 flex-1 items-center relative border-4 border-neutral-700 border-(b-neutral-900 r-neutral-900)"
					>
						{#snippet section(item: CustomItem)}
							<div class="flex gap-4">
								<div
									class="aspect-square bg-neutral-900 h-26 border-2 border-neutral-950 border-(b-neutral-700 r-neutral-700) grid place-items-center"
								>
									<img
										class="xl:h-12"
										src="https://enchantment.tools/assets/img/tools/{item.type}{item.enchantments
											.length > 0
											? '_enchanted'
											: ''}.webp"
										alt={item.type}
									/>
								</div>

								<div class="text-sm">
									<p>{titleCase(item.type)}</p>

									{#each item.enchantments as enchant, idx (idx)}
										<p class="text-purple-400">
											{titleCase(enchant.name)}
											{['I', 'II', 'III', 'IV', 'V'][enchant.level]}
										</p>
									{/each}
								</div>
							</div>
						{/snippet}

						{@render section(step.target)}

						<div class="i-pixelarticons-plus size-12 text-neutral-500"></div>
						{@render section(step.sacrifice)}
						<div class="i-pixelarticons-arrow-right size-12 text-neutral-500"></div>

						{@render section(step.result)}

						<div
							class="absolute -left-4 -top-4 size-8 grid place-items-center bg-neutral-700 border-2 border-neutral-600 border-(b-neutral-900 r-neutral-900)"
						>
							{idx + 1}
						</div>

						<p
							class="absolute -top-4 h-8 left-8 bg-neutral-700 px-4 flex items-center gap-2 border-2 border-neutral-600 border-(b-neutral-900 r-neutral-900)"
						>
							Cost: <span class="text-green-500">{step.cost} levels</span>
						</p>
					</div>
				{/each}
			{/if}
		</div>

		<p class="text-xs pt-16">
			Special thanks to
			<a class="text-blue-500" href="https://enchantment.tools/">Enchantment.tools</a>
			for providing the optimal order function and webp images,
		</p>
	</div>
</div>
