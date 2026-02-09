function checkPass() {
  const pass = document.getElementById("pass").value;
  if (pass === "20022004") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Wrong. Try again.";
  }
}

function toggleMusic() {
  const m = document.getElementById("bgm");
  m.paused ? m.play() : m.pause();
}

const texts = [
  "I notice everything about you.",
  "Love isn’t soft. It’s deliberate.",
  "You feel like fate.",
  "Every memory leads back to you.",
  "I promise to choose you.",
  "Your birthday feels like destiny."
];

function showFlash(i) {
  const f = document.getElementById("flashcard");
  f.innerText = texts[i];
  f.style.display = "block";
}

function hideFlash() {
  document.getElementById("flashcard").style.display = "none";
}

// Typing effect
const el = document.querySelector(".typing");
if (el) {
  const text = el.dataset.text;
  let i = 0;
  setInterval(() => {
    if (i < text.length) el.innerText += text[i++];
  }, 80);
}
