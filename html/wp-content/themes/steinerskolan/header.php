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
  <?php $subItems = []; ?>
  
  <header class="header-menu">
      <a href="/">
        <img class="logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logoheader.png" alt="Rudolf Steinerskolan logo" />
      </a>

      <nav class="desktop-links">
        <?php $currentPageId = $wp_query->queried_object_id;

        foreach ($menuItems as $item) : ?>
          <!-- check if menu item has subitems -->
          <?php foreach ($menuItems as $testItem) :
            if($item->ID == $testItem->menu_item_parent) : 
              array_push($subItems, $testItem);
            endif; 
          endforeach; ?>

          <!-- create dropdown for subitems -->
          <?php if($subItems) : ?> 
            <div class="hidden-dropdown dropdown-<?= $item->ID ?>">
              <div class="dropdown">

              <?php foreach ($subItems as $subItem) : ?>
                <a class="link<?= $subItem->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $subItem->url; ?>">
                  <?= $subItem->title; ?>
                </a>
              <?php endforeach; ?>

              </div>
            </div>
          <?php endif; ?>

          <!-- add menu item on nav -->
          <?php if(!$item->menu_item_parent) : ?>
          <li class="menu-item" data-id="<?= $item->ID ?>">
            
            <?php if($subItems) : ?>
              <p class="link<?= $item->object_id == $currentPageId ? ' active' : '' ?>">
                <?= $item->title; ?>
              </p>
              <img class="arrow-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/arrow.png" alt="Dropdown arrow" />
              
              <?php else : ?>
                <a class="link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                  <?= $item->title; ?>
                </a>
            <?php endif; ?>
          </li>

          <?php $subItems = [];
          endif; endforeach; ?>
      </nav>

      <img class="search" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/searchicon.png" alt="Search" />
      <div class="burger">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </div>

      <div class="mobile-overlay">
        <nav>
            <?php foreach ($menuItems as $item) : ?>
              <li><a href="<?= $item->url ?>"><?= $item->title ?></a></li>
            <?php endforeach; ?>
        </nav>
      </div>

  </header>
  <script src="<?= get_theme_file_uri('assets/js/header.js') ?>"></script>