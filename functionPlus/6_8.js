const code61 = document.getElementById('code61');
code61.onclick = Code61;
function Code61() {
  let i = 0;
setTimeout(() => alert(i), 100);
for(let j = 0; j < 100000000; j++) {
  i++;
}
  alert( i );
}