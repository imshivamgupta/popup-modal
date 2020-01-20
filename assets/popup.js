var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var body = document.querySelector("body");
var btnCancel = document.querySelector(".btn-cancel");
var tone = new Audio("Ringing_Phone.wav");
tone.loop = true;

function toggleModal() {
  const check = modal.classList.toggle("show-modal");
  // tone.play();
  // check ? tone.play() : tone.pause();
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

function cancel() {
  tone.pause();
}
trigger.addEventListener("click", toggleModal);
btnCancel.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

function mouseMove(event) {
  const human = document.querySelector(".human");
  const moveX = (event.pageX * -1) / 100;
  const moveY = (event.pageY * -1) / 100;
  human.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
