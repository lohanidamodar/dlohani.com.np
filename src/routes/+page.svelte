<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import Section from '$lib/components/Section.svelte';
	import { skills, services, packages } from '$lib/data.js';
	import pageData from '$lib/data/pages/home.json';
	import Pricing from '$lib/components/Pricing.svelte';

	const { meta, whyWorkWithMe, technologiesSection, recentProjects, sections } = pageData;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<!-- Hero Section -->
<HeroSection />

<!-- Services Section -->
<ServicesSection showAll={sections.services.showAll} limit={sections.services.limit} />

<!-- Why Choose Me Section -->
<Section variant={sections.whyWorkWithMe.variant}>
	<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
		<div>
			<h2 class="mb-6 text-4xl font-bold md:text-5xl" style="color: var(--color-text);">
				{whyWorkWithMe.title}
			</h2>
			<p class="mb-8 text-xl" style="color: var(--color-text-muted);">
				{whyWorkWithMe.subtitle}
			</p>

			<div class="space-y-6">
				{#each whyWorkWithMe.benefits as benefit}
					<div class="flex items-start gap-4">
						<div
							class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
							style="background-color: var(--color-surface);"
						>
							<svg
								class="h-5 w-5"
								style="color: var(--color-primary);"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{#if benefit.icon === 'chart'}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								{:else if benefit.icon === 'team'}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								{:else if benefit.icon === 'growth'}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								{/if}
							</svg>
						</div>
						<div>
							<h3 class="mb-2 font-semibold" style="color: var(--color-text);">
								{benefit.title}
							</h3>
							<p style="color: var(--color-text-muted);">
								{benefit.description}
							</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-8">
				<a href={whyWorkWithMe.cta.href} class="btn-secondary">{whyWorkWithMe.cta.text}</a>
			</div>
		</div>

		<div class="relative">
			<div class="card relative z-10 rounded-2xl p-8 shadow-xl">
				<h3 class="mb-6 text-2xl font-bold" style="color: var(--color-text);">
					{technologiesSection.title}
				</h3>
				<div class="flex flex-wrap gap-3">
					{#each skills[0].technologies
						.concat(skills[1].technologies)
						.slice(0, technologiesSection.maxSkills) as skill}
						<span
							class="rounded-lg px-3 py-2 text-sm font-medium"
							style="background-color: var(--color-surface); color: var(--color-primary);"
						>
							{skill}
						</span>
					{/each}
				</div>
			</div>

			<!-- Background decoration -->
			<div
				class="absolute -top-4 -right-4 -z-10 h-full w-full rounded-2xl"
				style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);"
			></div>
		</div>
	</div>
</Section>

<!-- Projects Section -->
<ProjectsSection
	variant={sections.projects.variant}
	showAll={sections.projects.showAll}
	limit={sections.projects.limit}
	featuredOnly={sections.projects.featuredOnly}
/>

<!-- Pricing Section -->
<Pricing
	padding="normal"
	variant="default"
	title={'For everyone, from startups to enterprises'}
	subtitle="Affordable pricing plans to suit your needs"
	{packages}
/>

<!-- CTA Section -->
<ContactCTA />
