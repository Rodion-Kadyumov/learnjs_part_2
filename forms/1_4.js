const but = document.querySelector('.but')
but.onclick = () => {
  const mod = document.querySelector('.modal');
  mod.style.display = 'block';
  form.elements.text.focus();
};

form.onsubmit = () => {
  alert(
    "Вы ввели: " + (form.elements.text.value
      ? form.elements.text.value
      : null)
  );
};

form.elements.cancel.onclick = () => {
  mod.style.display = 'none';
};

document.onkeydown = (e) => {
  e.key === 'Escape' && mod.style.display == 'block' && (mod.style.display = 'none')
}