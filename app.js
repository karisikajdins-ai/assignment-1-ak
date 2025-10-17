document.getElementById("actionButton").addEventListener("click", function() {
  const message = document.getElementById("message");
  const currentTime = new Date().toLocaleTimeString();
  message.textContent = "Du tryckte på knappen: " + currentTime + "!";
});
