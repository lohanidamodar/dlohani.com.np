<script>
	import { onMount } from 'svelte';
	import { personalInfo } from '$lib/data.js';

	let heroVisible = $state(false);

	onMount(() => {
		heroVisible = true;
	});
</script>

<!-- Hero Section -->
<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Dark Mode Background Pattern (Original) -->
	<div
		class=" absolute inset-0"
		style="background: linear-gradient(135deg, var(--color-background) 0%, var(--color-surface) 50%, var(--color-background) 100%);"
	>
		<div
			class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"
		></div>
	</div>

	<!-- Enhanced Background Pattern for Light Mode -->
	<div class="light-mode-only absolute inset-0">
		<!-- Dynamic gradient mesh background with more vibrant colors -->
		<div
			class="absolute inset-0"
			style="background: 
				radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.25) 0%, transparent 40%), 
				radial-gradient(circle at 90% 30%, rgba(14, 165, 233, 0.25) 0%, transparent 40%),
				radial-gradient(circle at 50% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 45%),
				radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
				linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);"
		></div>
		<!-- Enhanced grid pattern overlay -->
		<div
			class="light-animate-pulse absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M15%2030a15%2015%200%20110-30%2015%2015%200%20010%2030zm0-28a13%2013%200%20100%2026%2013%2013%200%20000-26zm0%2024a11%2011%200%20110-22%2011%2011%200%20010%2022zm0-20a9%209%200%20100%2018%209%209%200%20000-18zm0%2016a7%207%200%20110-14%207%207%200%20010%2014zm0-12a5%205%200%20100%2010%205%205%200%20000-10zm0%208a3%203%200%20110-6%203%203%200%20010%206z%22%20fill%3D%22%2310b981%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-30"
		></div>

		<!-- Animated gradient overlays -->
		<div
			class="light-animate-pulse absolute inset-0 opacity-20"
			style="animation-duration: 8s; background: 
			linear-gradient(120deg, rgba(16, 185, 129, 0.3) 0%, transparent 35%), 
			linear-gradient(210deg, rgba(14, 165, 233, 0.3) 0%, transparent 35%),
			linear-gradient(330deg, rgba(236, 72, 153, 0.2) 0%, transparent 35%);"
		></div>

		<!-- SVG Geometric Shapes Overlay -->
		<div class="absolute inset-0 overflow-hidden">
			<!-- Abstract polygon shapes -->
			<svg
				class="absolute top-0 left-0 h-full w-full"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<polygon
					fill="rgba(16, 185, 129, 0.05)"
					class="light-animate-pulse"
					style="animation-duration: 15s;"
					points="0,0 30,0 15,100 0,100"
				></polygon>
				<polygon
					fill="rgba(14, 165, 233, 0.05)"
					class="light-animate-pulse"
					style="animation-duration: 18s;"
					points="70,0 100,0 100,100 85,100"
				></polygon>
				<polygon
					fill="rgba(236, 72, 153, 0.03)"
					class="light-animate-pulse"
					style="animation-duration: 12s;"
					points="40,0 60,0 65,100 35,100"
				></polygon>
			</svg>

			<!-- Fluid grid lines -->
			<div
				class="absolute inset-0 opacity-10"
				style="background-image: 
					linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), 
					linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
					background-size: 50px 50px;"
			></div>
		</div>
	</div>

	<div class="relative z-10 container mx-auto px-4 py-20">
		<div class="mx-auto max-w-4xl text-center">
			<div class="mb-8 {heroVisible ? 'animate-fade-in' : 'opacity-0'}">
				<div
					class="mb-6 inline-flex transform items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
					style="background-color: rgba(255, 255, 255, 0.9); color: var(--color-primary); border: 1px solid var(--color-primary); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.15);"
				>
					<span
						class="h-2 w-2 animate-pulse rounded-full"
						style="background-color: var(--color-primary);"
					></span>
					Now accepting new clients
				</div>

				<h1
					class="mb-6 text-5xl leading-tight font-bold md:text-7xl"
					style="color: var(--color-text); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);"
				>
					Tech
					<span
						class="bg-gradient-to-r bg-clip-text text-transparent"
						style="background: linear-gradient(135deg, var(--color-primary) 0%, #0ea5e9 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
					>
						Consultant
					</span>
				</h1>

				<p
					class="relative mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl"
					style="color: var(--color-text-muted); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);"
				>
					<span
						class="light-animate-pulse absolute -inset-x-10 top-1/2 -z-10 h-1/2 opacity-10 blur-3xl"
						style="background: linear-gradient(90deg, rgba(16, 185, 129, 0.3), rgba(14, 165, 233, 0.3)); animation-duration: 10s;"
					></span>
					{personalInfo.bio}
				</p>

				<!-- Value Propositions -->
				<div class="mx-auto mb-8 max-w-4xl">
					<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div
							class="flex transform items-center justify-center gap-3 rounded-lg p-4 transition-all duration-300 hover:scale-105"
							style="background-color: var(--color-surface); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid var(--color-border);"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full"
								style="background-color: var(--color-primary-light);"
							>
								<svg
									class="h-5 w-5"
									style="color: var(--color-primary);"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
							</div>
							<span class="text-sm font-medium" style="color: var(--color-text);"
								>System Architecture</span
							>
						</div>
						<div
							class="flex transform items-center justify-center gap-3 rounded-lg p-4 transition-all duration-300 hover:scale-105"
							style="background-color: var(--color-surface); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid var(--color-border);"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full"
								style="background-color: var(--color-primary-light);"
							>
								<svg
									class="h-5 w-5"
									style="color: var(--color-primary);"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<span class="text-sm font-medium" style="color: var(--color-text);"
								>Product Development</span
							>
						</div>
						<div
							class="flex transform items-center justify-center gap-3 rounded-lg p-4 transition-all duration-300 hover:scale-105"
							style="background-color: var(--color-surface); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid var(--color-border);"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full"
								style="background-color: var(--color-primary-light);"
							>
								<svg
									class="h-5 w-5"
									style="color: var(--color-primary);"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</div>
							<span class="text-sm font-medium" style="color: var(--color-text);"
								>Team Leadership</span
							>
						</div>
					</div>
				</div>

				<div class="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="/contact"
						class="btn-primary group relative overflow-hidden px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:-translate-y-1"
					>
						<span class="relative z-10">Let's Build Something Great</span>
						<div
							class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div
							class="light-animate-pulse absolute -inset-1 -z-10 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-40"
							style="background: linear-gradient(135deg, var(--color-primary), #0ea5e9);"
						></div>
						<svg
							class="relative z-10 ml-2 inline h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</a>
					<a
						href="/about"
						class="btn-secondary group relative px-8 py-4 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						<span class="relative z-10">My Approach & Experience</span>
						<div
							class="absolute -inset-1 -z-10 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-20"
							style="background: linear-gradient(135deg, var(--color-primary), #0ea5e9);"
						></div>
					</a>
				</div>

				<div
					class="flex flex-wrap justify-center gap-6 text-sm"
					style="color: var(--color-text-muted);"
				>
					<div class="flex items-center gap-2">
						<svg
							class="h-5 w-5"
							style="color: var(--color-primary);"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
							/>
						</svg>
						{personalInfo.experience} years of real world experience
					</div>
					<div class="flex items-center gap-2">
						<svg
							class="h-5 w-5"
							style="color: var(--color-primary);"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2 0h2m0 0h4m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0V9a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1z"
							/>
						</svg>
						{personalInfo.projectsCompleted} Businesses Transformed
					</div>
					<div class="flex items-center gap-2">
						<svg
							class="h-5 w-5"
							style="color: var(--color-primary);"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Global Impact & Remote First
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Floating Elements - Enhanced for light mode -->
	<div
		class=" animate-floating absolute top-20 left-10 h-32 w-32 rounded-full opacity-50 blur-3xl"
		style="background: radial-gradient(circle at center, rgba(16, 185, 129, 0.5), rgba(16, 185, 129, 0.1)); animation-duration: 8s;"
	></div>
	<div
		class="animate-floating absolute right-10 bottom-20 h-48 w-48 rounded-full opacity-40 blur-3xl"
		style="animation-delay: 1s; animation-duration: 10s; background: radial-gradient(circle at center, rgba(14, 165, 233, 0.5), rgba(14, 165, 233, 0.1));"
	></div>
	<div
		class="animate-floating absolute top-1/2 left-20 h-36 w-36 rounded-full opacity-40 blur-3xl"
		style="animation-delay: 2s; animation-duration: 9s; background: radial-gradient(circle at center, rgba(236, 72, 153, 0.3), rgba(236, 72, 153, 0.05));"
	></div>

	<!-- Dark mode simple floating elements (original style) -->
	<div
		class="animate-bounce-subtle absolute top-20 left-10 h-28 w-28 rounded-full blur-2xl"
		style="background-color: rgba(16, 185, 129, 0.15); opacity: 0.5;"
	></div>
	<div
		class="animate-bounce-subtle absolute right-10 bottom-20 h-40 w-40 rounded-full blur-2xl"
		style="animation-delay: 1s; background-color: rgba(14, 165, 233, 0.15); opacity: 0.5;"
	></div>
	<div
		class=" animate-bounce-subtle absolute top-1/2 left-20 h-24 w-24 rounded-full blur-2xl"
		style="animation-delay: 2s; background-color: rgba(16, 185, 129, 0.15); opacity: 0.5;"
	></div>

	<!-- Advanced floating geometric shapes - light mode only -->
	<div
		class="animate-floating absolute top-20 right-1/4 opacity-60"
		style="animation-duration: 15s;"
	>
		<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M60 10L110 50L90 100L30 100L10 50L60 10Z"
				fill="none"
				stroke="rgba(16, 185, 129, 0.2)"
				stroke-width="1"
			></path>
		</svg>
	</div>
	<div
		class="animate-floating absolute bottom-40 left-1/4 opacity-60"
		style="animation-delay: 3s; animation-duration: 12s;"
	>
		<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
			<circle cx="40" cy="40" r="30" fill="none" stroke="rgba(14, 165, 233, 0.2)" stroke-width="1"
			></circle>
			<circle cx="40" cy="40" r="20" fill="none" stroke="rgba(14, 165, 233, 0.15)" stroke-width="1"
			></circle>
		</svg>
	</div>

	<!-- Animated dots and particles - light mode only -->
	<div
		class="absolute bottom-10 left-1/4 h-2 w-2 animate-ping rounded-full bg-emerald-400"
		style="animation-duration: 3s;"
	></div>
	<div
		class="absolute top-1/4 right-1/3 h-2 w-2 animate-ping rounded-full bg-sky-400"
		style="animation-duration: 4s; animation-delay: 1s;"
	></div>
	<div
		class="absolute right-1/4 bottom-1/3 h-2 w-2 animate-ping rounded-full bg-emerald-400"
		style="animation-duration: 5s; animation-delay: 2s;"
	></div>
	<div
		class="absolute top-1/3 left-1/3 h-3 w-3 animate-ping rounded-full bg-pink-400"
		style="animation-duration: 6s; animation-delay: 0.5s;"
	></div>
	<div
		class="absolute top-2/3 right-1/3 h-3 w-3 animate-ping rounded-full bg-blue-400"
		style="animation-duration: 4.5s; animation-delay: 1.5s;"
	></div>

	<!-- Simple dots for dark mode (original style) -->
	<div
		class="absolute bottom-10 left-1/4 h-2 w-2 animate-ping rounded-full bg-emerald-400"
		style="animation-duration: 3s;"
	></div>
	<div
		class="absolute top-1/4 right-1/3 h-2 w-2 animate-ping rounded-full bg-sky-400"
		style="animation-duration: 4s; animation-delay: 1s;"
	></div>
	<div
		class="absolute right-1/4 bottom-1/3 h-2 w-2 animate-ping rounded-full bg-emerald-400"
		style="animation-duration: 5s; animation-delay: 2s;"
	></div>

	<!-- Interactive grid points - light mode only -->
	<div class=" pointer-events-none absolute inset-0 opacity-40">
		<div class="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-emerald-500"></div>
		<div class="absolute top-1/4 left-2/4 h-1 w-1 rounded-full bg-emerald-500"></div>
		<div class="absolute top-1/4 left-3/4 h-1 w-1 rounded-full bg-emerald-500"></div>
		<div class="absolute top-2/4 left-1/4 h-1 w-1 rounded-full bg-sky-500"></div>
		<div class="absolute top-2/4 left-2/4 h-1 w-1 rounded-full bg-sky-500"></div>
		<div class="absolute top-2/4 left-3/4 h-1 w-1 rounded-full bg-sky-500"></div>
		<div class="absolute top-3/4 left-1/4 h-1 w-1 rounded-full bg-pink-500"></div>
		<div class="absolute top-3/4 left-2/4 h-1 w-1 rounded-full bg-pink-500"></div>
		<div class="absolute top-3/4 left-3/4 h-1 w-1 rounded-full bg-pink-500"></div>
	</div>
</section>

<style>
	/* Add animation for the hero section */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Mode-specific display classes */
	:global(.dark) .light-mode-only {
		display: none !important;
	}

	/* Dark mode specific styles */
	:global(.dark) .animate-bounce-subtle {
		background-color: var(--color-primary) !important;
		opacity: 0.1 !important;
	}

	/* Reduce animation opacity in dark mode */
	:global(.dark) .animate-floating {
		opacity: 0.1 !important;
	}

	/* Only show enhanced elements in light mode */
	:global(.dark) .absolute svg,
	:global(.dark) .absolute.opacity-40 {
		opacity: 0.1 !important;
	}
</style>
