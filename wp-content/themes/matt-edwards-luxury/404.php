<?php
/**
 * 404 Page Template
 *
 * @package Matt_Edwards_Luxury
 */

get_header();
?>

<section class="section section-lg" style="min-height: 60vh; display: flex; align-items: center;">
    <div class="container text-center">
        <div class="fade-in visible">
            <span class="section-label"><?php esc_html_e('Error 404', 'matt-edwards-luxury'); ?></span>
            <h1 style="margin-bottom: 1.5rem;"><?php esc_html_e('Page Not Found', 'matt-edwards-luxury'); ?></h1>
            <p style="max-width: 500px; margin: 0 auto 2rem; font-size: 1.1rem;">
                <?php esc_html_e('The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track.', 'matt-edwards-luxury'); ?>
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary"><?php esc_html_e('Go Home', 'matt-edwards-luxury'); ?></a>
                <a href="<?php echo esc_url(home_url('/properties/')); ?>" class="btn btn-outline"><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
