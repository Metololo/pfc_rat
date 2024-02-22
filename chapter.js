import { characters } from "./characters.js";

function cleanDialogs() {
    const questions = document.getElementsByClassName("question-box")
    for(let i = 0; i < questions.length; i++) {
        questions[i].style.display = "none";
      }

      const dialogs = document.getElementsByClassName("dialog-box")
      for(let i = 0; i < dialogs.length; i++) {
        dialogs[i].style.display = "none";
        }
}

function playChapter(dialog,itemId) {

    if(itemId == "end") return

    const item = dialog.find(item => item.id === itemId);
    const textBox = document.getElementById("text-box");

    while(textBox.firstChild) {
        textBox.removeChild(textBox.firstChild)
    }

    if(item.background !== undefined) {
        setBackground(item.background)
    }

    if(item.character !== undefined) {
        setCharacter(item.character)
    }


    if(item.type == "dialog") {

        const dialogBox = makeDialogBox(item.text)
        textBox.appendChild(dialogBox)

        dialogBox.addEventListener("click", () => {
            playChapter(dialog,item.next)
        })

    } else if(item.type == "choice") {

        item.choices.forEach(choice => {

            const choiceBox = makeChoiceBox(choice.choice)
            textBox.appendChild(choiceBox)
            choiceBox.addEventListener("click", () => {
                playChapter(dialog,choice.next)
            })

        });

    }
}

function setCharacter(name) {
    const characterBox = document.getElementById("character-box")

    while(characterBox.firstChild) {
        characterBox.removeChild(characterBox.firstChild)
    }

    const character = characters.find(c => c.name === name)

    let side = ""

    if (Math.random()< 0.5) {
        side = "right-side-character"
    } else {
        side = "left-side-character"
    }

    characterBox.appendChild(createCharacter(character.image,side))
    
}

function createCharacter(url,side) {

    let characterDiv = document.createElement("div");
    characterDiv.className = "character " + side;
    
    let imgElement = document.createElement("img");
    imgElement.src = `images/character/${url}`;
    imgElement.alt = "";
    characterDiv.appendChild(imgElement);
    return characterDiv;
}


export function startChapter(dialog) {

    playChapter(dialog,1)

}



function makeDialogBox(text) {

    const dialogBox = document.createElement('div');
    dialogBox.classList.add('dialog-box');
    dialogBox.id = 'dialog-box-1';

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.id = 'dialog-box-text';

    dialogBox.appendChild(paragraph);

    document.body.appendChild(dialogBox);

    return dialogBox
}

function makeChoiceBox(text) {
    const choiceBox = document.createElement('div');
    choiceBox.classList.add('question-box');

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    choiceBox.appendChild(paragraph);

    document.body.appendChild(choiceBox);

    return choiceBox
}

export function setBackground(background) {
    document.getElementById("scene-bg").src = background
}