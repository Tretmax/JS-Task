'use strict'

// Level 1

// Symbols counter


function countSymbols(str, symbol, registr) {
    if (registr) {
        str = str.toLowerCase();
        symbol = symbol.toLowerCase();
    }

    if (str.includes(symbol)) {
        let count = 0;
        while (str.includes(symbol)) {
            let numberSymbol = str.indexOf(symbol);
            str = str.slice(numberSymbol + 1);
            count++
        }
        return count
    }
    else return 0

}
let userSymbol = "a"
let registr = 0
console.log(countSymbols("JeremyaA", userSymbol, registr))
console.log(countSymbols("Antony", userSymbol, registr))
console.log(countSymbols("Barack ObamaAAA", userSymbol))
console.log(countSymbols("Barack ObamaAAA", userSymbol, registr))




// Anti Spy
let text = "If you agree with that, just let me know to obama@mail.us or newpower@gmail.com and I'll reach out as soon as possible."

function antiSpy(text, antiEmail) {
    antiEmail == undefined ? antiEmail = 'HIDDEN_DATA' : antiEmail;
    let startword = 0;
    let endWord = 0;
    let filtredText = "";

    do {

        endWord = text.indexOf(" ", endWord + 2) - 1;

        let filtredWord = text.slice(startword, endWord + 1)
        startword = endWord + 2
        if (filtredWord.includes('@')) {
            filtredWord = antiEmail
        }

        filtredText = filtredText + " " + filtredWord

    } while (endWord > 0)

    return filtredText
}


console.log(antiSpy(text)) // "If you agree with that, just let me know to HIDDEN_DATA or HIDDEN_DATA and I'll reach out as soon as possible."
console.log(antiSpy(text, "MY_MAIL")) // "If you agree with that, just let me know to MY_MAIL or MY_MAIL and I'll reach out as soon as possible."
console.log(antiSpy(text, "XXXX")) // "If you agree with that, just let me know to XXXX or XXXX and I'll reach out as soon as possible."






// Level 2

// Text builder

const template = "%TEAM_A% vs %TEAM_B% game score is %SCORE%. Fans of %WINNER% already started celebrating on the streets of the %GAME_CITY%, %GAME_COUNTRY%"

console.log(
    postBuilder(template, {
        teamAGameScore: 2,
        teamBGameScore: 0,
        teamA: "Barcelona FC",
        teamB: "Inter Milan",
        city: "Milan",
        country: "Italy",
    })
); // "Barcelona FC vs Inter Milan game score is 2:0. Fans of Barcelona FC are already started celebrating on the streets of the Milan, Italy."
console.log(
    postBuilder(template, {
        teamAGameScore: 0,
        teamBGameScore: 3,
        teamA: "Barcelona FC",
        teamB: "Inter Milan",
        city: "Milan",
        country: "Italy",
    })
); // "Barcelona FC vs Inter Milan game score is 0:3. Fans of Inter Milan are already started celebrating on the streets of the Milan, Italy."
console.log(
    postBuilder(template, {
        teamAGameScore: 0,
        teamBGameScore: 0,
        teamA: "Barcelona FC",
        teamB: "Inter Milan",
        city: "Milan",
        country: "Italy",
    })
); // "Barcelona FC vs Inter Milan game score is 0:0. Fans of both teams are already started celebrating on the streets of the Milan, Italy."

function postBuilder(text, game) {
    let arr = text.split('%')
    let winner
    if (game.teamAGameScore > game.teamBGameScore) {
        winner = game.teamA
    } else if (game.teamAGameScore < game.teamBGameScore) {
        winner = game.teamB
    } else { winner = 'both teams' }


    let result = arr.map(item => {

        item === 'TEAM_A' ? item = game.teamA : item;
        item === 'TEAM_B' ? item = game.teamB : item;
        item === 'SCORE' ? item = `${game.teamAGameScore} : ${game.teamBGameScore}` : item;
        item === 'WINNER' ? item = winner : item;
        item === 'GAME_CITY' ? item = game.city : item;
        item === 'GAME_COUNTRY' ? item = game.country : item
        return item

    });

    return result.join('')

}






// Sorting

const students = [
    { name: "Alex", age: 27 },
    { name: "Deny", age: 25 },
    { name: "Max", age: 20 },
];
const teachers = [
    { name: "Tommy", age: 33, experience: 10, skillsId: 1 },
    { name: "Lora", age: 44, experience: 12, skillsId: 2 },
    { name: "Rafat", age: 35, experience: 3, skillsId: 3 },
];

console.log(sortByAge(students)); // order: Max, Deny, Alex
console.log(sortByAge(teachers)); // order: Tommy, Rafat, Lora

function sortByAge(arr) {
    return arr.sort((a, b) => (a.age - b.age))
}

