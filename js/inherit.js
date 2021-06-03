'use strict';

//Для базового класса Vehicle реализовать:
// - свойства:
// --- dimensions - габариты (объект с длиной, шириной, высотой),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
// --- getAge() - возвращает количество лет со дня производства.
class Vehicle{
    constructor(year, brand, model, manufactureDate, dimensions){
        this.year = year; 
        this.dimensions = dimensions;    
        this.brand = brand;
        this.model = model;
        this.manufactureDate = manufactureDate;
        this.dimensions = {
            length: 10,
            width: 15,
            height: 20,
        }          
    }
    getMaxSize(){
        return 2 * (this.dimensions.height * this.dimensions.length + this.dimensions.length * this.dimensions.width + this.dimensions.height * this.dimensions.width); 
        // return this.dimensions.length + this.dimensions.width + this.dimensions.height;
    }
    getAge(){
        return this.year - this.manufactureDate;
    }
}

const vehicle1 = new Vehicle (2021, 'Mercrdes', 'Vito', 2010);

console.log('vehicle1 :>> ', vehicle1);
console.log('vehicle1 Max Size :>> ', vehicle1.getMaxSize());
console.log('vehicle1 Age :>> ', vehicle1.getAge());

//Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).
class PassengerTransport extends Vehicle{
    constructor(year, brand, model, manufactureDate, dimensions, passengerCount, passengerLimit){
        super(year, brand, model, manufactureDate, dimensions);       
        this.passengerCount = passengerCount;
        this.passengerLimit = passengerLimit;
        this.dimensions = {
            length: 15,
            width: 20,
            height: 25,
        }
    }
    addPassenger(){
        if(this.passengerLimit > this.passengerCount){
            return true
        }else(this.passengerLimit <= this.passengerCount)
            return false
    } 
    
}
const vehicle2 = new PassengerTransport(2021, 'Mercedes', 'Sprinter', 2007, this.dimensions, 15, 20);
console.log('vehicle2 :>> ', vehicle2);
console.log('vehicle2 :>> ', vehicle2.addPassenger());

//Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.
class FreightTransport extends PassengerTransport{
    constructor(year, brand, model, manufactureDate, dimensions, weight, capacity){
        super(year, brand, model, manufactureDate, dimensions);
        this.weight = weight;
        this.capacity = capacity;
    }
    checkLoadingPossibility(){
        if(this.weight <= this.capacity){
            return true
        }else{
            return false
        }
    }
}
const vehicle3 = new FreightTransport(2021, 'Mercedes', 'Sprinter', 2009, this.dimensions, 3000, 3100);
console.log('vehicle3 :>> ', vehicle3);
console.log('vehicle3 :>> ', vehicle3.checkLoadingPossibility());