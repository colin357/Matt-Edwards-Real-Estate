<?php
/**
 * Matt Edwards Luxury Real Estate Theme Functions
 *
 * @package Matt_Edwards_Luxury
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function matt_edwards_theme_setup() {
    // Add default posts and comments RSS feed links
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Custom image sizes for listings
    add_image_size('listing-large', 1200, 800, true);
    add_image_size('listing-medium', 600, 400, true);
    add_image_size('listing-thumbnail', 400, 300, true);
    add_image_size('hero-image', 1920, 1080, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'matt-edwards-luxury'),
        'footer' => esc_html__('Footer Menu', 'matt-edwards-luxury'),
    ));

    // HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Custom logo support
    add_theme_support('custom-logo', array(
        'height' => 100,
        'width' => 300,
        'flex-height' => true,
        'flex-width' => true,
    ));

    // Custom background support
    add_theme_support('custom-background', array(
        'default-color' => 'ffffff',
    ));

    // Wide alignment for Gutenberg
    add_theme_support('align-wide');

    // Editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');

    // Responsive embeds
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'matt_edwards_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function matt_edwards_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'matt-edwards-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'matt-edwards-style',
        get_stylesheet_uri(),
        array('matt-edwards-fonts'),
        wp_get_theme()->get('Version')
    );

    // Main JavaScript
    wp_enqueue_script(
        'matt-edwards-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    // Localize script with data
    wp_localize_script('matt-edwards-main', 'mattEdwards', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('matt_edwards_nonce'),
        'siteUrl' => get_site_url(),
    ));

    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'matt_edwards_scripts');

/**
 * Register Widget Areas
 */
