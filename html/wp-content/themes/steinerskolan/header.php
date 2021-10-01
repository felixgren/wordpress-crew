<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/header.scss') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/style.scss') ?>">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header>
        <nav role="navigation">
            <?php wp_nav_menu( array( 'theme_location' => 'extra-menu',
                        'menu_class' => 'header_menu'
                         ) ); ?>
            
        </nav>
    </header>