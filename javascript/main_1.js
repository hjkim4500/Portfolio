var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let modal_bg = document.querySelector(".modal_background");
let m_about_me = document.querySelector("#about_me");
let m_skill = document.querySelector("#skill");
let m_work = document.querySelector("#work");
let m_contact = document.querySelector("#contact");

let exp_modal = document.querySelectorAll(".exp");

let close_modal = document.querySelector(".fa-x");
let learn_more = document.querySelectorAll(".learn_more");

let clk_circle = document.querySelectorAll(".circle");
let explain_content = document.querySelectorAll(".explain");

function modal_content(e) {
  let clk_name = e.target.className;
  modal_bg.style.display = "block";
  for (let i = 0; i < exp_modal.length; i++) {
    if (exp_modal[i].id == clk_name) {
      exp_modal[i].classList.add("active");
    } else {
      exp_modal[i].classList.remove("active");
    }
  }
}

function f_close_modal() {
  modal_bg.style.display = "none";
}
function more_exp(e) {
  e.target.parentNode.classList.add("active");
  e.target.parentNode.nextSibling.nextSibling.classList.add("active");
  
}
function close_exp(e) {
  e.target.parentNode.childNodes[1].classList.remove("active");
  e.target.classList.remove("active");
 
}
close_modal.addEventListener("click", f_close_modal);

for (let i = 0; i < learn_more.length; i++) {
  learn_more[i].addEventListener("click", modal_content);
}

for (let i = 0; i < clk_circle.length; i++) {
  clk_circle[i].addEventListener("click", more_exp);
  explain_content[i].addEventListener("click", close_exp);
}
