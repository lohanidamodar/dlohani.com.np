<script>
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let darkMode = $state(false);
	let mounted = $state(false);

	// Initialize theme from localStorage or system preference
	$effect(() => {
		if (browser && mounted) {
			const savedTheme = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

			// Set initial theme
			darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
			updateTheme();
		}
	});

	// Watch for darkMode changes and update the DOM
	$effect(() => {
		if (browser && mounted) {
			updateTheme();
		}
	});

	onMount(() => {
		mounted = true;

		// Initial theme setup
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
		updateTheme();

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e) => {
			if (!localStorage.getItem('theme')) {
				darkMode = e.matches;
			}
		};
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		updateTheme();
	}

	function updateTheme() {
		if (!browser) return;

		const html = document.documentElement;

		// Remove existing theme classes
		html.classList.remove('dark', 'light');

		if (darkMode) {
			html.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			html.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<svelte:head>
	<title>Damodar Lohani - Tech Consultant & Business Advisor</title>
	<meta
		name="description"
		content="Tech consultant helping businesses grow, systematize, and build scalable products. Expert in Flutter, React, Firebase, and modern web technologies."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- Header -->
<Header {darkMode} onToggleDarkMode={toggleDarkMode} />

<!-- Main Content -->
<main class="pt-16">
	{@render children()}
</main>

<!-- Footer -->
<Footer {darkMode} />
