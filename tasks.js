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
