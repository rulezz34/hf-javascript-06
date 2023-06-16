// Adott egy tömb melyben csapatok vannak.
// Minden egyes csapatnak van egy neve (name) és egy játékos tömbje (players).
// Minden egyes játékosnak van egy neve (name) és egy pontszáma (score).
const teams = [
    {
        name: "Best champions ever",
        players: [
            { name: "József", score: 6 },
            { name: "Panna", score: 3 },
            { name: "Ágoston", score: 5 },
            { name: "Tímea", score: 1 },
            { name: "János", score: 3 },
        ],
    },
    {
        name: "The Crew",
        players: [
            { name: "Péter", score: 10 },
            { name: "Krisztina", score: 7 },
            { name: "Amanda", score: 12 },
        ],
    },
    {
        name: "The Flash",
        players: [
            { name: "Joe", score: 4 },
            { name: "Barry", score: 9 },
            { name: "Iris", score: 5 },
            { name: "Caitlin", score: 3 },
            { name: "Cisco", score: 4 },
        ],
    },
    {
        name: "Arkham City",
        players: [
            { name: "Batman", score: 8 },
            { name: "Joker", score: 7 },
            { name: "Harly Quinn", score: 5 },
            { name: "Quincy Sharp", score: 3 },
            { name: "James Gordon", score: 4 },
            { name: "Jack Ryder", score: 2 },
        ],
    },
];

// 1.1 Találd meg a legtöbb ponttal rendelkező csapatot, majd irassuk ki a nevét

function findBestTeam(teams) {


    let bestTeam = "";
    let veryMaxScore = 0;

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        let maxScore = 0;
        for (let j = 0; j < team.players.length; j++) {
            maxScore += team.players[j].score;
            console.log(maxScore);

        }
        if (maxScore > veryMaxScore) {
            veryMaxScore = maxScore;
            bestTeam = teams[i].name;
        } else if (maxScore === veryMaxScore) {
            bestTeam = bestTeam + ", " + teams[i].name;
        }
    }

    console.log(veryMaxScore);
    console.log(bestTeam);
}



// 1.2 Találd meg a legkevesebb ponttal rendelkező csapaton belül a legtöbb ponttal rendelkező játékost.

function worstTeam(teams) {

    let worstTeam = "";

    let lessScoredTeamScore = Infinity;

    for (let i = 0; i < teams.length; i++) {
        let currentScore = 0;
        const team = teams[i];
        for (let j = 0; j < team.players.length; j++) {
            currentScore += team.players[j].score;
        }
        if (currentScore < lessScoredTeamScore) {
            lessScoredTeamScore = currentScore;
            worstTeam = teams[i];
        }


    }
    return worstTeam;
}

function worstTeamBestPlayer(worstTeam) {
    const team = worstTeam(teams);
    let bestPlayerScore = 0;
    for (let i = 0; i < team.players.length; i++) {
        if (bestPlayerScore < team.players[i].score) {
            bestPlayerScore = team.players[i].score;
        }
        return team.players[i].name;
    }

    console.log(team.players[i].name);
}

// 1.3 Találd meg a legtöbb pontot szerző játékost.

function findBestPlayer(teams) {
    let maxScore = 0;
    let bestPlayer2 = "";

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        for (let j = 0; j < team.players.length; j++) {
            if (maxScore < team.players[j].score) {
                maxScore = team.players[j].score;
                bestPlayer2 = team.players[j].name;
            }
        }
    }

    console.log(bestPlayer2);
}


// 1.4 Adj vissza egy random csapatból egy random játékost.

function getRandomPlayerInRandomTeam(teams) {
    const randomTeamNumber = Math.floor(Math.random() * teams.length);
    const chosenRandomTeam = teams[randomTeamNumber].players;
    const randomPlayerNumber = Math.floor(Math.random() * chosenRandomTeam.length);
    const chosenRandomPlayerFromRandomTeam = teams[randomTeamNumber].players[randomPlayerNumber];


    // let randomPlayerNumber = Math.floor(Math.random() * teams.length);
    return chosenRandomPlayerFromRandomTeam;
}



// 2. Írj egy class-t, amelynek a konstruktora paraméterül kap egy prefix és egy suffix változót
// és van egy 'wrapArray' metódusa, ami paraméterül kap egy stringekből álló strArray tömböt,
// majd visszaad egy másik tömböt, melynek az első eleme a prefix,
// az utolsó eleme a suffix és a köztes elemei az strArray elemei.

