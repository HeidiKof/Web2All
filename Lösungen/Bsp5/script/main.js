//1. Erstellen Sie eine Seite mit einem Eingabefeld 
// welches sich optisch hervorhebt, wenn es den Fokus hat
document.querySelector("#myInput").
	addEventListener("focus", (e) => e.target.classList.add("highlight"));

document.querySelector("#myInput").
	addEventListener("blur", (e) => e.target.classList.remove("highlight"));


//2. Wird ein Text eingegeben und mit Enter bestätigt, 
// wird jedes Zeichen in einem eigenen Element unter 
// dem Eingabefeld angezeigt
document.querySelector("#myInput").
	addEventListener("keydown", function(e){
		if (e.code == "Enter"){ //Enter
			
			const charList = document.querySelector("#charList");
			//Löschen der vorhandenen Zeichen
			charList.innerHTML = "";

			//Zerlegen der Zeichen
			const txt = e.target.value;
			txt.split('').forEach(c => {
				//Erzeugen eines Span-Elements
				const span = document.createElement("span");
				span.innerText = c.toUpperCase();

				//und an Liste anfügen
				charList.appendChild(span);
			});
		}
	});

//3. Wenn Sie mit der Maus über ein Zeichen fahren, 
// werden dieses und alle anderen gleichen Zeichen hervorgehoben
const list = document.querySelector("#charList");
list.addEventListener("mouseover", highlightChar);
list.addEventListener("mouseout", highlightChar);

function highlightChar(e){
	let c = e.target.innerText;
	for (let el of e.target.parentElement.children) {
		if (el.innerText === c){
			el.classList.toggle("highlight");		
		}
	};
}