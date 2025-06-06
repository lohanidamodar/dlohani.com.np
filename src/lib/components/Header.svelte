<script>
	import { page } from '$app/state';
	import { navItems } from '$lib/data';

	/** @type {{darkMode: boolean, onToggleDarkMode: () => void}} */
	let { darkMode, onToggleDarkMode } = $props();

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<!-- Navigation -->
<nav
	class="fixed top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300"
	style="border-color: var(--color-border); background-color: var(--color-background); background-opacity: 0.85;"
>
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="group flex items-center space-x-3">
				<div
					class="flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
					style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);"
				>
					<span class="text-lg font-bold text-white">DL</span>
				</div>
				<span
					class="text-lg font-semibold transition-opacity duration-300 group-hover:opacity-90"
					style="color: var(--color-text);">Damodar Lohani</span
				>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						target={item.target || '_self'}
						class="font-medium transition-all duration-200 hover:opacity-80"
						class:active-link={page.url.pathname === item.href}
						style="color: {page.url.pathname === item.href
							? 'var(--color-primary)'
							: 'var(--color-text-muted)'}"
					>
						{item.label}
					</a>
				{/each}

				<!-- Dark Mode Toggle -->
				<button
					onclick={onToggleDarkMode}
					class="rounded-full p-2 transition-all duration-200 hover:opacity-80"
					style="background-color: var(--color-surface); color: var(--color-text-muted);"
					aria-label="Toggle dark mode"
				>
					<span class="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
					{#if darkMode}
						<!-- Sun icon for dark mode (clicking will switch to light) -->
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{:else}
						<!-- Moon icon for light mode (clicking will switch to dark) -->
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>

				<!-- CTA Button -->
				<a
					href="/subscribe"
					class="btn-primary inline-flex items-center rounded-full px-6 py-2 font-medium transition-all duration-300"
					style="background-color: var(--color-primary); color: white; box-shadow: 0 4px 14px rgba(220, 38, 38, 0.15);"
				>
					Subscribe
					<svg class="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex items-center space-x-3 md:hidden">
				<button
					onclick={onToggleDarkMode}
					class="rounded-full p-2 transition-all duration-200"
					style="background-color: var(--color-surface); color: var(--color-text-muted);"
					aria-label="Toggle dark mode"
				>
					<span class="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
					{#if darkMode}
						<!-- Sun icon for dark mode (clicking will switch to light) -->
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{:else}
						<!-- Moon icon for light mode (clicking will switch to dark) -->
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>

				<button
					onclick={toggleMobileMenu}
					class="rounded-full p-2 transition-all duration-200"
					style="color: var(--color-text-muted);"
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div
				class="border-t py-5 transition-all duration-300 md:hidden"
				style="border-color: var(--color-border-light);"
			>
				<div class="space-y-4 px-1">
					{#each navItems as item}
						<a
							href={item.href}
							class="block py-2 font-medium transition-all duration-200"
							style="color: {page.url.pathname === item.href
								? 'var(--color-primary)'
								: 'var(--color-text-muted)'}"
							onclick={() => (mobileMenuOpen = false)}
						>
							{item.label}
						</a>
					{/each}
					<a
						href="/subscribe"
						class="btn-primary mt-6 flex w-full items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300"
						style="background-color: var(--color-primary); color: white;"
						onclick={() => (mobileMenuOpen = false)}
					>
						Subscribe
						<svg class="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>
