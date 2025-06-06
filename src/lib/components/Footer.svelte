<script>
	import { navItems, socialLinks } from '$lib/data.js';

	/** @type {{darkMode?: boolean}} */
	let { darkMode = false } = $props();
</script>

<!-- Footer -->
<footer
	class="section-padding fade-in"
	style="background-color: var(--color-surface); color: var(--color-text);"
>
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-4">
			<!-- Company Info -->
			<div class="md:col-span-2">
				<div class="mb-6 flex items-center space-x-3">
					<div
						class="flex h-9 w-9 items-center justify-center rounded-lg"
						style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);"
					>
						<span class="text-lg font-bold text-white">DL</span>
					</div>
					<span class="text-lg font-semibold" style="color: var(--color-text);">Damodar Lohani</span
					>
				</div>
				<p class="mb-6 max-w-md" style="color: var(--color-text-muted);">
					Tech consultant helping businesses grow, systematize, and build scalable products with
					modern technologies.
				</p>
				<div class="flex space-x-5">
					{#each socialLinks as social}
						<a
							href={social.url}
							target="_blank"
							class="transition-all duration-200 hover:opacity-80"
							style="color: var(--color-text-muted);"
							aria-label={social.name}
						>
							{#if social.icon === 'github'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							{:else if social.icon === 'linkedin'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							{:else if social.icon === 'twitter'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
									/>
								</svg>
							{:else if social.icon === 'youtube'}
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
									/>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-5 text-base font-semibold" style="color: var(--color-text);">Quick Links</h3>
				<ul class="space-y-3">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								target={item.target || '_self'}
								class="transition-all duration-200 hover:opacity-80"
								style="color: var(--color-text-muted);">{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-5 text-base font-semibold" style="color: var(--color-text);">Contact</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="/contact"
							class="transition-all duration-200 hover:opacity-80"
							style="color: var(--color-text-muted);">Get In Touch</a
						>
					</li>
					<li>
						<a
							href="/book"
							class="transition-all duration-200 hover:opacity-80"
							style="color: var(--color-text-muted);">Schedule a Call</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="mt-8 pt-8 text-center"
			style="border-top: 1px solid var(--color-border); color: var(--color-text-muted);"
		>
			<p>&copy; {new Date().getFullYear()} Damodar Lohani. All rights reserved.</p>
		</div>
	</div>
</footer>
