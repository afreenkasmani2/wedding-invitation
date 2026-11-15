const revealButton = document.getElementById("revealDate");
const dateCard = document.getElementById("dateCard");

revealButton.addEventListener("click", () => {
  dateCard.hidden = false;
  revealButton.setAttribute("aria-label", "Wedding date revealed: 2nd January 2027");
});
