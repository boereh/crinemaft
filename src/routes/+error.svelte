<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="p-4">
	<div
		class="mx-auto container min-h-[calc(100vh-var(--spacing)*52)] space-y-4 h-full flex flex-col justify-center items-center"
	>
		{#if page.error?.message === 'Not Found'}
			Page Not Found
		{:else}
			Error Loading Page
		{/if}
	</div>
</div>
