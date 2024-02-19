import { chapter1 } from "./dialogs";

function cleanDialogs() {
    const questions = document.getElementsByClassName("question-box")
    for(i = 0; i < questions.length; i++) {
        cols[i].style.display = "none";
      }

      const dialogs = document.getElementsByClassName("dialog-box")
      for(i = 0; i < dialogs.length; i++) {
          cols[i].style.display = "none";
        }
}

function playChapter(item) {
    if(item.type == "dialog") {
        printDialog(item.text)
    } else if(item.type == "choice") {
        document.getElementsByClassName
    }
}

function printDialog(text) {
    const dialogBox = document.getElementById("dialog-box-1")
}

function startChapter(chapter) {
    start = chapter[0]

    cleanDialogs()

    playChapter(start)

}