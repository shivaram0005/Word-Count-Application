let clickButton = document.getElementById("btn");

clickButton.addEventListener("click", getLength); 
function getLength(){
    let character = document.getElementById("text-area").value.length;
    document.getElementById("character-count-value").innerHTML = character;
    let words = document.getElementById("text-area").value;
    words = words.match(/\w+/g);
    words = words.length;
    document.getElementById("words-count-value").innerHTML = words;

    textArea.value = "";
}