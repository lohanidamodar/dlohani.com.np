<script>
	import { projects } from '$lib/data.js';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import Section from '$lib/components/Section.svelte';

	let selectedCategory = $state('All');

	const categories = $derived(['All', ...new Set(projects.map((p) => p.category))]);
	const filteredProjects = $derived(
		selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Projects - Damodar Lohani</title>
	<meta
		name="description"
		content="Technical consulting case studies and system building examples. See how technical consulting helped teams build better systems, ship great products, and achieve measurable improvements."
	/>
</svelte:head>

<!-- Hero Section -->
<Section variant="gradient-subtle">
	<!-- Light mode decorative elements -->
	<div class="pointer-events-none absolute inset-0 opacity-30">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="100%"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<defs>
				<linearGradient id="projectsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.1" />
					<stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
				</linearGradient>
			</defs>
			<polygon fill="url(#projectsGradient)" points="0,0 100,0 100,100 0,60" />
		</svg>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl text-center">
		<h1
			class="mb-6 text-5xl font-bold md:text-6xl"
			style="color: var(--color-text); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);"
		>
			Client Success Stories
		</h1>
		<p
			class="text-xl leading-relaxed md:text-2xl"
			style="color: var(--color-text-muted); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);"
		>
			Real examples of systems built, products shipped, and technical challenges solved through
			hands-on consulting implementation
		</p>

		<!-- Light mode floating elements -->
		<div
			class="absolute bottom-10 left-10 -z-10 h-28 w-28 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(14, 165, 233, 0.15);"
		></div>
		<div
			class="absolute top-20 right-20 -z-10 h-28 w-28 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(16, 185, 129, 0.15);"
		></div>
	</div>
</Section>

<!-- Filter Section -->
<Section variant="pattern-grid" padding="small">
	<div class="flex flex-wrap justify-center gap-3">
		{#each categories as category}
			<button
				onclick={() => (selectedCategory = category)}
				class="rounded-lg px-6 py-3 font-medium transition-all duration-300 {selectedCategory ===
				category
					? 'text-white'
					: 'hover:opacity-80'}"
				style="background-color: {selectedCategory === category
					? 'var(--color-primary)'
					: 'var(--color-background)'}; 
				       color: {selectedCategory === category ? 'white' : 'var(--color-text)'};
				       border: 1px solid {selectedCategory === category
					? 'var(--color-primary)'
					: 'var(--color-border)'};"
			>
				{category}
			</button>
		{/each}
	</div>
</Section>

<!-- Projects Grid -->
<Section variant="pattern-dots">
	<SectionHeading
		title="My Projects"
		subtitle="A showcase of successful projects I've built for clients across various industries"
	/>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

<!-- Featured Projects Section -->
<Section variant="texture">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-6 text-center text-4xl font-bold md:text-5xl" style="color: var(--color-text);">
			Featured Projects
		</h2>
		<p class="mb-16 text-center text-xl" style="color: var(--color-text-muted);">
			Highlighting some of my most impactful and successful projects
		</p>

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
	</div></Section
>

<!-- Technologies Section -->
<Section variant="mesh">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="mb-6 text-4xl font-bold md:text-5xl" style="color: var(--color-text);">
			Technologies I Use
		</h2>
		<p class="mb-12 text-xl" style="color: var(--color-text-muted);">
			Modern tools and frameworks to build exceptional digital experiences
		</p>
	</div>
</Section>

<!-- CTA Section -->
<ContactCTA />
