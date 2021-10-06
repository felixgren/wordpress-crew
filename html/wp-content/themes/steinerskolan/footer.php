<footer>
  <div class="footer-container">
    <button class="footer-button"><a href="example.com"> KONTAKT</a></button>
    <div class="footer-icon-container"> <img class="footer-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/instagram.png" alt="school logo">
      <img class="footer-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/facebook.png" alt="school logo">
    </div>

    <div class="footer-links">
      <h4> Länkar </h4>
      <p> <a href="">Intranätet Idunsoft </a> </p>
      <a href="">Ansök om plats </a>
      <a href="">Facebook <span class="dashicons dashicons-facebook"></span></a>
      <a href="">Instagram <span class="dashicons dashicons-instagram"></span></a>

    </div>

    <?php /* if (get_field('facebook_url', 'option')): ?>
            <a class="text-decoration-none" href="<?php the_field('facebook_url', 'option');?>">
              <img src="<?=get_template_directory_uri();?>/assets/images/facebook-icon.png" />
            </a>
          <?php endif; ?>

          <?php if (get_field('instagram_url', 'option')): ?>
            <a class="text-decoration-none" href="<?php the_field('instagram_url', 'option');?>">
              <img src="<?=get_template_directory_uri();?>/assets/images/instagram-icon.png" />
            </a>
          <?php endif; */ ?>



    <div class="footer-logo">
      <img class="footer-logo-image" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logofooter.png" alt="school logo">

    </div>

    <div class="contact-info">
      <h4>Kontakt </h4>
      <p> Rudolf Steinerskolan i Göteborg </p>
      <p> Tallhöjdsgatan 1 </p>
      <p> 416 74 Göteborg </p>
      <p> 031 21 46 32 </p>
      <a href=" mailto:rudolf@steinerskolan.se"> rudolf@steinerskolan.se</a>
    </div>




    <div>
      <?php /* if (get_field('footer_copyright', 'option')): ?>
            <p class="text-secondary"><em><?php the_field('footer_copyright', 'option');?> </em></p>
          <?php endif; */ ?>
    </div>

  </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>