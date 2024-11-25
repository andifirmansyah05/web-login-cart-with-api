# Login, Cart, and API  
## Tool  
The library used is React Vite, react-router-dom, Radix UI, axios, and [Fake Store API](https://fakestoreapi.com/).  
Content:  
- Login and logout via API  
- Add to cart  
- Get products from API  
- Dark and light mode  

## UI Page  
### Root Page  
Home view  
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/root-page.png)  
The home page contains four buttons:  
- **Login**: This feature can be accessed by entering `username: johnd` and `password: m38rmF$`.  
- **Register**: This feature is not yet functional, but the UI has been created.  
- **Product**: This feature can be accessed, but login is required. If not logged in, the user will be redirected to the login page.  
- **Profile**: Similar to the Product feature, this page requires login; otherwise, the user will be redirected to the login page.  

### Login Page  
Login page view  
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/login-page.png)  
The login feature does not directly access a database but uses an API. The API used is open-source: [Fake Store API](https://fakestoreapi.com). To test login, you can use `username: johnd` and `password: m38rmF$`.  
It also includes a dark mode toggle that can be activated by clicking the button at the top-right corner.  

### Register Page  
Register page view  
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/register-page.png)  
This feature is not functional yet, but the UI has been created.  

### Products Page  
Products page view  
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/products-page.png)  
Product data is retrieved from the same API used for login. This page includes an **add-to-cart feature** and dark mode (the image above shows light mode).  

Login is required to access this page. If the user is not logged in, they will be redirected to the login page. Below is the dark mode view:  
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/products-page-dark.png)  

### Profile Page  
The page functions but does not yet have a UI. Like the products page, login is required to access it.  

### API  
The API used is the [Fake Store API](https://fakestoreapi.com).  
![alt text](https://github.com/andifirmansyah05/web-login-cart-with-api/blob/main/public/images/forGithub/fake-store-api.png)  
