</main><!-- #main-content -->

<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="footer-logo">
                    Matt <span>Edwards</span>
                </div>
                <p>Miami's premier luxury real estate specialist. Delivering exceptional results for discerning buyers and sellers across South Florida's most prestigious neighborhoods.</p>
                <div class="footer-social">
                    <?php if (get_theme_mod('social_instagram')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_instagram')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('social_linkedin')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_linkedin')); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('social_youtube')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_youtube')); ?>" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('social_facebook')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="footer-column">
                <h4><?php esc_html_e('Quick Links', 'matt-edwards-luxury'); ?></h4>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/properties/')); ?>"><?php esc_html_e('Properties', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('About Matt', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/sold/')); ?>"><?php esc_html_e('Sold Properties', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'matt-edwards-luxury'); ?></a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4><?php esc_html_e('Neighborhoods', 'matt-edwards-luxury'); ?></h4>
                <ul class="footer-links">
                    <li><a href="#"><?php esc_html_e('Miami Beach', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Coral Gables', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Coconut Grove', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Brickell', 'matt-edwards-luxury'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Key Biscayne', 'matt-edwards-luxury'); ?></a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4><?php esc_html_e('Contact', 'matt-edwards-luxury'); ?></h4>
                <ul class="footer-links">
                    <li>
                        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('contact_phone', '3055550123'))); ?>">
                            <?php echo esc_html(get_theme_mod('contact_phone', '(305) 555-0123')); ?>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>">
                            <?php echo esc_html(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?>
                        </a>
                    </li>
                    <li><?php echo esc_html(get_theme_mod('contact_address', '1000 Brickell Avenue, Suite 500, Miami, FL 33131')); ?></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="footer-copyright">
                &copy; <?php echo date('Y'); ?> Matt Edwards Real Estate. <?php esc_html_e('All rights reserved.', 'matt-edwards-luxury'); ?>
            </p>
            <div class="footer-legal">
                <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>"><?php esc_html_e('Privacy Policy', 'matt-edwards-luxury'); ?></a>
                <a href="<?php echo esc_url(home_url('/terms/')); ?>"><?php esc_html_e('Terms of Service', 'matt-edwards-luxury'); ?></a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
