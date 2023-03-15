const code86 = document.getElementById('code86');
code86.onclick = Code86;
function Code86() {
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  let rabbit = new Rabbit("Rabbit");

  alert(rabbit.sayHi());
  alert(Rabbit.prototype.sayHi());
  alert(Object.getPrototypeOf(rabbit).sayHi());
  alert(rabbit.__proto__.sayHi());
}