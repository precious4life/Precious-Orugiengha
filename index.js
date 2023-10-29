const fullName = "PRECIOUS ORUGIENGHA";
let fullNameElement = document.getElementById("name");
fullNameElement.innerHTML = `${fullName}`

let picture = "passport.jpg";
let pictureElement = document.getElementById("img")
pictureElement.setAttribute("src", picture);
pictureElement.setAttribute("alt", fullName);

// Skills Earned

let programmingBackground = ["Html ",  "  Css",  "  Javascript", "  Python", "  Csharp"]

let pBackgroundElement = document.getElementById("buttonsli");
let programmingBackgroundstring = programmingBackground.join("|");
pBackgroundElement.innerHTML = programmingBackgroundstring;


// setting javascript to hold the nav links and let the menu-button hold it

document.getElementById("menu-button").addEventListener("click", function() {
    let nav = document.querySelector("nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {nav.style.display = "block"}
})


const currentPage = window.location.pathname;
const pageToLink  = {
    '/index.html':'menu-link',
};
if (pageToLink[currentPage]) {
    document.getElementById(pageToLink[currentPage]).classList.add("active");
}