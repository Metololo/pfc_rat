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

function playChapter(item) {
    if(item.type == "dialog") {
        printDialog(item.text)
    } else if(item.type == "choice") {
    }
}

function printDialog(text) {

    const choices = document.getElementsByClassName("question-box")
    for(let i = 0; i < choices.length; i++) {
        choices[i].style.display = "none";
    }

    const dialogBox = document.getElementById("dialog-box-1")
    dialogBox.style.display = "block";

    const dialogBoxText = document.getElementById("dialog-box-text")
    dialogBoxText.innerHTML = text;
}

export function startChapter(chapter) {

    const start = chapter.dialog

    cleanDialogs()

    setBackground(chapter)

    playChapter(start[0])

}

function makeDialogBox(text) {

    const dialogBox = document.createElement('div');
    dialogBox.classList.add('dialog-box');
    dialogBox.id = 'dialog-box-1';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'xx';
    paragraph.id = 'dialog-box-text';

    dialogBox.appendChild(paragraph);

    document.body.appendChild(dialogBox);

    return dialogBox
}

function makeChoiceBox(text) {
    const choiceBox = document.createElement('div');
    questionBox.classList.add('question-box');

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    questionBox.appendChild(paragraph);

    document.body.appendChild(questionBox);

    return choiceBox
}

function setBackground(chapter) {
    document.getElementById("scene-bg").src = chapter.background
}