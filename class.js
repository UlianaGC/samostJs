export class Exam {
    constructor(surname, name, bd, js, php) {
        this.surname = surname
        this.name = name
        this.bd = bd
        this.js = js
        this.php = php
    }
    toString() {
        return `Студент - ${this.surname} ${this.name}: бд - ${this.bd}, js - ${this.js}, php - ${this.php}`
    }
    get middleBall() {
        return (this.bd + this.js + this.php) / 3
    }
    get goodStudent() {
        return this.bd >= 4 && this.js >= 4 && this.php >= 4

    }
    get two() {
        return this.bd == 2 || this.js == 2 || this.php == 2

    }
}

// function Exam(surname, name, bd, js, php) {
//     this.surname = surname
//     this.name = name
//     this.bd = bd
//     this.js = js
//     this.php = php
// }

// const personMethods = {
//     toString() {
//         return `Студент - ${this.surname} ${this.name}: бд - ${this.bd}, js - ${this.js}, php - ${this.php}`
//     }
// }
// Object.assign(Exam.prototype, personMethods)

// Object.defineProperties(Person.prototype, {
//     middleBall: {
//         get() {
//             return (this.bd + this.js + this.php) / 3
//         }
//     },
//     goodStudent: {
//         get() {
//             if (this.bd >= 4 && this.js >= 4 && this.php >= 4)
//                 return `Студент хорошист`
//             else
//                 return `Студент не хорошист`
//         }
//     },
//     two: {
//         get() {
//             if (this.bd == 2 || this.js == 2 || this.php == 2)
//                 return 'Двойки есть'
//             else
//                 return 'Двоек нет'
//         }
//     }
// })