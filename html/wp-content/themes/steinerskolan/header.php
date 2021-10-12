<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/variables.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/header.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/style.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/dist/footer.css') ?>">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
  <?php $menuItems = wp_get_nav_menu_items('main-menu'); ?>

<header> 
    <nav class="header-menu">
    <div class="menu-bar"></div>
        <div class="burger">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
        </div>
        <div class="overlay">
          <div class="menu-links">
            <ul>
              <?php foreach ($menuItems as $item) : ?>
                <li><a href="<?= $item->url ?>"><?= $item->title ?></a></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>

        <a class="logo" href="<?= home_url(); ?>">Rudolf Steinerskolan</a>
        <ul class="desktop"> 
            <div class="navbar-nav">
            <?php $currentPageId = $wp_query->queried_object_id;
             foreach ($menuItems as $item) : ?>
             <li> 
            <a class="nav-link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                <?= $item->title; ?>
            </a>
             </li> 
            <?php endforeach; ?>
          </div>
        </ul> 
    </nav>
</header>
<script src="<?= get_theme_file_uri('assets/js/header.js') ?>"></script>