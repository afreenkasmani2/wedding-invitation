const revealButton = document.getElementById("revealDate");
const dateCard = document.getElementById("dateCard");
if (revealButton && dateCard) {
  revealButton.addEventListener("click", () => {
    dateCard.hidden = false;
    revealButton.setAttribute("aria-label", "Wedding date revealed: 2nd January 2027");
  });
}

const doorStage = document.getElementById("doorStage");
const petalLayer = document.getElementById("petalLayer");

// Add a restrained shower of ivory and champagne-blush petals over the welcome artwork.
if (petalLayer && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const petalCount = 42;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--left", `${(i * 37 + 8) % 100}%`);
    petal.style.setProperty("--size", `${9 + (i % 5) * 3}px`);
    petal.style.setProperty("--duration", `${7 + (i % 5) * 1.4}s`);
    petal.style.setProperty("--delay", `${(i % 9) * 0.42}s`);
    petal.style.setProperty("--turn", `${i * 31}deg`);
    petal.style.setProperty("--drift", `${((i % 2) ? 1 : -1) * (24 + (i % 5) * 12)}px`);
    petalLayer.appendChild(petal);
  }
}

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
    }, 6450);
  }, { once: true });
}
