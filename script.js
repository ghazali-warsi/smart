// Sorting & Filtering

const sortBtns = document.querySelectorAll(".sort-btns button");
const sortCards = document.querySelectorAll(".sort-cards .col-lg-4");

const filterCards = e => {
    document.querySelector(".active-btn").classList.remove("active-btn");
    e.target.classList.add("active-btn");

    sortCards.forEach(cards =>{
        cards.classList.add("hide");

        if (cards.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            cards.classList.remove("hide");
        }
    });
};

sortBtns.forEach(button => button.addEventListener("click", filterCards));

// Searching 

const searchBtn = document.querySelector("#sh-btn");

searchBtn.addEventListener('click', () => {

    let searchInput = document.querySelector("#sh-input").value;

    let elements = document.querySelectorAll(".card-title");

    let cards = document.querySelectorAll(".sort-cards .col-lg-4");

    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput)){
            cards[index].classList.remove("hide");         
        }
        else{
            cards[index].classList.add("hide");
        }
    })
});