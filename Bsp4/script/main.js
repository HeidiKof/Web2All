"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";


document.getElementsByTagName("button")[0].addEventListener("click", function() {
    
    const numberInput = document.getElementById("number");
    const colorInput = 'x';
        switch(document.getElementById("color")) {
        case 'Red':
            colorInput = 'r';
            break;
        case 'Yellow':
            colorInput = 'y';
            break;
        case 'Green':
            colorInput = 'g';
            break;
        case 'Blue':
            colorInput = 'b';
            break;
        default:
            alert('Please enter Red, Yellow, Green or Blue!')
            break;
        }   
    
    const card = `${colorInput.value}${numberInput.value}`
    
});

img.src='${baseUrl}${card}.png'

// hier kommen ihre Skripte hin
