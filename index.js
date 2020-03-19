///reload

let reloaded = document.querySelector(".reload");

reloaded.addEventListener("click", () => {
  window.location.reload();
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollpops = window.pageYOffset;
  let nav = document.getElementById("nav-area");
  // let bubbles = document.querySelector(".bubbles-wrapper");

  let bottomOfWindow =
    document.documentElement.scrollTop + window.innerHeight ===
    document.documentElement.offsetHeight;
  // console.log(currentScrollpops);
  // if (bottomOfWindow === true) {
  //   bubbles.classList.add("hidden");
  // } else if (currentScrollpops === 0) {
  //   bubbles.classList.remove("hidden");
  // }

  if (prevScrollpos > currentScrollpops) {
    nav.classList.remove("animate");
  } else {
    nav.classList.add("animate");
  }
  prevScrollpos = currentScrollpops;
};

//////////     hamburger menu /////////

// const selectElement = element => document.querySelector(element);
//
// selectElement(".hamburger").addEventListener("click", () => {
//   selectElement(".hamburger").classList.toggle("active");
//   selectElement(".nav-list").classList.toggle("active");
// });

var hamburger = document.querySelector("#hamburger");
var navList = document.querySelector("#nav-list");

navList.addEventListener("click", () => {
  navList.classList.add("hidden");
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  navList.classList.remove("hidden");
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

//////////// paralax evect /////////

window.addEventListener("scroll", function() {
  let parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
});

// revel images effect //

const images = document.querySelectorAll(".image");
// const paragraphs = document.querySelectorAll(".description");

// console.log(paragraphs);

const revealImages = scrollTop => {
  images.forEach(image => {
    if (scrollTop + window.innerHeight > image.offsetTop + image.offsetHeight) {
      image.classList.add("reveal");
    }
  });
  // paragraphs.forEach(para => {
  //   if (scrollTop + window.innerHeight > para.offsetTop + para.offsetHeight) {
  //     para.classList.add("reveal");
  //   }
  // });
};

revealImages(0);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  revealImages(scrollTop);
});

// //////////  skkills slide/////

const slideIn = document.querySelectorAll(".slide-in");
// const slideRight = document.querySelectorAll(".from-right");
console.log(slideIn);
function debounce(func, wait = 20, imediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!imediate) func.apply(context, args);
    };
    var callNow = imediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
checkslide = e => {
  // console.count(e);
  slideIn.forEach(slideImage => {
    // haldway throuh the image
    const slideInAt = window.scrollY + window.innerHeight;
    slideImage.height / 2;
    // buttom of the image
    const imageBottom = slideImage.offsetTop + slideImage.height;
    // console.log("imageBottom", imageBottom);
    const isHalfShown = slideInAt > slideImage.offsetTop;
    // console.log("ishalsHown", isHalfShown);
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown || isNotScrolledPast) {
      // console.log(slideImage);
      slideImage.classList.add("show");
    } else {
      slideImage.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", debounce(checkslide));

// ///////////
