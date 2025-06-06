<script>
	export let service;
</script>

<div class="service-card group fade-in">
	<div class="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
		{service.icon}
	</div>
	<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-text);">
		{service.title}
	</h3>
	<p class="mb-6" style="color: var(--color-text-muted);">
		{service.description}
	</p>

	{#if service.features}
		<ul class="mt-6 space-y-3">
			{#each service.features as feature}
				<li class="flex items-start">
					<svg
						class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0"
						style="color: var(--color-primary);"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
						></path>
					</svg>
					<span style="color: var(--color-text-muted);">{feature}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
