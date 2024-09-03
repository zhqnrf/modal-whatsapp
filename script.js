function showPopups() {
  const closeContainer = document.getElementById("closeContainer");
  const popup1 = document.getElementById("popup1");
  const popup2 = document.getElementById("popup2");

  closeContainer.style.display = "block";
  popup1.style.display = "block";
  popup2.style.display = "block";

  setTimeout(function () {
    closeContainer.classList.add("fade-in");
    popup1.classList.add("fade-in");
    popup2.classList.add("fade-in");
  }, 10);
}

function closePopups() {
  document.getElementById("closeContainer").classList.remove("fade-in");
  document.getElementById("popup1").classList.remove("fade-in");
  document.getElementById("popup2").classList.remove("fade-in");

  setTimeout(function () {
    document.getElementById("closeContainer").style.display = "none";
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
  }, 500);
}

document.getElementById("btnSend").addEventListener("click", function () {
  var inputChat = document.getElementById("inputChat");
  var popup1 = document.getElementById("popup1");

  if (inputChat.value.trim() === "") {
    popup1.classList.add("shake");

    popup1.addEventListener(
      "animationend",
      function () {
        popup1.classList.remove("shake");
      },
      { once: true }
    );
  } else {
    console.log("Message sent:", inputChat.value);
    inputChat.value = "";
  }
});
