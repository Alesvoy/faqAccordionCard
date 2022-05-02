const listEl = document.querySelector('.faq__list');

for (let i = 0; i < listEl.children.length; i++) {
  const boxEl = listEl.children[i].children[0];
  const textEl = listEl.children[i].children[1];

  let open = false;

  boxEl.addEventListener('click', () => {
    textEl.classList.toggle('hide');

    if (open) {
      boxEl.children[1].classList.remove('rotateUp');
      boxEl.children[1].classList.add('rotateDown');
      open = false;
      console.log(boxEl.children[1]);
      return;
    }

    boxEl.children[1].classList.add('rotateUp');
    boxEl.children[1].classList.remove('rotateDown');
    open = true;

    console.log(boxEl.children[1]);
  });

  console.log(listEl.children[i].children[1]);
}
