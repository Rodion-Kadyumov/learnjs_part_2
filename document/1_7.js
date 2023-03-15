const code2 = document.getElementById('code2');
code2.onclick = Code2;
function Code2() {
  const createCalendar = (elem, year, month) => {

    let mon = month - 1;
    let d = new Date(year, mon);
    
  
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }
  
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';
  
      if (getDay(d) % 7 == 6) {
        table += '</tr><tr>';
      }
  
      d.setDate(d.getDate() + 1);
    }
  
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
  
    table += '</tr></table>';
  
    elem.innerHTML = table;
  }
  
  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }
  
  createCalendar(calendar, 2023, 3);
}

function time () {
  date = new Date(),
  h = date.getHours(),
  m = date.getMinutes(),
  s = date.getSeconds(),

  h = (h < 10) ? '0' + h : h,
  m = (m < 10) ? '0' + m : m,
  s = (s < 10) ? '0' + s : s;

  hours  = document.getElementById("id_H");
  minutes = document.getElementById("id_M");
  seconds = document.getElementById("id_S");
            
  hours.innerHTML = h;   
  minutes.innerHTML = m;
  seconds.innerHTML = s;
};