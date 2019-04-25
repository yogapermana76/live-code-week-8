# Classic Fox's Final Live Code (Phase 2) 👨‍💻👩‍💻

Kompetensi:
- Mengerti cara baca dokumentasi dan implementasi 3rd party API
- Vue.js (CLI, Emit/Props, Vuex, Routes)
- Membuat authentication dan authorization pada Client dan Server

Pada live code ini kamu diminta untuk membuat beberapa fitur baik dari sisi
`server` maupun `client`, pastikan kamu membaca spesifikasi dengan baik.

Live code ini akan dicek dari sisi end user lalu dilanjutkan ke code review,
jadi pastikan fitur yang kamu buat tidak setengah-setengah (`client`/`server` doang)

Repository bisa kamu *fork* dari `classic-fox-2019` dan saat pengumpulan
**WAJIB** memberikan *environment variables* yang digunakan untuk development,
kamu **WAJIB** masukkan list variabelnya beserta value ke `server/environment-variables.txt`. Jika
kamu tidak memberikan *environment variables* dan aplikasi kamu error saat
dites, maka hal ini bukan tanggung jawab instruktur ^^.

Nama database **WAJIB** menggunakan `from-nasa-with-love` ❤️

Untuk live code kali ini kamu diperbolehkan:
- Tidak membuat `controllers` di `server`
- Tidak membuat file `routes` terpisah (semua `routes` di `index.js` boleh!)
- Menggunakan UI/CSS framework apapun untuk membuat `client` atau menggunakan
  template yang disediakan oleh instruktur.

Aplikasi yang kamu buat harus SPA (*Single Page Application*). Nilai akan
dikurangi 10 points jika ada *refresh*/*reload*.

## Summary

Tujuan dari aplikasi ini adalah untuk menyimpan *astronomy picture/video list* milik user. Dan ketika user memasukkan
data, otomatis terisi `title`, `desc` dan `mediaType`
yang didapat dari 3rd party API ([Nasa](https://api.nasa.gov/api.html#apod)).

Untuk component datepicker dapat menggunakan [vuejs-datepicker](https://www.npmjs.com/package/vuejs-datepicker)

Ganbatte! 🔥

### Authentication

- **Register** (10 points)
  - URL:
    - `POST http://your.server/register`
  - Body:
    - `email`: `String`, required
    - `password`: `String`, required
  - Expected response (status: `201`):
    ```json
      {
        "_id": "...",
        "email": "...",
        "password": "<HashedPassword>"
      }
    ```
  - Notes:
    - Handle juga error untuk email duplikat dan input tidak valid seperti email/password tidak diisi dan format email salah (status: `400`).
    - **Tidak perlu** dibuat di sisi `client`.

- **Login** (15 points)
  - URL:
    - `POST http://your.server/login`
  - Body:
    - `email`: `String`, required
    - `password`: `String`, required
  - Expected response (status: `200`):
    ```json
      {
        "accessToken": "<accessToken>"
      }
    ```
  - Notes:
    - Handle juga error untuk input tidak valid (email/password tidak diisi atau salah).
    - Di sisi `client`, untuk menyimpan *login state* (sedang login atau tidak) **HARUS** di Vuex/store.

### Components

![](./client.png)

Notes:
- Sususan dan nama komponen **HARUS SAMA PERSIS** seperti gambar di atas!

### Astronomy Picture/Video

Di sisi `client`, kamu tidak diperbolehkan untuk menyimpan data `Apod (Astronomy Picture of the Day)` di Vuex/store, simpanlah di komponen bernama `ApodList`.

- **Apod list and search for apods** (10 points)
  - URL:
    - `GET http://your.server/apods`
  - Header(s):
    - `Access-Token`: `String`
  - Expected response (status: `200`):
    ```json
      [
        {
          "_id": "...",
          "title": "...",
          "url": "...",
          "mediaType": "..."
        }
      ]
    ```
  - Notes:
    - Handle error untuk header tidak valid seperti `Invalid access token` (status: `400`).
    - Saat menampilkan data di `client`, tampilkan **title** dan video/image-nya.
    - Untuk melakukan search di `client`, boleh `.filter` dari state langsung.
    - Gunakan `emit` dan `props` untuk mengimplementasikan fitur search.

- **Get apod by ID** (15 points)
  - URL:
    - `GET http://your.server/apods/:id`
  - Header(s):
    - `Access-Token`: `String`
  - Expected response (status: `200`):
    ```json
      {
        "_id": "...",
        "date": "...",
        "title": "...",
        "desc": "...",
        "url": "...",
        "mediaType": "..."
      }
    ```
  - Notes:
    - Handle error untuk header tidak valid seperti `Invalid access token` (status: `400`).
    - Handle error untuk status `404` ketika ID yang dicari tidak ada.
    - Gunakan endpoint ini untuk menampilkan detail di `client`.
    - Implementasikan *nested route* untuk fitur ini.

- **Create a apod** (15 points)
  - URL:
    - `POST http://your.server/apods`
  - Header(s):
    - `Access-Token`: `String`
  - Body:
    - `date`: `String` atau `Date`, required
  - Expected response (status: `201`):
    ```json
      {
        "_id": "...",
        "date": "...",
        "title": "...",
        "desc": "...",
        "url": "...",
        "mediaType": "..."
      }
    ```
  - Notes:
    - Handle error untuk header tidak valid seperti `Invalid access token` dan input yang tidak valid (status: `400`).
    - Tampilan di `client` harus langsung ter-update ketika data berhasil dibuat (muncul data baru) dan tidak boleh *refresh*/*reload*.
    - Jika kamu berhasil menggunakan vuejs-datepicker, kamu akan mendapatkan tambahan 10 points
    - Jika kamu berhasil mendapatkan `title`, `desc`, `mediaType` dan `url` dari 3rd party API, kamu akan mendapatkan tambahan 10 points, dengan syarat:
      - `title`, `desc`, `mediaType` dan `url` harus didapatkan lewat `server` **DAN** harus memasukkan value dari *Middleware/Hook* yang ada di `mongoose` seperti `pre save`, `pre validate` dll.
      - Untuk mendapatkan data Apod berdasarkan tanggal/date sudah disediakan oleh 3rd party API, jadi **DILARANG** ambil semua data lalu `.filter` sendiri di code kamu!