// 3. Írj egy filterObject(object) fv-t, ami paraméterül kap egy objektumot és leszűri azon kulcs-érték párokat, melyekben
// az érték:
// - ha string, akkor a hossza nagyobb mint 5
// - ha number, akkor nagyobb mint 5
// - ha boolean, akkor true
// Majd ezen kulcs-érték párokból egy új objektumot képezünk.
// Abban az esetben, ha az érték nem string/number/boolean, akkor
// ne kerüljön bele a végső objektumba.
// példa:
// const someObj = {
//     a: 5,
//     b: 6,
//     c: "text",
//     d: "some text",
//     e: true,
//     f: false,
//     h: {},
//     j: [1, 2, 3],
// };
// filterObject(someObj) --> {b: 6, d: 'some text', e: true};

const myObj = {
    a: 6,
    b: 2,
    c: "any nice text",
    d: "txt",
    e: false,
    f: false,
    g: true,
    h: {},
    j: [1, 2, 3],
};


function filterObject(myObj) {
    let objectLength = myObj.length;
    let newObj2 = {};
    for (let i = 0; i < objectLength - 1; i++) {
        if (typeof myObj[i] === "string" && myObj[i] > 5) {
            console.log("ASD");
        } else if (typeof myObj[i] === "number" && myObj[i] > 5) {
            newObj2.push(myObj[i]);
        } else if (typeof myObj[i] === "boolean" && myObj[i] === true) {
            newObj2.push(myObj[i]);
        }
    }
    return newObj2;
};






// 4. Írj egy getKeysFromValues(object) fv-t, ami paraméterül kap egy objektumot és
// leszűri azokat a kulcsokat, amelyek értékként is szerepelnek valahol az objektumban.
// példa:
const someObj2 = {
    a: "b",
    b: "a",
    c: "e",
    d: "d",
    e: "l",
    h: "0",
};
// getKeysFromValues(someObj2) --> ['a', 'b', 'd', 'e']

// 5. Írj egy getDuplicates(numArray) fv-t, ami paraméterül kap egy számokból álló tömböt
// és visszaadja azon elemeket, amelyek többször szerepelnek a tömbben.

// 6. Hozz létre egy Set objektumot, tedd bele a 15-t.
// Irasd ki, hogy a 15 benne van-e, töröld ki belőle a 15-t, majd

// setObj = 15;
// const mySet = new Set(setObj);
// console.log(mySet);

// 7. Írj egy fv-t, ami paraméterül kap egy számot (countOfRandoms).
// Generáljon le annyi random számot 1-10 között, amennyi a countOfRandoms.
// Tegye bele az összeset egy Set objektumba, majd irassuk ki a Set objektum hosszát.

// 8. Írj egy createObjectFrom(entries) fv-t,
// ami paraméterül kap egy olyan tömböt, melyben 2 elemű tömbök vannak.
// Ezen tömbből készíts egy objektumot úgy, hogy
// az altömbök első eleme az objektum egy kulcsát jelölik
// a második eleme pedig a hozzá tartozó értékeket.
// példa:
const someEntries = [
    ["a", 5],
    ["b", "some text"],
    ["c", true],
];
// createObjectFrom(someEntries) ---> {a: 5, b: 'some text', c: true}

// 9. Adott a multiply(a,b) fv:
function multiply(a, b) {
    return a * b;
}
// Készíts a multiply fv-ből egy 'double' fv-t, úgy, hogy az "a" paramétert megkötöd
// (használd a 'bind' metódust)

// 10. Írj meg egy ASCII numerológiai class-t :)
// A class konstruktora paraméterül vár egy teljes nevet fullName,
// majd azt tároljuk le a példányon firstName és lastName-ként
// (feltételezhetjük a paraméterül kapott névben nincs 3. név és csak ASCII karakterekből áll)

// Írj hozzá egy metódust (getFirstNameCode), amely visszaadja firstName karakterkódjainak
// összegének 16-tal vett maradékát

// Írj hozzá egy metódust (getLastNameCode), amely visszaadja lastName karakterkódjainak
// összegének 16-tal vett maradékát

// 11. Adott a greet fv és az aPerson object:
const aPerson = {
    name: "Tibor",

};
function greet(othersName) {
    console.log(`Hello ${othersName}, I'm ${this.name}`);
}
// Hívd meg úgy a greet fv-t, hogy az helyesen működjön, anélkül, hogy az aPerson-ra "rátennéd"
// a greet fv-t

greet();