// Mendapatkan elemen tombol dan pesan
const button = document.getElementById("surprise-button");
const message = document.getElementById("surprise-message");

// Menambahkan event listener pada tombol
button.addEventListener("click", () => {
  message.classList.toggle("hidden");
});
