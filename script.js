//задание 1
// let car = new Car('Марка', 2014, 10000000)

//задание 2
import { Exam } from "./class.js";
let students = [
    new Exam('Хохрякова', 'Ульяна', 4, 5, 4),
    new Exam('Бреева', 'Ксения', 5, 5, 4),
    new Exam('Алексушина', 'Дарья', 2, 4, 4),
    new Exam('Ярославов', 'Александр', 4, 3, 4),
]

console.log('Отсортированный массив:')
let arrSortMiddleBall = students.sort((a, b) => b.middleBall - a.middleBall)
arrSortMiddleBall.forEach(item => {
    console.log(item.toString())
})

console.log('Хорошисты:')
let arrGoodStudents = students.filter(item => item.goodStudent)
arrGoodStudents.forEach(item => console.log(item.toString()))

let countAbs = 0
students.forEach(item => {
    if (!item.two)
        countAbs++
})
console.log(`Абсолютная успеваемость группы - ${countAbs / students.length * 100}%`)

let countQuality = 0
students.forEach(item => {
    if (item.goodStudent)
        countQuality++
})
console.log(`Качественная успеваемость группы - ${countQuality / students.length * 100}%`)
