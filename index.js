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







