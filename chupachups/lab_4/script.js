const info = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language
};
localStorage.setItem('browserInfo', JSON.stringify(info));

const infoDisplay = document.getElementById('local-info');
infoDisplay.textContent = JSON.stringify(info, null, 2);

const variant = 29; 
fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
  .then(response => response.json())
  .then(comments => {
    const container = document.getElementById('comments');
    comments.forEach(comment => {
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `<strong>${comment.name}</strong><br>${comment.body}`;
      container.appendChild(div);
    });
  });

setTimeout(() => {
  document.getElementById('modal').style.display = 'block';
}, 60000);

document.querySelector('.close').onclick = () => {
  document.getElementById('modal').style.display = 'none';
};

const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

const now = new Date();
const hours = now.getHours();
if (hours >= 7 && hours < 21) {
  document.body.classList.add('light-theme');
} else {
  document.body.classList.add('dark-theme');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${savedTheme}-theme`);
}
