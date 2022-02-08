// import './reset.css';
import './style.css';

const body = document.querySelector('body');

const content = document.createElement('div');
content.textContent = 'hello world';
content.id = 'content';
content.classList.add('container', 'bg-green-400', 'mx-auto', 'bg-green-400', 'my-10', 'p-10', 'rounded-md');

body.appendChild(content);