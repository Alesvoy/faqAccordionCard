const listEl = document.querySelector('.faq__list');

for (let i = 0; i < listEl.children.length; i++) {
  const boxEl = listEl.children[i].children[0];
  const textEl = listEl.children[i].children[1];

  boxEl.addEventListener('click', () => {
    textEl.classList.toggle('hide');
  });

  console.log(listEl.children[i].children[1]);
}
