'use strict'

const containerFizzBuzz = document.getElementById('container-fizzbuzz');

for (let i = 1; i <= 100; i++) {

    const stringFizzBuzz = document.createElement('div');
    containerFizzBuzz.append(stringFizzBuzz);
    stringFizzBuzz.classList.add('box');

    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz')
        stringFizzBuzz.append('Fizz');
        stringFizzBuzz.classList.add('box-fizz');
    }

    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz')
        stringFizzBuzz.append('Buzz');
        stringFizzBuzz.classList.add('box-buzz');
    }

    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        stringFizzBuzz.append('FizzBuzz');
        stringFizzBuzz.classList.add('box-fizzbuzz');
    }

    else {
        console.log(i);
        stringFizzBuzz.append(i);
        stringFizzBuzz.classList.add('box-number');
    }
}