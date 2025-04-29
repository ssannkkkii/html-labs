const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine
  };
  
  Object.entries(systemInfo).forEach(([key, value]) =>
    localStorage.setItem(key, value)
  );
  
  document.getElementById("storage-data").textContent = Object.keys(localStorage)
    .map(key => `${key}: ${localStorage.getItem(key)}`)
    .join('\n');
  
  fetch('https://jsonplaceholder.typicode.com/posts/6/comments')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('comments-list');
      data.forEach(c => {
        list.innerHTML += `<li><strong>${c.name}</strong>: ${c.body}</li>`;
      });
    })
    .catch(err => console.error('Помилка:', err));
  
  setTimeout(() => {
    document.getElementById('modal').style.display = 'flex';
  }, 60000);
  
  document.getElementById('close-modal').onclick = () =>
    document.getElementById('modal').style.display = 'none';
  
  window.onclick = e => {
    if (e.target.id === 'modal') {
      e.target.style.display = 'none';
    }
  };
  
  const setTheme = theme => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  };
  
  const currentHour = new Date().getHours();
  const preferredTheme = localStorage.getItem('theme') ||
    (currentHour >= 7 && currentHour < 21 ? 'day-theme' : 'night-theme');
  
  setTheme(preferredTheme);
  
  document.getElementById('theme-toggle').onclick = () => {
    const isDay = document.body.classList.contains('day-theme');
    setTheme(isDay ? 'night-theme' : 'day-theme');
};
  