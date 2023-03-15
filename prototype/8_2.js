const code82 = document.getElementById('code82');
code82.onclick = Code82;
function Code82() {
  function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
Rabbit.prototype = {};
alert( rabbit.eats );
}

const code83 = document.getElementById('code83');
code83.onclick = Code83;
function Code83() {
  function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
alert( rabbit.eats );
}

const code84 = document.getElementById('code84');
code84.onclick = Code84;
function Code84() {
  function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
delete rabbit.eats;
alert( rabbit.eats );
}

const code85 = document.getElementById('code85');
code85.onclick = Code85;
function Code85() {
  function Rabbit() {}
Rabbit.prototype = {
  eats: true
};
let rabbit = new Rabbit();
delete Rabbit.prototype.eats;
alert( rabbit.eats );
}