// open aside on window load
window.onload = function () {

    document.querySelector(".navbar .right .btn").click();
}

// toggler icon up and down
let togglerIcon = document.querySelector(".navbar .navbar-toggler .fas");

document.querySelector(".navbar .navbar-toggler").addEventListener("click", () => {

    if (togglerIcon.classList.contains("fa-sort-down")) {

        togglerIcon.classList.replace("fa-sort-down", "fa-sort-up");
    }
    else {

        togglerIcon.classList.replace("fa-sort-up", "fa-sort-down");
    }
})

// aside button controls
document.querySelector(".navbar .right .btn").addEventListener("click", () => {

    document.querySelector("aside").classList.toggle("show");

    document.querySelector("article").classList.toggle("full");
})