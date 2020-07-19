let mix = require('laravel-mix');

mix.sass('style.scss', 'build/css');
mix.copy('build/css/style.css', 'docs/style.css');
