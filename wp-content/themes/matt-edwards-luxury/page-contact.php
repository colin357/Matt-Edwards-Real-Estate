<?php
/**
 * Template Name: Contact Page
 *
 * @package Matt_Edwards_Luxury
 */

get_header();
?>

<section class="page-hero" style="height: 50vh; min-height: 350px;">
    <div class="hero-background">
        <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('hero-image'); ?>
        <?php else : ?>
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/contact-hero.jpg'); ?>" alt="<?php esc_attr_e('Contact Matt Edwards', 'matt-edwards-luxury'); ?>">
        <?php endif; ?>
    </div>
    <div class="hero-overlay"></div>
    <div class="page-hero-content">
        <span class="section-label"><?php esc_html_e('Get In Touch', 'matt-edwards-luxury'); ?></span>
        <h1><?php the_title(); ?></h1>
    </div>
</section>

<section class="section section-lg">
    <div class="container">
        <div class="contact-page-grid">
            <!-- Contact Info -->
            <div class="contact-info-section fade-in">
                <h2><?php esc_html_e('Let\'s Start a Conversation', 'matt-edwards-luxury'); ?></h2>
                <p class="contact-intro"><?php esc_html_e('Whether you\'re ready to buy, thinking about selling, or simply want to learn more about the Miami luxury market, I\'m here to help. Reach out directly or fill out the form and I\'ll be in touch within 24 hours.', 'matt-edwards-luxury'); ?></p>

                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="contact-method-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <h4><?php esc_html_e('Phone', 'matt-edwards-luxury'); ?></h4>
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('contact_phone', '3055550123'))); ?>">
                                <?php echo esc_html(get_theme_mod('contact_phone', '(305) 555-0123')); ?>
                            </a>
                        </div>
                    </div>

                    <div class="contact-method">
                        <div class="contact-method-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                            <h4><?php esc_html_e('Email', 'matt-edwards-luxury'); ?></h4>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>">
                                <?php echo esc_html(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>
                            </a>
                        </div>
                    </div>

                    <div class="contact-method">
                        <div class="contact-method-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <h4><?php esc_html_e('Office', 'matt-edwards-luxury'); ?></h4>
                            <span><?php echo esc_html(get_theme_mod('contact_address', '1000 Brickell Avenue, Suite 500, Miami, FL 33131')); ?></span>
                        </div>
                    </div>
                </div>

                <div class="contact-social">
                    <h4><?php esc_html_e('Follow Along', 'matt-edwards-luxury'); ?></h4>
                    <div class="social-links">
                        <?php if (get_theme_mod('social_instagram')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_instagram')); ?>" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <?php endif; ?>
                        <?php if (get_theme_mod('social_linkedin')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_linkedin')); ?>" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <?php endif; ?>
                        <?php if (get_theme_mod('social_youtube')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_youtube')); ?>" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <?php endif; ?>
                        <?php if (get_theme_mod('social_facebook')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form-section fade-in">
                <form id="contact-form" class="contact-page-form" method="post">
                    <?php wp_nonce_field('matt_edwards_contact_form', 'matt_edwards_contact_nonce'); ?>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-name"><?php esc_html_e('Name', 'matt-edwards-luxury'); ?> *</label>
                            <input type="text" id="contact-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-phone"><?php esc_html_e('Phone', 'matt-edwards-luxury'); ?></label>
                            <input type="tel" id="contact-phone" name="phone">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="contact-email"><?php esc_html_e('Email', 'matt-edwards-luxury'); ?> *</label>
                        <input type="email" id="contact-email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="contact-interest"><?php esc_html_e('I\'m Interested In', 'matt-edwards-luxury'); ?></label>
                        <select id="contact-interest" name="interest">
                            <option value=""><?php esc_html_e('Select an option', 'matt-edwards-luxury'); ?></option>
                            <option value="buying"><?php esc_html_e('Buying a Property', 'matt-edwards-luxury'); ?></option>
                            <option value="selling"><?php esc_html_e('Selling a Property', 'matt-edwards-luxury'); ?></option>
                            <option value="both"><?php esc_html_e('Both Buying & Selling', 'matt-edwards-luxury'); ?></option>
                            <option value="investment"><?php esc_html_e('Investment Properties', 'matt-edwards-luxury'); ?></option>
                            <option value="consultation"><?php esc_html_e('General Consultation', 'matt-edwards-luxury'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="contact-budget"><?php esc_html_e('Budget Range', 'matt-edwards-luxury'); ?></label>
                        <select id="contact-budget" name="budget">
                            <option value=""><?php esc_html_e('Select a range', 'matt-edwards-luxury'); ?></option>
                            <option value="1-3m"><?php esc_html_e('$1M - $3M', 'matt-edwards-luxury'); ?></option>
                            <option value="3-5m"><?php esc_html_e('$3M - $5M', 'matt-edwards-luxury'); ?></option>
                            <option value="5-10m"><?php esc_html_e('$5M - $10M', 'matt-edwards-luxury'); ?></option>
                            <option value="10-20m"><?php esc_html_e('$10M - $20M', 'matt-edwards-luxury'); ?></option>
                            <option value="20m+"><?php esc_html_e('$20M+', 'matt-edwards-luxury'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="contact-message"><?php esc_html_e('Message', 'matt-edwards-luxury'); ?> *</label>
                        <textarea id="contact-message" name="message" rows="5" required placeholder="<?php esc_attr_e('Tell me about what you\'re looking for...', 'matt-edwards-luxury'); ?>"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary"><?php esc_html_e('Send Message', 'matt-edwards-luxury'); ?></button>

                    <div class="form-response"></div>
                </form>
            </div>
        </div>
    </div>
</section>

<style>
.contact-page-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
}

.contact-info-section h2 {
    margin-bottom: 1rem;
}

.contact-intro {
    font-size: 1.1rem;
    margin-bottom: 3rem;
}

.contact-methods {
    margin-bottom: 3rem;
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.contact-method-icon {
    color: var(--color-gold);
    flex-shrink: 0;
}

.contact-method h4 {
    font-family: var(--font-secondary);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
}

.contact-method a,
.contact-method span {
    color: var(--color-medium-gray);
    font-size: 1.05rem;
}

.contact-method a:hover {
    color: var(--color-gold);
}

.contact-social h4 {
    font-family: var(--font-secondary);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.social-links {
    display: flex;
    gap: 1.5rem;
}

.social-links a {
    color: var(--color-medium-gray);
    font-size: 0.9rem;
}

.social-links a:hover {
    color: var(--color-gold);
}

.contact-page-form {
    background: var(--color-off-white);
    padding: 3rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.contact-page-form .form-group {
    margin-bottom: 1.5rem;
}

.contact-page-form label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-charcoal);
    margin-bottom: 0.5rem;
}

.contact-page-form input,
.contact-page-form select,
.contact-page-form textarea {
    width: 100%;
    padding: 1rem;
    font-family: var(--font-secondary);
    font-size: 1rem;
    color: var(--color-charcoal);
    background: var(--color-white);
    border: 1px solid var(--color-light-gray);
    transition: border-color 0.3s ease;
}

.contact-page-form input:focus,
.contact-page-form select:focus,
.contact-page-form textarea:focus {
    outline: none;
    border-color: var(--color-gold);
}

.contact-page-form .btn {
    width: 100%;
    margin-top: 1rem;
}

.form-response {
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    display: none;
}

.form-response.success {
    display: block;
    background: #d4edda;
    color: #155724;
}

.form-response.error {
    display: block;
    background: #f8d7da;
    color: #721c24;
}

@media (max-width: 992px) {
    .contact-page-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}
</style>

<?php get_footer(); ?>
