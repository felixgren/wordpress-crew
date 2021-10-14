<?php /* Template name: Home */ ?>
<?php get_header(); ?>
<section class="home">

    <div class="hero-wrapper">
        <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/examplepic.png" alt="hero" />
        <h1 class="mobile-title">Välkommen till Rudolf Steinerskolan!</h1>

        <div>
            <h1 class="desktop-title">Välkommen till Rudolf Steinerskolan!</h1>
            <p>Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.</p>
            <a href="#">Läs mer</a>
        </div>
    </div>

    <?php the_content(); ?>
</section>
<?php get_footer(); ?>