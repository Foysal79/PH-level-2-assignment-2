# Overview

Assignment-2 is an e-commerce application built with Express and TypeScript, using MongoDB and Mongoose. It supports full product and order management, including creation, retrieval, updates, and deletions. Inventory is automatically updated upon order creation. Data integrity is ensured with Joi or Zod validation, and robust error handling provides clear messages. The project follows clean coding practices, focusing on modularity and readability. Access the Assignment-2 repository and live deployment via GitHub and a live server link.

# Production API endpoint for testing

- https://assignment-2-phi-three.vercel.app/
- https://assignment-2-phi-three.vercel.app/api/products
- https://assignment-2-phi-three.vercel.app/api/orders

# Features

- CRUD operations for products and orders
- Search products by name
- Filter orders by user email

# Run The Project Locally

Before you begin, ensure you have met the following requirements and follow the steps:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (you can use a local instance or MongoDB Atlas for the cloud-hosted database)

- **Clone the Repository**

  -

  ```bash
  git clone https://github.com/mdsejan/deshishop-server.git
  cd deshishop
  ```

- ## **Install Dependencies**

  ```bash
  npm install
  ```

- ## **Setup Environment Variables**

  <p>Create a `.env` file in the root directory of the project and add the following environment variables. You can modify the values according to your setup.</p>

  ```env
  PORT=5000
  DATABASE_URL=mongodb+srv://<UserName>:<Password>@cluster*** (Mongodb Database Driver URL)
  ```

- ## **Run the Application**

  <p>To run the application in development mode, use the following command:</p>

  ```bash
  npm run start:dev
  ```

  This command uses `ts-node-dev` to run the TypeScript code and watch for any changes, automatically restarting the server when changes are detected.

- ## **Linting**

  To lint the code, you can use the following command:

  ```bash
  npm run lint
  ```

  To automatically fix linting errors:

  ```bash
  npm run lint:fix
  ```

- ## **Acces The App from browser**

  - The APP will be running on `http://localhost:5000`.

- **Usage**

You can use tools like [Postman](https://www.postman.com/) to interact with the API endpoints.

# API Endpoints

## Product Management

### **1. Create a New Product**

- **Endpoint**: **`/api/products`**
- **Method:** `POST`
- **Sample Request Body**:
  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Product created successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  }
  ```

### **2. Retrieve a List of All Products**

- **Endpoint**: **`/api/products`**
- **Method:** `GET`
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
      {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
          {
            "type": "Color",
            "value": "Midnight Blue"
          },
          {
            "type": "Storage Capacity",
            "value": "256GB"
          }
        ],
        "inventory": {
          "quantity": 50,
          "inStock": true
        }
      },
      {
        "name": "Samsung Galaxy S21",
        "description": "High-performance Android smartphone with advanced camera capabilities.",
        "price": 799,
        "category": "Electronics",
        "tags": ["smartphone", "Samsung", "Android"],
        "variants": [
          {
            "type": "Color",
            "value": "Phantom Black"
          },
          {
            "type": "Storage Capacity",
            "value": "128GB"
          }
        ],
        "inventory": {
          "quantity": 30,
          "inStock": true
        }
      }
      // Additional products can be added here...
    ]
  }
  ```

### **3. Retrieve a Specific Product by ID**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `GET`**
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  }
  ```

### **4. Update Product Information**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `PUT`**
- **Sample Request Body**:
  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Product updated successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 49,
        "inStock": true
      }
    }
  }
  ```

### **5. Delete a Product**

- **Endpoint**: **`/api/products/:productId`**
- **Method: `DELETE`**
- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
  }

  // The product should be deleted from the database.
  ```

### **6. Search a product**

- **Endpoint**: `/api/products?searchTerm=iphone`
- **Method: GET**
- **Sample Response**:

```jsx
{
    "success": true,
    "message": "Products matching search term 'iphone' fetched successfully!",
    "data": [
        {
            "name": "iPhone 13 Pro",
            "description": "The latest flagship iPhone model with advanced camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "iPhone SE",
            "description": "Compact and affordable iPhone model with powerful performance.",
            "price": 399,
            "category": "Smartphones",
            "tags": ["iPhone", "Apple", "Mobile"],
            "variants": [
                {
                    "type": "Color",
                    "value": "White"
                },
                {
                    "type": "Storage",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 20,
                "inStock": true
            }
        }
    ]
}
```

## Order Management

### **Order Management API Endpoints**

### **1.Create a New Order**

- **Endpoint**: **`/api/orders`**
- **Method: `POST`**
- **Request Body**:
  ```json
  {
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Order created successfully!",
    "data": {
      "email": "level2@programming-hero.com",
      "productId": "5fd67e890b60c903cd8544a3",
      "price": 999,
      "quantity": 1
    }
  }
  ```

### **2.Retrieve All Orders**

- **Endpoint**: **`/api/orders`**
- **Method: `GET`**
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Orders fetched successfully!",
    "data": [
      {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
      }
      // more orders...
    ]
  }
  ```

### **3. Retrieve Orders by User Email**

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method:** `GET`
- **Sample Response**:
  ```json
  {
    "success": true,
    "message": "Orders fetched successfully for user email!",
    "data": [
      {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
      }
      // more orders for the user...
    ]
  }
  ```