console.log(sortBy(students, "age")); // order: Max, Deny, Alex
console.log(sortBy(teachers, "experience")); // order: Rafat, Tommy, Lora

function sortBy(arr, key) {

    return arr.sort((a, b) => (a[key] - b[key]))
}


const skillsInfo = [
    {
        id: 1,
        items: ["math", "english"],
    },
    {
        id: 2,
        items: ["chemistry", "physics", "math", "english"],
    },
    {
        id: 3,
        items: ["chemistry"],
    },
];

console.log(sortBySkills(teachers, skillsInfo)); // order: Lora, Tommy, Rafat


function sortBySkills(teachers, skills) {

    let hashTable = {};

    skills.forEach((el) => {
        hashTable[el.id] = el.items.length
    })

    return teachers.sort((a, b) => hashTable[b.skillsId] - hashTable[a.skillsId])

}





// God-mode


const home = new World();
home.changePlanetName("Earth");
console.log(home.planetName); // Earth
console.log(home.species); // []
console.log(home.creatures); // []
console.log(home.countPopulation()); // {}
home.create({
    name: "human",
    specie: "homo sapiens",
});
home.create({
    name: "penguin",
    specie: "bird",
});
home.create({
    name: "swan",
    specie: "bird",
});
console.log(home.species); // ["homo sapiens", "bird"]
console.log(home.creatures); // [{ name: "human", specie: "homo sapiens" }, { name: "penguin", ...
console.log(home.countPopulation()); // { "homo sapiens": 1, bird: 2 }

function World() {
    this.planetName = '',
        this.species = [],
        this.creatures = [],
        this.changePlanetName = function (newName) {
            this.planetName = newName
        },
        this.create = function (data) {
            if (!this.species.includes(data.specie)) {
                this.species.push(data.specie)
            }
            this.creatures.push(data)
        }
    this.countPopulation = function () {
        let hashTable = {}
        this.creatures.forEach((item) => {

            // console.log(item)
            hashTable[item.specie] = (hashTable[item.specie] || 0) + 1
        })
        return hashTable

    }
}





// Agregator

const users = [
    {
        id: '8o71g807b09hvd09h1',
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        id: '9we8rn4e98161684s9',
        firstName: 'Marcus',
        lastName: 'Davis'
    },
    {
        id: '78y78t4ygd984y5c16',
        firstName: 'Anna',
        lastName: 'Rogers'
    }
];

const banks = [
    {
        id: '8s7b4s87d4s7e7ee',
        name: 'PrivatBank',
        country: 'Ukraine'
    },
    {
        id: 'df87ndre78r7ee13',
        name: 'UniversalBank',
        country: 'Ukraine'
    },
    {
        id: '28741hfhdfddsaaa',
        name: 'Revolut',
        country: 'UK'
    },
];

const currencies = [
    {
        id: '127122v2',
        short: 'UAH',
        full: 'Ukrainian Hryvnya'
    },
    {
        id: '914184g4',
        short: 'USD',
        full: 'United States Dollar'
    },
    {
        id: '1981vgd4',
        short: 'EUR',
        full: 'Euro'
    },
];

const payments = [
    {
        id: 1,
        sender: {
            userId: '8o71g807b09hvd09h1',
            bankId: 'df87ndre78r7ee13',
            currencyId: '1981vgd4'
        },
        receiver: {
            userId: '9we8rn4e98161684s9',
            bankId: '8s7b4s87d4s7e7ee',
            currencyId: '127122v2'
        }
    },
    {
        id: 2,
        sender: {
            userId: '78y78t4ygd984y5c16',
            bankId: '28741hfhdfddsaaa',
            currencyId: '127122v2'
        },
        receiver: {
            userId: '9we8rn4e98161684s9',
            bankId: '28741hfhdfddsaaa',
            currencyId: '127122v2'
        }
    },
]



function aggregate(payments, users, banks, currencies) {
    let result =[]

    let pay =  payments.map((item)=>{
let userSenderData=users.find(id => id.id ===item.sender.userId);
let userReceiverData=users.find(id => id.id ===item.receiver.userId);
let bankSenderData=banks.find(id => id.id ===item.sender.bankId);
let bankReceiverData=banks.find(id => id.id ===item.receiver.bankId);
let currencySenderData=currencies.find(id => id.id ===item.sender.currencyId);
let currencyReceiverData=currencies.find(id => id.id ===item.receiver.currencyId);

item.sender['userData'] = userSenderData;
item.receiver['userData'] = userReceiverData;
item.sender['bankData'] = bankSenderData;
item.receiver['bankData'] = bankReceiverData;
item.sender['currencyData'] = currencySenderData;
item.receiver['currencyData'] = currencyReceiverData;

return item

    })
     result.push(pay)
    return result
}

console.log(aggregate(payments, users, banks, currencies))