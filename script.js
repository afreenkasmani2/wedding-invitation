const revealButton = document.getElementById("revealDate");
const dateCard = document.getElementById("dateCard");
if (revealButton && dateCard) {
  revealButton.addEventListener("click", () => {
    dateCard.hidden = false;
    revealButton.setAttribute("aria-label", "Wedding date revealed: 2nd January 2027");
  });
}

const doorStage = document.getElementById("doorStage");
const openDoorsButton = document.getElementById("openDoors");
if (doorStage && openDoorsButton) {
  let opened = false;
  openDoorsButton.addEventListener("click", () => {
    if (opened) return;
    opened = true;
    openDoorsButton.disabled = true;
    doorStage.classList.add("is-opening");
    window.setTimeout(() => {
      document.body.classList.remove("invitation-locked");
      document.body.classList.add("invitation-unlocked");
    }, 3900);
  }, { once: true });
}
