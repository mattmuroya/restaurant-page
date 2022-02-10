import './style.css';
// import Stew from './img/stew.jpeg'

// const card = document.getElementById('stew');
// const myImage = new Image();
// myImage.src = Stew;

// card.appendChild(myImage);

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  menuBtn.classList.toggle('bg-gray-700');
});