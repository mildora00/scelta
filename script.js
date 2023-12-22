
let form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let colore_back = document.getElementById("colore").value;
    let corpo = document.getElementById("body");
    corpo.style.backgroundColor = colore_back;
    let immagine_selezionata = document.querySelector("[name = immagini ]").value;/** tra le virgolette :checked */
    let paragrafo = document.getElementById("elemento");
    paragrafo.innerHTML = "<img src=" + immagine_selezionata + ">";
});
