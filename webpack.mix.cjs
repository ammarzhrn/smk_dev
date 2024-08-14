const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css') // Jika Anda menggunakan SASS
   .react()
   .postCss('resources/css/app.css', 'public/css', [
       require('tailwindcss'),
       require('autoprefixer'),
   ]);


mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
        alias: {
            '@': path.resolve('resources/js/'),
        }
    }
});
