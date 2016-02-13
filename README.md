# Joomla! Шаблон болванка для разработчика

## Gulp плагины

* [SCSS](http://sass-scss.ru)
* [CSSO](https://github.com/css/csso)
* [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [Combine media queries](https://www.npmjs.com/package/grunt-combine-media-queries)
* [CoffeeScript](http://coffeescript.org)
* [Spritesmith](https://www.npmjs.com/package/spritesmith)
* [Imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [UglifyJS](https://www.npmjs.com/package/gulp-uglify)

## Установка

* Скачиваем архив
* Устанавливаем стандартным способом в Joomla!

## Приступая к разработке

* Если не установлен Node.js то устанавливаем, нам нужен npm;
* Далее глобально ставим Gulp ```npm install -g gulp```;
* Следом ставим Bower ```npm install -g bower```;
* Заходим в папку с шаблоном (/templates/blank_j3);
* Установка зависимостей для проекта ```npm install```
* Установка зависимостей для шаблона ```bower install```

## Workflow

Запускаем ```gulp``` или ```gulp prod``` (для финальной версии, чтобы собрать боевую версию перед деплоем на продакшн)
Пишем свой шаблон и получаем удовольствие от всех прелестей gulp
