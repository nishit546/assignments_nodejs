# Student Management System API (Assignment 1)

## Project Title
Student Management System API - Assignment 1 Node.js



## List of implemented routes
- `GET /` : Welcome message.
- `GET /students` : Retrieve the list of all students.
- `GET /students/topper` : Retrieve the student with the highest CGPA.
- `GET /students/average` : Calculate and retrieve the average CGPA of all students.
- `GET /students/count` : Retrieve the total number of students.
- `GET /students/:id` : Retrieve a specific student by their ID.
- `GET /students/branch/:branchName` : Retrieve a list of students belonging to a specific branch.

## Sample API URLs
You can test the API endpoints using the deployed link:
- **Get all students:** `https://assignments-nodejs.onrender.com/students`
- **Get topper:** `https://assignments-nodejs.onrender.com/students/topper`
- **Get average CGPA:** `https://assignments-nodejs.onrender.com/students/average`
- **Get total count:** `https://assignments-nodejs.onrender.com/students/count`
- **Get student by ID (e.g., ID 1):** `https://assignments-nodejs.onrender.com/students/1`
- **Get students by branch (e.g., CSE):** `https://assignments-nodejs.onrender.com/students/branch/CSE`

## Steps to run locally
1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the `assignment-1` directory:
   ```bash
   cd assignment-1
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node index.js
   ```
5. Access the application in your browser or API client at:
   ```      
   http://localhost:3000
   ```

## Deployed link
- **Live Server URL:** [https://assignments-nodejs.onrender.com/](https://assignments-nodejs.onrender.com/)
- **Postman Documentation:** [https://documenter.getpostman.com/view/50840636/2sBXcEmg8P](https://documenter.getpostman.com/view/50840636/2sBXcEmg8P)


# Product Management System API (Assignment 2)

## Project Title
Product Management System API - Assignment 2 Node.js

## List of implemented routes
- `GET /products` : Retrieve the list of all products.
- `GET /products/:id` : Retrieve a specific product by its ID.
- `GET /products/category/:categoryName` : Retrieve a list of products belonging to a specific category.
- `POST /products` : Add a new product. Requires `name`, `category`, `price`, and `stock` in the request body.
- `PUT /products/:id` : Replace an entire product by its ID. Requires `name`, `category`, `price`, and `stock`.
- `PUT /products/:id/stock` : Update only the stock of a specific product. Requires `stock` in the request body.
- `PUT /products/:id/price` : Update only the price of a specific product. Requires `price` in the request body.

## Sample API URLs
You can test the API endpoints locally after starting the server:
- **Get all products:** `http://localhost:3000/products`
- **Get product by ID (e.g., ID 1):** `http://localhost:3000/products/1`
- **Get products by category (e.g., Electronics):** `http://localhost:3000/products/category/Electronics`
- **Add a new product:** `http://localhost:3000/products` (POST request with JSON body)
- **Replace a product:** `http://localhost:3000/products/1` (PUT request with JSON body)
- **Update product stock:** `http://localhost:3000/products/1/stock` (PUT request with JSON body `{"stock": 50}`)
- **Update product price:** `http://localhost:3000/products/1/price` (PUT request with JSON body `{"price": 199}`)

## Steps to run locally
1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the `assignment-2` directory:
   ```bash
   cd assignment-2
   ```
3. Install the necessary dependencies:
   ```bash
   npm install express
   ```
4. Start the server:
   ```bash
   node index.js
   ```
5. Access the application in your browser or API client (like Postman) at:
   ```      
   http://localhost:3000
   ```
## Deployed link
- **Live Server URL:** [https://assignments-nodejs-1.onrender.com/](https://assignments-nodejs-1.onrender.com/)
- **Postman Documentation:** [https://documenter.getpostman.com/view/50840636/2sBXcGEzye](https://documenter.getpostman.com/view/50840636/2sBXcGEzye)