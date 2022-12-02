<?php 

function load_enqueue_style() {

	wp_enqueue_script( 'anime', 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js');
	wp_enqueue_script( 'scrollMagic', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js');
	// wp_enqueue_script( 'debug', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/debug.addIndicators.js');
	wp_enqueue_script( 'menu', get_template_directory_uri() . '/assets/js/menu.js');
	wp_enqueue_script( 'resize', get_template_directory_uri() . '/assets/js/resize.js');
	wp_enqueue_script( 'directive', get_template_directory_uri() . '/assets/js/directive.js');
	wp_enqueue_script( 'animation', get_template_directory_uri() . '/assets/js/animation.js');
	wp_enqueue_script( 'scroll', get_template_directory_uri() . '/assets/js/scroll.js');
	wp_enqueue_script( 'init', get_template_directory_uri() . '/assets/js/init.js');
	wp_enqueue_style( 'menu', get_template_directory_uri() . '/assets/css/menu.css');
	wp_enqueue_style( 'footer', get_template_directory_uri() . '/assets/css/footer.css');

	if ( is_page( 'home' ) ) {
		wp_enqueue_style( 'home', get_template_directory_uri() . '/assets/css/home.css');
	}
	else if(is_page( 'What We Do' )) {
		wp_enqueue_style( 'what-we-do', get_template_directory_uri() . '/assets/css/what-we-do.css');
	}
	else if(is_page( 'Contact' )) {
		wp_enqueue_style( 'contact', get_template_directory_uri() . '/assets/css/contact.css');
	} 
	else if(is_page( 'Donate' )) {
		wp_enqueue_style( 'donate', get_template_directory_uri() . '/assets/css/donate.css');
	} 

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

add_action( 'wp_enqueue_scripts', 'load_enqueue_style' );

function custom_theme() {
	add_theme_support('custom-logo');
}

add_action( 'after_setup_theme', 'custom_theme' );

function custom_nav_menu() {
	register_nav_menu(
		'main_navigation',
		'Main navigation'
	);
}

add_action( 'init', 'custom_nav_menu' );

add_filter('use_block_editor_for_post', 'disable_gutenberg_on_settings_page', 5, 2);

function disable_gutenberg_on_settings_page($can, $post){
    if($post){
        // Replace "site-settings" with the slug of your site settings page.
        if($post->post_name === "settings"){
            return false;
        }
    }
    return $can;
}

// function hide_settings_page($query) {
//     if ( !is_admin() && !is_main_query() ) {
//         return;
//     }    
//     global $typenow;
//     if ($typenow === "page") {
//         // Replace "site-settings" with the slug of your site settings page.
//         $settings_page = get_page_by_path("settings",NULL,"page")->ID;
//         $query->set( 'post__not_in', array($settings_page) );    
//     }
//     return;

// }

// add_action('pre_get_posts', 'hide_settings_page');

// function add_site_settings_to_menu(){
//     add_menu_page( 'Settings', 'Settings', 'manage_options', 'post.php?post='.get_page_by_path("settings",NULL,"page")->ID.'&action=edit', '', 'dashicons-admin-tools', 20);
// }
// add_action( 'admin_menu', 'add_site_settings_to_menu' );

// Change the active menu item

// add_filter('parent_file', 'higlight_custom_settings_page');

// function higlight_custom_settings_page($file) {
//     global $parent_file;
//     global $pagenow;
//     global $typenow, $self;

//     $settings_page = get_page_by_path("settings",NULL,"page")->ID;

//     $post = (int)$_GET["post"];
//     if ($pagenow === "post.php" && $post === $settings_page) {
//         $file = "post.php?post=$settings_page&action=edit";
//     }
//     return $file;
// }

// function edit_site_settings_title() {
//     global $post, $title, $action, $current_screen;
//     if( isset( $current_screen->post_type ) && $current_screen->post_type === 'page' && $action == 'edit' && $post->post_name === "settings") {
//         $title = $post->post_title.' - '.get_bloginfo('name');           
//     }
//     return $title;  
// }

// add_action( 'admin_title', 'edit_site_settings_title' );
?>