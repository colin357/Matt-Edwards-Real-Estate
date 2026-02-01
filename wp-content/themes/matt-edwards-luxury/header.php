<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container">
        <div class="header-inner">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    Matt <span>Edwards</span>
                <?php endif; ?>
            </a>

            <nav class="main-nav" role="navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'matt-edwards-luxury'); ?>">
                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class' => 'nav-menu',
                        'container' => false,
                        'depth' => 1,
                        'fallback_cb' => false,
                    ));
                } else {
                    // Default menu if none is set
                    ?>
                    <ul class="nav-menu">
                        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                        <li><a href="<?php echo esc_url(home_url('/properties/')); ?>">Properties</a></li>
                        <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About</a></li>
                        <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
                    </ul>
                    <?php
                }
                ?>

                <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('contact_phone', '3055550123'))); ?>" class="nav-contact">
                    <?php echo esc_html(get_theme_mod('contact_phone', '(305) 555-0123')); ?>
                </a>
            </nav>

            <button class="menu-toggle" id="menu-toggle" aria-label="<?php esc_attr_e('Toggle Navigation', 'matt-edwards-luxury'); ?>" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<!-- Mobile Navigation Overlay -->
<div class="mobile-nav-overlay" id="mobile-nav-overlay">
    <div class="mobile-nav-content">
        <nav class="mobile-nav" role="navigation" aria-label="<?php esc_attr_e('Mobile Navigation', 'matt-edwards-luxury'); ?>">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'mobile-nav-menu',
                    'container' => false,
                    'depth' => 1,
                    'fallback_cb' => false,
                ));
            } else {
                ?>
                <ul class="mobile-nav-menu">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/properties/')); ?>">Properties</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
                </ul>
                <?php
            }
            ?>
        </nav>

        <div class="mobile-nav-contact">
            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('contact_phone', '3055550123'))); ?>" class="mobile-phone">
                <?php echo esc_html(get_theme_mod('contact_phone', '(305) 555-0123')); ?>
            </a>
            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>" class="mobile-email">
                <?php echo esc_html(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>
            </a>
        </div>

        <div class="mobile-nav-social">
            <?php if (get_theme_mod('social_instagram')) : ?>
                <a href="<?php echo esc_url(get_theme_mod('social_instagram')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            <?php endif; ?>
            <?php if (get_theme_mod('social_linkedin')) : ?>
                <a href="<?php echo esc_url(get_theme_mod('social_linkedin')); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
            <?php endif; ?>
            <?php if (get_theme_mod('social_youtube')) : ?>
                <a href="<?php echo esc_url(get_theme_mod('social_youtube')); ?>" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
            <?php endif; ?>
            <?php if (get_theme_mod('social_facebook')) : ?>
                <a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
            <?php endif; ?>
        </div>
    </div>
</div>

<style>
/* Mobile Navigation Styles */
.mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 10, 0.98);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
}

.mobile-nav-overlay.active {
    opacity: 1;
    visibility: visible;
}

.mobile-nav-content {
    text-align: center;
    transform: translateY(20px);
    transition: transform 0.4s ease;
}

.mobile-nav-overlay.active .mobile-nav-content {
    transform: translateY(0);
}

.mobile-nav-menu {
    list-style: none;
    padding: 0;
    margin: 0 0 3rem 0;
}

.mobile-nav-menu li {
    margin-bottom: 1.5rem;
}

.mobile-nav-menu a {
    font-family: var(--font-primary);
    font-size: 2rem;
    color: var(--color-white);
    transition: color 0.3s ease;
}

.mobile-nav-menu a:hover {
    color: var(--color-gold);
}

.mobile-nav-contact {
    margin-bottom: 2rem;
}

.mobile-nav-contact a {
    display: block;
    color: var(--color-light-gray);
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.mobile-nav-contact a:hover {
    color: var(--color-gold);
}

.mobile-nav-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.mobile-nav-social a {
    color: var(--color-white);
    transition: color 0.3s ease;
}

.mobile-nav-social a:hover {
    color: var(--color-gold);
}

/* Menu Toggle Active State */
.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

body.nav-open {
    overflow: hidden;
}
</style>

<main id="main-content" class="site-main">
