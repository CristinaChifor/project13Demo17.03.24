/**
 * Calcularea Sumelor:
 * Definește o funcție numită computeSum care 
 * primește doi parametri și returnează suma acestora.
 */
function computeSum(a, b) {
    let sum = a + b;
    return sum;
}

// Exemplu de apel al funcției
let rezultat = computeSum(5, 7);
console.log(rezultat); // Va afisa 12

/**
 * Determinarea Parității:
 * Scrie o funcție numită isEven care primește un număr 
 * și returnează true dacă numărul este par și false dacă este impar
 */
function isEven(numar) {
    return numar % 2 === 0;
}

// Exemplu de apel al functiei
let result1 = isEven(4);
console.log(result1); // Va afisa true

var result2 = isEven(7);
console.log(result2); // Va afisa false

/**
 * Concatenarea Șirurilor:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri și le concatenează, returnând rezultatul.
 */
function concatenateStrings(string1, string2) {
    const result = string1 + string2;
    return result;
}

// Example function call
const firstString = "Hello, ";
const secondString = "World!";
const finalResult = concatenateStrings(firstString, secondString);
console.log(finalResult); // Will display "Hello, World!"

/**
 * Verificarea Palindromului:
 * Defineste o funcție numită isPalindrome care primește un șir și
 *  returnează true dacă este palindrom și false în caz contrar.
 */
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example function calls
const result3 = isPalindrome("racecar");
console.log(result3); // Will display true

const result4 = isPalindrome("hello");
console.log(result4); // Will display false

/**
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Example function call
const randomNum = generateRandomNumber();
console.log(randomNum); // Will display a random integer between 1 and 100

//Pag 2 de exercitii

/**
 * Calcularea Puterii:
 * Implementează o funcție numită raiseToPower care primește 
 * două numere (baza și exponentul) și returnează rezultatul ridicării la putere.
 */
// Implementarea funcției pentru ridicarea la putere
function raiseToPower(base, exponent) {
    return Math.pow(base, exponent);
}

// Exemplu de apel al funcției
const raised = raiseToPower(2, 3);
console.log(raised); // Va afișa 8

/**
 * Calcularea Mediei:
 * Creează o funcție numită calculateAverage care primește 
 * un array de numere și returnează media lor.
 */
// Implementarea funcției pentru calcularea mediei
function calculateAverage(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
}

// Exemplu de apel al funcției
const numbersArray = [10, 15, 20, 25, 30];
const average = calculateAverage(numbersArray);
console.log(average); // Va afișa 20

/**
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */
// Implementation of the function for transforming to uppercase
function transformToUppercase(inputString) {
    return inputString.toUpperCase();
}

// Example function call
const originalString = "Hello, World!";
const transformedString = transformToUppercase(originalString);
console.log(transformedString); // Will display "HELLO, WORLD!"

/**
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */
// Implementation of the function for checking prime numbers
function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}
  
// Example function calls
const prime = isPrimeNumber(7);
console.log(prime); // Will display true

const notPrime = isPrimeNumber(14);
console.log(notPrime); // Will display false
