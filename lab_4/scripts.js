const browserData = {
  platform: navigator.platform,
  userAgent: navigator.userAgent,
  language: navigator.language,
  cookieEnabled: navigator.cookieEnabled,
};
localStorage.setItem("browserInfo", JSON.stringify(browserData));

document.getElementById("browser-info").textContent =
  localStorage.getItem("browserInfo");

const commentsContainer = document.getElementById("comments-container");
fetch("https://jsonplaceholder.typicode.com/posts/6/comments") 
  .then((response) => response.json())
  .then((comments) => {
    comments.forEach((comment) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${comment.name}</strong><p>${comment.body}</p>`;
      commentsContainer.appendChild(div);
    });
  });

setTimeout(() => {
  document.getElementById("modal").style.display = "block";
}, 60000);

document.getElementById("close-modal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

function autoThemeSwitch() {
  const hour = new Date().getHours();
  if (hour >= 7 && hour < 21) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
}
autoThemeSwitch();
