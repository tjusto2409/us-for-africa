<?php require_once 'header.php' ?>

  <body data-animation="what-we-do">
  <?php require_once 'menu.php' ?>
  <main>
    <section class="parallax banner-header">
      <h1 class="title-intro parallax-title" style="transform: translateY(-50%) translateX(-50%);">What We Do</h1>
    </section>

    <section class="who-whe-are">
      <div class="container">
        <div class="row">
          <div class="col-12 title-mobile">
            <h1 class="parallax-title-animated title-intro">What We Do</h1>
          </div>

          <div class="col-12 col-md-6 .col-lg-6 col-xl-3 emphasis">
            <h1 class="upperCase" id="block">Who we are</h1>
          </div>
          <div class="col-12 col-md-6 .col-lg-6 col-xl-7 offset-xl-1" style="opacity: 0">
            <?=get_field("who-we-are-first-block") ?>
          </div>
        </div>
      </div>

      <div class="wrapper-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-xl-6" style="opacity: 0">
              <?=get_field("who-we-are-second-block") ?>            
              
            </div>
            <div class="col-12 col-xl-6" style="opacity: 0" device-image="what-we-do-1.png">
              <img src="<?=get_field("who-we-are-img") ?>" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12" style="opacity: 0">
            <?=get_field("who-we-are-third-block") ?>
          </div>
        </div>
      </div>
    </section>

    <section class="get-to-know">
      <div class="banner"></div>

      <div class="container">
        <div class="row parallax-box">
          <div class="offset-xl-1 col-xl-10 col-12 parallax-banner">
            <h1 class="upperCase">get to know the real africa</h1>
          </div>
          <div class="col-12 get-to-know-body" style="position: relative;">
            <?=get_field("get-to-know") ?>
          </div>
        </div>
      </div>
    </section>

    <section class="bkg-negative">
      
      <div class="bkg-star"></div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
              <?= get_field("bkg-negative") ?>             
          </div>
        </div>
      </div>

      <div class="bkg-positive first"></div>
      <div class="bkg-positive second"></div>
    </section>

    <section class="how-we-serve">

      <div class="wrapper-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-12" style="opacity: 0">
              <?= get_field("how-we-serve-first-block") ?>
            </div>
            <div class="offset-xl-1 col-xl-6 col-12" style="opacity: 0">
              <img src="<?= get_field("how-we-serve-img") ?>" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="offset-xl-1 col-xl-10 col-12" style="opacity: 0">
            <?= get_field("how-we-serve-second-block") ?>
          </div>
        </div>
      </div>
    </section>

    <section class="container-info">

      <article class="container-box space">
        <div class="container">
          <div class="row">
            <div class="col-12 box">
              <?= get_field("container-box-ministries") ?>
            </div>

            <div class="col-12">
              <div class="gallery">
                <?php $gallery = get_field('gallery_ministries'); foreach ($gallery as $img):?>
                  <div class="device-img" device-image="<?= esc_url($img) ?>"></div>
                <?php endforeach ?>
              </div>
            </div>

          </div>
        </div>
      </article>        

      <article class="container-box space">
        <div class="container">
          <div class="row">
            <div class="col-12 box">
              <?= get_field("container-box-schools") ?>
            </div>

            <div class="col-12">
              <div class="gallery">
                <?php $gallery = get_field('gallery_schools'); foreach ($gallery as $img):?>
                  <div class="device-img" device-image="<?= esc_url($img) ?>"></div>
                <?php endforeach ?>
              </div>
            </div>

          </div>
        </div>
      </article>
      
      <article class="container-box space">
        <div class="container">
          <div class="row">
            <div class="col-12 box">
              <?= get_field("container-box-businesses") ?>
            </div>

            <div class="col-12">
              <div class="gallery">
                <?php $gallery = get_field('gallery_businesses'); foreach ($gallery as $img):?>
                  <div class="device-img" device-image="<?= esc_url($img) ?>"></div>
                <?php endforeach ?>
              </div>
            </div>

          </div>
        </div>
      </article>
    </section> 
  </main>    
  <?php require_once 'footer.php' ?>