'use strict';

// - Map

//Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
const arr1 = [1, 2];
const arr2 = [1, 2, 3, 4, 5];

const map1 = new Map();
map1.set(arr1, arr2);

//Получите список ключей и значений отдельно.
//Получите текущее количество элементов.
for (const key of map1.keys()){
    console.log('key :>> ', key);
}

for (const value of map1.values()){
    console.log('value :>> ', value);
}

//Добавьте и удалите элемент
const map2 = new Map();

map2.set('Vasya 777', 'N');
console.log('map2 :>> ', map2);

map2.delete('Vasya 777', 'N')
console.log('map2 :>> ', map2);

//Произведите поиск по ключу
console.log('map1.get() :>> ', map1.get('Vasya Tryoshkin'));

/***************************************************************** */

// - Set















