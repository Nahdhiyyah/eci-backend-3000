import { createConnection } from 'mysql';

// Membuat koneksi ke database
const connection = createConnection({
  host: '34.101.64.250',
  user: 'root',
  password: 'bismillah',
  database: 'sql-eci'
});

// Query SQL untuk mengambil data penyelenggara dan kota_asal_penyelenggara
const query = 'SELECT penyelenggara, kota_asal_penyelenggara FROM data_pengguna';

// Menjalankan query
connection.query(query, (error, results, fields) => {
  if (error) {
    console.error('Kesalahan query: ' + error.stack);
    return;
  }

  // Ambil data penyelenggara dan kota_asal_penyelenggara dari hasil query
  const { penyelenggara, kota_asal_penyelenggara } = results[1, 3];

  // Buat objek dataMl dengan data yang diperlukan untuk input ke model ML
  const dataMl = {
    penyelenggara: penyelenggara,
    kota_asal_penyelenggara: kota_asal_penyelenggara
  };

  console.log(dataMl)

  // Menutup koneksi ke database
  connection.end();
});
