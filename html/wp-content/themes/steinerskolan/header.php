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
  <?php $menuItems = wp_get_nav_menu_items('main-menu'); ?>

<header> 
    <nav class="header-menu">
       
        <a classname="logo" href="<?= home_url(); ?>">Rudolf Steinerskolan</a>
        <ul> 
            <div class="navbar-nav">
            <?php $currentPageId = $wp_query->queried_object_id;
             foreach ($menuItems as $item) : ?>
             <li> 
            <a class="nav-link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                <?= $item->title; ?>
            </a>
             </li> 
            <?php endforeach; ?>
             </ul> 
            </div>
    
        
    </nav>
</header>