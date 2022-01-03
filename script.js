const addNew = document.querySelector("#addCard")
const overlay = document.querySelector("#overlay")
const submitButn = document.querySelector("#submit")
const cardSection = document.getElementById("cardSection")
//form inputs
const ftitle = document.getElementById("title")
const fauthor = document.getElementById("author")
const fpages = document.getElementById("pages")
const fisRead = document.querySelectorAll(".isRead")

const myLibrary = [];




//finish isread button
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title,author,pages) {
    myLibrary.push(new Book(title,author,pages))
    appendNewBooks();
}

function removeCard(index) {
    myLibrary.splice(index-1,1)
    appendNewBooks();
}

function appendNewBooks() {
    document.querySelectorAll('.card').forEach((element)=>{
        element.remove();
    })
    myLibrary.reverse();

    



    myLibrary.forEach(element => {
            //card text
        let cardTitle = document.createElement("h3")
        cardTitle.innerText = element.title;

        let cardAuthor = document.createElement("h4")
        cardAuthor.innerText = "By: " + element.author;

        let cardPages = document.createElement("h4")
        cardPages.innerText = "pages: " + element.pages;

        //buttons
        let cardIsReadButn = document.createElement("button")
        cardIsReadButn.setAttribute("class", "isRead")
        cardIsReadButn.addEventListener("click", ()=>{
            //add a toggle
        })

        let cardRemoveButn = document.createElement("button")
        cardRemoveButn.setAttribute("class", "remove")
        cardRemoveButn.setAttribute("id", myLibrary.length)

        //card
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "card")

        //append
        cardSection.append(divCard)
        divCard.append(cardTitle,cardAuthor,cardPages,cardIsReadButn,cardRemoveButn)
        cardIsReadButn.innerText = "Not Read"
        cardRemoveButn.innerText = "Remove"

        //remove event for specific card
        cardRemoveButn.addEventListener("click", ()=>{
            removeCard(cardRemoveButn.id)
        })
    });

}

addNew.addEventListener("click", () => {
    ftitle.value = "";
    fauthor.value = "";
    fpages.value = "";
    overlay.style.display = "block flex";
})
submitButn.addEventListener("click", () => {
    if (ftitle.value == "" && fauthor.value=="" && fpages.value == "") {
        overlay.style.display = "none";
        return
    }
    addBookToLibrary(ftitle.value, fauthor.value, fpages.value)
    overlay.style.display = "none";
})


