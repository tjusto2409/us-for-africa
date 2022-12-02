<?php require_once 'header.php' ?>
  <body data-animation="donate">
  <?php require_once 'menu.php' ?>

    <main>
      <section class="parallax banner-header" device-image="<?=get_field("banner_page") ?>">
        <h1 class="title-intro parallax-title" style="transform: translateY(-50%) translateX(-50%);">Donate</h1>
      </section>

      <section class="wrapper">
        <div class="container">
          <div class="col-12 title-mobile">
            <h1 class="parallax-title-animated title-intro">
              <?php single_post_title(); ?>
            </h1>
          </div>

          <div class="col-12">
            <?= get_field("text_donate") ?>            

            <a target="_blank" href="<?= esc_url(get_field("addres_link")['url']) ?>" class="button">
              <?= esc_html(get_field("addres_link")['title']) ?>
            </a>
          </div>
        </div>
      </section>
    </main>
   <?php require_once 'footer.php' ?>