// Обьекты: основы
// ----------------------------------------------
// let user = [];

// user.name = "John";
// user.surname = "Smith";

// // console.log(user);

// user["name"] = "Pete";
// delete user.name;
// console.log(user);
// ----------------------------------------------
// function isEmpty(obj) {
//     for (key in obj) {
//         return false;
//     };
//     return true;
// };
// let schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false
// ----------------------------------------------
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// };

// console.log(sum);
// ----------------------------------------------
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// multiplyNumeric(menu);
// console.log(menu);
// ----------------------------------------------
// function Calculator() {
//     let numA, numB;
//     this.read = function() {
//         numA = +prompt("Вам нужно ввести 2 числа. Первое:", 3);
//         numB = +prompt("Второе:", 9);
//         console.log(`Введены числа ${numA} и ${numB}`);
//         // if(numA & numB === "null") {
//         //     console.log("Вы отказались от ввода")
//         // } else if(numA & numB === isNaN) {
//         //     alert("Ошибка, вы ввели не число")
//         // } else {
//         //     console.log(`Введены числа ${numA} и ${numB}`)
//         // };
//     };
//     this.sum = function() {
//         summ = numA + numB;
//         console.log(summ);
//         return summ;
//     };
//     this.mul = function() {
//         mull = numA * numB;
//         console.log(mull);
//         return mull;
//     };
// }
// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum = " + calculator.sum() );
// console.log( "Mul = " + calculator.mul() );
// ----------------------------------------------
// function Accumulator(startingValue = 5) {
//     this.value = +startingValue;
//     this.read = function() {
//         this.value += +prompt("Введите число: ", 0);
//     };
// }

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавляет введённое пользователем значение к текущему
// accumulator.read(); // прибавляет введённое пользователем значение к текущему
// alert(accumulator.value); // выведет сумму этих значений
// ----------------------------------------------
// Типы данных: числа
// ----------------------------------------------
// function readNumber() {
//     let num;
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//     if (num === null || num === '') return null;
//     return +num;
// };
// alert(`Число: ${readNumber()}`);
// ----------------------------------------------
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );
// ----------------------------------------------
// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );
// ----------------------------------------------
// Типы данных: строки
// ----------------------------------------------
// function ucFirst(str) {
//     if (!str) return str;
//     return str = str[0].toUpperCase() + str.slice(1);
// };
// console.log(ucFirst("василиса"));
// ----------------------------------------------
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     // if (lowerStr.includes("viagra")) {
//     //     return true;
//     // } else if(lowerStr.includes("XXX")) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// } 
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));
// ----------------------------------------------
// function truncate(str, maxlength) {
//     // if (str.length > maxlength) {
//     //     return str.slice(0, maxlength-1) + "…";
//     // } else {
//     //     return str;
//     // };
//     return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// };
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20))
// ----------------------------------------------
// Типы данных: массивы
// ----------------------------------------------
// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("Введите число", 0);
//       // Прекращаем ввод?
//         if (value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());
// ----------------------------------------------
// ----------------------------------------------

// Двоеточие после нечетнолго числа

// const num = prompt("Введите многозначное число", 55);
// console.log("До: ", num);

// function colonOdd(num) {
//     let nums = [];
//     for (let char of num) {
//         if(Number(char) === 2,0 || Number(char) % 2 === 0) {
//             nums.push(char);
//         } else if(Number(char) % 2 !== 0) {
//             nums.push(char, ":");
//         } else {
//             nums.push("?");
//         }
//     }
//     // console.log(nums);
//     return nums.join("");
// };

// // colonOdd(num);
// console.log("После: ", colonOdd(num));
// ----------------------------------------------

// Замена регистра символов

// const str = prompt("Введите слово", "КаЖдЫй ОхОтНиК");
// console.log("До:", str);

// function changeRegister(str) {
//     let line = str.slice(0).split(""),
//     result = [];
//     // let line = str.replace(/\s+/g, "");
//     for (let char of line) {
//         if(char === char.toUpperCase()) {
//             result.push(char.toLowerCase());
//         } else if(char !== char.toUpperCase()) {
//             result.push(char.toUpperCase());
//         } else {
//             result.push(char.replace(char, "?"));
//         };
//     };
//     return result.join("");
// };

// console.log("После: ", changeRegister(str));
// ----------------------------------------------

// ----------------------------------------------
// function week(num) {
//     if(num == 7 || num < 7 && num > 0) {
//         if (num===1) {
//             console.log("Понедельник")
//         } else if (num===2) {
//             console.log("Вторник")
//         } else if (num===3) {
//             console.log("Среда")
//         } else if (num===4) {
//             console.log("Четверг")
//         } else if (num===5) {
//             console.log("Пятница")
//         }if (num===6) {
//             console.log("Суббота")
//         } if (num===7) {
//             console.log("Воскресенье")
//         }
//     } else if(num < 0) {
//         console.log (`У вас отрицательное число ${num}`)
//     } else if(num > 7) {
//         console.log (`Нужно число меньше ${num}`)
//     } else {
//         console.log (`${num} не число`)
//     };
// };
// week(4);

// ----------------------------------------------
// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.
// function paragraph(str) {
//     const firstWord = [];
//     if(typeof str == "string") {
//         sentence = str.split(".");

//         firstWord.push(sentence.slice(0, search(" ")).toString());
// Строка сверху не работает
//         return firstWord.join(", ");
//     } else {
//         return s = `${str} - не текст`
//     }
// };

// console.log(paragraph("aaaaaaaaa. bbbbb bbbbbb. cccc cc d. z."));

// ----------------------------------------------
// Написать функцию, которой передаем имя, и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
// const hours = new Date().getHours();
// console.log(hours);

// function greet(name) {
//     if (hours > 4 && hours < 12 || hours == 4) {
//         alert(`Доброе утро, ${name}`)
//     } else if (hours > 12 && hours < 17) {
//         alert(`Добрый день, ${name}`)
//     } else if (hours > 17 && hours < 21 || hours == 17) {
//         alert(`Добрый вечер, ${name}`)
//     } else if (hours > 21 && hours < 04 || hours == 21) {
//         alert(`Доброй ночи, ${name}`)
//     } else {
//         alert (`${name}, произошла ошибка`)
//     };
// };
// greet("Чувилек");

// ----------------------------------------------
// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
// for(i = 0; i < 101; i++) {
//     if(i < 17 || i == 17) {
//         old = "ребенок"
//     } else if(i > 17 && i < 30 || i == 30) {
//         old = "молодой"
//     } else if(i > 30 && i < 55 || i == 55) {
//         old = "зрелый"
//     } else if(i > 55) {
//         old = "старый"
//     } else {
//         old = "немыслимо"
//     };
//     console.log(`${i} - ${old}.`);
// };

// ----------------------------------------------
// Создай новую функцию,
// в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый).
//  А также вызови внутри своей функции, функцию из прошлого задания