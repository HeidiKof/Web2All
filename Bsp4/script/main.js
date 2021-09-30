"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";


document.getElementsByTagName("button")[0].addEventListener("click", function() {
    
    const color = document.getElementById("color");
    const number = document.getElementById("number");

    const li = document.createElement("li");
    const img = document.createElement("img");

    const createConstruct = document.querySelector("#cards ul")
        .appendChild(li)
        .appendChild(img);
    img.src = `${baseUrl}${color.value.slice(0,1).toLowerCase()}${Number(number.value)}.png`;
});

img.src='${baseUrl}${card}.png'

// hier kommen ihre Skripte hin
