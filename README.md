# Login, Cart, dan API
## Tool
Library yang digunakan adalah react vite, react-router-dom, Radix UI, axios, dan [fake store API](https://fakestoreapi.com/).
Content:
- Login dan logout via API
- Add to cart
- Get products from API
- Dark and light mode

## UI page
### Root Page
Tampilan home
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/root-page.png)
Tampilan home terdapat 4 button:
- Login: Fitur dapat diakses dengan memasukan username: johnd dan password: m38rmF$
- Register: Fitur ini belum berkerja, namun sudah ada UInya
- Product: Fitur dapat diakses namun diperlukan login dahulu, bila tidak login akan dikembalikan ke halaman login
- Profile: Fitur dapat diakses namun diperlukan login dahulu, bila tidak login akan dikembalikan ke halaman login, sama seperti fitur product

### Login Page
Tampilan login
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/login-page.png)
Fitur login tidak mengakses langsung database namun menggunakan API, API yang digunakan API yang opensource yaitu [fakestoreapi](fakestoreapi.com). Untuk mencoba login dapat memasukan username: johnd dan password: m38rmF$. Dan memiliki dark mode untuk mengubah ke dark mode dapat ditekan button di kanan atas halaman.

### Register Page
Tampilan register
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/register-page.png)
Fitur tidak berjalan namun sudah ada UInya

### Products Page
Tampilan product page
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/products-page.png)
Data product diambil dari API yang sama seperti login. Terdapat fitur add to card dan dark mode (gambar diatas adalah light mode). Diperlukan login dahulu bila ingin memasuki halaman ini, bila belum login akan dikembalikan ke halaman login. Berikut adalah dark mode,
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/products-page-dark.png)

### Profile Page
Halaman dapat berfungsi namun belum memiliki UI. Halaman ini diperlukan login dahulu seperti halaman products

### API
API yang digunakan adalah [fakestoreapi](fakestoreapi.com)
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/fake-store-api.png)
