<!-- Call-to-Action Section Component -->
<section class="cta-section">
	<div class="cta-container">
		<div class="cta-content">
			<!-- Heading -->
			<h2 class="cta-heading">Ready to transform your business?</h2>

			<!-- Description -->
			<p class="cta-description">
				Let's work together to build scalable solutions that drive growth and innovation for your
				company.
			</p>

			<!-- Action Buttons -->
			<div class="cta-buttons">
				<a href="/contact" class="btn-primary-cta">
					<span>Get Started Today</span>
					<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>

				<a href="/book" class="btn-secondary-cta">
					<span>Schedule a Call</span>
					<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<!-- Background decoration -->
	<div class="cta-decoration" aria-hidden="true"></div>
</section>

<style>
	/* Main section styling */
	.cta-section {
		position: relative;
		padding: 5rem 0;
		background: linear-gradient(135deg, var(--color-primary) 0%, #047857 100%);
		overflow: hidden;
	}

	/* Container */
	.cta-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		position: relative;
		z-index: 10;
	}

	/* Content wrapper */
	.cta-content {
		max-width: 48rem;
		margin: 0 auto;
		text-align: center;
	}

	/* Heading styles */
	.cta-heading {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.1;
		color: white;
		margin-bottom: 1.5rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	/* Description styles */
	.cta-description {
		font-size: 1.125rem;
		line-height: 1.7;
		color: white;
		margin-bottom: 2.5rem;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}

	/* Button container */
	.cta-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}

	/* Primary button */
	.btn-primary-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.95) 0%,
			rgba(236, 253, 245, 0.9) 100%
		);
		color: var(--color-primary);
		padding: 1rem 2rem;
		border-radius: 0.75rem;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
		border: 1px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px);
		cursor: pointer;
		min-width: 200px;
		justify-content: center;
	}

	.btn-primary-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 30px rgba(5, 150, 105, 0.2);
		background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(236, 253, 245, 1) 100%);
		border-color: rgba(5, 150, 105, 0.2);
	}

	.btn-primary-cta:active {
		transform: translateY(0);
	}

	/* Secondary button */
	.btn-secondary-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		padding: 1rem 2rem;
		border: 2px solid rgba(255, 255, 255, 0.8);
		border-radius: 0.75rem;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(15px);
		cursor: pointer;
		min-width: 200px;
		justify-content: center;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
	}

	.btn-secondary-cta:hover {
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.95) 0%,
			rgba(236, 253, 245, 0.9) 100%
		);
		color: var(--color-primary);
		border-color: rgba(255, 255, 255, 0.9);
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(5, 150, 105, 0.15);
	}

	.btn-secondary-cta:active {
		transform: translateY(0);
	}

	/* Button icons */
	.btn-icon {
		width: 1.25rem;
		height: 1.25rem;
		transition: transform 0.3s ease;
	}

	.btn-primary-cta:hover .btn-icon {
		transform: translateX(2px);
	}

	.btn-secondary-cta:hover .btn-icon {
		transform: scale(1.1);
	}

	/* Background decoration */
	.cta-decoration {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image:
			radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
		pointer-events: none;
	}

	/* Responsive design */
	@media (min-width: 640px) {
		.cta-buttons {
			flex-direction: row;
			gap: 1.5rem;
		}

		.cta-heading {
			font-size: 3rem;
		}

		.cta-description {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 768px) {
		.cta-section {
			padding: 6rem 0;
		}

		.cta-heading {
			font-size: 3.5rem;
		}

		.cta-container {
			padding: 0 2rem;
		}
	}

	@media (min-width: 1024px) {
		.cta-heading {
			font-size: 4rem;
		}

		.cta-description {
			font-size: 1.375rem;
		}
	}

	/* Focus states for accessibility */
	.btn-primary-cta:focus-visible,
	.btn-secondary-cta:focus-visible {
		outline: 2px solid white;
		outline-offset: 2px;
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.btn-primary-cta,
		.btn-secondary-cta,
		.btn-icon {
			transition: none;
		}

		.btn-primary-cta:hover,
		.btn-secondary-cta:hover {
			transform: none;
		}
	}
</style>
