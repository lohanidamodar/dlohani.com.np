<script>
	/**
	 * @typedef {'default' | 'surface' | 'gradient' | 'gradient-subtle' | 'pattern-dots' | 'pattern-grid' | 'pattern-waves' | 'mesh' | 'texture' | 'glass'} BackgroundVariant
	 */

	const {
		variant = 'default',
		padding = 'normal', // 'small' | 'normal' | 'large'
		containerClass = '',
		sectionClass = '',
		children
	} = $props();

	// Generate dynamic classes based on variant and padding
	const paddingClass = $derived(
		{
			small: 'py-8 md:py-12',
			normal: 'py-12 md:py-16 lg:py-20',
			large: 'py-16 md:py-24 lg:py-32'
		}[padding]
	);

	const backgroundClass = $derived(
		{
			default: 'bg-default',
			surface: 'bg-surface',
			gradient: 'bg-gradient',
			'gradient-subtle': 'bg-gradient-subtle',
			'pattern-dots': 'bg-pattern-dots',
			'pattern-grid': 'bg-pattern-grid',
			'pattern-waves': 'bg-pattern-waves',
			mesh: 'bg-mesh',
			texture: 'bg-texture',
			glass: 'bg-glass'
		}[variant]
	);
</script>

<section
	class="section-enhanced {backgroundClass} {paddingClass} {sectionClass}"
	class:has-pattern={variant.includes('pattern')}
>
	<div class="container mx-auto px-4 {containerClass}">
		{@render children()}
	</div>

	<!-- Decorative elements for specific variants -->
	{#if variant === 'mesh'}
		<div class="mesh-decoration" aria-hidden="true"></div>
	{/if}

	{#if variant === 'glass'}
		<div class="glass-decoration" aria-hidden="true"></div>
	{/if}

	<!-- Enhanced decorative elements for light mode -->
	{#if variant === 'gradient-subtle' || variant === 'gradient'}
		<div class="light-mode-decoration" aria-hidden="true"></div>
	{/if}
</section>

<style>
	/* Base section styles */
	.section-enhanced {
		position: relative;
		overflow: hidden;
	}

	/* Background Variants */
	.bg-default {
		background-color: var(--color-background);
	}

	.bg-surface {
		background-color: var(--color-surface);
	}

	.bg-gradient {
		background: linear-gradient(
			135deg,
			var(--color-primary-light) 0%,
			var(--color-surface) 50%,
			var(--color-background) 100%
		);
	}

	.bg-gradient-subtle {
		background: linear-gradient(
			135deg,
			#f8fafc 0%,
			#f1f5f9 30%,
			rgba(16, 185, 129, 0.05) 70%,
			#f8fafc 100%
		);
		position: relative;
	}

	/* Add a pseudo-element for light mode hero sections */
	.bg-gradient-subtle::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		opacity: 0.5;
		pointer-events: none;
		z-index: 0;
	}

	.bg-pattern-dots {
		background-color: var(--color-background);
		background-image: radial-gradient(circle, rgba(5, 150, 105, 0.08) 1px, transparent 1px);
		background-size: 20px 20px;
	}

	.bg-pattern-grid {
		background-color: var(--color-surface);
		background-image:
			linear-gradient(rgba(5, 150, 105, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(5, 150, 105, 0.05) 1px, transparent 1px);
		background-size: 30px 30px;
	}

	.bg-pattern-waves {
		background-color: var(--color-background);
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0-20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E");
	}

	.bg-mesh {
		background:
			radial-gradient(ellipse at top left, rgba(5, 150, 105, 0.15) 0%, transparent 50%),
			radial-gradient(ellipse at top right, rgba(4, 120, 87, 0.1) 0%, transparent 50%),
			radial-gradient(ellipse at bottom left, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
			var(--color-background);
	}

	.bg-texture {
		background-color: var(--color-surface);
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.02'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	.bg-glass {
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
			var(--color-surface);
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(5, 150, 105, 0.1);
		border-bottom: 1px solid rgba(5, 150, 105, 0.1);
	}

	/* Dark mode adjustments */
	:global(.dark) .bg-gradient {
		background: linear-gradient(
			135deg,
			var(--color-primary-light) 0%,
			var(--color-surface) 50%,
			var(--color-background) 100%
		);
	}

	:global(.dark) .bg-gradient-subtle {
		background: linear-gradient(
			135deg,
			var(--color-background) 0%,
			var(--color-surface) 30%,
			rgba(16, 185, 129, 0.03) 70%,
			var(--color-background) 100%
		);
	}

	:global(.dark) .bg-pattern-dots {
		background-image: radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
	}

	:global(.dark) .bg-pattern-grid {
		background-image:
			linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px);
	}

	:global(.dark) .bg-pattern-waves {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0-20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E");
	}

	:global(.dark) .bg-mesh {
		background:
			radial-gradient(ellipse at top left, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
			radial-gradient(ellipse at top right, rgba(5, 150, 105, 0.15) 0%, transparent 50%),
			radial-gradient(ellipse at bottom left, rgba(52, 211, 153, 0.1) 0%, transparent 50%),
			var(--color-background);
	}

	:global(.dark) .bg-texture {
		background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.04'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	:global(.dark) .bg-glass {
		background:
			linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%), var(--color-surface);
		border-top: 1px solid rgba(16, 185, 129, 0.15);
		border-bottom: 1px solid rgba(16, 185, 129, 0.15);
	}

	/* Decorative elements */
	.mesh-decoration {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			radial-gradient(circle at 20% 80%, rgba(5, 150, 105, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(4, 120, 87, 0.1) 0%, transparent 50%);
		pointer-events: none;
		z-index: 0;
	}

	.glass-decoration {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image:
			radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
		pointer-events: none;
		z-index: 0;
	}

	/* Ensure content is above decorations */
	.section-enhanced > .container {
		position: relative;
		z-index: 1;
	}

	/* Pattern-specific adjustments */
	.has-pattern {
		background-attachment: fixed;
	}

	@media (max-width: 768px) {
		.has-pattern {
			background-attachment: scroll;
		}
	}

	/* Accessibility - reduce motion for users who prefer it */
	@media (prefers-reduced-motion: reduce) {
		.section-enhanced {
			background-attachment: scroll !important;
		}
	}

	/* Light mode decorations */
	.light-mode-decoration {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image:
			radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 30%),
			radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.1) 0%, transparent 30%);
		opacity: 0;
		pointer-events: none;
		z-index: 0;
		transition: opacity 0.3s ease;
	}

	:global(:root:not(.dark)) .light-mode-decoration {
		opacity: 1;
	}
</style>
