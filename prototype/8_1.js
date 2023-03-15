const code81 = document.getElementById('code81');
code81.onclick = Code81;
function Code81() {
  let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  alert('1 - ' + rabbit.jumps );
  delete rabbit.jumps;
  alert('2 - ' + rabbit.jumps );
  delete animal.jumps;
  alert('3 - ' + rabbit.jumps );
}