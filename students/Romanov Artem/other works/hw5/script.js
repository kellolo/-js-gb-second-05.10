'use strict'
const app = new Vue({
            el: '#app', //Привязка к html-документу
            data: { //Добавление данных в объект
                name: 'Geek',
                names: ['Frodo', 'Sam', 'Meriadoc', 'Peregrin']
            },
            methods: { //В поле перечиляются функции доступные из шаблона
                clickHandler() { //Добавим метод обработки клика
                    console.log('click');
                }
            },
            mounted() { //Метод срабатывает сразу не дожидаясь пользователя
            },
            computed: { //Выводим преобразование данных отдельно в - вычисляемые свойства
                upperCaseName() { //Метод перевода в верхний регистр
                    return this.name.toUpperCase(); //Возвращаем значения поля name 
                }}
            });