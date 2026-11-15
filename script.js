const revealButton = document.getElementById("revealDate");
const dateCard = document.getElementById("dateCard");

revealButton.addEventListener("click", () => {
  dateCard.hidden = false;
  revealButton.setAttribute("aria-label", "Wedding date revealed: 2nd January 2027");
});


const doorStage = document.getElementById("doorStage");
const openDoorsButton = document.getElementById("openDoors");
let doorsOpened = false;

openDoorsButton.addEventListener("click", () => {
  if (doorsOpened) return;
  doorsOpened = true;
  openDoorsButton.disabled = true;
  doorStage.classList.add("is-opening");
});
