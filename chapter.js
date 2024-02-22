import { characters } from "./characters.js";

let latestSuccess = 0

export function showLatestSuccess() {
    if(latestSuccess == 0 ) {
        showNoSuccess()
    }else {
        showSuccess(latestSuccess)
    }
}


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

    const characterBox = document.getElementById("character-box")
    while(characterBox.firstChild) {
        characterBox.removeChild(characterBox.firstChild)
    }

    if(item.character !== undefined) {
        console.log("there is chara")
        setCharacter(item.character)
    }


    if(item.success !== undefined) {
        showSuccess(item.success)
    }

    const assetBox = document.getElementById("asset-box")
    while(assetBox.firstChild) {
        assetBox.removeChild(assetBox.firstChild)
    }

    if(item.asset !== undefined) {
        setAsset(item.asset)
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

function showNoSuccess() {

    let div = document.createElement("div");
    div.setAttribute("class","noSuccess")
    div.setAttribute("id", "success");

    var h1 = document.createElement("h1");
    h1.textContent = "VOUS N'AVEZ PAS ENCORE DE SUCCES";

    div.appendChild(h1);

    div.addEventListener("click", () => {
        const successBox = document.getElementById("success-box")
        while(successBox.firstChild) successBox.removeChild(successBox.firstChild)
    })

    const successBox = document.getElementById("success-box")
    successBox.appendChild(div)


}

function showSuccess(success) {

    latestSuccess = success

    let div = document.createElement("div");
    div.setAttribute("id", "success");

    var h1 = document.createElement("h1");
    h1.textContent = success.title;

    // Create img element
    let img = document.createElement("img");
    img.setAttribute("src", `images/success/success${success.number}.png`);
    img.setAttribute("alt", "");
    img.addEventListener("click", () => {
        const successBox = document.getElementById("success-box")
        while(successBox.firstChild) successBox.removeChild(successBox.firstChild)
    })

    // Append h1 and img elements to div
    div.appendChild(h1);
    div.appendChild(img);

    const successBox = document.getElementById("success-box")
    successBox.appendChild(div)
}

function setAsset(name) {
    const assetBox = document.getElementById("asset-box")
    assetBox.appendChild(createAsset(name))
    
}

function createAsset(name) {
    let div = document.createElement("div");
    div.setAttribute("id", "asset");
    div.addEventListener("click", () => {
        const assetBox = document.getElementById("asset-box")
        while(assetBox.firstChild) assetBox.removeChild(assetBox.firstChild)
    })

    let img = document.createElement("img");
    img.setAttribute("src", `images/asset/${name}`);
    img.setAttribute("alt", "");

    div.appendChild(img);

    return div
}

function setCharacter(name) {
    const characterBox = document.getElementById("character-box")

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

    playChapter(dialog,12)

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