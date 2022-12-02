<?php 
    $menu_name = 'main_navigation';
    $locations = get_nav_menu_locations();
    $menu_id = $locations[ $menu_name ] ;
    $menuObject = wp_get_nav_menu_object($menu_id);
    $current_menu = $menuObject->slug;
    $array_menu = wp_get_nav_menu_items($current_menu);
?>
<div class="wrapper-menu">
      <header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-8 col-lg-3">
              <a href="/">
                <div class="logo" device-image="<?= esc_url( wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' )[0] ); ?>"></div>
              </a>
            </div>
            <div class="offset-lg-7 offset-2 col-2">
              <div class="box-menu">
                <div class="menu-btn__burguer"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
      <section class="menu">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 open-menu">
              <nav>
                <?php foreach ($array_menu as $menu) { ?>
                    <div class="item-menu">
                        <a href="<?= $menu->url ?>"><?= $menu->title ?></a>
                    </div>
                <?php } ?>
              </nav>
            </div>
            <div class="col-6 bkg-menu"></div>
          </div>
        </div>
      </section>
    </div>
