const code1 = document.getElementById('code1');
code1.onclick = Code1;
function Code1() {
  let body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data );
}