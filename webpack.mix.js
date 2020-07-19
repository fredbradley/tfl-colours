let mix = require('laravel-mix');

mix.sass('scss/style.scss', 'build/css');
mix.copy('build/css/style.css', 'docs/style.css');
