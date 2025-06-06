<script>
	export let project;
	export let featured = false;
</script>

<div class="project-card group {featured ? 'md:col-span-2' : ''} slide-up">
	>
	<div class="relative mb-6 overflow-hidden rounded-lg">
		<div class="aspect-w-16 aspect-h-9" style="background-color: var(--color-surface);">
			{#if project.image}
				<img
					src={project.image}
					alt={project.title}
					class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			{:else}
				<div
					class="flex h-full w-full items-center justify-center"
					style="color: var(--color-text-light);"
				>
					<svg class="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
				</div>
			{/if}
		</div>
		<div
			class="absolute top-3 right-3 rounded-lg px-3 py-1 text-xs font-semibold text-white"
			style="background-color: var(--color-primary);"
		>
			{project.category}
		</div>
	</div>

	<div class="p-6">
		<h3 class="mb-3 text-xl font-semibold" style="color: var(--color-text);">
			{project.title}
		</h3>

		<p class="mb-6" style="color: var(--color-text-muted);">
			{project.description}
		</p>

		<div class="mb-6 flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<span
					class="rounded-lg px-3 py-1 text-xs font-medium"
					style="background-color: var(--color-surface); color: var(--color-text-muted); border: 1px solid var(--color-border-light);"
				>
					{tech}
				</span>
			{/each}
		</div>

		{#if project.url}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center font-semibold transition-colors duration-200"
				style="color: var(--color-primary);"
			>
				View Project
				<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					></path>
				</svg>
			</a>
		{/if}
	</div>
</div>
