import './style.scss';
import './reset.css';

const body = document.querySelector('body');

const content = document.createElement('div');
content.id = 'content';
content.className = 'background-red';

body.appendChild(content);