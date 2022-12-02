<?php require_once 'header.php' ?>

  <body data-animation='contact'>
  <?php require_once 'menu.php' ?>

    <main>
      <section class="parallax banner-header">
        <h1 class="title-intro parallax-title" style="transform: translateY(-50%) translateX(-50%);">Contact</h1>
      </section>

      <section class="wrapper">
        <div class="container">
         <div class="row">
          <div class="col-12 title-mobile">
            <h1 class="parallax-title-animated title-intro">Contact</h1>
          </div>

          <div class="col-12">
            <p class="text">
              <?=get_field("text_contact")?>
            </p>
          </div>

          <?php the_content();  ?>
         </div>
          
        </div>
      </section>
    </main>
   <?php require_once 'footer.php' ?>