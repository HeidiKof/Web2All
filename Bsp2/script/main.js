"use strict";

// hier kommen ihre Skripte hin

class Player {
    constructor (name, cards, score) {
        this.Name = name;
        this.Cards = Cards[cards];
        this.Score = score;
    }
    matches(otherCard) {
        return this.Color == otherCard.Color || this.Text == otherCard.Text;
    }
}

let players = [];

let countPlayers = prompt("How many Players want to play?")

for(let i = 0; i < Number(countPlayers); i++) {
    let name = prompt(`Please enter Player ${i+1}'s name!`);
    let p = new Player(name, cards, 0);
    players.push(p);
}

console.log(players);

const responseMessage = { 
    "Player": "Player 1", 
    "Cards": [ 
        { "Color": "Red", "Text": "Three", "Value": 3, "Score": 3 }, 
        { "Color": "Red", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Red", "Text": "Nine", "Value": 9, "Score": 9 }, 
        { "Color": "Red", "Text": "Reverse", "Value": 12, "Score": 20 }, 
        { "Color": "Blue", "Text": "Two", "Value": 2, "Score": 2 }, 
        { "Color": "Blue", "Text": "Four", "Value": 4, "Score": 4 }, 
        { "Color": "Blue", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Blue", "Text": "Seven", "Value": 7, "Score": 7 }, 
        { "Color": "Blue", "Text": "Eight", "Value": 8, "Score": 8 } 
    ], 
    "Score": 63 };
