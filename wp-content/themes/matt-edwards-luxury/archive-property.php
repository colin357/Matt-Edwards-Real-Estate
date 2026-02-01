<?php
/**
 * Property Archive Template
 *
 * @package Matt_Edwards_Luxury
 */

get_header();
?>

<section class="page-hero">
    <div class="hero-background">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/listings-hero.jpg'); ?>" alt="<?php esc_attr_e('Luxury Properties', 'matt-edwards-luxury'); ?>">
    </div>
    <div class="hero-overlay"></div>
    <div class="page-hero-content">
        <span class="section-label"><?php esc_html_e('Luxury Real Estate', 'matt-edwards-luxury'); ?></span>
        <h1><?php esc_html_e('Properties', 'matt-edwards-luxury'); ?></h1>
        <p><?php esc_html_e('Discover Miami\'s most exceptional homes and estates', 'matt-edwards-luxury'); ?></p>
    </div>
</section>

<section class="section section-lg">
    <div class="container">
        <!-- Filters -->
        <div class="listings-filter fade-in">
            <button class="filter-btn active" data-filter="all"><?php esc_html_e('All Properties', 'matt-edwards-luxury'); ?></button>
            <?php
            $property_types = get_terms(array(
                'taxonomy' => 'property_type',
                'hide_empty' => true,
            ));
            if (!is_wp_error($property_types) && !empty($property_types)) :
                foreach ($property_types as $type) :
            ?>
                <button class="filter-btn" data-filter="<?php echo esc_attr($type->slug); ?>"><?php echo esc_html($type->name); ?></button>
            <?php
                endforeach;
            endif;
            ?>
        </div>

        <!-- Property Grid -->
        <?php if (have_posts()) : ?>
            <div class="listings-grid">
                <?php while (have_posts()) : the_post();
                    $details = matt_edwards_get_property_details();
                    $neighborhoods = get_the_terms(get_the_ID(), 'neighborhood');
                    $types = get_the_terms(get_the_ID(), 'property_type');
                    $type_classes = $types ? implode(' ', wp_list_pluck($types, 'slug')) : '';
                ?>
                    <article class="listing-card fade-in" data-category="<?php echo esc_attr($type_classes); ?>">
                        <a href="<?php the_permalink(); ?>">
                            <div class="listing-image">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('listing-medium'); ?>
                                <?php else : ?>
                                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/property-placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
                                <?php endif; ?>
                                <?php if ($details['status']) : ?>
                                    <span class="listing-badge"><?php echo esc_html(matt_edwards_get_property_status_label($details['status'])); ?></span>
                                <?php endif; ?>
                            </div>
                            <div class="listing-content">
                                <?php if ($neighborhoods) : ?>
                                    <span class="listing-location"><?php echo esc_html($neighborhoods[0]->name); ?></span>
                                <?php endif; ?>
                                <h3 class="listing-title"><?php the_title(); ?></h3>
                                <div class="listing-details">
                                    <?php if ($details['bedrooms']) : ?>
                                        <span class="listing-detail"><?php echo esc_html($details['bedrooms']); ?> <?php esc_html_e('Beds', 'matt-edwards-luxury'); ?></span>
                                    <?php endif; ?>
                                    <?php if ($details['bathrooms']) : ?>
                                        <span class="listing-detail"><?php echo esc_html($details['bathrooms']); ?> <?php esc_html_e('Baths', 'matt-edwards-luxury'); ?></span>
                                    <?php endif; ?>
                                    <?php if ($details['sqft']) : ?>
                                        <span class="listing-detail"><?php echo esc_html($details['sqft']); ?> <?php esc_html_e('Sq Ft', 'matt-edwards-luxury'); ?></span>
                                    <?php endif; ?>
                                </div>
                                <div class="listing-price"><?php echo esc_html(matt_edwards_get_property_price()); ?></div>
                            </div>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>

            <div class="listings-cta" style="margin-top: 3rem;">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => __('&laquo; Previous', 'matt-edwards-luxury'),
                    'next_text' => __('Next &raquo;', 'matt-edwards-luxury'),
                ));
                ?>
            </div>
        <?php else : ?>
            <div class="text-center" style="padding: 4rem 0;">
                <h2><?php esc_html_e('No properties found', 'matt-edwards-luxury'); ?></h2>
                <p><?php esc_html_e('Please check back soon for new listings.', 'matt-edwards-luxury'); ?></p>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-outline" style="margin-top: 2rem;">
                    <?php esc_html_e('Contact Us', 'matt-edwards-luxury'); ?>
                </a>
            </div>
        <?php endif; ?>
    </div>
</section>

<!-- Contact CTA -->
<section class="section section-lg" style="background: var(--color-charcoal); text-align: center;">
    <div class="container">
        <div class="fade-in" style="max-width: 700px; margin: 0 auto;">
            <span class="section-label"><?php esc_html_e('Looking for Something Specific?', 'matt-edwards-luxury'); ?></span>
            <h2 style="color: var(--color-white); margin-bottom: 1.5rem;"><?php esc_html_e('Let\'s Find Your Perfect Property', 'matt-edwards-luxury'); ?></h2>
            <p style="color: var(--color-light-gray); margin-bottom: 2rem;">
                <?php esc_html_e('Not seeing what you\'re looking for? I have access to exclusive off-market listings and can help you find exactly what you need.', 'matt-edwards-luxury'); ?>
            </p>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-primary"><?php esc_html_e('Get In Touch', 'matt-edwards-luxury'); ?></a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
