<script lang="ts">
	import { page } from '$app/state';
	import BuildViewer from '$lib/components/build-viewer.svelte';
	import { Canvas, currentWritable } from '@threlte/core';

	let select_layer = $state(1);
	const offset = $derived({
		x: (getMinMaxBlock('max', 'x') - getMinMaxBlock('min', 'x')) / 2 + getMinMaxBlock('min', 'x'),
		y: (getMinMaxBlock('max', 'y') - getMinMaxBlock('min', 'y')) / 2 + getMinMaxBlock('min', 'y')
	});

	function getMinMaxBlock(type: 'min' | 'max', dir: 'x' | 'y') {
		return page.data.layers.reduce(
			(acc, cur) => {
				const reduced = cur.reduce((acc2, cur2) => {
					if (type === 'min') return cur2[dir] > acc2 ? acc2 : cur2[dir];
					return cur2[dir] > acc2 ? cur2[dir] : acc2;
				}, acc);
				if (type == 'min') return acc > reduced ? reduced : acc;
				return acc > reduced ? acc : reduced;
			},
			type === 'min' ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
		);
	}

	console.log(page.data.layers);
</script>

<svelte:head>
	<title>Build - Crinemaft</title>
</svelte:head>

<div class="p-4">
	<div class="container mx-auto">
		<input bind:value={select_layer} type="number" />

		{JSON.stringify(offset)}

		<Canvas>
			<BuildViewer {select_layer} layers={page.data.layers} {offset} />>
		</Canvas>
	</div>
</div>
