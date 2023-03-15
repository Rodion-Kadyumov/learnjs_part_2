container1.onclick = function(event) {
  if (event.target.className != 'block__btn1') return;
  let pane = event.target.closest('.hidden__block1');
  pane.remove();
};

for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(event) {

  if (event.target.tagName != 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
}

grid.onclick = function(e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;
  // если ячейка TH, тогда сортировать
  // cellIndex - это номер ячейки th:
  //   0 для первого столбца
  //   1 для второго и т.д.
  sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');

  let rowsArray = Array.from(tbody.rows);

  // compare(a, b) сравнивает две строки, нужен для сортировки
  let compare;

  switch (type) {
    case 'number':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }

  // сортировка
  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}


document.addEventListener('mouseover', addTooltip);
document.addEventListener('mouseout', removeTooltip);
let tooltip = document.createElement('div');

function addTooltip(event) {
  if (event.target.className === 'tool') {
      let button = event.target;
      let tooltipContent = event.target.dataset.tooltip;
      tooltip.className = 'tooltip';
      tooltip.innerHTML = tooltipContent;
      document.body.append(tooltip);

      let coords = button.getBoundingClientRect();
      let top = coords.top - tooltip.offsetHeight - 5;
      if (top < 0) {
          top = coords.top + button.offsetHeight + 5;
      }
      let left = coords.left + (button.offsetWidth - tooltip.offsetWidth) / 2;
      if(left < 0) {left = 0}

      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';
  }
}

function removeTooltip() {
    tooltip.remove();
}