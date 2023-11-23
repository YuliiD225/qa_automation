/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  const result = []
  for (const x of array) {
    result.push(fn(x))
  }
  return result
}

function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

/**var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
*/
/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/
function formatText(text) {

  const sentences = text.toLowerCase().split('.').map(sentence=>sentence.trim()).map(sentence => capitalize(sentence))
  return sentences.join(". ")
}

function capitalize (text) {
  return (text[0].toUpperCase() + text.slice(1))
}
console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

/*
    3. Написати функцію, яка поверне число голосних букв в строкі
*/

function countVowels(arr) {
  let vowels = 'AEIOUaeiou'
  let v_count = 0
  for (var i=0; i<arr.length; i++) {
    if (vowels.indexOf(arr[i]) !==-1 ) { 
      v_count +=1
      
  }
}
return v_count
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
function clearStr(str) {
  
    return str.replace(/[&\/\\#,+()$~%.'":;*?<>{}]/g, '').trim()
  
  }

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"
