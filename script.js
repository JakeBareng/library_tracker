const addNew = document.querySelector("#addCard")
const overlay = document.querySelector("#overlay")
const submitButn = document.querySelector("#submit")
//form inputs
const ftitle = document.getElementById("title")
const fauthor = document.getElementById("author")
const fpages = document.getElementById("pages")
const fisRead = document.getElementById("isRead")

let myLibrary = [

];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let title = ftitle.value;
    let book = new Book(title,author,pages,isRead)
    myLibrary.push(newBook)
}

addNew.addEventListener("click", () => {
    ftitle.value = "";
    fauthor.value = "";
    fpages.value = "";
    overlay.style.display = "block flex";
})
submitButn.addEventListener("click", () => {
    overlay.style.display = "none";
})
fisRead.addEventListener("click", () =>{

})
