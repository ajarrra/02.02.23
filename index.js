function myName(name) {
    console.log("My name is " + name)
}

myName("Ajara");

function printMyCar() {
    console.log("camry");
}
printMyCar();

function printMyFriend() {
    console.log("Eleonora");
}
printMyFriend();

function printOurCity() {
    console.log("Karakol");
}
printOurCity();

function myLove() {
    console.log("food");
}
myLove();

function secret() {
    console.log("nothing");
}
secret();

function myCoolNumber() {
    console.log(13);
}
myCoolNumber();

function myDog() {
    console.log("Bobik");
}
myDog();

function myFavoruteColor() {
    console.log("white");
}
myFavoruteColor();

function myInstagram() {
    console.log("ajaraxs");
}
myInstagram();

function myTikTok() {
    console.log("ajarrra");
}
myTikTok();


function area(width, height){
    let result = width * height;// вот сюда возвращает и наводи суету
    return result; //возвращает
}

let a = area (5, 5); //технически тут 25 уже и он возвращает
let b = area (6, 6);

if(a <=b){
    console.log("Yes it does");
}
else{
    console.log("No it does not");
}



function getUSD(kgs){
    return kgs * 87.5;
}
let example1 = getUSD(100);
let example2 = getUSD (150);
console.log(example1);
console.log(example2);

function getF(c){
    return c * 1.8 + 32;
}
let example3 = getF(28);
console.log(example3);

getKilometers(30);//мили в км

function getKilometers (km){
    return km * 1.609
}
let km = getKilometers (30);
console.log (km);  


getComputedStyle(30);// дюймы в см
function getComputedStyle (cm){
    return cm * 2.54 //формула сколько дюймов в сантиметре
} 
let cm = getComputedStyle (30);
console.log(cm);


//функции должны называться что выполняют то и делают
//переменные названия что выводит



//ЦИКЛЫ

let i = 1; //создали единицу
console.log(i);

i = 2;// вручную сделали два
console.log(i);

i = i + 1; // 2 + 1 сам равняется равно 3   можно исп * / - +
console.log (i);
 
i += 1;// сокращ версия
// i -= 1 ;//минус делает
//i /= 1;
//i *= 1;
console.log(i);

i++; //всегда увеличивает на 1
console.log(i);




let number = 50;//циклы 
while (number <= 100){ // меньше 10 и плюс 1
    console.log(number);
    number += 2;
    
}

let num = 10; //считает от 10 до 1
while (num >= 1){
    console.log(num);
    num --;
}


for (let a = 1; a <= 10; a++){//другой метод цикла
    console.log(a);
}


let v = 1; //сверху и это одно и тоже
while (v <= 10){
    console.log(v);
    v++;
} 

//название переменных должны быть разными

for (let m = 10; m >= 1; m--){
    console.log(m);
}




let car1Fuel = 10;
let car2Fuel = 15;
let fuel = 50;

let distance = "";
for (let i = 0; i <= fuel; i += car1Fuel ){
  distance += "-";
}
console.log(distance);

distance = "";
for (let i = 0; i <= fuel; i += car2Fuel){
    distance += "-";
}
console.log (distance);



