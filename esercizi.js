const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

//Esercizio 1

let charactersNames = []

//Esercizio 2

for(i = 0; i < starWarsCharacters.length; i++) {
    charactersNames.push(starWarsCharacters[i].name)
    
}

console.log(charactersNames)

//Esercizio 3

let femaleCharacters = []

for(i = 0; i < starWarsCharacters.length; i++) {
    if(starWarsCharacters[i].gender === 'female'){
    femaleCharacters.push(starWarsCharacters[i].name)
    }
}

console.log(femaleCharacters)

//Esercizio 4

let eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    red: [],
    blueGray: [],
}


//Esercizio 6

let crewMass = 0
i = 0

while (i < starWarsCharacters.length) {

    crewMass = crewMass + starWarsCharacters[i].mass;

    i++
}

console.log('Massa totale equipaggio: ' + crewMass)

//Esercizio 7

if (crewMass < 500) {
    console.log("Ship is under loaded")
} else if (crewMass > 500) {
    console.log('Ship is half loaded') 
} else if (crewMass > 700) {
    console.log('Warning: Load is over 700')
} else if (crewMass > 900) {
    console.log('Critical Load: Over 900')
} else if (crewMass > 1000) {
    console.log('DANGER! OVERLOAD ALERT: escape from ship now')
}

//Esercizio 8

for (i = 0; i < starWarsCharacters.length; i++) {
    if(starWarsCharacters[i].gender === 'n/a'){
        starWarsCharacters[i].gender = 'robot'
        console.log('Genere cambiato di: ' + starWarsCharacters[i].name)
    }
}

for (i = 0; i < starWarsCharacters.length; i++){
    if(starWarsCharacters[i].mass < 70){
        console.log(starWarsCharacters[i].name +' Il tuo eqipaggiamento è leggero')
    } else if (starWarsCharacters[i].mass > 70 && starWarsCharacters[i].mass < 100){
        console.log( starWarsCharacters[i].name + ' Il tuo eqipaggiamento è normale')
    } else if (starWarsCharacters[i].mass > 100) {
        console.log(starWarsCharacters[i].name + " Il tuo equpaggiamento è pesante")
    }
}

//Esercizio 9




