const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
  menu.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth >= 900) {
    menu.classList.remove('hide', 'show');
  } else {
    menu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();
