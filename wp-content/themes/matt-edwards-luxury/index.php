<?php
/**
 * Main Index Template
 *
 * @package Matt_Edwards_Luxury
 */

get_header();
?>

<section class="page-hero">
    <div class="hero-background">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/blog-hero.jpg'); ?>" alt="<?php esc_attr_e('Blog', 'matt-edwards-luxury'); ?>">
    </div>
    <div class="hero-overlay"></div>
    <div class="page-hero-content">
        <h1><?php esc_html_e('Insights & Updates', 'matt-edwards-luxury'); ?></h1>
        <p><?php esc_html_e('Market trends, luxury living, and Miami real estate news', 'matt-edwards-luxury'); ?></p>
    </div>
</section>

<section class="section section-lg">
    <div class="container">
        <?php if (have_posts()) : ?>
            <div class="listings-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="listing-card fade-in">
                        <a href="<?php the_permalink(); ?>">
                            <div class="listing-image">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('listing-medium'); ?>
                                <?php else : ?>
                                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/blog-placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
                                <?php endif; ?>
                            </div>
                            <div class="listing-content">
                                <span class="listing-location"><?php echo get_the_date(); ?></span>
                                <h3 class="listing-title"><?php the_title(); ?></h3>
                                <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
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
            <div class="text-center">
                <h2><?php esc_html_e('No posts found', 'matt-edwards-luxury'); ?></h2>
                <p><?php esc_html_e('Check back soon for updates.', 'matt-edwards-luxury'); ?></p>
            </div>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>
