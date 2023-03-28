const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // menghentikan aksi default dari form (submit ke halaman "/search")

  const searchInput = document.querySelector('input[name="search"]');
  const searchQuery = searchInput.value;
  console.log(searchQuery); // melakukan log hasil pencarian ke konsol browser (untuk tujuan debugging)

  // lakukan proses pencarian data dengan searchQuery yang telah didapat
  // misalnya dengan mengirimkan request ke server menggunakan teknologi AJAX atau fetch API
});
