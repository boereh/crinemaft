<script lang="ts">
	import { T, useLoader } from '@threlte/core';
	import { Align, Outlines, Text3DGeometry } from '@threlte/extras';
	import { Color, MathUtils, type Mesh } from 'three';
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
	let font = useLoader(FontLoader).load('/Minecraft Ten Lowercase_Regular.json');

	let main_mesh = $state<Mesh>();
	let zero_mesh = $state<Mesh>();
	let text = $state('MINECRAFT');
</script>

<T.Scene>
	<Align>
		{#snippet children({ align })}
			<T.Group>
				<T.Mesh bind:ref={main_mesh} scale={0.05} rotation.x={MathUtils.degToRad(-90)}>
					<Text3DGeometry {text} font={$font} oncreate={align} />
					{#each { length: text.length }, idx (idx)}
						<T.MeshStandardMaterial
							color={new Color().setHSL((1 / text.length) * idx, 1, 0.5)}
							clippingPlanes={[]}
						/>
					{/each}
				</T.Mesh>
			</T.Group>
		{/snippet}
	</Align>

	<!-- <Grid
		position.y={-1 * 0.5}
		gridSize={60}
		cellColor="#ffffff"
		sectionColor="#ffffff"
		sectionThickness={2}
		cellSize={1}
	/> -->

	<!-- <Sky position={[0, 0, 0]} rotation.z={180} /> -->
	<T.DirectionalLight intensity={5} scale={[1, 1, 1]} position={[0, 20, 5]} target={zero_mesh} />

	<T.Mesh bind:ref={zero_mesh} position={[0, 0, 0]} />

	<!-- <T.Mesh position={[0, 20, 20]}>
		<T.BoxGeometry args={[1, 1, 1]} />
		<T.MeshStandardMaterial color="hotpink" />
	</T.Mesh> -->

	<T.PerspectiveCamera
		makeDefault
		position.y={35}
		position.z={35 * 0.7}
		fov={35}
		oncreate={(ref) => {
			ref.lookAt(0, 0, 0);
		}}
	>
		<!-- <CameraControls
			oncreate={(ref) => {
				ref.setTarget(0, 0, 0);
			}}
		></CameraControls> -->
	</T.PerspectiveCamera>
</T.Scene>
