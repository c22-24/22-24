// script.js

// Завдання 1: Модифікація масиву
function modifyArray(inputArray) {
    inputArray.unshift("start");
    inputArray.pop();
    if (inputArray.length >= 2) {
        inputArray[1] = "modified";
    }
    return inputArray;
}

// Завдання 2: Робота з методами класу Array
function arrayOperations(inputArray) {
    inputArray.push("end");
    inputArray.shift();
    if (inputArray.length >= 3) {
        inputArray.splice(3, 0, "middle");
    }
    return inputArray;
}

// Завдання 3: Робота з класом Number
function checkInteger(number) {
    if (Number.isInteger(number)) {
        return "Число ціле";
    } else {
        return "Число не ціле";
    }
}

// Створення масиву для першого завдання
var myArray1 = [1, 2, 3, 4, 5];
var modifiedArray1 = modifyArray(myArray1);
document.getElementById("originalArray").innerText = "Початковий масив (Завдання 1): " + myArray1;
document.getElementById("modifiedArray").innerText = "Модифікований масив (Завдання 1): " + modifiedArray1;

// Створення масиву для другого завдання
var myArray2 = [6, 7, 8, 9, 10];
var modifiedArray2 = arrayOperations(myArray2);
document.getElementById("originalArray2").innerText = "Початковий масив (Завдання 2): " + myArray2;
document.getElementById("modifiedArray2").innerText = "Модифікований масив (Завдання 2): " + modifiedArray2;

// Перевірка числа для третього завдання
var numberToCheck = 7.5;
var resultOfCheck = checkInteger(numberToCheck);
document.getElementById("checkResult").innerText = "Результат перевірки (Завдання 3): " + resultOfCheck;
