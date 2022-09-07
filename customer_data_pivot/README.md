## HOW TO RUN
1. Untuk menjalankan project pada repository ini, pertama clone repository ini ke penyimpanan lokal komputer anda.
2. Setelah cloning repository selesai, pastikan build docker terlebih dahulu dengan command berikut

```bash
docker-compose up -d --build
```

setelah command berhasil dijalankan, aplikasi akan secara otomatis berjalan.

3. hit/jalankan endpoint : http://localhost:3000/data untuk populate data dummy ke database

4. Untuk melakukan test pada aplikasi, dapat digunakan command berikut: 

```bash
docker exec -it tweets npm test
```

3. Untuk melihat data customer dapat dilihat melalui endpoint: http://localhost:3000/data/customer
