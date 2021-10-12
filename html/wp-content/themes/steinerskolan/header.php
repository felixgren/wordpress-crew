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

  <header class="header-menu">
      <a class="logo" href="<?= home_url(); ?>">Rudolf Steinerskolan</a>
        <nav class="desktop-links">
          <?php $currentPageId = $wp_query->queried_object_id;
          foreach ($menuItems as $item) : ?>
            <li>
              <a class="link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
              <?= $item->title; ?>
            </a>
          </li>
          <?php endforeach; ?>
        </nav>
      <div class="burger">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>
      <div class="mobile-overlay">
        <nav class="mobile-links">
            <?php foreach ($menuItems as $item) : ?>
              <li><a href="<?= $item->url ?>"><?= $item->title ?></a></li>
            <?php endforeach; ?>
        </nav>
      </div>
  </header>
  <script src="<?= get_theme_file_uri('assets/js/header.js') ?>"></script>