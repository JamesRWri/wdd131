const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();

const gallery = document.querySelector('.gallery');
let modal;

function viewerTemplate(src, alt) {
  return `
    <img src="${src}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;
}

gallery.addEventListener('click', (event) => {
  const clicked = event.target.closest('img');
  if (!clicked) return;

  const src = clicked.src.split('-')[0] + '-full.jpg';
  const alt = clicked.alt;

  modal = document.createElement('dialog');
  modal.innerHTML = viewerTemplate(src, alt);
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.close-viewer');
  closeButton.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  modal.addEventListener('close', () => modal.remove());
  modal.showModal();
});
