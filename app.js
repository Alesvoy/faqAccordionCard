const listEl = document.querySelector('.faq__list');

for (let i = 0; i < listEl.children.length; i++) {
  const boxEl = listEl.children[i].children[0];
  const textEl = listEl.children[i].children[1];

  let open = false;

  boxEl.addEventListener('click', () => {
    textEl.classList.toggle('hide');

    if (open) {
      boxEl.children[1].classList.toggle('rotate');
      boxEl.children[0].style.fontWeight = '400';
      open = false;
      return;
    }

    boxEl.children[1].classList.toggle('rotate');
    boxEl.children[0].style.fontWeight = '700';
    open = true;
  });
}
