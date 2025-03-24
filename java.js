// Reemplaza tu script por esto:
const toggle = document.getElementById('darkModeToggle');
const isDark = localStorage.getItem('dark-mode') === 'true';

if (isDark) {
  document.body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});
