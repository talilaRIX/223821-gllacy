var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".modal-close");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
});

window.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
	if (popup.classList.contains("feedback-show")) {
	popup.classList.remove("feedback-show");
	}
 }
 });
