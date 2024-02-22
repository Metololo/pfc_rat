import { startChapter, showLatestSuccess } from "./chapter.js";
import { dialog } from "./dialogs.js";


document.getElementById("btn-success").addEventListener("click", () => {
    console.log("my test")
    showLatestSuccess()
})

console.log("test")
startChapter(dialog);