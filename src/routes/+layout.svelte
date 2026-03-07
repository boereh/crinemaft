<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'virtual:uno.css';
	import { titleCase } from 'scule';

	let { children } = $props();

	const FOOTER_LINKS = {
		About: '/about',
		'Source Code': 'https://github.com/boereh/crinemaft'
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Crinemaft</title>
</svelte:head>

<nav class="p-4 sticky top-0 bg-dark-900/75 backdrop-blur z-20">
	<span class="mx-auto container flex items-center gap-4">
		<a href="/">Crinemaft</a>

		<span class="flex-1 flex items-center justify-center gap-4 text-sm">
			{#each ['builds', 'skins', 'seed-map', 'enchantments'].sort() as link (link)}
				<a
					class="capitalize h-6 px-4 transition opacity-75 flex items-center transition hover:(opacity-100 text-orange-500 bg-neutral-900)"
					href="/{link}"
				>
					{titleCase(link)}
				</a>
			{/each}
		</span>

		<a
			href="/signin"
			class="ring-2 ring-dark-100 px-6 h-8 flex items-center bg-dark-300 text-sm border-b-4 border-dark-500 hover:bg-dark-400 transition"
		>
			Sign In
		</a>
	</span>
</nav>

<div class="min-h-[calc(100vh-var(--spacing)*44)]">
	{@render children()}
</div>

<div class="bg-neutral-950 p-4">
	<div class="container mx-auto grid grid-cols-2 gap-16 min-h-20">
		<div class="flex flex-col justify-between">
			<p>All* things Minecraft</p>

			<p class="text-xs text-neutral-500">
				Our site is an independent creation and is not affiliated with, sponsored by, or endorsed by
				Mojang, Microsoft, or Minecraft.
			</p>
		</div>

		<div>
			<div class="flex justify-end flex-wrap gap-4">
				{#each Object.entries(FOOTER_LINKS) as [label, href] (label)}
					<a
						{href}
						class="text-xs underline underline-neutral-500 transition hover:(text-orange-500 underline-orange-500)"
					>
						{label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Minecraft';
		src: url('/Minecraft.ttf');
	}

	:global {
		body {
			@apply: bg-dark-900 text-white;
		}
	}
</style>
