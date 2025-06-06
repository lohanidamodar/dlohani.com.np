<script>
	import { services } from '$lib/data.js';
	import SectionHeading from './SectionHeading.svelte';
	import ServiceCard from './ServiceCard.svelte';
	import Section from './Section.svelte';

	export let showAll = false;
	export let limit = 3;

	$: displayServices = showAll ? services : services.slice(0, limit);
</script>

<!-- Services Section -->
<Section variant="pattern-dots">
	<SectionHeading
		center={true}
		title="How I Can Help Your Business"
		subtitle="With over 15 years of experience, I provide comprehensive consulting services to help your business thrive in the digital age."
	/>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each displayServices as service}
			<ServiceCard {service} />
		{/each}
	</div>

	{#if !showAll}
		<div class="mt-12 text-center">
			<a href="/services" class="btn-primary">
				View All Services
				<svg class="ml-2 inline h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>
	{/if}
</Section>
