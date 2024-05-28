let pages = document.querySelectorAll(".page");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

pages.forEach(function(page) {
    page.addEventListener("click", function() {
        pages.forEach(function(p) {
            p.classList.remove("active");
        });
        this.classList.add("active");
        handlePageChange(this.innerText);
    });
});

prev.addEventListener("click", function() {
    let active = document.querySelector(".active");
    if (active.innerText === "1") {
        return;
    }
    active.classList.remove("active");
    active.previousElementSibling.classList.add("active");
    handlePageChange("prev");
});

next.addEventListener("click", function() {
    let active = document.querySelector(".active");
    if (active.innerText === "5") {
        return;
    }
    active.classList.remove("active");
    active.nextElementSibling.classList.add("active");
    handlePageChange("next");
});

function handlePageChange(action) {
    console.log("Chuyển trang " + action);
    let active = document.querySelector(".active");
    if (active.innerText === "1") {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }

    if (active.innerText === "6") {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

}
