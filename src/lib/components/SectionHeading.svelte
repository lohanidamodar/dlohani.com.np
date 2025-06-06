<script>
	export let title;
	export let subtitle = '';
	export let center = true;
</script>

<div class="{center ? 'text-center' : ''} fade-in mb-16">
	<h2
		class="relative mb-6 text-4xl font-bold md:text-5xl"
		style="color: var(--color-text); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);"
	>
		{#if !subtitle.includes('dark mode')}
			<span
				class="light-animate-pulse absolute top-1/2 left-1/2 -z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-20 blur-3xl"
				style="background-color: rgba(16, 185, 129, 0.3);"
			></span>
		{/if}
		{title}
	</h2>
	{#if subtitle}
		<div class="mx-auto max-w-2xl">
			<p
				class="text-xl {center ? 'mx-auto' : ''}"
				style="color: var(--color-text-muted); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.01);"
			>
				{subtitle}
			</p>
		</div>
	{/if}
</div>
