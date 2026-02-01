<?php
/**
 * Front Page Template
 *
 * @package Matt_Edwards_Luxury
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background">
        <?php if (get_theme_mod('hero_video')) : ?>
            <video autoplay muted loop playsinline>
                <source src="<?php echo esc_url(get_theme_mod('hero_video')); ?>" type="video/mp4">
            </video>
        <?php elseif (get_theme_mod('hero_background')) : ?>
            <img src="<?php echo esc_url(get_theme_mod('hero_background')); ?>" alt="<?php esc_attr_e('Miami Luxury Real Estate', 'matt-edwards-luxury'); ?>">
        <?php else : ?>
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-placeholder.jpg'); ?>" alt="<?php esc_attr_e('Miami Luxury Real Estate', 'matt-edwards-luxury'); ?>">
        <?php endif; ?>
    </div>
    <div class="hero-overlay"></div>

    <div class="hero-content">
        <p class="hero-tagline"><?php echo esc_html(get_theme_mod('hero_tagline', 'Luxury Real Estate')); ?></p>
        <h1 class="hero-title"><?php echo esc_html(get_theme_mod('hero_title', 'Experience Miami Living at Its Finest')); ?></h1>
        <p class="hero-subtitle"><?php echo esc_html(get_theme_mod('hero_subtitle', 'Specializing in waterfront estates, luxury condominiums, and exclusive residential properties throughout Miami.')); ?></p>
        <div class="hero-cta">
            <a href="<?php echo esc_url(home_url('/properties/')); ?>" class="btn btn-primary"><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-outline-white"><?php esc_html_e('Get In Touch', 'matt-edwards-luxury'); ?></a>
        </div>
    </div>

    <a href="#intro" class="hero-scroll">
        <span><?php esc_html_e('Scroll', 'matt-edwards-luxury'); ?></span>
        <div class="hero-scroll-line"></div>
    </a>
</section>

<!-- Introduction Section -->
<section id="intro" class="section section-lg intro-section">
    <div class="container">
        <div class="intro-grid">
            <div class="intro-content fade-in">
                <span class="section-label"><?php esc_html_e('About Matt Edwards', 'matt-edwards-luxury'); ?></span>
                <h2><?php esc_html_e('Your Trusted Partner in Miami Luxury Real Estate', 'matt-edwards-luxury'); ?></h2>
                <p><?php esc_html_e('With an intimate knowledge of Miami\'s most prestigious neighborhoods and a commitment to delivering exceptional results, I specialize in helping discerning clients find their perfect property or maximize the value of their home sale.', 'matt-edwards-luxury'); ?></p>
                <p><?php esc_html_e('My approach combines local expertise with innovative marketing strategies, including cinematic property videos that showcase homes in their best light. For clients who expect precision, privacy, and performance, I deliver results that exceed expectations.', 'matt-edwards-luxury'); ?></p>
                <a href="<?php echo esc_url(home_url('/about/')); ?>" class="btn btn-outline"><?php esc_html_e('Learn More', 'matt-edwards-luxury'); ?></a>

                <div class="intro-stats">
                    <div class="stat-item">
                        <div class="stat-number">$250M+</div>
                        <div class="stat-label"><?php esc_html_e('In Sales Volume', 'matt-edwards-luxury'); ?></div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">150+</div>
                        <div class="stat-label"><?php esc_html_e('Properties Sold', 'matt-edwards-luxury'); ?></div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">15+</div>
                        <div class="stat-label"><?php esc_html_e('Years Experience', 'matt-edwards-luxury'); ?></div>
                    </div>
                </div>
            </div>

            <div class="intro-image fade-in">
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/matt-edwards-portrait.jpg'); ?>" alt="<?php esc_attr_e('Matt Edwards - Miami Luxury Real Estate Agent', 'matt-edwards-luxury'); ?>">
                <div class="intro-image-accent"></div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Listings Section -->
<section class="section section-lg listings-section">
    <div class="container">
        <div class="section-header fade-in">
            <span class="section-label"><?php esc_html_e('Featured Properties', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('Exclusive Listings', 'matt-edwards-luxury'); ?></h2>
            <p><?php esc_html_e('Discover Miami\'s most exceptional properties, from stunning waterfront estates to sophisticated urban residences.', 'matt-edwards-luxury'); ?></p>
        </div>

        <div class="listings-grid">
            <?php
            $featured_properties = new WP_Query(array(
                'post_type' => 'property',
                'posts_per_page' => 3,
                'meta_query' => array(
                    array(
                        'key' => '_property_status',
                        'value' => 'featured',
                        'compare' => '='
                    )
                )
            ));

            if ($featured_properties->have_posts()) :
                while ($featured_properties->have_posts()) : $featured_properties->the_post();
                    $details = matt_edwards_get_property_details();
                    $neighborhoods = get_the_terms(get_the_ID(), 'neighborhood');
                    $neighborhood_name = $neighborhoods ? $neighborhoods[0]->name : '';
                    ?>
                    <article class="listing-card fade-in">
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
                                <?php if ($neighborhood_name) : ?>
                                    <span class="listing-location"><?php echo esc_html($neighborhood_name); ?></span>
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
                <?php
                endwhile;
                wp_reset_postdata();
            else :
                // Display placeholder listings if no properties exist yet
                for ($i = 0; $i < 3; $i++) :
                    $placeholder_data = array(
                        array('name' => 'Oceanfront Estate', 'location' => 'Miami Beach', 'beds' => '6', 'baths' => '8', 'sqft' => '12,500', 'price' => '$18,500,000'),
                        array('name' => 'Waterfront Villa', 'location' => 'Coral Gables', 'beds' => '5', 'baths' => '6', 'sqft' => '8,200', 'price' => '$12,750,000'),
                        array('name' => 'Penthouse Suite', 'location' => 'Brickell', 'beds' => '4', 'baths' => '5', 'sqft' => '5,800', 'price' => '$8,900,000'),
                    );
                    ?>
                    <article class="listing-card fade-in">
                        <a href="#">
                            <div class="listing-image">
                                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/property-placeholder-' . ($i + 1) . '.jpg'); ?>" alt="<?php echo esc_attr($placeholder_data[$i]['name']); ?>">
                                <span class="listing-badge"><?php esc_html_e('Featured', 'matt-edwards-luxury'); ?></span>
                            </div>
                            <div class="listing-content">
                                <span class="listing-location"><?php echo esc_html($placeholder_data[$i]['location']); ?></span>
                                <h3 class="listing-title"><?php echo esc_html($placeholder_data[$i]['name']); ?></h3>
                                <div class="listing-details">
                                    <span class="listing-detail"><?php echo esc_html($placeholder_data[$i]['beds']); ?> <?php esc_html_e('Beds', 'matt-edwards-luxury'); ?></span>
                                    <span class="listing-detail"><?php echo esc_html($placeholder_data[$i]['baths']); ?> <?php esc_html_e('Baths', 'matt-edwards-luxury'); ?></span>
                                    <span class="listing-detail"><?php echo esc_html($placeholder_data[$i]['sqft']); ?> <?php esc_html_e('Sq Ft', 'matt-edwards-luxury'); ?></span>
                                </div>
                                <div class="listing-price"><?php echo esc_html($placeholder_data[$i]['price']); ?></div>
                            </div>
                        </a>
                    </article>
                <?php
                endfor;
            endif;
            ?>
        </div>

        <div class="listings-cta fade-in">
            <a href="<?php echo esc_url(home_url('/properties/')); ?>" class="btn btn-outline"><?php esc_html_e('View All Properties', 'matt-edwards-luxury'); ?></a>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="section section-lg services-section">
    <div class="container">
        <div class="section-header fade-in">
            <span class="section-label"><?php esc_html_e('Services', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('Comprehensive Real Estate Solutions', 'matt-edwards-luxury'); ?></h2>
            <p><?php esc_html_e('From buying your dream home to selling your property for maximum value, I provide end-to-end service with uncompromising attention to detail.', 'matt-edwards-luxury'); ?></p>
        </div>

        <div class="services-grid">
            <div class="service-card fade-in">
                <div class="service-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <h3><?php esc_html_e('Buyer Representation', 'matt-edwards-luxury'); ?></h3>
                <p><?php esc_html_e('Expert guidance through every step of your luxury home purchase, from identifying the perfect property to negotiating the best terms.', 'matt-edwards-luxury'); ?></p>
            </div>

            <div class="service-card fade-in">
                <div class="service-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3><?php esc_html_e('Seller Representation', 'matt-edwards-luxury'); ?></h3>
                <p><?php esc_html_e('Strategic marketing and expert negotiation to maximize your property\'s value and ensure a smooth, successful sale.', 'matt-edwards-luxury'); ?></p>
            </div>

            <div class="service-card fade-in">
                <div class="service-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <h3><?php esc_html_e('Property Marketing', 'matt-edwards-luxury'); ?></h3>
                <p><?php esc_html_e('Cinematic video production, professional photography, and targeted digital campaigns that showcase your property to the right buyers.', 'matt-edwards-luxury'); ?></p>
            </div>
        </div>
    </div>
</section>

<!-- Video/Marketing Section -->
<section class="section section-lg media-section">
    <div class="container">
        <div class="media-grid">
            <div class="media-content fade-in">
                <span class="section-label"><?php esc_html_e('Modern Marketing', 'matt-edwards-luxury'); ?></span>
                <h2><?php esc_html_e('Properties Presented for the Modern Era', 'matt-edwards-luxury'); ?></h2>
                <p><?php esc_html_e('In today\'s market, exceptional properties deserve exceptional presentation. I leverage cutting-edge video production and digital marketing strategies to ensure your property reaches qualified buyers worldwide.', 'matt-edwards-luxury'); ?></p>

                <div class="media-features">
                    <div class="media-feature">
                        <div class="media-feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        </div>
                        <div>
                            <h4><?php esc_html_e('Cinematic Property Videos', 'matt-edwards-luxury'); ?></h4>
                            <p><?php esc_html_e('High-production video tours that capture the essence and lifestyle of each property.', 'matt-edwards-luxury'); ?></p>
                        </div>
                    </div>

                    <div class="media-feature">
                        <div class="media-feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        </div>
                        <div>
                            <h4><?php esc_html_e('Drone & Aerial Photography', 'matt-edwards-luxury'); ?></h4>
                            <p><?php esc_html_e('Stunning aerial perspectives that showcase waterfront views and expansive estates.', 'matt-edwards-luxury'); ?></p>
                        </div>
                    </div>

                    <div class="media-feature">
                        <div class="media-feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        </div>
                        <div>
                            <h4><?php esc_html_e('Global Digital Reach', 'matt-edwards-luxury'); ?></h4>
                            <p><?php esc_html_e('Targeted campaigns reaching qualified buyers across digital platforms worldwide.', 'matt-edwards-luxury'); ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="media-showcase fade-in">
                <div class="media-video-wrapper">
                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/video-thumbnail.jpg'); ?>" alt="<?php esc_attr_e('Property Video Preview', 'matt-edwards-luxury'); ?>">
                    <div class="play-button" data-video="https://www.youtube.com/embed/dQw4w9WgXcQ">
                        <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Neighborhoods Section -->
<section class="section section-lg neighborhoods-section">
    <div class="container">
        <div class="section-header fade-in">
            <span class="section-label"><?php esc_html_e('Explore Miami', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('Premier Neighborhoods', 'matt-edwards-luxury'); ?></h2>
            <p><?php esc_html_e('From the iconic beaches of Miami Beach to the tree-lined streets of Coral Gables, discover South Florida\'s most coveted addresses.', 'matt-edwards-luxury'); ?></p>
        </div>

        <div class="neighborhoods-grid">
            <div class="neighborhood-card fade-in">
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/neighborhood-miami-beach.jpg'); ?>" alt="<?php esc_attr_e('Miami Beach', 'matt-edwards-luxury'); ?>">
                <div class="neighborhood-overlay">
                    <h3><?php esc_html_e('Miami Beach', 'matt-edwards-luxury'); ?></h3>
                    <span><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></span>
                </div>
            </div>

            <div class="neighborhood-card fade-in">
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/neighborhood-coral-gables.jpg'); ?>" alt="<?php esc_attr_e('Coral Gables', 'matt-edwards-luxury'); ?>">
                <div class="neighborhood-overlay">
                    <h3><?php esc_html_e('Coral Gables', 'matt-edwards-luxury'); ?></h3>
                    <span><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></span>
                </div>
            </div>

            <div class="neighborhood-card fade-in">
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/neighborhood-coconut-grove.jpg'); ?>" alt="<?php esc_attr_e('Coconut Grove', 'matt-edwards-luxury'); ?>">
                <div class="neighborhood-overlay">
                    <h3><?php esc_html_e('Coconut Grove', 'matt-edwards-luxury'); ?></h3>
                    <span><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></span>
                </div>
            </div>

            <div class="neighborhood-card fade-in">
                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/neighborhood-brickell.jpg'); ?>" alt="<?php esc_attr_e('Brickell', 'matt-edwards-luxury'); ?>">
                <div class="neighborhood-overlay">
                    <h3><?php esc_html_e('Brickell', 'matt-edwards-luxury'); ?></h3>
                    <span><?php esc_html_e('View Properties', 'matt-edwards-luxury'); ?></span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="section section-lg testimonials-section">
    <div class="container">
        <div class="section-header fade-in">
            <span class="section-label"><?php esc_html_e('Client Testimonials', 'matt-edwards-luxury'); ?></span>
            <h2><?php esc_html_e('What Clients Say', 'matt-edwards-luxury'); ?></h2>
        </div>

        <div class="testimonial-slider fade-in">
            <?php
            $testimonials = new WP_Query(array(
                'post_type' => 'testimonial',
                'posts_per_page' => 1,
            ));

            if ($testimonials->have_posts()) :
                while ($testimonials->have_posts()) : $testimonials->the_post();
                    ?>
                    <div class="testimonial">
                        <p class="testimonial-quote"><?php the_content(); ?></p>
                        <p class="testimonial-author"><?php the_title(); ?></p>
                    </div>
                <?php
                endwhile;
                wp_reset_postdata();
            else :
                ?>
                <div class="testimonial">
                    <p class="testimonial-quote"><?php esc_html_e('Matt\'s expertise in the Miami luxury market is unparalleled. He found us the perfect waterfront home and negotiated an exceptional deal. His attention to detail and responsiveness made the entire process seamless.', 'matt-edwards-luxury'); ?></p>
                    <p class="testimonial-author"><?php esc_html_e('James & Sarah Mitchell', 'matt-edwards-luxury'); ?></p>
                    <p class="testimonial-location"><?php esc_html_e('Miami Beach', 'matt-edwards-luxury'); ?></p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>

<!-- Contact CTA Section -->
<section class="section section-lg contact-section">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-content fade-in">
                <span class="section-label"><?php esc_html_e('Get In Touch', 'matt-edwards-luxury'); ?></span>
                <h2><?php esc_html_e('Ready to Find Your Perfect Property?', 'matt-edwards-luxury'); ?></h2>
                <p><?php esc_html_e('Whether you\'re looking to buy, sell, or simply explore the Miami luxury real estate market, I\'m here to help. Let\'s start a conversation about your goals.', 'matt-edwards-luxury'); ?></p>

                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-item-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span>
                        <span><?php echo esc_html(get_theme_mod('contact_phone', '(305) 555-0123')); ?></span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-item-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </span>
                        <span><?php echo esc_html(get_theme_mod('contact_email', 'matt@mattedwardsrealestate.com')); ?></span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-item-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </span>
                        <span><?php echo esc_html(get_theme_mod('contact_address', '1000 Brickell Avenue, Suite 500, Miami, FL 33131')); ?></span>
                    </div>
                </div>
            </div>

            <div class="contact-form fade-in">
                <form id="contact-form" method="post">
                    <?php wp_nonce_field('matt_edwards_contact_form', 'matt_edwards_contact_nonce'); ?>

                    <div class="form-group">
                        <label for="contact-name"><?php esc_html_e('Name', 'matt-edwards-luxury'); ?> *</label>
                        <input type="text" id="contact-name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="contact-email"><?php esc_html_e('Email', 'matt-edwards-luxury'); ?> *</label>
                        <input type="email" id="contact-email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="contact-phone"><?php esc_html_e('Phone', 'matt-edwards-luxury'); ?></label>
                        <input type="tel" id="contact-phone" name="phone">
                    </div>

                    <div class="form-group">
                        <label for="contact-interest"><?php esc_html_e('I\'m Interested In', 'matt-edwards-luxury'); ?></label>
                        <select id="contact-interest" name="interest">
                            <option value=""><?php esc_html_e('Select an option', 'matt-edwards-luxury'); ?></option>
                            <option value="buying"><?php esc_html_e('Buying a Property', 'matt-edwards-luxury'); ?></option>
                            <option value="selling"><?php esc_html_e('Selling a Property', 'matt-edwards-luxury'); ?></option>
                            <option value="both"><?php esc_html_e('Both Buying & Selling', 'matt-edwards-luxury'); ?></option>
                            <option value="consultation"><?php esc_html_e('General Consultation', 'matt-edwards-luxury'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="contact-message"><?php esc_html_e('Message', 'matt-edwards-luxury'); ?> *</label>
                        <textarea id="contact-message" name="message" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary"><?php esc_html_e('Send Message', 'matt-edwards-luxury'); ?></button>

                    <div class="form-response"></div>
                </form>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
