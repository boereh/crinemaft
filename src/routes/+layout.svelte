<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'virtual:uno.css';
	import { titleCase } from 'scule';
	import { MediaQuery } from 'svelte/reactivity';

	let { children } = $props();
	let nav_open = $state(false);

	const FOOTER_LINKS = {
		About: '/about',
		'Source Code': 'https://github.com/boereh/crinemaft'
	};

	const screen_md = new MediaQuery('min-width: 48rem');

	$effect(() => {
		document.body.classList[nav_open && !screen_md.current ? 'add' : 'remove']('overflow-hidden');
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Crinemaft</title>
</svelte:head>

<nav
	class={['p-4 sticky top-0 z-20 transition', nav_open ? '' : 'bg-neutral-900/75 backdrop-blur']}
>
	<span class="mx-auto container flex items-center gap-4">
		<a href="/">Crinemaft</a>

		<span class="flex-1 flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 text-sm">
			{#each ['builds', 'skins', 'seed-map', 'enchantments', 'logo'].sort() as link (link)}
				<a
					class="capitalize h-6 transition opacity-75 flex items-center transition hover:(opacity-100 text-orange-500 bg-neutral-900) <md:hidden"
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

		<button class="md:hidden" aria-label="menu" onclick={() => (nav_open = !nav_open)}>
			<div class="{nav_open ? 'i-pixelarticons:close' : 'i-pixelarticons:menu'} size-6"></div>
		</button>
	</span>
</nav>

<div class="min-h">
	{@render children()}
</div>

<div class="bg-neutral-950 p-4">
	<div class="container mx-auto grid md:grid-cols-2 gap-16 min-h-20">
		<div class="flex flex-col gap-8 justify-between">
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

<div
	class={[
		'fixed inset-0 pt-16 transition md:(hidden pointer-events-none)',
		nav_open ? 'bg-neutral-950/75 backdrop-blur' : 'pointer-events-none'
	]}
></div>

<style>
	@font-face {
		font-family: 'Minecraft';
		src: url('/Minecraft.ttf');
	}

	:global {
		body {
			background-color: theme('colors.neutral.900');
			color: white;
		}

		.min-h {
			min-height: calc(100vh - var(--spacing) * 46);
		}
	}
</style>
