contents3.addEventListener('click', (event) => {
  let target = event.target.closest('a');
  if(target && contents3.contains(target)) {
    let isVisited = confirm(`Вы уверены, что вам нужно перейти по этой ${target.getAttribute('href')} ссылке?`);
    if(!isVisited) {
      event.preventDefault();
    }
  }
});


thumbs.onclick = function(event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}