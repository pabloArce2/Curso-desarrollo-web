document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  const coins = document.querySelectorAll(".coin");
  coins.forEach((coin) => {
    coin.addEventListener("click", toggleCoin);
    showCoin(coin);
  });
}

function toggleCoin() {
  const coin = this;
  coin.classList.toggle("cara");
  coin.classList.toggle("cruz");
  setTimeout(() => {
    showCoin(coin);
  }, 300);
}

function showCoin(coin) {
  const country = getCountryFromCoin(coin);
  const imageType = coin.classList.contains("cruz") ? "cruz" : "cara";
  const sourceWebp = `build/assets/img/historia/${imageType}_${country}.webp`;
  const sourcePng = `build/assets/img/historia/${imageType}_${country}.png`;

  coin.innerHTML = `
    <source srcset="${sourceWebp}" type="image/webp">
    <img loading width="200" height="300" src="${sourcePng}" alt="Moneda ${country} ${imageType}">
  `;
}

function getCountryFromCoin(coin) {
    if (coin.classList.contains("coin-spain")) {
        return "spain";
    } else if (coin.classList.contains("coin-portugal")) {
        return "portugal";
    } else if (coin.classList.contains("coin-colombia")) {
        return "colombia";
    } else if (coin.classList.contains("coin-ecuador")) {
        return "ecuador";
    }
}
