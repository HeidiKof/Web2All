"use strict";

// hier kommen ihre Skripte hin

let Color = prompt("Which color are you looking for? (R=Red, Y=Yellow, G=Green, B=Blue)");
let Text = prompt("Which value should the card have? (0-14)");

console.log('Color' + 'Text');

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

    const cards = responseMessage.Cards
        .filter(item => item.Color == color && item.Value == value)
        .map(item => `${item.Color}`)