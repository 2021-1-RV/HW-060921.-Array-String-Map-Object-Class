'use strict'

//Level 1
//Level 1
//Level 1

//1. Подсчитать сумму нечётных элементов массива

/*let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let sumArr = (arr) =>
  arr.filter((el, i) => !(el % 2)).reduce((prevVal, curVal) => prevVal + curVal)

console.log(sumArr(arr1)) //42
*/

//2. Вывести индексы нулевых элементов массива

/*
let arr1 = [0, 1, 0, 3, 4, 5, 0, 7, 8, 0, 10, 11, 0, 13]

let iZeroArr = (arr) => {
  let res = []

  arr.forEach((el, i) => {
    if (el == 0) res.push(i)
  })
  return res.toString()
}

console.log(iZeroArr(arr1))
*/

//3. Даны два массива. Объедините их преобразовав в строку.

/*

let arr1 = [2, 4, 6, 8, 4, 1, 4, 5, 4]
let arr2 = [5, 3, 5, 6]

let arr3 = arr1.concat(arr2).join()
console.log(arr3)

*/

//4. Его нету

//5. отфильтруйте массив, удалив все нули

/*

let arr1 = [0, 1, 0, 3, 4, 5, 0, 7, 8, 0, 10, 11, 0, 13]

let iZeroArr = (arr) => {
  let res = []

  arr.forEach((el) => {
    if (el > 0) res.push(el)
  })
  return res
}

console.log(iZeroArr(arr1))

*/

//6. создайте и опишите объект worker с вложенным объектом edu который описывает образование. выведите сам объект в консоль, выведите уровень образования

/*

const worker = {
  name: 'Valeron',
  surname: 'Erondondon',
  education: {
    university: 'University of Fredom',
    experience: 'Like a BOSS',
  },
}

console.log(worker)
console.log(worker.education.experience)

*/

//7. перепишите предыдущее задание6 на класс
//Можно сделать как class education extends worker, так и 2 разных класса и один в другой как переменная передаётся

//Level 2 *
//Level 2 *
//Level 2 *

//1. Отфильтруйте массив, удалив все нули. Преобразуйте результат в строку.
//Тоже самое что Level 1 задание 5 только  === return res.toString() ===

//2. Создайте карту map для списка пользователей. Каждый пользователь представляет собой отдельный объект со свойствами id, name, surname. В качестве ключа выбрать id

/*
let map = new Map()

let user1 = {
    id: 1,
    name: 'Valeron',
    surname: 'Erondondon',
  },
  user2 = {
    id: 2,
    name: 'Ivan',
    surname: 'Ivanov',
  }

map.set(user1.id, user1.name) //записывает по ключу user1.id значение user1.name.
map.set(user2.id, user2.name)

console.log(map)
*/

//3. Напишите функцию перевода строки в верблюжий регистр

/*
let str =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur officia eveniet, excepturi explicabo asperiores laborum, a perferendis repellat beatae architecto aliquam numquam eum suscipit nisi rem eos commodi. Deserunt eaque vel, alias cupiditate, quaerat veritatis reprehenderit, vitae eveniet optio enim sapiente? Sequi, quo similique? Maxime alias, voluptate ipsa nihil ab est vitae dolore voluptatem harum dicta. Fugiat culpa, veniam dignissimos aliquid amet iste excepturi, quaerat labore similique voluptas quae, quam reprehenderit voluptate fugit. Doloremque, repellendus. Laborum quo fugit cum, aperiam veniam, animi facilis accusantium ad quia obcaecati repellat? Enim dicta incidunt repellat impedit inventore vel, dolorem est asperiores corporis.'

let camelCase = (str) => {
  let arr = []
  str
    .split(' ')
    .forEach((el) => arr.push(el[0].toUpperCase() + el.substring(1)))
  return arr.join('')
}
console.log(camelCase(str))
*/

//4. Проверьте является ли слово палиндромом (например "abcddcba")

/*
let str = prompt('введите слово на проверку палиндрома')

let palindrome = (str) => {
  let strPal = str.split('').reverse().join('')
  str === strPal
    ? console.log(`${str} да это слово палиндром`)
    : console.log(`${str} нет это слово не палиндром`)
}

palindrome(str)
*/

//5. Создайте и опишите объект worker. добавьте в него следующие функции(встроенные методы) : вывести ФИО, начислять доплату 5% если выслуга лет
//больше 5 лет и 10% если выслуга лет больше 8 лет

/*
let worker = {
  name: 'Valeron',
  surname: 'Erondondon',
  workerFullName: function () {
    return this.name + ' ' + this.surname
  },
  years: 10,
  salary: 25000,
  surcharge: function () {
    if (this.years >= 5 && this.years < 8) {
      return Math.round(this.salary * 1.05) //5%
    } else if (this.years >= 8) {
      return Math.round(this.salary * 1.1) //10%
    } else {
      return this.salary
    }
  },
}

console.log(worker.workerFullName())
console.log(worker.surcharge())
*/

//6. Перепишите предыдущее задание 5 на класс

/*
class worker {
  name() {
    return 'Valeron'
  }
  surname() {
    return 'Erondondon'
  }
  workerFullName() {
    return this.name() + ' ' + this.surname()
  }
  salary() {
    return 25000
  }
  surcharge() {
    if (this.years >= 5 && this.years < 8) {
      return Math.round(this.salary() * 1.05) //5%
    } else if (this.years >= 8) {
      return Math.round(this.salary() * 1.1) //10%
    } else {
      return (this.salary = 25000)
    }
  }
  constructor(years) {
    this.years = years
  }
}

let employee = new worker(10)
console.log(employee.surcharge())
*/

