// 1. Pilih tombol berdasarkan ID-nya ('sapaButton')
const tombolSapa = document.getElementById('sapaButton');

// 2. Cek dulu apakah tombolnya beneran ketemu di HTML
if (tombolSapa) {
    // 3. Tambahkan 'event listener' untuk aksi 'click'
    tombolSapa.addEventListener('click', function() {
        
        // 4. Jalankan kode ini ketika tombol di klik
        // Kesalahan ada di sini: 'alert' harus di awal baris/perintah
        alert('Terimakasih Sudah berkunjung!');
        
        // Bonus: Tambahin aksi keren lainnya!
        console.log('Tombol Sapa Berhasil Diklik!');
    });
} else {
    // Pesan ini muncul di Console (F12) kalau tombolnya enggak ketemu
    console.error("ERROR: Elemen dengan ID 'sapaButton' tidak ditemukan!");
}
