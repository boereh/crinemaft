<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { watch } from 'runed';

	watch(
		() => page,
		() => {
			fetch('/', { method: 'POST' });
		}
	);
</script>

<svelte:head>
	<title>Builds -Crinemaft</title>
</svelte:head>

<div class="p-4">
	<div class="mx-auto container flex gap-4">
		<div class="flex-1">
			{page.url.searchParams.get('type') || 'all'}
		</div>
		<div class="w-sm flex flex-col items-start">
			<div class="grid grid-cols-3 w-full">
				{#each ['all', 'farms', 'buildings', 'outdoors', 'pixelart', 'transportation'] as type (type)}
					<button
						class={[
							'capitalize transition underline flex-1 cursor-pointer h-10',
							(page.url.searchParams.get('type') || 'all') === type
								? 'underline-white'
								: 'text-neutral-400 underline-transparent hover:(underline-white text-white)'
						]}
						onclick={() => {
							if (type === 'all') page.url.searchParams.delete('type');
							else page.url.searchParams.set('type', type);

							goto(page.url);
						}}
					>
						{type}
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
