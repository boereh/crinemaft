<script lang="ts">
	import { glyphs } from '$lib/glyphs';
	import { SVGPathData } from 'svg-pathdata';

	const main_texts = $state<string[]>(['012']);
	const acc =
		'0123456789!"#$%&\'()*+,-./:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
</script>

<div class="p-4 min-h flex flex-col">
	<div class="container mx-auto flex flex-1">
		<div class="flex-1">
			<svg viewBox="0 0 100 100" width={500} height={500}>
				{#each main_texts as text (text)}
					{#each text as char, idx (idx)}
						{@const path = glyphs[char as keyof typeof glyphs]}
						{@const data = new SVGPathData(path)}

						<path d={data.encode()} fill="currentColor" fill-rule="evenodd" />
					{/each}
				{/each}
			</svg>
		</div>
		<div class="flex p-4">
			<!-- {#each Object.keys(glyphs) as key (key)}
				{#if glyphs[key as keyof typeof glyphs].o}
					{key}
				{/if}
			{/each} -->
		</div>
	</div>

	<div class="container mx-auto">
		<div class="flex">w</div>
	</div>
</div>
