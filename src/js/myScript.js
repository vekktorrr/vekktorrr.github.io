"use strict";


var nameUser=prompt("Здравствуйте, как вас зовут?");

    alert("Рад вас видеть, "+ nameUser);


prompt("Какой тип сайта Вы хотели бы?");


prompt("Какой дизайн Вы хотите?");



prompt("Укажите тип вёрстки?");
alert("Благодарю за Ваш выбор! Сейчас калькулятор всё рассчитает :) ");



let calculator = {
    typeSite: 1750,
    design: 1500,
    verstka: 3200,
};

let sum = 0;
for( let key in calculator){
    sum += calculator[key];
}

alert (sum); // 6450

