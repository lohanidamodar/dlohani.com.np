<script>
	import { projects } from '$lib/data.js';
	import SectionHeading from './SectionHeading.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import Section from './Section.svelte';

	export let showAll = false;
	export let limit = 3;
	export let featuredOnly = false;
	export let variant = 'default';
	
	$: displayProjects = showAll
		? projects
		: featuredOnly
			? projects.filter((p) => p.featured).slice(0, limit)
			: projects.slice(0, limit);
</script>

<!-- Projects Section -->
<Section variant={variant}>

	<div class="mx-auto max-w-4xl">
		<SectionHeading
			title="Featured projects"
			subtitle="Highlighting some of my most impactful and successful projects"
		/>
	
		<div class="space-y-16">
			{#each projects.filter((p) => p.featured) as project, index}
				<div
					class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 {index % 2 === 1
						? 'lg:grid-flow-col-dense'
						: ''}"
				>
					<div class={index % 2 === 1 ? 'lg:col-start-2' : ''}>
						<div
							class="flex aspect-video items-center justify-center rounded-xl"
							style="background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-border) 100%);"
						>
							<div class="text-6xl opacity-50">
								{#if project.category === 'Mobile App'}
									📱
								{:else if project.category === 'Web App'}
									💻
								{:else if project.category === 'Open Source'}
									🔓
								{:else if project.category === 'Education'}
									📚
								{:else}
									🚀
								{/if}
							</div>
						</div>
					</div>
	
					<div class={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
						<div class="mb-3">
							<span
								class="inline-block rounded-full px-3 py-1 text-sm font-medium"
								style="background-color: var(--color-surface); color: var(--color-primary);"
							>
								{project.category}
							</span>
						</div>
	
						<h3 class="mb-4 text-3xl font-bold" style="color: var(--color-text);">
							{project.title}
						</h3>
	
						<p class="mb-6 text-lg" style="color: var(--color-text-muted);">
							{project.description}
						</p>
	
						<div class="mb-6 flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span
									class="rounded-md px-3 py-1"
									style="background-color: var(--color-surface); color: var(--color-text-muted);"
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
								class="btn-primary inline-flex items-center"
							>
								View Project
								<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>
