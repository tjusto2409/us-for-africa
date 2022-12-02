<?php require_once 'header.php' ?>
    
    <body data-animation="home">
      <?php require_once 'menu.php' ?>
       <main>
        <section class="parallax banner-header" device-image="<?=get_field("banner_page") ?>"></section>
  
         <section class="connecting">
          <div class="container">
            <div class="row">
              <div class="offset-xl-1 col-xl-10 col-12">
                <h1 class="title">
                  <?=get_field("text_connecting") ?>
                </h1>               
  
                <div class="row">
                  <div class="panel col-xl-4 col-md-6 col-12">
                    <p class="amount display"><?=get_field("connecting_countries") ?></p>
                    <p class="label">Countries in Africa</p>
                  </div>
  
                  <div class="panel col-xl-4 col-md-6 col-12">
                    <p class="amount display"><?=get_field("connecting_community") ?></p>
                    <p class="label">Community Leaders</p>
                  </div>
  
                  <div class="panel col-xl-4 col-md-6 col-12">
                    <p class="amount display"><?=get_field("connecting_ordained") ?></p>
                    <p class="label">Ordained Pastors</p>
                  </div>
  
                  <div class="panel col-xl-4 col-md-6 col-12">
                    <p class="amount display"><?=get_field("connecting_churches") ?></p>
                    <p class="label">Churches Planted</p>
                  </div>
  
                  <div class="panel col-xl-4 col-md-6 col-12">
                    <p class="amount display"><?=get_field("connecting_bibles") ?></p>
                    <p class="label">Bibles Schools</p>
                  </div>
  
                  <div class="panel col-xl-4 col-md-6 col-12">
                    <p class="amount display"><?=get_field("connecting_childhood") ?></p>
                    <p class="label">Early Childhood Centers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </section>
  
         <section class="real-africa">
          <div class="container-fluid">
            <div class="row">
              <div device-image="<?=get_field("banner_get_to_know") ?>" class="device-img"></div>
  
              <div class="get-know bkg-display">
                <div class="row">
                  <?=get_field("text_get_to_know") ?>
                </div>
              </div>
            </div>
          </div>
         </section>
         
         <section class="about">
          <div class="container-fluid">
            <div class="row">
              <div class="col-3 bkg-star-clean">
                <img src="<?=get_template_directory_uri() ?>/assets/img/bkg-star-clean.png" alt="">
              </div>
              <div class="offset-xl-1 col-xl-4 col-12 bkg-negative">
                <h1 class="title"> An African proverb says,“If you want to go fast, go alone. If you want to go far, go together.”</h1>
                  <p class="text">Everything we do is founded on building community. Building relationships with pastors, 
                    leaders, and kingdom-minded individuals propels the work of the ministry. </p>
              </div>
            </div>
          </div>
         </section>
  
        <section class="donate">
          <div class="container-fluid">
            <div class="row">
              <div class="offset-xl-1 col-xl-7 col-12">
                <img src="<?=get_field("banner-donate") ?>" alt="">
              </div>
              <div class="col-xl-4 col-12 context">
                <h1 class="upperCase display">donate</h1>
  
                <p class="text">
                  Your partnership helps build the bridge of transformation in Africa. 
                  As a supportive partner, you’ll reap the intangible reward of spreading hope by sowing seeds of God’s 
                  love and power.
                </p>
  
                <a target="_blank" href="./" class="button">Donate today!</a>
              </div>
            </div>
          </div>
         </section>
  
        <section class="africa-map">
          <div class="container">
            <div class="row">
              <div class="col-xl-7 offset-1 col-10 info">
                <h1 class="title-heavy">
                  <span>US FOR AFRICA is a</span>
                  <br>
                  <span>bridge</span>
                  <span class="light">that connects people, resources, and support.</span>                   
                </h1>
              </div>
              <div class="col-xl-5 offset-2 col-7 map">
                <img src="<?=get_field("africa-map") ?>" alt="">
              </div>
            </div>
          </div>
         </section>
       </main>

       <?php require_once 'footer.php' ?>