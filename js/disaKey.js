// Show message on right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showRestrictionMessage("Right-clicking is restricted on this page.");
});

// Show message on F12 key press
document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
    showRestrictionMessage("F12 key is restricted on this page.");
  }
});

// Show message on CTRL + U key press
document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "u") {
    e.preventDefault();
    showRestrictionMessage("CTRL + U is restricted on this page.");
  }
});

// Show message on CTRL + I key press
document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === "I" || e.key === "i")) {
    e.preventDefault();
    showRestrictionMessage("CTRL + I is restricted on this page.");
  }
});

function showRestrictionMessage(message) {
  const restrictionMessage = document.getElementById("restriction-message");
  const messageText = document.getElementById("message-text");

  messageText.innerText = message;
  restrictionMessage.style.display = "block";

  // Hide the message after a certain duration (e.g., 3 seconds)
  setTimeout(() => {
    restrictionMessage.style.display = "none";
  }, 3000);
}
