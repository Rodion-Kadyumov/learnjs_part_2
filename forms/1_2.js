let viewEl = document.getElementById('view');
viewEl.tabIndex = 0;                                  /* возможность получения события focus */

let textareaEl = document.createElement('textarea');
textareaEl.classList.add("edit");

viewEl.addEventListener('focus', function(event) { /* при фокусировке замена на textarea */
  textareaEl.value = viewEl.innerHTML;
  viewEl.replaceWith(textareaEl);
  textareaEl.focus();
});

textareaEl.addEventListener('blur', function(event) { /* при уходе фокуса замена на view */
  viewEl.innerHTML = textareaEl.value;
  textareaEl.replaceWith(viewEl);
});

textareaEl.onkeydown = function(event) {                /* добавим собьітие для 'Enter' */
  if (event.key == 'Enter') {
    this.blur();
  }
};


let table = document.getElementById('bagua-table');

let editingTd;

table.onclick = function(event) {

  // 3 возможных цели
  let target = event.target.closest('.edit-cancel,.edit-ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd) return; // уже редактируется

    makeTdEditable(target);
  }

};

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}


mouse.addEventListener('click', function(event) {
  mouse.setAttribute('tabindex', '0');
  mouse.focus();
  mouse.style.position = 'absolute';
  mouse.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
      mouse.style.top = mouse.getBoundingClientRect().top - mouse.offsetHeight + 'px';
    } else if (event.code == 'ArrowRight') {
      mouse.style.left = mouse.getBoundingClientRect().left + mouse.offsetWidth + 'px';
      console.log(mouse.getBoundingClientRect().right);
    } else if (event.code == 'ArrowDown') {
      mouse.style.top = mouse.getBoundingClientRect().top + mouse.offsetHeight + 'px';
    } else if (event.code == 'ArrowLeft') {
      mouse.style.left = mouse.getBoundingClientRect().left - mouse.offsetWidth + 'px';
    };
  });
});