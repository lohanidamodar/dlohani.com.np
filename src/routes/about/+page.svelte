<script>
	import {
		personalInfo,
		skills,
		experience,
		education,
		achievements,
		socialLinks
	} from '$lib/data.js';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import Section from '$lib/components/Section.svelte';
	import pageData from '$lib/data/pages/about.json';

	const { meta, hero, myStory, skillsSection, sections } = pageData;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<!-- Hero Section -->
<Section variant={sections.hero.variant}>
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
				<linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#10b981" stop-opacity="0.1" />
					<stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.05" />
				</linearGradient>
			</defs>
			<polygon fill="url(#aboutGradient)" points="0,0 100,0 100,60 0,100" />
		</svg>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl text-center">
		<h1
			class="mb-6 text-5xl font-bold md:text-6xl"
			style="color: var(--color-text); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);"
		>
			{hero.title}
		</h1>
		<p
			class="text-xl leading-relaxed md:text-2xl"
			style="color: var(--color-text-muted); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);"
		>
			{personalInfo.bio}
		</p>

		<!-- Light mode floating elements -->
		<div
			class="absolute top-10 left-10 -z-10 h-20 w-20 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(16, 185, 129, 0.15);"
		></div>
		<div
			class="absolute right-10 bottom-10 -z-10 h-20 w-20 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(14, 165, 233, 0.15);"
		></div>
	</div>
</Section>

<!-- Stats Section -->
<Section variant={sections.stats.variant}>
	<div class="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
		<div class="text-center">
			<div class="mb-2 text-4xl font-bold" style="color: var(--color-primary);">
				{personalInfo.experience}
			</div>
			<div class="font-medium" style="color: var(--color-text-muted);">Years of Experience</div>
		</div>
		<div class="text-center">
			<div class="mb-2 text-4xl font-bold" style="color: var(--color-primary);">
				{personalInfo.projectsCompleted}
			</div>
			<div class="font-medium" style="color: var(--color-text-muted);">Projects Completed</div>
		</div>
		<div class="text-center">
			<div class="mb-2 text-4xl font-bold" style="color: var(--color-primary);">
				{personalInfo.clientsSatisfied}
			</div>
			<div class="font-medium" style="color: var(--color-text-muted);">Satisfied Clients</div>
		</div>
	</div>
</Section>

<!-- My Story Section -->
<Section variant={sections.myStory.variant}>
	<div class="mx-auto max-w-4xl">
		<SectionHeading title={myStory.title} subtitle={myStory.subtitle} />

		<div class="prose prose-lg dark:prose-invert mx-auto">
			{#each myStory.content as paragraph}
				<p class="mb-6 text-xl leading-relaxed" style="color: var(--color-text-muted);">
					{paragraph}
				</p>
			{/each}
		</div>

		<div class="text-center">
			<a href={myStory.cta.href} class="btn-primary px-8 py-4 text-lg">{myStory.cta.text}</a>
		</div>
	</div>
</Section>

<!-- Skills Section -->
<Section variant={sections.skills.variant}>
	<div class="mx-auto max-w-6xl">
		<SectionHeading title={skillsSection.title} subtitle={skillsSection.subtitle} />

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each skills as skillCategory}
				<div class="card">
					<h3 class="mb-4 text-xl font-semibold" style="color: var(--color-text);">
						{skillCategory.category}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each skillCategory.technologies as tech}
							<span
								class="rounded-md px-3 py-1 text-sm font-medium"
								style="background-color: var(--color-primary-light); color: var(--color-primary);"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- Experience Section -->
<Section variant="mesh">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-12 text-center text-4xl font-bold md:text-5xl" style="color: var(--color-text);">
			Experience
		</h2>

		<div class="space-y-8">
			{#each experience as exp}
				<div class="card">
					<div class="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
						<div>
							<h3 class="text-xl font-semibold" style="color: var(--color-text);">
								{exp.title}
							</h3>
							<p class="font-medium" style="color: var(--color-primary);">
								{exp.company}
							</p>
						</div>
						<div class="font-medium" style="color: var(--color-text-muted);">
							{exp.period}
						</div>
					</div>

					<p class="mb-4" style="color: var(--color-text-muted);">
						{exp.description}
					</p>

					<div class="flex flex-wrap gap-2">
						{#each exp.technologies as tech}
							<span
								class="rounded px-2 py-1 text-sm"
								style="background-color: var(--color-surface); color: var(--color-text-muted); border: 1px solid var(--color-border);"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- Education & Achievements Section -->
<Section variant="glass">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
			<!-- Education -->
			<div>
				<h2 class="mb-8 text-3xl font-bold" style="color: var(--color-text);">Education</h2>

				<div class="space-y-6">
					{#each education as edu}
						<div class="border-l-4 pl-6" style="border-color: var(--color-primary);">
							<h3 class="text-xl font-semibold" style="color: var(--color-text);">
								{edu.degree}
							</h3>
							<p class="font-medium" style="color: var(--color-primary);">
								{edu.institution}
							</p>
							<p class="mb-2 text-sm" style="color: var(--color-text-muted);">
								{edu.period}
							</p>
							<p style="color: var(--color-text-muted);">
								{edu.description}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Achievements -->
			<div>
				<h2 class="mb-8 text-3xl font-bold" style="color: var(--color-text);">Achievements</h2>

				<div class="space-y-6">
					{#each achievements as achievement}
						<div class="border-l-4 pl-6" style="border-color: var(--color-primary);">
							<h3 class="text-xl font-semibold" style="color: var(--color-text);">
								{achievement.title}
							</h3>
							<p class="mb-2 text-sm" style="color: var(--color-text-muted);">
								{achievement.year}
							</p>
							<p style="color: var(--color-text-muted);">
								{achievement.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- Connect Section -->
<section class="section-padding gradient-bg">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">Let's Connect</h2>
			<p class="mb-8 text-xl" style="color: rgba(255, 255, 255, 0.9);">
				I'm always interested in new opportunities and interesting projects. Let's discuss how we
				can work together.
			</p>

			<div class="mb-8 flex flex-wrap justify-center gap-4">
				{#each socialLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="social-icon rounded-lg bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300"
						aria-label={social.name}
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							{#if social.icon === 'github'}
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							{:else if social.icon === 'linkedin'}
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							{:else if social.icon === 'twitter'}
								<path
									d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
								/>
							{:else if social.icon === 'youtube'}
								<path
									d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
								/>
							{/if}
						</svg>
					</a>
				{/each}
			</div>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="connect-btn-primary inline-block rounded-lg bg-white px-8 py-4 font-semibold transition-all duration-300"
				>
					Get In Touch
				</a>
				<a
					href="/book"
					class="connect-btn-secondary inline-block rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300"
				>
					Schedule a Call
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.connect-btn-primary {
		color: var(--color-primary);
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
	}

	.connect-btn-primary:hover {
		background-color: var(--color-primary-light);
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(5, 150, 105, 0.2);
	}

	.connect-btn-secondary:hover {
		background-color: white;
		color: var(--color-primary);
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(5, 150, 105, 0.2);
	}

	/* Enhanced social icons */
	.social-icon {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.social-icon:hover {
		transform: translateY(-2px) scale(1.05);
		background: rgba(255, 255, 255, 0.3) !important;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}
</style>
