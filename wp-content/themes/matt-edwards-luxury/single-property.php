<?php
/**
 * Single Property Template
 *
 * @package Matt_Edwards_Luxury
 */

get_header();

$details = matt_edwards_get_property_details();
$neighborhoods = get_the_terms(get_the_ID(), 'neighborhood');
$property_types = get_the_terms(get_the_ID(), 'property_type');
$neighborhood_name = $neighborhoods ? $neighborhoods[0]->name : '';
?>

<section class="property-hero">
    <div class="hero-background">
        <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('hero-image'); ?>
        <?php else : ?>
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/property-placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
        <?php endif; ?>
    </div>
    <div class="hero-overlay"></div>
    <div class="property-hero-content">
        <?php if ($neighborhood_name) : ?>
            <span class="section-label"><?php echo esc_html($neighborhood_name); ?></span>
        <?php endif; ?>
        <h1><?php the_title(); ?></h1>
        <?php if ($details['address']) : ?>
            <p class="property-address"><?php echo esc_html($details['address']); ?></p>
        <?php endif; ?>
    </div>
</section>

<section class="property-overview section">
    <div class="container">
        <div class="property-overview-grid">
            <div class="property-stats">
                <?php if ($details['bedrooms']) : ?>
                    <div class="property-stat">
                        <span class="stat-number"><?php echo esc_html($details['bedrooms']); ?></span>
                        <span class="stat-label"><?php esc_html_e('Bedrooms', 'matt-edwards-luxury'); ?></span>
                    </div>
                <?php endif; ?>
                <?php if ($details['bathrooms']) : ?>
                    <div class="property-stat">
                        <span class="stat-number"><?php echo esc_html($details['bathrooms']); ?></span>
                        <span class="stat-label"><?php esc_html_e('Bathrooms', 'matt-edwards-luxury'); ?></span>
                    </div>
                <?php endif; ?>
                <?php if ($details['sqft']) : ?>
                    <div class="property-stat">
                        <span class="stat-number"><?php echo esc_html($details['sqft']); ?></span>
                        <span class="stat-label"><?php esc_html_e('Sq Ft', 'matt-edwards-luxury'); ?></span>
                    </div>
                <?php endif; ?>
            </div>

            <div class="property-price-box">
                <?php if ($details['status']) : ?>
                    <span class="property-status property-status-<?php echo esc_attr($details['status']); ?>">
                        <?php echo esc_html(matt_edwards_get_property_status_label($details['status'])); ?>
                    </span>
                <?php endif; ?>
                <div class="property-price"><?php echo esc_html(matt_edwards_get_property_price()); ?></div>
            </div>
        </div>
    </div>
</section>

<section class="property-content section">
    <div class="container">
        <div class="property-content-grid">
            <div class="property-description">
                <h2><?php esc_html_e('Property Description', 'matt-edwards-luxury'); ?></h2>
                <?php the_content(); ?>

                <?php if ($property_types) : ?>
                    <div class="property-tags">
                        <strong><?php esc_html_e('Property Type:', 'matt-edwards-luxury'); ?></strong>
                        <?php foreach ($property_types as $type) : ?>
                            <span class="property-tag"><?php echo esc_html($type->name); ?></span>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>

            <div class="property-sidebar">
                <div class="property-contact-card">
                    <h3><?php esc_html_e('Interested in this property?', 'matt-edwards-luxury'); ?></h3>
                    <p><?php esc_html_e('Contact Matt Edwards to schedule a private showing or learn more about this listing.', 'matt-edwards-luxury'); ?></p>

                    <div class="agent-info">
                        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/matt-edwards-headshot.jpg'); ?>" alt="Matt Edwards" class="agent-photo">
                        <div>
                            <strong>Matt Edwards</strong>
                            <span><?php esc_html_e('Luxury Real Estate Specialist', 'matt-edwards-luxury'); ?></span>
                        </div>
                    </div>

                    <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('contact_phone', '3055550123'))); ?>" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">
                        <?php echo esc_html(get_theme_mod('contact_phone', '(305) 555-0123')); ?>
                    </a>

                    <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>?subject=Inquiry: <?php echo esc_attr(get_the_title()); ?>" class="btn btn-outline" style="width: 100%;">
                        <?php esc_html_e('Send Email', 'matt-edwards-luxury'); ?>
                    </a>
                </div>

                <?php if ($details['video_url']) : ?>
                    <div class="property-video-card">
                        <h3><?php esc_html_e('Property Video', 'matt-edwards-luxury'); ?></h3>
                        <div class="media-video-wrapper">
                            <?php
                            $video_id = '';
                            if (preg_match('/youtube\.com\/watch\?v=([^&]+)/', $details['video_url'], $matches)) {
                                $video_id = $matches[1];
                            } elseif (preg_match('/youtu\.be\/([^?]+)/', $details['video_url'], $matches)) {
                                $video_id = $matches[1];
                            }
                            if ($video_id) :
                            ?>
                                <iframe src="https://www.youtube.com/embed/<?php echo esc_attr($video_id); ?>" frameborder="0" allowfullscreen></iframe>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <?php if ($details['virtual_tour']) : ?>
                    <div class="property-tour-card">
                        <h3><?php esc_html_e('Virtual Tour', 'matt-edwards-luxury'); ?></h3>
                        <a href="<?php echo esc_url($details['virtual_tour']); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%;">
                            <?php esc_html_e('View Virtual Tour', 'matt-edwards-luxury'); ?>
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<?php
// Related Properties
$related_args = array(
    'post_type' => 'property',
    'posts_per_page' => 3,
    'post__not_in' => array(get_the_ID()),
);

