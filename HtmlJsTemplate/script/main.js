"use strict";

// hier kommen ihre Skripte hin

const inputText = document.querySelector('input[type="text"]');

inputText.addEventListener('focus', (event) => {
    event.target.classList.add('focused');
});
inputText.addEventListener('blur', (event) => {
    event.target.classList.remove('focused');
});

inputText.addEventListener('keyup', function (event) {
   event.preventDefault();
   if (event.keyCode === 13) {
       console.log(inputText.value);
       splitText(inputText.value);
   }
});

const list = document.querySelector("#charList");
list.addEventListener("mouseover", highlightChar);
list.addEventListener("mouseout", highlightChar);

function highlightChar(e) {
    console.log(event.target);
    let c = e.target.innerText;
    for (let el of e.target.parentElement.children) {
        if (el.innerText === c) {
            el.classList.toggle("highlight");
        }
    };
}

function splitText(text) {
    let i = 0;
    text.split('').forEach(c => {
        console.log(c);

        let listItem = document.createElement('li');

        listItem.setAttribute("id", `${i}`);
        document.querySelector("ul").appendChild(listItem);
        let letterText = document.createTextNode(c);
        listItem.appendChild(letterText);
        i++;
    });
}

