
//select text from textarea HTML element
const text = document.getElementById("text");

//Select all buttons from DOM
const upperCaseButton = document.getElementById("upper-case");
const lowerCaseButton = document.getElementById("lower-case");
const properCaseButton = document.getElementById("proper-case");
const sentenceCaseButton = document.getElementById("sentence-case");

//Define funtions to modify the text from the textarea HTML

function toUpperCase() {
    text.value = text.value.toUpperCase();
}

function toLowerCase() {
    text.value = text.value.toLowerCase();
}

function toProperCase() {
    text.value = text.value.toLowerCase();
    info = text.value.split(" ");

    info.forEach((element, index) => {
        element = element.replace(element[0], element[0].toUpperCase());
        if (index == 0) {
            newText = element;
        } else {
            newText = newText.concat(" ", element);
        }
    });

    text.value = newText;
}

function toSentenceCase() {
    text.value = text.value.toLowerCase();
    info = text.value.split(". ");

    info.forEach((element, index) => {
        element = element.replace(element[0], element[0].toUpperCase());
        if (index == 0) {
            newText = element;
        } else {
            newText = newText.concat(". ", element);

        }
    });

    text.value = newText;
}

//Save File
const saveFileButton = document.getElementById("save-text");

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}




//Add event listeners to the buttons
upperCaseButton.addEventListener("click", toUpperCase);
lowerCaseButton.addEventListener("click", toLowerCase);
properCaseButton.addEventListener("click", toProperCase);
sentenceCaseButton.addEventListener("click", toSentenceCase);
saveFileButton.addEventListener("click", () => {download("text.txt", text.value)});