if ($neighborhoods) {
    $related_args['tax_query'] = array(
        array(
            'taxonomy' => 'neighborhood',
            'field' => 'term_id',
            'terms' => $neighborhoods[0]->term_id,
        ),
    );
}

$related = new WP_Query($related_args);

if ($related->have_posts()) :
?>
<section class="section section-lg listings-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><?php esc_html_e('Similar Properties', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('You May Also Like', 'matt-edwards-luxury'); ?></h2>
        </div>

        <div class="listings-grid">
            <?php while ($related->have_posts()) : $related->the_post();
                $rel_details = matt_edwards_get_property_details();
                $rel_neighborhoods = get_the_terms(get_the_ID(), 'neighborhood');
                ?>
                <article class="listing-card fade-in">
                    <a href="<?php the_permalink(); ?>">
                        <div class="listing-image">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('listing-medium'); ?>
                            <?php else : ?>
                                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/property-placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
                            <?php endif; ?>
                            <?php if ($rel_details['status']) : ?>
                                <span class="listing-badge"><?php echo esc_html(matt_edwards_get_property_status_label($rel_details['status'])); ?></span>
                            <?php endif; ?>
                        </div>
                        <div class="listing-content">
                            <?php if ($rel_neighborhoods) : ?>
                                <span class="listing-location"><?php echo esc_html($rel_neighborhoods[0]->name); ?></span>
                            <?php endif; ?>
                            <h3 class="listing-title"><?php the_title(); ?></h3>
                            <div class="listing-details">
                                <?php if ($rel_details['bedrooms']) : ?>
                                    <span class="listing-detail"><?php echo esc_html($rel_details['bedrooms']); ?> Beds</span>
                                <?php endif; ?>
                                <?php if ($rel_details['bathrooms']) : ?>
                                    <span class="listing-detail"><?php echo esc_html($rel_details['bathrooms']); ?> Baths</span>
                                <?php endif; ?>
                                <?php if ($rel_details['sqft']) : ?>
                                    <span class="listing-detail"><?php echo esc_html($rel_details['sqft']); ?> Sq Ft</span>
                                <?php endif; ?>
                            </div>
                            <div class="listing-price"><?php echo esc_html(matt_edwards_get_property_price()); ?></div>
                        </div>
                    </a>
                </article>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </div>
</section>
<?php endif; ?>

<style>
.property-hero {
    position: relative;
    height: 70vh;
    min-height: 500px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 4rem;
}

.property-hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: var(--color-white);
}

.property-hero-content h1 {
    color: var(--color-white);
    margin-bottom: 0.5rem;
}

.property-address {
    font-size: 1.1rem;
    color: var(--color-light-gray);
}

.property-overview-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-light-gray);
}

.property-stats {
    display: flex;
    gap: 3rem;
}

.property-stat {
    text-align: center;
}

.property-stat .stat-number {
    font-family: var(--font-primary);
    font-size: 2rem;
    color: var(--color-black);
    display: block;
}

.property-stat .stat-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-medium-gray);
}

.property-price-box {
    text-align: right;
}

.property-status {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    background: var(--color-gold);
    color: var(--color-black);
    margin-bottom: 0.5rem;
}

.property-price {
    font-family: var(--font-primary);
    font-size: 2.5rem;
    color: var(--color-black);
}

.property-content-grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 4rem;
}

.property-description h2 {
    margin-bottom: 1.5rem;
}

.property-description p {
    margin-bottom: 1.5rem;
    line-height: 1.9;
}

.property-tags {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-light-gray);
}

.property-tag {
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    background: var(--color-off-white);
    margin-left: 0.5rem;
}

.property-sidebar > div {
    background: var(--color-off-white);
    padding: 2rem;
    margin-bottom: 2rem;
}

.property-sidebar h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.agent-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 1rem 0;
    border-top: 1px solid var(--color-light-gray);
    border-bottom: 1px solid var(--color-light-gray);
}

.agent-photo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}

.agent-info strong {
    display: block;
    color: var(--color-black);
}

.agent-info span {
    font-size: 0.85rem;
    color: var(--color-medium-gray);
}

@media (max-width: 992px) {
    .property-content-grid {
        grid-template-columns: 1fr;
    }

    .property-overview-grid {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }

    .property-price-box {
        text-align: center;
    }
}
</style>

<?php get_footer(); ?>
