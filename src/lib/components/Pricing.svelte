<script>
	import Section from './Section.svelte';
	import SectionHeading from './SectionHeading.svelte';
	const {
		variant = 'default',
		title = 'Pricing Plans',
		subtitle = 'Choose the plan that fits your needs',
		packages = [],
		padding = 'py-12 px-4',
		openingDiscount = null,
		includedSection = {
			title: 'Included in every consultation',
			items: [],
			visible: false
		}
	} = $props();

	// Filter visible packages and determine grid class
	const visiblePackages = $derived(packages.filter((pkg) => pkg.visible !== false));
	const gridClass = $derived(
		visiblePackages.length === 1
			? 'grid-single'
			: visiblePackages.length === 2
				? 'grid-double'
				: 'grid-triple'
	);
</script>

<Section {variant} {padding}>
	<div class="mx-auto max-w-5xl text-center">
		<SectionHeading {title} {subtitle} />

		{#if openingDiscount && openingDiscount.visible}
			<div
				class="mb-8 rounded-lg p-6"
				style="background: linear-gradient(135deg, #ff6b6b, #4ecdc4);"
			>
				<h3 class="mb-2 text-xl font-bold text-white">
					🎉 {openingDiscount.text}
				</h3>
				<p class="text-sm text-white opacity-90">
					{openingDiscount.subtitle}
				</p>
				{#if openingDiscount.validUntil}
					<p class="mt-2 text-xs text-white opacity-75">
						Valid until: {new Date(openingDiscount.validUntil).toLocaleDateString()}
					</p>
				{/if}
			</div>
		{/if}

		<div class="pricing-grid {gridClass}">
			{#each visiblePackages as pkg}
				<div
					class="pricing-card {pkg.highlighted ? 'highlighted' : ''}"
					style={pkg.highlighted ? 'border: 2px solid var(--color-primary);' : ''}
				>
					<!-- Badge and Discount Label Container -->
					<div class="card-header">
						{#if pkg.badge}
							<div class="badge">
								{pkg.badge}
							</div>
						{/if}

						{#if pkg.discountLabel}
							<div class="discount-label">
								{pkg.discountLabel}
							</div>
						{/if}
					</div>

					<!-- Package Content -->
					<div class="card-content">
						<h3 class="package-name" style="color: var(--color-text);">
							{pkg.name}
						</h3>

						<div class="pricing-info">
							{#if pkg.originalPrice}
								<div class="original-price" style="color: var(--color-text-muted);">
									{pkg.originalPrice}
								</div>
							{/if}
							<div class="current-price" style="color: var(--color-primary);">
								{pkg.price}<span class="period" style="color: var(--color-text-muted);"
									>{pkg.period}</span
								>
							</div>
							{#if pkg.hourlyRate}
								<div class="hourly-rate">
									{pkg.hourlyRate}
								</div>
							{/if}
						</div>

						<p class="package-description" style="color: var(--color-text-muted);">
							{pkg.description}
						</p>

						<ul class="features-list" style="color: var(--color-text-muted);">
							{#each pkg.features as feature}
								<li>{feature}</li>
							{/each}
						</ul>

						<a href={pkg.cta.href} class="btn-{pkg.cta.style || 'primary'} w-full">
							{pkg.cta.text}
						</a>
					</div>
				</div>
			{/each}
		</div>

		{#if includedSection.visible}
			<div class="mt-12 rounded-lg p-6" style="background-color: var(--color-surface);">
				<h4 class="mb-4 text-xl font-semibold" style="color: var(--color-text);">
					{includedSection.title}
				</h4>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each includedSection.items as item}
						<div class="text-center">
							{#if item.icon}
								<div class="mb-2 text-2xl">{item.icon}</div>
							{/if}
							{#if item.title}
								<h5 class="mb-2 font-semibold" style="color: var(--color-text);">{item.title}</h5>
							{/if}
							<p class="text-sm" style="color: var(--color-text-muted);">
								{item.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</Section>

<style>
	.pricing-grid {
		display: grid;
		gap: 2.5rem; /* Increased gap to accommodate badges */
		justify-items: center;
		margin: 2rem auto 0; /* Add top margin for badge space */
	}

	/* Single item - centered */
	.grid-single {
		grid-template-columns: 1fr;
		max-width: 400px;
	}

	/* Two items - side by side on larger screens */
	.grid-double {
		grid-template-columns: 1fr;
		max-width: 800px;
	}

	@media (min-width: 768px) {
		.grid-double {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Three or more items - responsive grid */
	.grid-triple {
		grid-template-columns: 1fr;
		max-width: 1200px;
	}

	@media (min-width: 768px) {
		.grid-triple {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.grid-triple {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Pricing Card Styles */
	.pricing-card {
		position: relative;
		width: 100%;
		max-width: 350px;
		background: var(--color-surface, #ffffff);
		border-radius: 12px;
		padding: 0;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		overflow: visible; /* Changed from hidden to visible for badges */
		text-align: center;
		margin-top: 2rem; /* Add top margin to accommodate badges */
	}

	.pricing-card:hover {
		transform: translateY(-4px);
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	.pricing-card.highlighted {
		transform: scale(1.05);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	.pricing-card.highlighted:hover {
		transform: scale(1.05) translateY(-4px);
	}

	/* Card Header for badges and discount labels */
	.card-header {
		position: relative;
		height: 32px; /* Increased height to accommodate badges */
		margin-bottom: 1rem;
	}

	.badge {
		position: absolute;
		top: -16px; /* Adjusted to be more visible */
		left: 50%;
		transform: translateX(-50%);
		background-color: var(--color-primary);
		color: white;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		white-space: nowrap;
		z-index: 2;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.discount-label {
		position: absolute;
		top: -12px; /* Adjusted positioning */
		right: 12px; /* Moved slightly inward */
		background: linear-gradient(135deg, #ff6b6b, #ee5a52);
		color: white;
		padding: 6px 12px;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		box-shadow: 0 2px 8px rgba(255, 107, 107, 0.4);
		z-index: 1;
	}

	/* Card Content */
	.card-content {
		padding: 0 1.5rem 1.5rem 1.5rem;
	}

	.package-name {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.pricing-info {
		margin-bottom: 1.5rem;
	}

	.original-price {
		font-size: 1rem;
		text-decoration: line-through;
		margin-bottom: 0.25rem;
		opacity: 0.7;
	}

	.current-price {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1;
		margin-bottom: 0.25rem;
	}

	.period {
		font-size: 1rem;
		font-weight: 400;
	}

	.hourly-rate {
		font-size: 0.875rem;
		font-weight: 600;
		color: #ffffff !important; /* Force white text */
		background: linear-gradient(135deg, var(--color-primary, #3b82f6), #1e40af);
		padding: 6px 16px;
		border-radius: 16px;
		display: inline-block;
		margin-top: 0.75rem;
		box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
		letter-spacing: 0.5px;
	}

	.package-description {
		font-size: 0.875rem;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}

	.features-list {
		text-align: left;
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem 0;
		space-y: 0.75rem;
	}

	.features-list li {
		padding: 0.375rem 0;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	/* Responsive adjustments */
	@media (max-width: 767px) {
		.pricing-card {
			max-width: 320px;
		}

		.current-price {
			font-size: 2rem;
		}

		.card-content {
			padding: 0 1rem 1rem 1rem;
		}
	}
</style>