function matt_edwards_widgets_init() {
    register_sidebar(array(
        'name' => esc_html__('Footer Widget 1', 'matt-edwards-luxury'),
        'id' => 'footer-1',
        'description' => esc_html__('Add widgets here for footer column 1.', 'matt-edwards-luxury'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));

    register_sidebar(array(
        'name' => esc_html__('Footer Widget 2', 'matt-edwards-luxury'),
        'id' => 'footer-2',
        'description' => esc_html__('Add widgets here for footer column 2.', 'matt-edwards-luxury'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'matt_edwards_widgets_init');

/**
 * Custom Post Type: Properties
 */
function matt_edwards_register_property_post_type() {
    $labels = array(
        'name' => _x('Properties', 'Post Type General Name', 'matt-edwards-luxury'),
        'singular_name' => _x('Property', 'Post Type Singular Name', 'matt-edwards-luxury'),
        'menu_name' => __('Properties', 'matt-edwards-luxury'),
        'name_admin_bar' => __('Property', 'matt-edwards-luxury'),
        'add_new' => __('Add New', 'matt-edwards-luxury'),
        'add_new_item' => __('Add New Property', 'matt-edwards-luxury'),
        'new_item' => __('New Property', 'matt-edwards-luxury'),
        'edit_item' => __('Edit Property', 'matt-edwards-luxury'),
        'view_item' => __('View Property', 'matt-edwards-luxury'),
        'all_items' => __('All Properties', 'matt-edwards-luxury'),
        'search_items' => __('Search Properties', 'matt-edwards-luxury'),
        'not_found' => __('No properties found.', 'matt-edwards-luxury'),
        'not_found_in_trash' => __('No properties found in Trash.', 'matt-edwards-luxury'),
        'featured_image' => __('Property Image', 'matt-edwards-luxury'),
        'set_featured_image' => __('Set property image', 'matt-edwards-luxury'),
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'properties'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-building',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest' => true,
    );

    register_post_type('property', $args);
}
add_action('init', 'matt_edwards_register_property_post_type');

/**
 * Custom Taxonomy: Property Type
 */
function matt_edwards_register_property_taxonomies() {
    // Property Type
    $type_labels = array(
        'name' => _x('Property Types', 'taxonomy general name', 'matt-edwards-luxury'),
        'singular_name' => _x('Property Type', 'taxonomy singular name', 'matt-edwards-luxury'),
        'search_items' => __('Search Property Types', 'matt-edwards-luxury'),
        'all_items' => __('All Property Types', 'matt-edwards-luxury'),
        'edit_item' => __('Edit Property Type', 'matt-edwards-luxury'),
        'update_item' => __('Update Property Type', 'matt-edwards-luxury'),
        'add_new_item' => __('Add New Property Type', 'matt-edwards-luxury'),
        'new_item_name' => __('New Property Type Name', 'matt-edwards-luxury'),
        'menu_name' => __('Property Types', 'matt-edwards-luxury'),
    );

    register_taxonomy('property_type', array('property'), array(
        'hierarchical' => true,
        'labels' => $type_labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'property-type'),
        'show_in_rest' => true,
    ));

    // Neighborhood
    $neighborhood_labels = array(
        'name' => _x('Neighborhoods', 'taxonomy general name', 'matt-edwards-luxury'),
        'singular_name' => _x('Neighborhood', 'taxonomy singular name', 'matt-edwards-luxury'),
        'search_items' => __('Search Neighborhoods', 'matt-edwards-luxury'),
        'all_items' => __('All Neighborhoods', 'matt-edwards-luxury'),
        'edit_item' => __('Edit Neighborhood', 'matt-edwards-luxury'),
        'update_item' => __('Update Neighborhood', 'matt-edwards-luxury'),
        'add_new_item' => __('Add New Neighborhood', 'matt-edwards-luxury'),
        'new_item_name' => __('New Neighborhood Name', 'matt-edwards-luxury'),
        'menu_name' => __('Neighborhoods', 'matt-edwards-luxury'),
    );

    register_taxonomy('neighborhood', array('property'), array(
        'hierarchical' => true,
        'labels' => $neighborhood_labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'neighborhood'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'matt_edwards_register_property_taxonomies');

/**
 * Add Custom Meta Boxes for Properties
 */
function matt_edwards_add_property_meta_boxes() {
    add_meta_box(
        'property_details',
        __('Property Details', 'matt-edwards-luxury'),
        'matt_edwards_property_details_callback',
        'property',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'matt_edwards_add_property_meta_boxes');

/**
 * Property Details Meta Box Callback
 */
function matt_edwards_property_details_callback($post) {
    wp_nonce_field('matt_edwards_property_details', 'matt_edwards_property_details_nonce');

    $price = get_post_meta($post->ID, '_property_price', true);
    $bedrooms = get_post_meta($post->ID, '_property_bedrooms', true);
    $bathrooms = get_post_meta($post->ID, '_property_bathrooms', true);
    $sqft = get_post_meta($post->ID, '_property_sqft', true);
    $address = get_post_meta($post->ID, '_property_address', true);
    $status = get_post_meta($post->ID, '_property_status', true);
    $video_url = get_post_meta($post->ID, '_property_video_url', true);
    $virtual_tour = get_post_meta($post->ID, '_property_virtual_tour', true);
    ?>
    <style>
        .property-meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .property-meta-field { margin-bottom: 15px; }
        .property-meta-field label { display: block; font-weight: 600; margin-bottom: 5px; }
        .property-meta-field input, .property-meta-field select, .property-meta-field textarea { width: 100%; padding: 8px; }
        .property-meta-full { grid-column: span 2; }
    </style>
    <div class="property-meta-grid">
        <div class="property-meta-field">
            <label for="property_price"><?php _e('Price ($)', 'matt-edwards-luxury'); ?></label>
            <input type="text" id="property_price" name="property_price" value="<?php echo esc_attr($price); ?>" placeholder="e.g., 5,500,000">
        </div>
        <div class="property-meta-field">
            <label for="property_status"><?php _e('Status', 'matt-edwards-luxury'); ?></label>
            <select id="property_status" name="property_status">
                <option value="for-sale" <?php selected($status, 'for-sale'); ?>><?php _e('For Sale', 'matt-edwards-luxury'); ?></option>
                <option value="pending" <?php selected($status, 'pending'); ?>><?php _e('Pending', 'matt-edwards-luxury'); ?></option>
                <option value="sold" <?php selected($status, 'sold'); ?>><?php _e('Sold', 'matt-edwards-luxury'); ?></option>
                <option value="featured" <?php selected($status, 'featured'); ?>><?php _e('Featured', 'matt-edwards-luxury'); ?></option>
            </select>
        </div>
        <div class="property-meta-field">
            <label for="property_bedrooms"><?php _e('Bedrooms', 'matt-edwards-luxury'); ?></label>
            <input type="number" id="property_bedrooms" name="property_bedrooms" value="<?php echo esc_attr($bedrooms); ?>">
        </div>
        <div class="property-meta-field">
            <label for="property_bathrooms"><?php _e('Bathrooms', 'matt-edwards-luxury'); ?></label>
            <input type="text" id="property_bathrooms" name="property_bathrooms" value="<?php echo esc_attr($bathrooms); ?>" placeholder="e.g., 4.5">
        </div>
        <div class="property-meta-field">
            <label for="property_sqft"><?php _e('Square Feet', 'matt-edwards-luxury'); ?></label>
            <input type="text" id="property_sqft" name="property_sqft" value="<?php echo esc_attr($sqft); ?>" placeholder="e.g., 8,500">
        </div>
        <div class="property-meta-field property-meta-full">
            <label for="property_address"><?php _e('Address', 'matt-edwards-luxury'); ?></label>
            <input type="text" id="property_address" name="property_address" value="<?php echo esc_attr($address); ?>">
        </div>
        <div class="property-meta-field property-meta-full">
            <label for="property_video_url"><?php _e('Video URL (YouTube/Vimeo)', 'matt-edwards-luxury'); ?></label>
            <input type="url" id="property_video_url" name="property_video_url" value="<?php echo esc_url($video_url); ?>" placeholder="https://www.youtube.com/watch?v=...">
        </div>
        <div class="property-meta-field property-meta-full">
            <label for="property_virtual_tour"><?php _e('Virtual Tour URL', 'matt-edwards-luxury'); ?></label>
            <input type="url" id="property_virtual_tour" name="property_virtual_tour" value="<?php echo esc_url($virtual_tour); ?>">
        </div>
    </div>
    <?php
}

/**
 * Save Property Meta
 */
function matt_edwards_save_property_meta($post_id) {
    if (!isset($_POST['matt_edwards_property_details_nonce'])) {
        return;
    }

    if (!wp_verify_nonce($_POST['matt_edwards_property_details_nonce'], 'matt_edwards_property_details')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array(
        'property_price' => '_property_price',
        'property_bedrooms' => '_property_bedrooms',
        'property_bathrooms' => '_property_bathrooms',
        'property_sqft' => '_property_sqft',
        'property_address' => '_property_address',
        'property_status' => '_property_status',
        'property_video_url' => '_property_video_url',
        'property_virtual_tour' => '_property_virtual_tour',
    );

    foreach ($fields as $field => $meta_key) {
        if (isset($_POST[$field])) {
            if (strpos($field, 'url') !== false || strpos($field, 'tour') !== false) {
                update_post_meta($post_id, $meta_key, esc_url_raw($_POST[$field]));
            } else {
                update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$field]));
            }
        }
    }
}
add_action('save_post', 'matt_edwards_save_property_meta');

/**
 * Custom Post Type: Testimonials
 */
function matt_edwards_register_testimonial_post_type() {
    $labels = array(
        'name' => _x('Testimonials', 'Post Type General Name', 'matt-edwards-luxury'),
        'singular_name' => _x('Testimonial', 'Post Type Singular Name', 'matt-edwards-luxury'),
        'menu_name' => __('Testimonials', 'matt-edwards-luxury'),
        'add_new' => __('Add New', 'matt-edwards-luxury'),
        'add_new_item' => __('Add New Testimonial', 'matt-edwards-luxury'),
        'edit_item' => __('Edit Testimonial', 'matt-edwards-luxury'),
        'view_item' => __('View Testimonial', 'matt-edwards-luxury'),
        'all_items' => __('All Testimonials', 'matt-edwards-luxury'),
    );

    $args = array(
        'labels' => $labels,
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => 6,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor'),
        'show_in_rest' => true,
    );

    register_post_type('testimonial', $args);
}
add_action('init', 'matt_edwards_register_testimonial_post_type');

/**
 * Customizer Settings
 */
function matt_edwards_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('matt_edwards_hero', array(
        'title' => __('Hero Section', 'matt-edwards-luxury'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_tagline', array(
        'default' => 'Luxury Real Estate',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_tagline', array(
        'label' => __('Hero Tagline', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_hero',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'Experience Miami Living at Its Finest',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_hero',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'Specializing in waterfront estates, luxury condominiums, and exclusive residential properties throughout Miami.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_hero',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('hero_background', array(
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_background', array(
        'label' => __('Hero Background Image', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_hero',
    )));

    $wp_customize->add_setting('hero_video', array(
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('hero_video', array(
        'label' => __('Hero Background Video URL (MP4)', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_hero',
        'type' => 'url',
    ));

    // Contact Information
    $wp_customize->add_section('matt_edwards_contact', array(
        'title' => __('Contact Information', 'matt-edwards-luxury'),
        'priority' => 35,
    ));

    $wp_customize->add_setting('contact_phone', array(
        'default' => '(305) 555-0123',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone Number', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_contact',
        'type' => 'text',
    ));

    $wp_customize->add_setting('contact_email', array(
        'default' => 'matt@mattedwardsrealestate.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label' => __('Email Address', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_contact',
        'type' => 'email',
    ));

    $wp_customize->add_setting('contact_address', array(
        'default' => '1000 Brickell Avenue, Suite 500, Miami, FL 33131',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_address', array(
        'label' => __('Office Address', 'matt-edwards-luxury'),
        'section' => 'matt_edwards_contact',
        'type' => 'text',
    ));

    // Social Media
    $wp_customize->add_section('matt_edwards_social', array(
        'title' => __('Social Media', 'matt-edwards-luxury'),
        'priority' => 40,
    ));

    $social_networks = array('instagram', 'linkedin', 'youtube', 'facebook');
    foreach ($social_networks as $network) {
        $wp_customize->add_setting('social_' . $network, array(
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control('social_' . $network, array(
            'label' => ucfirst($network) . ' URL',
            'section' => 'matt_edwards_social',
            'type' => 'url',
        ));
    }
}
add_action('customize_register', 'matt_edwards_customize_register');

/**
 * Contact Form Handler
 */
function matt_edwards_handle_contact_form() {
    if (!isset($_POST['matt_edwards_contact_nonce']) ||
        !wp_verify_nonce($_POST['matt_edwards_contact_nonce'], 'matt_edwards_contact_form')) {
        wp_send_json_error(array('message' => 'Security check failed.'));
    }

    $name = sanitize_text_field($_POST['name'] ?? '');
    $email = sanitize_email($_POST['email'] ?? '');
    $phone = sanitize_text_field($_POST['phone'] ?? '');
    $interest = sanitize_text_field($_POST['interest'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(array('message' => 'Please fill in all required fields.'));
    }

    $to = get_theme_mod('contact_email', get_option('admin_email'));
    $subject = 'New Contact Form Submission from ' . $name;
    $body = "Name: {$name}\n";
    $body .= "Email: {$email}\n";
    $body .= "Phone: {$phone}\n";
    $body .= "Interest: {$interest}\n\n";
    $body .= "Message:\n{$message}";
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email);

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_send_json_success(array('message' => 'Thank you for your message. We will be in touch soon.'));
    } else {
        wp_send_json_error(array('message' => 'There was an error sending your message. Please try again.'));
    }
}
add_action('wp_ajax_matt_edwards_contact', 'matt_edwards_handle_contact_form');
add_action('wp_ajax_nopriv_matt_edwards_contact', 'matt_edwards_handle_contact_form');

/**
 * Helper Functions
 */
function matt_edwards_get_property_price($post_id = null) {
    $post_id = $post_id ?: get_the_ID();
    $price = get_post_meta($post_id, '_property_price', true);
    return $price ? '$' . $price : '';
}

function matt_edwards_get_property_details($post_id = null) {
    $post_id = $post_id ?: get_the_ID();
    return array(
        'bedrooms' => get_post_meta($post_id, '_property_bedrooms', true),
        'bathrooms' => get_post_meta($post_id, '_property_bathrooms', true),
        'sqft' => get_post_meta($post_id, '_property_sqft', true),
        'address' => get_post_meta($post_id, '_property_address', true),
        'status' => get_post_meta($post_id, '_property_status', true),
        'video_url' => get_post_meta($post_id, '_property_video_url', true),
        'virtual_tour' => get_post_meta($post_id, '_property_virtual_tour', true),
    );
}

function matt_edwards_get_property_status_label($status) {
    $labels = array(
        'for-sale' => __('For Sale', 'matt-edwards-luxury'),
        'pending' => __('Pending', 'matt-edwards-luxury'),
        'sold' => __('Sold', 'matt-edwards-luxury'),
        'featured' => __('Featured', 'matt-edwards-luxury'),
    );
    return $labels[$status] ?? $status;
}

/**
 * Disable WordPress emoji
 */
function matt_edwards_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
}
add_action('init', 'matt_edwards_disable_emojis');

/**
 * Add body classes
 */
function matt_edwards_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    if (is_singular('property')) {
        $classes[] = 'single-property';
    }
    return $classes;
}
add_filter('body_class', 'matt_edwards_body_classes');
