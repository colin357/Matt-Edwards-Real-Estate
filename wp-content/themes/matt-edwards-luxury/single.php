<?php
/**
 * Single Post Template
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
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/blog-hero.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
        <?php endif; ?>
    </div>
    <div class="hero-overlay"></div>
    <div class="page-hero-content">
        <span class="section-label"><?php echo get_the_date(); ?></span>
        <h1><?php the_title(); ?></h1>
    </div>
</section>

<section class="section section-lg">
    <div class="container container-narrow">
        <?php while (have_posts()) : the_post(); ?>
            <article class="page-content fade-in">
                <?php the_content(); ?>
            </article>

            <div class="post-navigation" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-light-gray);">
                <?php
                the_post_navigation(array(
                    'prev_text' => '<span class="section-label">' . esc_html__('Previous', 'matt-edwards-luxury') . '</span><span class="nav-title">%title</span>',
                    'next_text' => '<span class="section-label">' . esc_html__('Next', 'matt-edwards-luxury') . '</span><span class="nav-title">%title</span>',
                ));
                ?>
            </div>
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

.post-navigation .nav-links {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.post-navigation .nav-previous,
.post-navigation .nav-next {
    flex: 1;
}

.post-navigation .nav-next {
    text-align: right;
}

.post-navigation .nav-title {
    display: block;
    font-family: var(--font-primary);
    font-size: 1.25rem;
    color: var(--color-black);
    margin-top: 0.5rem;
}

.post-navigation a:hover .nav-title {
    color: var(--color-gold);
}
</style>

<?php get_footer(); ?>
