// handles menu toggle
$("#menu").click(function () {
  let nav = $("#headerBottom");

  if (nav.css("display") === "none") {
    nav.show();
  } else {
    nav.hide();
  }
});

// handles slideshow autoplay
let slideIndex = 0;

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
};

showSlides();

// handles collapsable footer info
$("#aboutUsHeader").click(function () {
  let aboutUsList = $("#aboutUsList");

  if (aboutUsList.css("display") === "none") {
    aboutUsList.show();
  } else {
    aboutUsList.hide();
  }
});

$("#servicesHeader").click(function () {
  let servicesList = $("#servicesList");

  if (servicesList.css("display") === "none") {
    servicesList.show();
  } else {
    servicesList.hide();
  }
});

$("#shopHeader").click(function () {
  let shopList = $("#shopList");

  if (shopList.css("display") === "none") {
    shopList.show();
  } else {
    shopList.hide();
  }
});
