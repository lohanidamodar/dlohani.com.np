<script>
	import { services } from '$lib/data.js';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import Section from '$lib/components/Section.svelte';
	import pageData from '$lib/data/pages/services.json';
	import Pricing from '$lib/components/Pricing.svelte';
</script>

<svelte:head>
	<title>{pageData.meta.title}</title>
	<meta name="description" content={pageData.meta.description} />
</svelte:head>

<!-- Hero Section -->
<Section variant={pageData.sections.hero.variant} padding={pageData.sections.hero.padding}>
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
				<linearGradient id="servicesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.1" />
					<stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
				</linearGradient>
			</defs>
			<polygon fill="url(#servicesGradient)" points="0,100 100,60 100,100 0,100" />
		</svg>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl text-center">
		<h1
			class="mb-6 text-5xl font-bold md:text-6xl"
			style="color: var(--color-text); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);"
		>
			{pageData.hero.title}
		</h1>
		<p
			class="text-xl leading-relaxed md:text-2xl"
			style="color: var(--color-text-muted); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);"
		>
			{pageData.hero.subtitle}
		</p>

		<!-- Light mode floating elements -->
		<div
			class="absolute top-20 right-20 -z-10 h-24 w-24 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(16, 185, 129, 0.15);"
		></div>
		<div
			class="absolute bottom-20 left-20 -z-10 h-24 w-24 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(14, 165, 233, 0.15);"
		></div>
	</div>
</Section>

<!-- Services Grid -->
<Section variant={pageData.sections.services.variant} padding={pageData.sections.services.padding}>
	<SectionHeading
		title={pageData.servicesSection.title}
		subtitle={pageData.servicesSection.subtitle}
	/>

	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
		{#each services as service}
			<ServiceCard {service} />
		{/each}
	</div>
</Section>

<!-- Process Section -->
<Section variant={pageData.sections.process.variant} padding={pageData.sections.process.padding}>
	<div class="mx-auto max-w-4xl">
		<SectionHeading
			title={pageData.processSection.title}
			subtitle={pageData.processSection.subtitle}
		/>

		<div class="space-y-8">
			{#each pageData.processSection.steps as step}
				<div class="flex flex-col items-start gap-6 md:flex-row">
					<div
						class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
						style="background-color: var(--color-surface); border: 2px solid var(--color-primary);"
					>
						<span class="text-2xl font-bold" style="color: var(--color-primary);"
							>{step.number}</span
						>
					</div>
					<div>
						<h3 class="mb-3 text-2xl font-bold" style="color: var(--color-text);">
							{step.title}
						</h3>
						<p class="text-lg" style="color: var(--color-text-muted);">
							{step.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>

<Pricing
	variant={pageData.sections.pricing.variant}
	padding={pageData.sections.pricing.padding}
	packages={pageData.pricingSection.packages}
	includedSection={pageData.pricingSection.includedSection}
	openingDiscount={pageData.pricingSection.openingDiscount}
	title={pageData.pricingSection.title}
	subtitle={pageData.pricingSection.subtitle}
/>

<!-- CTA Section -->
<ContactCTA />
