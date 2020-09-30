var search = document.querySelector(".search-button");
var popup = document.querySelector(".form");
var form = document.querySelector(".form-booking");
var arrival = document.querySelector(".arrival");
var departure = document.querySelector(".departure");
var adults = document.querySelector(".adults");
var children = document.querySelector(".children");
var storage = localStorage.getItem("login");


document.addEventListener("DOMContentLoaded", function (evt){
  evt.preventDefault();
  popup.classList.add("form-show");
});

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("form-show");

  if (storage) {
    arrival.value = storage;
  }
});

form.addEventListener("submit", function(evt){
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.add("form-error");
  } else {
    localStorage.getItem("login", arrival.value);
  }
});
