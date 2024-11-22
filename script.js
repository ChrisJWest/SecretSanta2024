// Decode Base64-encoded assignments
function decodeAssignments(encoded) {
  const jsonString = atob(encoded); // Decode Base64 to JSON string
  return JSON.parse(jsonString);   // Parse JSON string to object
}

// Get the encoded data from the HTML
const encodedData = document.getElementById("data").dataset.assignments;

// Decode the assignments
const assignments = decodeAssignments(encodedData);

// Handle button click for revealing the Secret Santa
document.getElementById("revealButton").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value.trim();
  const result = document.getElementById("result");

  if (assignments[nameInput]) {
    const secretSanta = assignments[nameInput];
    result.textContent = `Hi ${nameInput}, you are buying a gift for ${secretSanta}! 🎁`;
  } else {
    result.textContent = "Name not found! Please try again.";
  }
});

// Handle music toggle
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("toggleMusic");

musicButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicButton.textContent = "Pause Music";
  } else {
    music.pause();
    musicButton.textContent = "Play Music";
  }
});
