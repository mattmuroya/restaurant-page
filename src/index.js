import './style.css';
import Stew from './img/stew.jpeg'

const card = document.getElementById('stew');
const myImage = new Image();
myImage.src = Stew;

card.appendChild(myImage);