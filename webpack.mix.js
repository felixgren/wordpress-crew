const mix = require("laravel-mix");

require("dotenv").config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your WordPlate applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JavaScript files.
 |
 */

const theme = process.env.WP_DEFAULT_THEME;

mix.setResourceRoot("../");

mix.setPublicPath(`html/wp-content/themes/steinerskolan/assets`);

mix.sass("html/wp-content/themes/steinerskolan/assets/style.scss", "dist");
mix.sass("html/wp-content/themes/steinerskolan/assets/footer.scss", "dist");
mix.sass("html/wp-content/themes/steinerskolan/assets/header.scss", "dist");

/* 
mix.copyDirectory("resources/fonts", `public/themes/${theme}/fonts`);
mix.copyDirectory("resources/icons", `public/themes/${theme}/icons`);
 */
