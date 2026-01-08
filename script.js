document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button');

  button.onclick = () => {
    do {
    vitez1.innerHTML = "Hráč 1";
    vitez2.innerHTML = "Hráč 2";

    hrac1 = Math.floor(Math.random() * 3);
    hrac2 = Math.floor(Math.random() * 3);

    obr1.src = hrac1 + ".png";
    obr2.src = hrac2 + ".png";

    if (hrac1 === hrac2) {
      remiza = true;
      console.log("Remíza.\nSpouštím další hru.");
    } else if (hrac1 < hrac2 || (hrac1 === 2 && hrac2 === 0)) {
      vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
      vitez1.style.color = "red";
      remiza = false;
    } else {
      vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
      remiza = false;
    }
  } while (remiza);
}
});

