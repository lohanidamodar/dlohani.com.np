<script>
	import { personalInfo, socialLinks, faqs } from '$lib/data.js';
	import ContactCta from '$lib/components/ContactCTA.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Section from '$lib/components/Section.svelte';
	import pageData from '$lib/data/pages/contact.json';

	let formData = $state({
		name: '',
		email: '',
		company: '',
		contactNumber: '',
		package: '',
		businessStage: '',
		currentChallenges: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	/**
	 * @type {number | null}
	 */
	let expandedFaq = $state(null);

	/**
	 * @param {Event} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		isSubmitting = false;
		isSubmitted = true;

		// Reset form after 3 seconds
		setTimeout(() => {
			isSubmitted = false;
			formData = {
				name: '',
				email: '',
				company: '',
				contactNumber: '',
				package: '',
				businessStage: '',
				currentChallenges: '',
				message: ''
			};
		}, 3000);
	}

	/**
	 * @param {number} index
	 */
	function toggleFaq(index) {
		expandedFaq = expandedFaq === index ? null : index;
	}

	/**
	 * @param {string} iconType
	 */
	function getIconSvg(iconType) {
		const icons = {
			email: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
			location: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>`,
			time: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>`
		};
		return icons[/** @type {keyof typeof icons} */ (iconType)] || icons.email;
	}

	/**
	 * @param {string} content
	 */
	function getContactContent(content) {
		if (content === 'dynamic from personalInfo.location') {
			return personalInfo.location;
		}
		return content;
	}
</script>

<svelte:head>
	<title>{pageData.meta.title}</title>
	<meta name="description" content={pageData.meta.description} />
</svelte:head>

<!-- Hero Section -->
<Section variant={pageData.sections.hero.variant}>
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
				<linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#10b981" stop-opacity="0.1" />
					<stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.05" />
				</linearGradient>
			</defs>
			<polygon fill="url(#contactGradient)" points="100,0 0,0 0,40 100,0" />
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
			class="absolute top-1/4 left-1/4 -z-10 h-24 w-24 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(16, 185, 129, 0.15);"
		></div>
		<div
			class="absolute right-1/4 bottom-1/4 -z-10 h-24 w-24 rounded-full opacity-50 blur-2xl"
			style="background-color: rgba(14, 165, 233, 0.15);"
		></div>
	</div>
</Section>

<!-- Contact Form & Info Section -->
<Section variant={pageData.sections.contactForm.variant}>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
		<!-- Contact Form -->
		<div>
			<h2 class="mb-6 text-3xl font-bold" style="color: var(--color-text);">
				{pageData.contactForm.title}
			</h2>

			{#if isSubmitted}
				<div
					class="rounded-lg border p-6 text-center"
					style="background-color: var(--color-surface); border-color: var(--color-primary); color: var(--color-primary);"
				>
					<svg
						class="mx-auto mb-4 h-12 w-12"
						style="color: var(--color-primary);"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					<h3 class="mb-2 text-xl font-semibold" style="color: var(--color-primary);">
						{pageData.contactForm.successMessage.title}
					</h3>
					<p style="color: var(--color-text-muted);">
						{pageData.contactForm.successMessage.description}
					</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label
								for="name"
								class="mb-2 block text-sm font-medium"
								style="color: var(--color-text);"
							>
								{pageData.contactForm.fields.name.label}
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required={pageData.contactForm.fields.name.required}
								class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
								style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
								placeholder={pageData.contactForm.fields.name.placeholder}
							/>
						</div>

						<div>
							<label
								for="email"
								class="mb-2 block text-sm font-medium"
								style="color: var(--color-text);"
							>
								{pageData.contactForm.fields.email.label}
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required={pageData.contactForm.fields.email.required}
								class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
								style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
								placeholder={pageData.contactForm.fields.email.placeholder}
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label
								for="company"
								class="mb-2 block text-sm font-medium"
								style="color: var(--color-text);"
							>
								{pageData.contactForm.fields.company.label}
							</label>
							<input
								type="text"
								id="company"
								bind:value={formData.company}
								required={pageData.contactForm.fields.company.required}
								class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
								style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
								placeholder={pageData.contactForm.fields.company.placeholder}
							/>
						</div>

						<div>
							<label
								for="contactNumber"
								class="mb-2 block text-sm font-medium"
								style="color: var(--color-text);"
							>
								{pageData.contactForm.fields.contactNumber.label}
							</label>
							<input
								type="tel"
								id="contactNumber"
								bind:value={formData.contactNumber}
								required={pageData.contactForm.fields.contactNumber.required}
								class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
								style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
								placeholder={pageData.contactForm.fields.contactNumber.placeholder}
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label
								for="package"
								class="mb-2 block text-sm font-medium"
								style="color: var(--color-text);"
							>
								{pageData.contactForm.fields.package.label}
							</label>
							<select
								id="package"
								bind:value={formData.package}
								class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
								style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
							>
								{#each pageData.contactForm.fields.package.options as option}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>
						</div>

						<div>
							<label
								for="businessStage"
								class="mb-2 block text-sm font-medium"
								style="color: var(--color-text);"
							>
								{pageData.contactForm.fields.businessStage.label}
							</label>
							<select
								id="businessStage"
								bind:value={formData.businessStage}
								class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
								style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
							>
								{#each pageData.contactForm.fields.businessStage.options as option}
									<option value={option.value}>{option.label}</option>
								{/each}
							</select>
						</div>
					</div>

					<div>
						<label
							for="currentChallenges"
							class="mb-2 block text-sm font-medium"
							style="color: var(--color-text);"
						>
							{pageData.contactForm.fields.currentChallenges.label}
						</label>
						<select
							id="currentChallenges"
							bind:value={formData.currentChallenges}
							class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
							style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
						>
							{#each pageData.contactForm.fields.currentChallenges.options as option}
								<option value={option.value}>{option.label}</option>
							{/each}
						</select>
					</div>

					<div>
						<label
							for="message"
							class="mb-2 block text-sm font-medium"
							style="color: var(--color-text);"
						>
							{pageData.contactForm.fields.message.label}
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required={pageData.contactForm.fields.message.required}
							rows="5"
							class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
							style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
							placeholder={pageData.contactForm.fields.message.placeholder}
						></textarea>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="btn-primary flex w-full items-center justify-center {isSubmitting
							? 'cursor-not-allowed opacity-75'
							: ''}"
					>
						{#if isSubmitting}
							<svg
								class="mr-2 h-5 w-5 animate-spin"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
								/>
							</svg>
							{pageData.contactForm.submitButton.loading}
						{:else}
							{pageData.contactForm.submitButton.default}
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								/>
							</svg>
						{/if}
					</button>
				</form>
			{/if}
		</div>

		<!-- Contact Info -->
		<div>
			<h2 class="mb-6 text-3xl font-bold" style="color: var(--color-text);">
				{pageData.contactInfo.title}
			</h2>

			<div class="mb-8 space-y-6">
				{#each pageData.contactInfo.items.filter((d) => d.visible) as item}
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
							style="background-color: var(--color-surface); border: 2px solid var(--color-primary);"
						>
							<svg
								class="h-6 w-6"
								style="color: var(--color-primary);"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{@html getIconSvg(item.icon)}
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-semibold" style="color: var(--color-text);">{item.title}</h3>
							{#if item.icon === 'email'}
								<a
									href="mailto:{getContactContent(item.content)}"
									class="hover:underline"
									style="color: var(--color-primary);"
								>
									{getContactContent(item.content)}
								</a>
							{:else}
								<p style="color: var(--color-text-muted);">{getContactContent(item.content)}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<div class="mb-8">
				<h3 class="mb-4 font-semibold" style="color: var(--color-text);">
					{pageData.contactInfo.socialLinks.title}
				</h3>
				<div class="flex gap-3">
					{#each socialLinks.slice(0, pageData.contactInfo.socialLinks.maxLinks) as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-12 w-12 items-center justify-center rounded-lg transition-colors hover:scale-105"
							style="background-color: var(--color-surface); color: var(--color-primary); border: 2px solid var(--color-primary);"
							title={social.name}
						>
							{#if social.icon === 'github'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							{:else if social.icon === 'linkedin'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							{:else if social.icon === 'twitter'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
									/>
								</svg>
							{:else if social.icon === 'youtube'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
									/>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- FAQ Section -->
<Section variant={pageData.sections.faq.variant}>
	<div class="mx-auto max-w-4xl">
		<SectionHeading title={pageData.faqSection.title} subtitle={pageData.faqSection.subtitle} />

		<div class="space-y-4">
			{#each faqs as faq, index}
				<div
					class="rounded-lg border"
					style="background-color: var(--color-surface); border-color: var(--color-border);"
				>
					<button
						onclick={() => toggleFaq(index)}
						class="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:opacity-80"
					>
						<h3 class="font-semibold" style="color: var(--color-text);">
							{faq.question}
						</h3>
						<svg
							class="h-5 w-5 transition-transform {expandedFaq === index ? 'rotate-180' : ''}"
							style="color: var(--color-text-muted);"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					{#if expandedFaq === index}
						<div class="px-6 pb-4">
							<p style="color: var(--color-text-muted);">
								{faq.answer}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- CTA Section -->
<ContactCta />
