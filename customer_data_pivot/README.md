## HOW TO RUN
1. Untuk menjalankan project pada repository ini, pertama clone repository ini ke penyimpanan lokal komputer anda dan pastikan docker telah terinstall di perangkat yang akan digunakan.
2. Setelah cloning repository selesai, masuk ke folder customer_data_pivot dan buat volume container dengan command berikut

```bash
docker volume create pgdata
```

3. Pastikan build docker terlebih dahulu dengan command berikut

```bash
docker-compose up -d --build
```

setelah command berhasil dijalankan, aplikasi akan secara otomatis berjalan.

3. Hit/jalankan endpoint : http://localhost:3000/data untuk populate data dummy ke database

4. Untuk melakukan test pada aplikasi, dapat digunakan command berikut: 

```bash
docker exec -it main npm test
```

3. Untuk melihat data customer dapat dilihat melalui endpoint: http://localhost:3000/data/customer
