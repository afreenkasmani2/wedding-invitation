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
    openDoorsButton.setAttribute("aria-label", "Opening the wedding invitation");

    // First: acknowledge the tap with a warm glow on the A&I seal.
    doorStage.classList.add("seal-pressed");

    // Then: fade the seal overlay as the two door leaves begin to swing.
    window.setTimeout(() => {
      doorStage.classList.add("is-opening");
    }, 650);

    // Unlock the rest of the invitation after the door transition completes.
    window.setTimeout(() => {
      document.body.classList.remove("invitation-locked");
      document.body.classList.add("invitation-unlocked");
    }, 4550);
  }, { once: true });
}
