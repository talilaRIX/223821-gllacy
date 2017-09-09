"use strict";

var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".modal-close");


(function() {
  var modalTrigger = document.querySelector(".contacts-button");
  var modalWrapper = document.querySelector(".feedback-wrapper");
  var modalClose = modalWrapper.querySelector(".modal-close");

  if (modalTrigger && modalWrapper) {
    modalTrigger.addEventListener("click", function(evt) {
      evt.preventDefault();

      if (modalWrapper.classList.contains("hidden")) {
        modalWrapper.classList.remove("hidden");
      }
    });

    modalClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalWrapper.classList.add("hidden");
    });
  }

  document.addEventListener("keydown", function(evt) {
    if (
      modalWrapper &&
      evt.key === "Escape" &&
      !modalWrapper.classList.contains(".hidden")
    ) {
      modalWrapper.classList.add("hidden");
    }
  });
})();
