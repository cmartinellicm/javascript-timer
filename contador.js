window.addEventListener("load", () => {
  const botaoStart = document.getElementById("start-button");
  const botaoReset = document.getElementById("reset-button");
  const countDiv = document.getElementById("timer");

  botaoStart.addEventListener("click", () => {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;

    // Tempo, em segundos, que queremos.
    let sec = +seconds + +minutes * 60 + +hours * 3600;

    const secpass = () => {
      let min = Math.floor(sec / 60);
      let segundosRestantes = sec % 60;

      if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
      }

      if (min < 10) {
        min = "0" + min;
      }

      // Vai gerar o formato MM:SS
      countDiv.innerHTML = min + ":" + segundosRestantes;

      // Condição final
      if (sec > 0) {
        sec = sec - 1;
      } else {
        countDiv.innerHTML = "Finished!";
      }
    };

    const countDown = setInterval(() => secpass(), 1000);
  });

  // botaoReset.addEventListener("click", () => {
  //   sec = 0;
  //   countDiv.innerHTML = "Reset!";
  // });
});
