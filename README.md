# Joomla! Шаблон болванка для разработчика

## Gulp плагины

* [SCSS](http://sass-scss.ru)
* [Postcss](https://github.com/postcss/postcss)
* [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [CSS-mqpacker](https://github.com/hail2u/node-css-mqpacker)
* [CSSO](https://github.com/css/csso)
* [Webpack](https://webpack.github.io)
* [ES6, Babel](https://babeljs.io)
* [ESlint](http://eslint.org)
* [Iconfont](https://github.com/nfroidure/gulp-iconfont)
* [Imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [UglifyJS](https://www.npmjs.com/package/gulp-uglify)

## Установка

* Скачиваем архив
* Устанавливаем стандартным способом в Joomla!

## Приступая к разработке

* Если не установлен Node.js то устанавливаем, нам нужен npm;
* Далее глобально ставим Gulp ```npm install -g gulp```;
* Следом ставим Bower ```npm install -g bower```;
* Устанавливаем SASS ```sudo gem install sass``` (http://sass-lang.com/install);
* Заходим в папку с шаблоном (/templates/blank_j3);
* Установка зависимостей для проекта ```npm install```
* Установка зависимостей для шаблона ```bower install```

## Workflow

Запускаем ```gulp``` или ```gulp prod``` (для финальной версии, чтобы собрать боевую версию перед деплоем на продакшн)
Пишем свой шаблон и получаем удовольствие от всех прелестей gulp
