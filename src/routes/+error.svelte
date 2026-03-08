<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="p-4 min-h grid place-items-center">
	<div class="mx-auto container space-y-4 h-full flex flex-col justify-center items-center">
		{#if page.error?.message === 'Not Found'}
			Page Not Found
		{:else}
			Error Loading Page
		{/if}
	</div>
</div>
