

/*var test = {
   a: 4,
   b: 6,
   c: 5
}

console.log(test.a)
var object_new = [""]

if (true) {

    console.log('Hello from if')
}



// 2ий варіант виклику та визначення функції
function typeChecker(arg1, arg2) {
    if (typeof arg1 == "string" && typeof arg2 == "string") {
        console.log(arg1+arg2)
    } else if (typeof arg1 == "number" && typeof arg2 == "number") {
        console.log(arg1*arg2)
    } else {
        console.log("There are no type matches for operation")
    }
    
    }

   typeChecker(3, 4) // виведе 6
   typeChecker("My", "text"); // виведе Mytext
   typeChecker(true, false); // виведе There are no type matches for operation


   function isNegative(value) {
    value<0 ? console.log ('Yes') : console.log('No')
    }

    isNegative(-1); // виведе у консоль "Yes"
isNegative(1)


function typeChecker(arg1, arg2) {
    typeof arg1 == 'string' && typeof 'arg2 == string' ? 
        console.log(arg1+arg2) : 
    typeof arg1 == 'number' && typeof arg2 == 'number' ?
        console.log(arg1*arg2) :
        console.log("There are no type matches for operation")
    }
    
    

   typeChecker(3, 4) // виведе 6
   typeChecker("My", "text"); // виведе Mytext
   typeChecker(true, false); // виведе There are no type matches for operation

   function divider(num1, num2) {
   (num1%=num2 )==0  ? console.log('true') : console.log('false')
    }
    
    // Приклад роботи функції:
    divider(4, 2); // виведе у консоль true
    divider(3, 2); // виведе у консоль false

     4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
перевищує за значенням число 10 */
/*function recursiveAddition(value) {
    
    if (value<=10){
        //console.log(value, value+=2, value+=2)
        //console.log(value)
        console.log(value)
        return(recursiveAddition(value+2))
        }
        else { }
    }
    */

//const { array } = require("assert-plus");

 
    
    // Приклад роботи функції:
   // recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
   // recursiveAddition(2); // виведе в консоль по черзі 2, 4, 6, 8, 10
   // recursiveAddition(11); // не виведе нічого
    
    /*1. Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  */Приклад:

//function formatText(text) 
    //let str = str.trim().split(" ")
    /*function ucFirst(str) {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
      }*/
 // var array = []
 // for (i=0; i<text.length; i++){

  /*let i =0
    arr = text.toLowerCase().trim().split(".")
    //for (let i=0; i<arr.length; i+=1)
while (i !== arr.length)
     {
       return (arr[i]);
  }

 // return text
  
    //split('.')))
    //.join(' ').replaceAll("   ", ' ')))
  }
/*
  function array() {
    let arr = []
    for ( i=0; i<arr.length; i++) {
      return arr[0]
    }

  }
  */
  //console.log(formatText("heLLo, this is My teXT.have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
 // console.log(formatText(" Hello woRld   TYTUUY. ufghjk")); // "Hello world"
 //console.log(formatText(" Hello woRld   TYTUUY. ufghjk")); // "Hello world"
  //console.log(typeof(text))
/*
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
  */

  /*function formatText() {
    //let str = str.trim().split(" ")
    function ucFirst(str) {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
      }
  var array = ['heLLo, this is My teXT', 'have A NiCe DaY  ', ' Hello woRld   TYTUUY']
 // for (i=0; i<text.length; i++){

  
    //array = text.toLowerCase().trim().split(".")

    for (let i=0; i<array.length; i++) {
       return (array[i]);
  }

  //return text
  
    //split('.')))
    //.join(' ').replaceAll("   ", ' ')))
  }
  console.log(formatText)*/
/*
  function capitalizeText(text) {

    const sentences = text.toLowerCase().split('.').map(sentence=>sentence.trim()).map(sentence => capitalize(sentence))
    return sentences.join(". ")
  }

 function capitalize (text) {
    return (text[0].toUpperCase() + text.slice(1))
  }

  console.log(capitalizeText("heLLo, this is My teXT.have A NiCe DaY  "))
*/
  //4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
  /*
  function clearStr(str) {
    //let specialsmb = "%$#@!`';:><?/*+-()^&\|{},._"
    return str.replace(/[&\/\\#,+()$~%.'":;*?<>{}]/g, '').trim()
  
  }
  
  console.log(clearStr("My var: 22 ")); // виведе "My var 22"
  console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
  console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"
  */
  /*const str = "Це довільний текст для створення масиву слів ";
function stringToArray(str1) {
  let str1
  str1 = str.trim().toLowerCase().split(' ').sort()
    return str1
}

//function srt((a,b) => 
sortObject = function(data) {
  var keys = keys(data);
  var result = [];

  keys.sort();

  for(var i = 0; i < keys.length; i++) {
      var key = keys[i];

      result[key] = data[key];
  }

  return result;
};



console.log(stringToArray(str));*/

/*ar arr = ['ab', function test () {console.log('Some text')}]
arr.pop(1)
console.log(arr)

const str = "Це довільний текст для створення масиву слів ";
 
    function stringToArray(str) {
      let str1
      str1 = str.trim().toLowerCase().split(' ').sort()
        return str1
    }
    */
    var initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];

    function asc (a, b) {
      return a-b
    }
    function removeDuplicatesAndSort(arr) {
        let unique = []
        arr.forEach(element => {
            if(!unique.includes(element)) {
                unique.push(element)
            }
        }); return unique.sort(asc)
    }
    
    console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]

   // 3. 
   /* var initialArray2 = [2, 3, 6, 7, 9, 12, 16, 20, 21, 24];
function arrayOfEvens(arr) {
    let arr2 = []
    arr.forEach (element => {
        if(element%2 === 0) {
            arr2.push(element)
        }
    }); return arr2
}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]
*/
/*function createArray(element) {
    
  let mas = []
  mas.unshift(element)
  
 for (let i=element; i<=30; i++) {
  var mas1 = mas.map(element => element+element)
  
  mas1.unshift(element)
  return mas1
 }
  
}
*/
/*function increase(arg) {
  return arg + arg;
}*/

function createArray(element) {
    
  const mas = [element]
  //mas.unshift(element)
  while (true) {
    const prev = mas[mas.length-1]
    const newElem = prev + element
    if (newElem > 30) {
      return mas
    }
    mas.push(newElem)
  }
}
 /*var prev = element 
  while (prev<=30) {
    const newElem = prev + 2*prev
    mas.push(newElem)
    prev=newElem
  }
  return mas
}
  */

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]


