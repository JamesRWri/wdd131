let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('#logo');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
    logo.src = "byui-logo-white.png";
  } else if (current === 'light') {
    body.classList.add('light');
    body.classList.remove('dark');
    logo.src = "byui_logo.png";
  } else {
    body.classList.remove('dark', 'light');
    logo.src = "byui_logo.png";
  }
}
