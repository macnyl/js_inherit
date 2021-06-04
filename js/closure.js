'use strict';

function addNumber(n){
    return function (m){
        return n + m;
    };
   
}

const add = addNumber(5);
const result = add (10);

console.log('result :>> ', result);



