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
        <img class="logo" src="<?= get_stylesheet_directory_uri(); ?>/assets/images/logoheader.png" alt="Rudolf Steinerskolan logo" />
      </a>

      <!-- desktop menu -->
      <nav class="desktop-links">
        <?php $currentPageId = $wp_query->queried_object_id;

        // check if menu item has subitems
        foreach ($menuItems as $item) : ?>
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
              <img class="arrow-icon" src="<?= get_stylesheet_directory_uri(); ?>/assets/images/arrow.png" alt="Dropdown arrow" />
              
              <?php else : ?>
                <a class="link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                  <?= $item->title; ?>
                </a>
            <?php endif; ?>
          </li>

          <?php $subItems = [];
          endif; endforeach; ?>
      </nav>

      <!-- mobile menu -->
      <img class="search" src="<?= get_stylesheet_directory_uri(); ?>/assets/images/searchicon.png" alt="Search" />
  </header>

  <div class="burger">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>

  <div class="mobile-overlay">
    <nav>
        <?php foreach ($menuItems as $item) : ?>

          <?php foreach ($menuItems as $testItem) :
            if($item->ID == $testItem->menu_item_parent) : 
              array_push($subItems, $testItem);
            endif; 
          endforeach; ?>

          <!-- main links -->
          <?php if(!$item->menu_item_parent) : ?>
            <?php if($subItems) : ?> 
              <li class="mobile-menu-item" data-id="<?= $item->ID ?>">
                <p><?= $item->title ?></p>
                <img class="arrow-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/arrow.png" alt="Dropdown arrow" />
              </li>
              <?php else : ?>
              <li><a href="<?= $item->url ?>"><?= $item->title ?></a></li>
          <?php endif; endif; ?>

          <!-- submenu dropdown -->
          <?php if($subItems) : ?> 
            <div class="dropdown-mobile mobile-dropdown-<?= $item->ID ?>">
              <?php foreach ($subItems as $subItem) : ?>
                <li>
                  <a class="subitem" href="<?= $subItem->url ?>"><?= $subItem->title ?></a>
                </li>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>

          <?php $subItems = []; ?>
        <?php endforeach; ?>
    </nav>
  </div>
  
  <script src="<?= get_theme_file_uri('assets/js/header.js') ?>"></script>