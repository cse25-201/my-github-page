// =======================
// DARK MODE
// =======================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Change icon
    if(document.body.classList.contains("dark-mode")){
        themeButton.textContent = "☀️";
    }

    else{
        themeButton.textContent = "🌙";
    }

});


// =======================
// SEARCH FUNCTION
// =======================

const searchInput = document.getElementById("search");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const searchValue = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if(text.includes(searchValue)){
                card.style.display = "block";
            }

            else{
                card.style.display = "none";
            }

        });

    });

}


// =======================
// FILTER FUNCTION
// =======================

function filterTools(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(card.classList.contains(category)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

}


// =======================
// FAVORITES FUNCTION
// =======================

const favoriteSection = document.getElementById("favorites");

function addFavorite(button){

    const card = button.closest(".card");

    const toolName = card.querySelector("h3").innerText;

    // Prevent duplicates
    const favoriteTitles = favoriteSection.querySelectorAll("h3");

    for(let title of favoriteTitles){

        if(title.innerText === toolName){
            alert("Tool already added");
            return;
        }

    }

    // Clone card
    const clonedCard = card.cloneNode(true);

    favoriteSection.appendChild(clonedCard);

}


// =======================
// RATING FUNCTION
// =======================

function rate(event){

    const starSection = event.currentTarget;

    starSection.style.color = "gold";

    alert("Thanks for rating!");

}


// =======================
// PAGE ANIMATION
// =======================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
