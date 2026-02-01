<?php
/**
 * Template Name: About Page
 *
 * @package Matt_Edwards_Luxury
 */

get_header();
?>

<section class="page-hero">
    <div class="hero-background">
        <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('hero-image'); ?>
        <?php else : ?>
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/about-hero.jpg'); ?>" alt="<?php esc_attr_e('About Matt Edwards', 'matt-edwards-luxury'); ?>">
        <?php endif; ?>
    </div>
    <div class="hero-overlay"></div>
    <div class="page-hero-content">
        <span class="section-label"><?php esc_html_e('Meet Your Agent', 'matt-edwards-luxury'); ?></span>
        <h1><?php the_title(); ?></h1>
    </div>
</section>

<!-- About Introduction -->
<section class="section section-lg about-content">
    <div class="container">
        <div class="about-grid">
            <div class="about-image fade-in">
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/matt-edwards-about.jpg'); ?>" alt="<?php esc_attr_e('Matt Edwards - Miami Luxury Real Estate', 'matt-edwards-luxury'); ?>">
            </div>

            <div class="about-text fade-in">
                <span class="section-label"><?php esc_html_e('About Matt Edwards', 'matt-edwards-luxury'); ?></span>
                <h2><?php esc_html_e('Precision. Privacy. Performance.', 'matt-edwards-luxury'); ?></h2>

                <p><?php esc_html_e('With deep roots in Miami and an intimate understanding of its most prestigious neighborhoods, I\'ve dedicated my career to serving discerning clients who expect nothing less than exceptional results.', 'matt-edwards-luxury'); ?></p>

                <p><?php esc_html_e('My approach to luxury real estate is built on three pillars: precision in every detail, privacy for clients who value discretion, and performance that consistently exceeds expectations. Whether you\'re seeking a waterfront estate in Miami Beach, a historic home in Coral Gables, or a contemporary penthouse in Brickell, I bring the expertise and dedication needed to achieve your goals.', 'matt-edwards-luxury'); ?></p>

                <p><?php esc_html_e('What sets my practice apart is a commitment to modern marketing. I believe exceptional properties deserve exceptional presentation. Through cinematic video production, professional photography, and strategic digital campaigns, I ensure every listing reaches the right buyers—locally and globally.', 'matt-edwards-luxury'); ?></p>
            </div>
        </div>
    </div>
</section>

<!-- Expertise Section -->
<section class="section section-lg" style="background: var(--color-off-white);">
    <div class="container">
        <div class="section-header fade-in">
            <span class="section-label"><?php esc_html_e('Areas of Expertise', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('Specialized Knowledge', 'matt-edwards-luxury'); ?></h2>
        </div>

        <div class="services-grid" style="background: transparent;">
            <div class="service-card fade-in" style="background: var(--color-white); border-color: var(--color-light-gray);">
                <div class="service-icon" style="color: var(--color-gold);">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h3 style="color: var(--color-black);"><?php esc_html_e('Waterfront Properties', 'matt-edwards-luxury'); ?></h3>
                <p><?php esc_html_e('Specialized expertise in Miami\'s waterfront market, from oceanfront estates to bay-view condominiums and yacht-accessible properties.', 'matt-edwards-luxury'); ?></p>
            </div>

            <div class="service-card fade-in" style="background: var(--color-white); border-color: var(--color-light-gray);">
                <div class="service-icon" style="color: var(--color-gold);">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <h3 style="color: var(--color-black);"><?php esc_html_e('Luxury Residences', 'matt-edwards-luxury'); ?></h3>
                <p><?php esc_html_e('Deep understanding of the high-end residential market, including single-family estates, luxury condos, and exclusive gated communities.', 'matt-edwards-luxury'); ?></p>
            </div>

            <div class="service-card fade-in" style="background: var(--color-white); border-color: var(--color-light-gray);">
                <div class="service-icon" style="color: var(--color-gold);">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </div>
                <h3 style="color: var(--color-black);"><?php esc_html_e('Lifestyle Matching', 'matt-edwards-luxury'); ?></h3>
                <p><?php esc_html_e('Beyond properties, I help clients find homes that match their lifestyle—whether that\'s proximity to golf courses, private schools, or cultural venues.', 'matt-edwards-luxury'); ?></p>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="section section-lg" style="background: var(--color-charcoal);">
    <div class="container">
        <div class="intro-stats fade-in" style="border-top: none; padding-top: 0; max-width: 900px; margin: 0 auto;">
            <div class="stat-item">
                <div class="stat-number">$250M+</div>
                <div class="stat-label" style="color: var(--color-light-gray);"><?php esc_html_e('Career Sales Volume', 'matt-edwards-luxury'); ?></div>
            </div>
            <div class="stat-item">
                <div class="stat-number">150+</div>
                <div class="stat-label" style="color: var(--color-light-gray);"><?php esc_html_e('Properties Sold', 'matt-edwards-luxury'); ?></div>
            </div>
            <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label" style="color: var(--color-light-gray);"><?php esc_html_e('Years Experience', 'matt-edwards-luxury'); ?></div>
            </div>
        </div>
    </div>
</section>

<!-- Miami Knowledge -->
<section class="section section-lg">
    <div class="container container-narrow">
        <div class="text-center fade-in">
            <span class="section-label"><?php esc_html_e('Local Expertise', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('I Know Miami', 'matt-edwards-luxury'); ?></h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;"><?php esc_html_e('Having called Miami home for over two decades, I\'ve developed an intimate knowledge of every neighborhood, street, and building in the luxury market. This isn\'t just business—it\'s personal. I live here, I raise my family here, and I\'m deeply invested in the community.', 'matt-edwards-luxury'); ?></p>
            <p style="font-size: 1.1rem;"><?php esc_html_e('From the art deco charm of South Beach to the Mediterranean elegance of Coral Gables, from the bohemian spirit of Coconut Grove to the urban sophistication of Brickell—I understand what makes each neighborhood unique and can help you find the perfect fit for your lifestyle.', 'matt-edwards-luxury'); ?></p>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section section-lg contact-section">
    <div class="container">
        <div class="text-center fade-in" style="max-width: 700px; margin: 0 auto;">
            <span class="section-label"><?php esc_html_e('Let\'s Connect', 'matt-edwards-luxury'); ?></span>
            <h2 style="color: var(--color-white);"><?php esc_html_e('Ready to Get Started?', 'matt-edwards-luxury'); ?></h2>
            <p style="color: var(--color-light-gray); margin-bottom: 2rem;"><?php esc_html_e('Whether you\'re buying, selling, or just exploring the Miami luxury market, I\'m here to help. Let\'s schedule a conversation.', 'matt-edwards-luxury'); ?></p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-primary"><?php esc_html_e('Contact Me', 'matt-edwards-luxury'); ?></a>
                <a href="<?php echo esc_url(home_url('/properties/')); ?>" class="btn btn-outline-white"><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></a>
            </div>
        </div>
    </div>
</section>

<style>
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

.about-text h2 {
    margin-bottom: 1.5rem;
}

.about-text p {
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.9;
}

@media (max-width: 992px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-image img {
        height: 400px;
    }
}
</style>

<?php get_footer(); ?>
