import './styles.css';
import itemsTemplate from './templates/menu-item.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  };

const markup = itemsTemplate(menu);


const refs = {
    menu: document.querySelector('.js-menu'),
    body: document.body,
    theme: document.querySelector('#theme-switch-toggle'),
}

const savedTheme = localStorage.getItem('Theme');
const parsedSavedTheme = JSON.parse(savedTheme);


refs.menu.insertAdjacentHTML('beforeend', markup);
refs.body.classList.add(Theme.LIGHT);

if (parsedSavedTheme !== refs.body.classList.value) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    refs.theme.checked = true;
}

// if (savedTheme.slice(1,-1) === "dark-theme") {
//     refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
//     refs.theme.checked = true;
// }

refs.theme.addEventListener('change', () => {
    if (refs.body.classList.contains(Theme.LIGHT)) {
        refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
    } else {
        refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
    }
}
);










// refs.theme.addEventListener('change', themeChangeHandler);


// const themeChangeHandler = () => {
//     if (refs.body.classList.contains(Theme.LIGHT)) {
    //     refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    //     localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
    // } else {
    //     refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    //     localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
    // }
// }

