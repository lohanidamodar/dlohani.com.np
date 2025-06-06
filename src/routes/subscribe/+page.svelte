<script>
	import Section from '$lib/components/Section.svelte';
	import pageData from '$lib/data/pages/subscribe.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let currentStep = $state(1);
	let isSubmitting = $state(false);
	let isCompleted = $state(false);
	let isFullScreen = $state(true); // Default to full screen for focus

	let formData = $state({
		challenges: /** @type {string[]} */ ([]),
		businessStage: '',
		package: '',
		name: '',
		email: '',
		company: '',
		contactNumber: ''
	});

	const totalSteps = pageData.wizard.steps.length;

	// Close full-screen wizard
	function closeWizard() {
		isFullScreen = false;
		// Navigate back to the previous page or home if no referer
		const referer = document.referrer;
		if (referer && referer.includes(window.location.origin)) {
			window.history.back();
		} else {
			goto('/');
		}
	}

	// Handle URL parameters for package pre-selection
	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const packageParam = urlParams.get('package');

		if (packageParam) {
			// Validate that the package exists in our options
			const validPackages = pageData.wizard.fields.package.options.map((pkg) => pkg.value);
			if (validPackages.includes(packageParam)) {
				formData.package = packageParam;
				// Skip to step 3 (package selection) if package is pre-selected
			} else {
				// If invalid package parameter, just start from step 1
				console.warn(`Invalid package parameter: ${packageParam}`);
			}
		}
	});

	// Check if package was pre-selected from URL
	const isPackagePreSelected = $derived(() => {
		if (typeof window === 'undefined') return false;
		const urlParams = new URLSearchParams(window.location.search);
		const packageParam = urlParams.get('package');
		const validPackages = pageData.wizard.fields.package.options.map((pkg) => pkg.value);
		return packageParam && validPackages.includes(packageParam);
	});

	/**
	 * @param {string} challengeValue
	 */
	function toggleChallenge(challengeValue) {
		if (formData.challenges.includes(challengeValue)) {
			formData.challenges = formData.challenges.filter((c) => c !== challengeValue);
		} else {
			formData.challenges = [...formData.challenges, challengeValue];
		}
	}

	function nextStep() {
		if (currentStep < totalSteps) {
			currentStep++;
		}
	}

	/**
	 * @param {number} stepNumber
	 */
	function autoAdvanceIfRadio(stepNumber) {
		// Auto-advance for radio button steps after a short delay
		if (stepNumber === 2 || stepNumber === 3) {
			setTimeout(() => {
				nextStep();
			}, 800);
		}
	}

	function previousStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}

	function canProceed() {
		switch (currentStep) {
			case 1:
				return formData.challenges.length > 0;
			case 2:
				return formData.businessStage !== '';
			case 3:
				return formData.package !== '';
			case 4:
				return formData.name.trim() !== '' && formData.email.trim() !== '';
			default:
				return false;
		}
	}

	async function handleSubmit() {
		if (!canProceed()) return;

		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		isSubmitting = false;
		isCompleted = true;
	}

	function getStepProgress() {
		return (currentStep / totalSteps) * 100;
	}

	/**
	 * @param {number} step
	 */
	function getStepStatus(step) {
		if (step < currentStep) return 'completed';
		if (step === currentStep) return 'current';
		return 'upcoming';
	}

	// Handle ESC key to close full-screen wizard
	onMount(() => {
		function handleKeydown(event) {
			if (event.key === 'Escape' && isFullScreen) {
				closeWizard();
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => document.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<title>{pageData.meta.title}</title>
	<meta name="description" content={pageData.meta.description} />
</svelte:head>

{#if isFullScreen}
	<!-- Full Screen Wizard Overlay -->
	<div
		class="fixed inset-0 z-50 overflow-y-auto"
		style="background-color: var(--color-background);"
	>
		<!-- Close Button -->
		<button
			onclick={closeWizard}
			class="fixed top-4 right-4 z-60 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-110"
			style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text-muted);"
			title="Close wizard (ESC)"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<!-- Full Screen Content -->
		<div class="flex min-h-screen flex-col">
			<!-- Header Section -->
			<div class="flex-shrink-0 px-4 pt-16 pb-8">
				<div class="mx-auto max-w-4xl text-center">
					<h1 class="mb-6 text-4xl font-bold md:text-5xl" style="color: var(--color-text);">
						{pageData.hero.title}
					</h1>
					<p class="text-lg leading-relaxed md:text-xl" style="color: var(--color-text-muted);">
						{pageData.hero.subtitle}
					</p>
				</div>
			</div>

			<!-- Wizard Content -->
			<div class="flex-1 px-4 pb-8">
				<div class="mx-auto max-w-4xl">
					{#if isCompleted}
						<!-- Completion State -->
						<div class="text-center">
							<div
								class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
								style="background-color: var(--color-primary); color: white;"
							>
								<svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h2 class="mb-4 text-3xl font-bold" style="color: var(--color-text);">
								{pageData.wizard.completion.title}
							</h2>
							<p class="mb-8 text-lg" style="color: var(--color-text-muted);">
								{pageData.wizard.completion.message}
							</p>
							<div class="space-y-4">
								<a href={pageData.wizard.completion.cta.href} class="btn-primary inline-block">
									{pageData.wizard.completion.cta.text}
								</a>
								<button onclick={closeWizard} class="btn-secondary mx-auto block">
									Close Wizard
								</button>
							</div>
						</div>
					{:else}
						<!-- Progress Bar -->
						<div class="mb-8">
							<div class="mb-4 flex justify-between">
								{#each pageData.wizard.steps as step}
									<div class="flex items-center">
										<div
											class="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium {getStepStatus(
												step.id
											) === 'completed'
												? 'border-primary bg-primary text-white'
												: getStepStatus(step.id) === 'current'
													? 'border-primary text-primary bg-white'
													: 'border-gray-300 bg-white text-gray-500'}"
											style="border-color: {getStepStatus(step.id) === 'upcoming'
												? 'var(--color-border)'
												: 'var(--color-primary)'}; 
							       background-color: {getStepStatus(step.id) === 'completed'
												? 'var(--color-primary)'
												: 'var(--color-surface)'}; 
							       color: {getStepStatus(step.id) === 'completed'
												? 'white'
												: getStepStatus(step.id) === 'current'
													? 'var(--color-primary)'
													: 'var(--color-text-muted)'};"
										>
											{#if getStepStatus(step.id) === 'completed'}
												<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clip-rule="evenodd"
													/>
												</svg>
											{:else}
												{step.id}
											{/if}
										</div>
										<span
											class="ml-2 hidden text-sm font-medium sm:block"
											style="color: var(--color-text);"
										>
											{step.title}
										</span>
									</div>
								{/each}
							</div>
							<div class="h-2 w-full rounded-full" style="background-color: var(--color-border);">
								<div
									class="h-2 rounded-full transition-all duration-300"
									style="background-color: var(--color-primary); width: {getStepProgress()}%;"
								></div>
							</div>
						</div>

						<!-- Current Step Content -->
						<div
							class="mb-8 rounded-lg p-8 transition-all duration-500 ease-in-out"
							style="background-color: var(--color-surface); border: 1px solid var(--color-border);"
						>
							{#each pageData.wizard.steps as step}
								{#if step.id === currentStep}
									<div class="animate-fade-in mb-6 text-center">
										<h2 class="mb-2 text-2xl font-bold" style="color: var(--color-text);">
											{step.subtitle}
										</h2>
										<p style="color: var(--color-text-muted);">
											{step.description}
										</p>
									</div>
								{/if}
							{/each}

							<div class="animate-slide-up">
								<!-- Step 1: Business Challenges -->
								{#if currentStep === 1}
									<div class="grid gap-4 md:grid-cols-2">
										{#each pageData.wizard.fields.challenges.options as challenge}
											<label
												class="group relative cursor-pointer overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg {formData.challenges.includes(
													challenge.value
												)
													? 'border-primary from-primary/5 to-primary/10 bg-gradient-to-br shadow-md'
													: 'border-border bg-surface hover:border-primary/40 hover:from-primary/2 hover:to-primary/5 hover:bg-gradient-to-br'}"
												style="border-color: {formData.challenges.includes(challenge.value)
													? 'var(--color-primary)'
													: 'var(--color-border)'};"
											>
												<input
													type="checkbox"
													checked={formData.challenges.includes(challenge.value)}
													onchange={() => toggleChallenge(challenge.value)}
													class="sr-only"
												/>
												<div class="flex items-start gap-4">
													<div
														class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200 {formData.challenges.includes(
															challenge.value
														)
															? 'border-primary bg-primary text-white'
															: 'border-border bg-surface group-hover:border-primary/60'}"
													>
														{#if formData.challenges.includes(challenge.value)}
															<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
																<path
																	fill-rule="evenodd"
																	d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																	clip-rule="evenodd"
																/>
															</svg>
														{:else}
															<div
																class="h-2 w-2 rounded-sm bg-current opacity-0 transition-opacity group-hover:opacity-30"
															></div>
														{/if}
													</div>
													<div class="flex-1">
														<div
															class="mb-2 text-lg font-semibold"
															style="color: var(--color-text);"
														>
															{challenge.label}
														</div>
														<div
															class="text-sm leading-relaxed"
															style="color: var(--color-text-muted);"
														>
															{challenge.description}
														</div>
													</div>
												</div>
												<!-- Selected indicator -->
												{#if formData.challenges.includes(challenge.value)}
													<div class="absolute top-4 right-4">
														<div
															class="h-3 w-3 rounded-full"
															style="background-color: var(--color-primary);"
														></div>
													</div>
												{/if}
											</label>
										{/each}
									</div>
								{/if}

								<!-- Step 2: Business Stage -->
								{#if currentStep === 2}
									<div class="grid gap-4 md:grid-cols-2">
										{#each pageData.wizard.fields.businessStage.options as stage}
											<label
												class="group relative cursor-pointer overflow-hidden rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg {formData.businessStage ===
												stage.value
													? 'border-primary from-primary/5 to-primary/10 bg-gradient-to-br shadow-md'
													: 'border-border bg-surface hover:border-primary/40 hover:from-primary/2 hover:to-primary/5 hover:bg-gradient-to-br'}"
												style="border-color: {formData.businessStage === stage.value
													? 'var(--color-primary)'
													: 'var(--color-border)'};"
											>
												<input
													type="radio"
													bind:group={formData.businessStage}
													value={stage.value}
													onchange={() => autoAdvanceIfRadio(2)}
													class="sr-only"
												/>
												<div class="flex items-start gap-4">
													<div
														class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 {formData.businessStage ===
														stage.value
															? 'border-primary bg-primary'
															: 'border-border bg-surface group-hover:border-primary/60'}"
													>
														<div
															class="h-3 w-3 rounded-full transition-all duration-200 {formData.businessStage ===
															stage.value
																? 'scale-100 bg-white'
																: 'scale-0 bg-current opacity-30 group-hover:scale-50'}"
														></div>
													</div>
													<div class="flex-1">
														<div
															class="mb-2 text-lg font-semibold"
															style="color: var(--color-text);"
														>
															{stage.label}
														</div>
														<div
															class="text-sm leading-relaxed"
															style="color: var(--color-text-muted);"
														>
															{stage.description}
														</div>
													</div>
												</div>
												<!-- Selected indicator -->
												{#if formData.businessStage === stage.value}
													<div class="absolute top-4 right-4">
														<div
															class="h-3 w-3 rounded-full"
															style="background-color: var(--color-primary);"
														></div>
													</div>
												{/if}
											</label>
										{/each}
									</div>
								{/if}

								<!-- Step 3: Package Selection -->
								{#if currentStep === 3}
									<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
										{#each pageData.wizard.fields.package.options as pkg}
											<label
												class="group relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-xl {formData.package ===
												pkg.value
													? 'border-primary from-primary/5 to-primary/10 scale-[1.02] bg-gradient-to-br shadow-lg'
													: 'border-border bg-surface hover:border-primary/40 hover:from-primary/2 hover:to-primary/5 hover:scale-[1.01] hover:bg-gradient-to-br'}"
												style="border-color: {formData.package === pkg.value
													? 'var(--color-primary)'
													: 'var(--color-border)'};"
											>
												<input
													type="radio"
													bind:group={formData.package}
													value={pkg.value}
													onchange={() => autoAdvanceIfRadio(3)}
													class="sr-only"
												/>

												<!-- Package Header -->
												<div class="p-6 pb-4">
													<div class="mb-4 flex items-center gap-3">
														<div
															class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 {formData.package ===
															pkg.value
																? 'border-primary bg-primary'
																: 'border-border bg-surface group-hover:border-primary/60'}"
														>
															<div
																class="h-3 w-3 rounded-full transition-all duration-200 {formData.package ===
																pkg.value
																	? 'scale-100 bg-white'
																	: 'scale-0 bg-current opacity-30 group-hover:scale-50'}"
															></div>
														</div>
														<div class="flex-1">
															<div class="text-xl font-bold" style="color: var(--color-text);">
																{pkg.label}
															</div>
														</div>
													</div>

													<!-- Price -->
													<div class="mb-4 text-center">
														<div class="text-3xl font-bold" style="color: var(--color-primary);">
															{pkg.price}
														</div>
														<div
															class="text-sm font-medium"
															style="color: var(--color-text-muted);"
														>
															{pkg.period}
														</div>
													</div>

													<!-- Description -->
													<p
														class="mb-6 text-center text-sm leading-relaxed"
														style="color: var(--color-text-muted);"
													>
														{pkg.description}
													</p>
												</div>

												<!-- Features List -->
												<div class="px-6 pb-6">
													<ul class="space-y-3">
														{#each pkg.features as feature}
															<li class="flex items-start gap-3">
																<svg
																	class="mt-0.5 h-5 w-5 flex-shrink-0"
																	style="color: var(--color-primary);"
																	fill="currentColor"
																	viewBox="0 0 20 20"
																>
																	<path
																		fill-rule="evenodd"
																		d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																		clip-rule="evenodd"
																	/>
																</svg>
																<span
																	class="text-sm leading-relaxed"
																	style="color: var(--color-text-muted);"
																>
																	{feature}
																</span>
															</li>
														{/each}
													</ul>
												</div>

												<!-- Selected indicator -->
												{#if formData.package === pkg.value}
													<div class="absolute top-4 right-4">
														<div
															class="flex h-8 w-8 items-center justify-center rounded-full"
															style="background-color: var(--color-primary);"
														>
															<svg
																class="h-5 w-5 text-white"
																fill="currentColor"
																viewBox="0 0 20 20"
															>
																<path
																	fill-rule="evenodd"
																	d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																	clip-rule="evenodd"
																/>
															</svg>
														</div>
													</div>
												{/if}

												<!-- Hover effect overlay -->
												<div
													class="to-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
												></div>
											</label>
										{/each}
									</div>
								{/if}

								<!-- Step 4: Contact Details -->
								{#if currentStep === 4}
									<div class="space-y-6">
										<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
											<div>
												<label
													for="name"
													class="mb-2 block text-sm font-medium"
													style="color: var(--color-text);"
												>
													{pageData.wizard.fields.name.label}
												</label>
												<input
													type="text"
													id="name"
													bind:value={formData.name}
													required={pageData.wizard.fields.name.required}
													class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
													style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
													placeholder={pageData.wizard.fields.name.placeholder}
												/>
											</div>

											<div>
												<label
													for="email"
													class="mb-2 block text-sm font-medium"
													style="color: var(--color-text);"
												>
													{pageData.wizard.fields.email.label}
												</label>
												<input
													type="email"
													id="email"
													bind:value={formData.email}
													required={pageData.wizard.fields.email.required}
													class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
													style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
													placeholder={pageData.wizard.fields.email.placeholder}
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
													{pageData.wizard.fields.company.label}
												</label>
												<input
													type="text"
													id="company"
													bind:value={formData.company}
													required={pageData.wizard.fields.company.required}
													class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
													style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
													placeholder={pageData.wizard.fields.company.placeholder}
												/>
											</div>

											<div>
												<label
													for="contactNumber"
													class="mb-2 block text-sm font-medium"
													style="color: var(--color-text);"
												>
													{pageData.wizard.fields.contactNumber.label}
												</label>
												<input
													type="tel"
													id="contactNumber"
													bind:value={formData.contactNumber}
													required={pageData.wizard.fields.contactNumber.required}
													class="w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2"
													style="background-color: var(--color-surface); border-color: var(--color-border); color: var(--color-text); --tw-ring-color: var(--color-primary);"
													placeholder={pageData.wizard.fields.contactNumber.placeholder}
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>

						<!-- Navigation -->
						<div class="flex justify-between">
							<button
								onclick={previousStep}
								disabled={currentStep === 1}
								class="btn-secondary {currentStep === 1 ? 'cursor-not-allowed opacity-50' : ''}"
							>
								{pageData.wizard.navigation.previous}
							</button>

							{#if currentStep === totalSteps}
								<button
									onclick={handleSubmit}
									disabled={!canProceed() || isSubmitting}
									class="btn-primary flex items-center {!canProceed() || isSubmitting
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
										Submitting...
									{:else}
										{pageData.wizard.navigation.submit}
									{/if}
								</button>
							{:else}
								<button
									onclick={nextStep}
									disabled={!canProceed()}
									class="btn-primary {!canProceed() ? 'cursor-not-allowed opacity-75' : ''}"
								>
									{pageData.wizard.navigation.next}
								</button>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{:else}
	<!-- Regular page content when not in full screen -->
	<!-- This provides a fallback, but normally users will be in full screen mode -->
	<div class="pt-16">
		<p class="p-8 text-center">
			Subscribe wizard should be displayed in full screen mode.
			<button onclick={() => (isFullScreen = true)} class="btn-primary">
				Open Full Screen Wizard
			</button>
		</p>
	</div>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.5s ease-out;
	}

	.animate-slide-up {
		animation: slide-up 0.6s ease-out;
	}

	/* Enhanced focus styles for accessibility */
	input[type='checkbox']:focus-visible + * {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	input[type='radio']:focus-visible + * {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}
</style>
