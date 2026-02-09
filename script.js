// PASSWORD
function checkPass() {
  const v = document.getElementById("pass").value;
  if (v === "20022004") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Wrong. Try again.";
  }
}

// MUSIC
function toggleMusic() {
  const audio = document.getElementById("bgm");
  const vinyl = document.querySelector(".vinyl");

  if (audio.paused) {
    audio.play();
    vinyl.classList.add("playing");
  } else {
    audio.pause();
    vinyl.classList.remove("playing");
  }
}

// TYPING
function startTyping(text) {
  let i = 0;
  const el = document.getElementById("type");
  el.innerHTML = "";

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}
