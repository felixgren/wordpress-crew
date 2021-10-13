<?php get_header(); ?>

<main role="main">

    <div class="hero-wrapper">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/examplepic.png" alt="hero" />
        <h1 class="mobile-title">Välkommen till Rudolf Steinerskolan!</h1>

        <div>
            <h1 class="desktop-title">Välkommen till Rudolf Steinerskolan!</h1>
            <p>Rudolf Steinerskolan är belägen på en höjd med underbar utsikt över staden. Runtom finns tallskog och bergsknallar, här kan man tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt belägen i denna miljö.</p>
            <a href="#">Läs mer</a>
        </div>
    </div>

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>
                <header>
                    <h1><?php the_title(); ?></h1>
                </header>

                <?php the_content(); ?>
            </article>
        <?php endwhile;
    else : ?>
        <article>
            <p>Nothing to see.</p>
        </article>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
