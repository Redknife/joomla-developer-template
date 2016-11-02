# Joomla developer template

Joomla! Шаблон для быстрой разработки с 0.

## Особенности
<dl>
    <dt>Оптимизация загрузки страницы</dt>
    <dd>Файлы стилей и скриптов объединяются в один оптимизированный файл, изображения (PNG, JPEG, GIF, SVG) сжимаются без потерь.</dd>
    <dt>Современный Javascript (ES2015/ES6)</dt>
    <dd>Весь JS код преобразуется в код на предыдущем стандарте ES5, который поддерживается большинством браузеров (IE9+).</dd>
    <dt>Препроцессинг CSS</dt>
    <dd>Поддержка SASS, автоматическое добавление вендорных префиксов, объединение media queries, etc.</dd>
    <dt>Сборка шрифта c иконками</dt>
    <dd>SVG иконки собираются в файлы шрифтов и автоматически подключаются в файл стилей.</dd>
    <dt>Мгновенная обратная связь (Livereload)</dt>
    <dd>Автоматическое обновление страницы в браузере, при изменении файлов (в режиме разработки, при установленном расширении для браузера).</dd>
</dl>

## Требования

* Node.js >= 5.0.0 (желательно использовать последнюю стабильную версию).
* Глобально установленный gulp-cli и webpack ```npm install -g gulp-cli webpack```
> Для Livereload: [расширение Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei), [расширение Firefox](https://addons.mozilla.org/en-US/firefox/addon/livereload), [расширение Safari](http://download.livereload.com/2.1.0/LiveReload-2.1.0.safariextz).
    Подробнее [http://livereload.com](http://livereload.com).

## Быстрый старт

1. Скачиваем архив с шаблоном и устанавливаем стандартным способом в Joomla!
2. В папке с шаблоном:
    2.1 Запускаем ```npm install``` (установка зависимостей).
    2.2 Запускаем ```npm start``` (запуск сборки в режиме разработки).

> Чтобы посмотреть возможные команды, запускаем ```npm run help``` 


## Базовые команды

| Команда | Описание |
| --- | --- |
| ```npm run build``` | Сборка, сжатие, оптимизация всей статики |
| ```npm run build:dev``` | Сборка всей статики без сжатия (+sourcemaps) |
| ```npm run build:all``` | Запуск ```npm run build:dev``` и ```npm run build:prod``` |
| ```npm start``` | ```npm run build:dev``` + livereload |
| ```npm run start:prod``` | ```npm run build``` + livereload |
| ```npm run clean``` | Очистить папку public |

## Gulp tasks

| Название | Описание |
| --- | --- |
| js | Сборка JS (+sourcemaps) |
| js:dev | Сборка, сжатие и оптимизация JS |
| styles | Препроцессинг и сборка CSS (+sourcemaps) |
| styles:dev | Препроцессинг, сжатие, оптимизация и сборка CSS |
| images | Оптимизация изображений |

Чтобы запустить задание выполните <code>gulp <em>task_name</em></code>
