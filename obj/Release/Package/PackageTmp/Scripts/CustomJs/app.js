﻿

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
$('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);
});

//------------------------ cursor

let mouseCursor = document.querySelector(".cursor");

let navLinks = document.querySelectorAll(".nav-link");
let btn = document.querySelectorAll(".btn");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    //console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow");
       // link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow");
      //  link.classList.add("hovered-link");
    });
});
btn.forEach((b) => {
    b.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow");
        // link.classList.remove("hovered-link");
    });
    b.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow");
        //  link.classList.add("hovered-link");
    });
});