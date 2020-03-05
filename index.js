// on scroll

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollpops = window.pageYOffset;
  let nav = document.getElementById("nav-area");
  let bubbles = document.querySelector(".bubbles-wrapper");

  let bottomOfWindow =
    document.documentElement.scrollTop + window.innerHeight ===
    document.documentElement.offsetHeight;
  console.log(currentScrollpops);
  if (bottomOfWindow === true) {
    bubbles.classList.add("hidden");
  } else if (currentScrollpops === 0) {
    bubbles.classList.remove("hidden");
  }

  if (prevScrollpos > currentScrollpops) {
    nav.classList.remove("animate");
  } else {
    nav.classList.add("animate");
  }
  prevScrollpos = currentScrollpops;
};

//////////     hamburger menu /////////

const selectElement = element => document.querySelector(element);

selectElement(".hamburger").addEventListener("click", () => {
  selectElement(".hamburger").classList.toggle("active");
  selectElement(".nav-list").classList.toggle("active");
});

// var hamburger = document.querySelector(".hamburger");
// var navList = document.querySelector(".nav-list");
// console.log("navList", navList);
// console.log("hamburguet", hamburger);
//
// hamburger.addEventListener("click", () => {
//   console.log("cliking");
//   hamburger.classList.toggle("active");
//   navList.classList.toggle("active");
// });

//////////// paralax evect /////////

window.addEventListener("scroll", function() {
  let parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

// ///////// buubles////
