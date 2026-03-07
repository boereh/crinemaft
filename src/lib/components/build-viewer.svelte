<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import Block from './block.svelte';

	type Props = {
		layers: App.PageData['layers'];
		select_layer: number;
		offset: { x: number; y: number };
	};

	let { layers, select_layer, offset }: Props = $props();

	let rotation = $state(0);
	useTask((delta) => (rotation += delta));
</script>

<T.PerspectiveCamera
	makeDefault
	position={[-20, 10, -20]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} />

{#each layers.slice(0, select_layer) as layer, lidx (lidx)}
	{#each layer as block, bidx (bidx)}
		<Block
			name="grass"
			position.y={lidx}
			position.x={(block.x - offset.x + 12) / 17}
			position.z={(block.y - offset.y + 12) / 17}
		>
			<T.BoxGeometry args={[1, 1, 1]} />
		</Block>
		<T.Mesh>
			<T.MeshStandardMaterial />
		</T.Mesh>
	{/each}
{/each}
