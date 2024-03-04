# Money Mind Core API Documentation

Welcome to the documentation for the Money Mind Core API. This API serves as the backbone for user management, transactions, categories, and related functionalities.

## Base Endpoint

The base endpoint for the Money Mind Core API is `/money-mind/core`.

### 1. Register User

- **Method:** POST
- **URL:** `/users`
- **Description:** This API is used to register a new user.
- **Headers:** None
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john_doe@gmail.com"
  }
  ```
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully register user"
    }
    ```

### 2. Verify User

- **Method:** POST
- **URL:** `/users/verify`
- **Description:**
  - After the user registers, an email with a verification link is sent.
  - Clicking on the link redirects to the app, using the token in the email as the API headers.
  - If verified, updates the `is_verified` field to true in the database.
- **Headers:**
  - `Authorization: JWT Token for Email Verification`
    - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huX2RvZUBnbWFpbC5jb20ifQ.95GFjwz3d45R4fFPyumc4rffclvoLZCRBbVe_Er7XIo`
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully verified user"
    }
    ```

### 3. Login by Google

- **Method:** POST
- **URL:** `/users/login-google`
- **Description:**
  - Users click the "Sign-In with Google" button.
  - Checks the database and provides an authorization token if granted.
- **Headers:** None
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "token": "JWT_Authentication_Token"
    }
    ```

### 4. Login by Facebook

- **Method:** POST
- **URL:** `/users/login-facebook`
- **Description:**
  - Users click the "Sign-In with Facebook" button.
  - Checks the database and provides an authorization token if granted.
- **Headers:** None
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "token": "JWT_Authentication_Token"
    }
    ```

### 5. Logout

- **Method:** POST
- **URL:** `/logout`
- **Description:**
  - Logout based on the OAuth type (Google/Facebook).
  - Request Body: None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "oauth_type": "google"
    }
    ```

### 6. Get Profile

- **Method:** GET
- **URL:** `/users/`
- **Description:**
  - Retrieve user profile information.
- **Headers:**
  - `JWT Token`
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully get user profile",
      "data": {
        "name": "John Doe",
        "email": "john_doe@gmail.com",
        "last_active_at": "2024-02-07 10:00:00"
      }
    }
    ```

### 7. Update Profile

- **Method:** PUT
- **URL:** `/users/`
- **Description:**
  - Update user profile information.
- **Headers:**
  - `JWT Token`
- **Body:**
  ```json
  {
    "name": "John Doe"
  }
  ```
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully update user profile",
      "data": {
        "name": "John Doe"
      }
    }
    ```

### 8. Update Last Active

- **Method:** PATCH
- **URL:** `/users/last-active`
- **Description:**
  - Hit by the client when the user opens the app.
  - Updates the last active date to `NOW()` in the database.
- **Headers:**
  - `JWT Token`
- **Body:** None
- **Response:**
  ```json
  {
    "message": "Successfully update last active date"
  }
  ```

### 9. Log Out

- **Method:** POST
- **URL:** `/users/logout`
- **Description:**
  - Users click the logout button.
  - Checks the database for the OAuth type and provides client info to handle the logout process.
- **Headers:**
  - `JWT Token`
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "oauth_type": "google"
    }
    ```

### 10. Create Category

- **Method:** POST
- **URL:** `/categories`
- **Description:**
  - Users fill out the category form and click the add button.
- **Headers:**
  - `JWT Token`
- **Body:**
  ```json
  {
    "name": "Electricity",
    "type": 1 // 1: expense, 2: income
  }
  ```
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully create a new category"
    }
    ```

### 11. Get Category

- **Method:** GET
- **URL:** `/categories`
- **Description:**
  - Retrieve the list of categories based on the type (income or expense).
- **Headers:**
  - `JWT Token`
- **Query Params:**
  - `type = income` or `type = expense`
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully get the list of categories",
      "data": [
        {
          "id": 1,
          "name": "Shopping"
        },
        // ...
      ]
    }
    ```

### 12. Delete Category

- **Method:** DELETE
- **URL:** `/categories/:id`
- **Description:**
  - Users delete a category.
- **Headers:**
  - `JWT Token`
- **Body:** None
- **Response:**
  - **200 - Success:**
    ```json
    {
      "message": "Successfully delete a category"
    }
    ```
Feel free to customize and expand this documentation based on your specific requirements.