const addNew = document.querySelector("#addCard")
const overlay = document.querySelector("#overlay")
const submitButn = document.querySelector("#submit")
const cardSection = document.getElementById("cardSection")
//form inputs
const ftitle = document.getElementById("title")
const fauthor = document.getElementById("author")
const fpages = document.getElementById("pages")
const fisRead = document.getElementById("isRead")

const storedData = JSON.parse(localStorage.getItem("userBooks"))
const myLibrary = [];

function Book(title, author, pages, isread) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isread;
}

function addBookToLibrary(title,author,pages,isRead) {
    myLibrary.unshift(new Book(title,author,pages,isRead))
    appendNewBooks();
}

function removeCard(index) {
    myLibrary.splice(index,1)
    appendNewBooks();
}

Book.prototype.readToggle = function isReadToggle() {
    if (this.isRead != true) {
        this.isRead = true;
    }
    else this.isRead = false
    appendNewBooks();
}

function appendNewBooks() {
    localStorage.setItem("userBooks", JSON.stringify(myLibrary))


    document.querySelectorAll('.card').forEach((element)=>{
        element.remove();
    })

    myLibrary.forEach(element => {
        let cardTitle = document.createElement("h3")
        cardTitle.innerText = '"' + element.title + '"';

        let cardAuthor = document.createElement("h4")
        cardAuthor.innerText = "By: " + element.author;

        let cardPages = document.createElement("h4")
        cardPages.innerText = "pages: " + element.pages;


        //buttons
        let cardIsReadButn = document.createElement("button")
        if (element.isRead == false) {
            cardIsReadButn.setAttribute("class", "isRead")
            cardIsReadButn.innerText = "Not Read"
        }
        else {
            cardIsReadButn.setAttribute("class", "isReadChange")
            cardIsReadButn.innerText = "This book has been read"
        }

        let cardRemoveButn = document.createElement("button")
        cardRemoveButn.setAttribute("class", "remove")
        cardRemoveButn.setAttribute("id", myLibrary.indexOf(element))
        cardRemoveButn.innerText = "Remove"

        let divCard = document.createElement("div");
        divCard.setAttribute("class", "card")

        //append
        cardSection.append(divCard)
        divCard.append(cardTitle,cardAuthor,cardPages,cardIsReadButn,cardRemoveButn)
 
        //button events
        cardRemoveButn.addEventListener("click", ()=>{
            removeCard(cardRemoveButn.id)
        })
        cardIsReadButn.addEventListener("click", ()=>{
            element.readToggle();
        })
    });

}


let isReadValue = false;
fisRead.addEventListener("click", ()=>{
    isReadValue = false;
    if(fisRead.getAttribute("class") == "isReadChange"){
        fisRead.innerText = "Have you read this book? (no)"
        fisRead.setAttribute('class','isRead')
    }
    else {
        fisRead.setAttribute('class','isReadChange')
        fisRead.innerText = "Have you read this book? (yes)"
        isReadValue = true
    }

})

addNew.addEventListener("click", () => {
    ftitle.value = "";
    fauthor.value = "";
    fpages.value = "";

    fisRead.innerText = "Have you read this book? (no)"
    fisRead.setAttribute('class','isRead')
    isReadValue = false;

    overlay.style.display = "flex";
})

submitButn.addEventListener("click", () => {
    addBookToLibrary(ftitle.value, fauthor.value, fpages.value, isReadValue)
    overlay.style.display = "none";
})

overlay.addEventListener("keydown",(e)=>{
    if (e.key == "Enter") {
        addBookToLibrary(ftitle.value, fauthor.value, fpages.value, isReadValue)
        overlay.style.display = "none";
    }
})

storedData.reverse()
storedData.forEach(element => {
    
    addBookToLibrary(element.title,element.author,element.pages,element.isRead);
});


