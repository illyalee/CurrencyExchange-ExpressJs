# Simple Express & MongoDB API

This project is a RESTful API built with **Express** and **MongoDB**. It includes CRUD operations for managing posts, where each post can have an associated image file.

## Features

- Create, read, update, and delete (CRUD) operations for posts
- File upload support for images
- Structured API endpoints
- MongoDB integration with Mongoose

## Technologies

- **Node.js**
- **Express**
- **MongoDB** and **Mongoose** (as an ODM)
- **express-fileupload** for handling file uploads

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file (optional) for storing your MongoDB URI:

   ```
   DB_URL="your-mongodb-uri"
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

## Endpoints

| Method | Endpoint       | Description               |
|--------|-----------------|---------------------------|
| POST   | `/api/posts`    | Create a new post         |
| GET    | `/api/posts`    | Get all posts             |
| GET    | `/api/posts/:id` | Get a specific post by ID |
| PUT    | `/api/posts`    | Update a post             |
| DELETE | `/api/posts/:id` | Delete a post by ID       |

### Example Requests

- **Create a Post**:
  
  `POST /api/posts`

  Send a JSON body with post data and an image file in `req.files.picture`.

- **Get All Posts**:
  
  `GET /api/posts`

- **Get a Single Post by ID**:
  
  `GET /api/posts/:id`

- **Update a Post**:
  
  `PUT /api/posts`

  Send the updated post data as JSON in the request body.

- **Delete a Post by ID**:
  
  `DELETE /api/posts/:id`

## License

This project is licensed under the MIT License. 

--- 

This README provides basic information on how to set up and use your project. You may expand it with more details as needed, such as error handling or more specific usage examples.