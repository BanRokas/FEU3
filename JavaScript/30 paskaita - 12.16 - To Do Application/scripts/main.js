import Menu from './components/Menu.js';
import Main from './components/Main.js';

!localStorage.length && localStorage.setItem('tasks', '[]');

document.querySelector('body').append(new Menu());
document.querySelector('body').append(new Main());