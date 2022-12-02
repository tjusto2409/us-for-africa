<?php wp_footer() ?>

<footer class="bkg-display">
      <div class="container">
        <div class="row">
          <div class="col-9 col-xl-10">
            <p>&#169; <?= date("Y"); ?> copyright us for africa</p>
          </div>

          <div class="col-3 col-xl-2">
              <div class="social-media">
                <span>Follow Us</span>
                <a target="_blank" href="<?= esc_url(get_fields(72)["instagram"]) ?>">
                  <div class="bkg-social-media instagram"></div>
                </a>
                
                <a target="_blank" href="<?= esc_url(get_fields(72)["facebook"]) ?>">
                  <div class="bkg-social-media facebook"></div>
                </a>
              </div>
            </div>
        </div>
      </div>
     </footer>
    </body>
</html>