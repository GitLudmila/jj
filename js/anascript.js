let button = document.querySelector("#open"),
    close = document.querySelector("#close"),
    modal = document.querySelector("#modal"),
    backdrop = document.querySelector("#backdrop");

button.addEventListener("click", function() {
    // event.preventDefault();
    modal.style.display = "block";
});

close.addEventListener("click", function() {
    // event.preventDefault();
    modal.style.display = "none";
});

backdrop.addEventListener("click", function() {
    // event.preventDefault();
    modal.style.display = "none";
});