- **Delete a apod** (15 points)
  - URL:
    - `DELETE http://your.server/apods/:id`
  - Header(s):
    - `Access-Token`: `String`
  - Expected response (status: `200`):
    ```json
      {
        "_id": "<DeletedId>",
      }
    ```
  - Notes:
    - Handle error untuk header tidak valid seperti `Invalid access token` (status: `400`).
    - Handle error untuk status `404` ketika ID yang dicari tidak ada.
    - Yang dapat menghapus data hanya user yang membuat data tersebut
    - Tampilan di `client` harus langsung ter-update ketika data berhasil dihapus dan tidak boleh *refresh*/*reload*.

- **Update a apod** (20 points) 🚀
  - URL:
    - `PUT http://your.server/apods/:id`
  - Header(s):
    - `Access-Token`: `String`
  - Body:
    - `date`: `String`, required
  - Expected response (status: `200`):
    ```json
      {
        "_id": "...",
        "date": "...",
        "title": "...",
        "desc": "...",
        "url": "...",
        "mediaType": "..."
      }
    ```
  - Notes:
    - Handle error untuk header tidak valid seperti `Invalid access token` dan input yang tidak valid (status: `400`).
    - Handle error untuk status `404` ketika ID yang dicari tidak ada.
    - Tampilan di `client` harus langsung ter-update ketika data berhasil di-edit dan tidak boleh *refresh*/*reload*.
    - `title`, `descript`, `url` dan `mediaType` harus otomatis berubah berdasarkan `date` baru.
    - Syarat untuk mendapatkan `title`, `descript`, `url` dan `mediaType`:
      - Harus didapatkan lewat `server` **DAN** harus memasukkan value dari *Middleware/Hook* yang ada di `mongoose` seperti `pre save`, `pre validate` dll.
      - Untuk mendapatkan data Apod berdasarkan tanggal/date sudah disediakan oleh 3rd party API, jadi **DILARANG** ambil semua data lalu `.filter` sendiri di code kamu!
