## HOW TO RUN
1. Untuk menjalankan project pada repository ini, pertama clone repository ini ke penyimpanan lokal komputer anda.
2. Setelah cloning repository selesai, pastikan build docker terlebih dahulu dengan command berikut

```bash
docker-compose up -d --build
```

3. Jika aplikasi belum berjalan, dapat dijalankan dengan command:

```bash
docker-compose up
```

5. Untuk melakukan test pada aplikasi, dapat digunakan command berikut: 

```bash
docker exec -it tweets npm run test:e2e
```

6. Aplikasi dapat diakses melalui endpoint : http://localhost:3000/timeline/tweets/amandaputrimau3

Setting pagination default adalah 10 item per page, namun jika ingin mengubah setting pagination bisa ditambahkan sebagai query pada endpoint diatas dengan max_results adalah banyak item yg akan ditampilkan dan pagination_token berisi next_token atau previous_token yang digunakan untuk berpindah halaman ke sebelumnya atau selanjutnya.
Gunakan next_token yang telah didapatkan untuk berpindah ke halaman selanjutnya, sedangkan previous_token untuk kembali ke halaman sebelumnya.
Contoh : http://localhost:3000/timeline/tweets/amandaputrimau3?max_result=20&pagination_token=7140dibdnow9c7btw3z3q3iaqxcdv50rlcnont4kx5tmh
