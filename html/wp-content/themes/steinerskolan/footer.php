
<footer >
  <div class="container">
      
      <div class="footer-links"> 
          
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
    
        </div> 

     <div class="contact-info"> 
       <h4>Kontakt </h4>
        <p> Rudolf Steinerskolan i Göteborg </p> 
     </div> 
        
    

   
        <div >
          <?php if (get_field('footer_copyright', 'option')): ?>
            <p class="text-secondary"><em><?php the_field('footer_copyright', 'option');?></em></p>
          <?php endif; ?>
        </div>
      
  </div> 
</footer>
<?php wp_footer(); ?>
</body>
</html>