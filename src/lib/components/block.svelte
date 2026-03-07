<script lang="ts">
	import { T } from '@threlte/core';
	import type { Snippet } from 'svelte';
	import { useTexture } from '@threlte/extras';
	import blocks from '../blocks.json';

	type Props = typeof T.Mesh & {
		name: keyof typeof blocks;
		children?: Snippet;
	};

	let { name, children, ...rest }: Props = $props();

	const block = $derived(blocks[name]);
	const textures = $derived.by(() => {
		const result = { side: '', bottom: '', top: '' };
		if (typeof block === 'string') return result;
		if ('texture' in block && typeof block.texture === 'string') {
			return { side: block.texture, bottom: block.texture, top: block.texture };
		}
		if ('texture' in block && typeof block.texture === 'object') return block.texture;

		return result;
	});

	const texture = $derived(useTexture());
</script>

{#await $texture then map}
	<T.Mesh {...rest}>
		{@render children?.()}
		<T.MeshBasicMaterial {map} />
	</T.Mesh>
{/await}
