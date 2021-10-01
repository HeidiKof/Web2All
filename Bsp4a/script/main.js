"use strict";
const baseUrl = "https://nowaunoweb.azurewebsites.net/Cards";

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

function getCards() {
    return responseMessage;
}

document.getElementsByTagName("button")[0].addEventListener("click", function() {

    const response = getCards();
    const ul = document.querySelector("#cards ul");

    response.Cards.map(function (el){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const card = `${el.Color.slice(0,1).toLowerCase()}${convertNumber(el.Value)}`;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
        ul.appendChild(li);
    });
});

function convertNumber(cardValue){
    if (cardValue < 10)
        return cardValue;
    switch(cardValue) {
        case 11:
            result = "d2"
            break;
        case 12:
            result = "r"
            break;
        case 13:
            result = "s"
            break;
    }
}



// hier kommen ihre Skripte hin
