console.log("script.js berhasil dimuat");

const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "Browser Berhasil Menjalankan JavaScript Anda.";
});
