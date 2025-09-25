let hora = document.getElementById("hora");
let minuto = document.getElementById("minuto");
let segundo = document.getElementById("segundo");

setInterval(() => {
  let tempo = new Date();
  let h = tempo.getHours();
  let m = tempo.getMinutes();
  let s = tempo.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  hora.textContent=h;
  minuto.textContent=m;
  segundo.textContent=s
});
