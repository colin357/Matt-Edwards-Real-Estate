<?php
/**
 * Generic Page Template
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
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/page-hero.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
        <?php endif; ?>
    </div>
    <div class="hero-overlay"></div>
    <div class="page-hero-content">
        <h1><?php the_title(); ?></h1>
    </div>
</section>

<section class="section section-lg">
    <div class="container container-narrow">
        <?php while (have_posts()) : the_post(); ?>
            <article class="page-content fade-in">
                <?php the_content(); ?>
            </article>
        <?php endwhile; ?>
    </div>
</section>

<style>
.page-content {
    font-size: 1.1rem;
    line-height: 1.9;
}

.page-content h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
}

.page-content h3 {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
}

.page-content p {
    margin-bottom: 1.5rem;
    color: var(--color-medium-gray);
}

.page-content ul, .page-content ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
}

.page-content li {
    margin-bottom: 0.5rem;
    color: var(--color-medium-gray);
}

.page-content img {
    margin: 2rem 0;
    border-radius: 0;
}

.page-content blockquote {
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    border-left: 3px solid var(--color-gold);
    background: var(--color-off-white);
    font-family: var(--font-primary);
    font-size: 1.3rem;
    font-style: italic;
}
</style>

<?php get_footer(); ?>
