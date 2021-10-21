"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

//4.2
// hier kommen ihre Skripte hin
// document.getElementsByTagName("button")[0].addEventListener("click", function(){
//     const colorInput = document.getElementById("color");
//     const numberInput = document.getElementById("number");

//     alert(`Farbe: ${colorInput.value}, Number: ${numberInput.value}`);
// });

document.getElementById("create").addEventListener("click", function(){
    const colorInput = document.getElementById("color");
    const numberInput = document.getElementById("number");

    const li = document.createElement("li");
    const img = document.createElement("img");
    const card = makeCardFromInput(colorInput.value, numberInput.value);
    img.src = `${baseUrl}${card}.png`;
    li.appendChild(img);

    document.querySelector("#cards ul").appendChild(li);
});

document.getElementById("delete").addEventListener("click", function(){
    const cards = document.querySelectorAll("#cards ul li");
    document.querySelector("#cards ul").removeChild(cards[cards.length-1]);
});

document.getElementById("filterDelete").addEventListener("click", function(){
    const colorInput = document.getElementById("color");
    const numberInput = document.getElementById("number");

    const card = makeCardFromInput(colorInput.value, numberInput.value);
    const url = `${baseUrl}${card}.png`;
    
    const item = Array.from(document.querySelectorAll("#cards ul img"))
         .find(item =>item.src == url);

    if (item){
        item.parentElement.remove();
    }
});

function makeCardFromInput(color, number){
    let result;
    switch (color){
        case "Red":
        case "red":
        case "Rot":
        case "rot":
        case "r":
            result = "r";
            break;
        
        case "Green":
        case "green":
        case "Grün":
        case "grün":
        case "g":
            result = "g";
            break;

        case "Blue":
        case "blue":
        case "Blau":
        case "blau":
        case "b":
            result = "b";
            break;
        
        case "Yellow":
        case "yellow":
        case "Gelb":
        case "gelb":
        case "y":
            result = "y";
            break;

        }
    return result + number;
}