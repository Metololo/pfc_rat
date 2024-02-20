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

function playChapter(chapter,itemId) {

    const item = chapter.find(item => item.id === itemId);
    const textBox = document.getElementById("text-box");

    while(textBox.firstChild) {
        textBox.removeChild(textBox.firstChild)
    }


    if(item.type == "dialog") {
        const dialogBox = makeDialogBox(item.text)
        console.log(dialogBox)
        textBox.appendChild(dialogBox)

        dialogBox.addEventListener("click", () => {
            playChapter(chapter,item.next)
        })

    } else if(item.type == "choice") {
        item.choices.forEach(item => {
            console.log("test")
            textBox.appendChild(makeChoiceBox(item.choice))
        });

    }
}

export function startChapter(chapter) {

    const start = chapter.dialog

    setBackground(chapter)

    playChapter(start,1)

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

function setBackground(chapter) {
    document.getElementById("scene-bg").src = chapter.background
}