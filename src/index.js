import './style.css';

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  menuBtn.classList.toggle('bg-gray-700');
});