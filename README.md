# Book Management RESTful API

## Description

This is a RESTful API for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books. The API is built using Node.js, Express.js, and MongoDB with Mongoose.

## API Endpoints and Usage

### Create a New Book

- **Endpoint:** `POST /api/books`
- **Usage:** Create a new book by sending a POST request with a JSON body containing the book's title, author, and summary.

Example Request:
```json
POST /api/books
{
  "title": "Sample Book",
  "author": "Sample Author",
  "summary": "This is a sample book summary."
}
```

### Get a List of All Books

- **Endpoint:** `GET /api/books`
- **Usage:** Retrieve a list of all books.

### Get Details of a Specific Book

- **Endpoint:** `GET /api/books/:id`
- **Usage:** Retrieve details of a specific book by providing its unique ID as a URL parameter.

Example Request:
```
GET /api/books/12345 (where 12345 is the book's ID)
```

### Update a Book's Details

- **Endpoint:** `PUT /api/books/:id`
- **Usage:** Update a book's details by sending a PUT request with a JSON body containing the updated information.

Example Request:
```json
PUT /api/books/12345 (where 12345 is the book's ID)
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "summary": "This is the updated book summary."
}

### Delete a Book

- **Endpoint:** `DELETE /api/books/:id`
- **Usage:** Delete a book by providing its unique ID as a URL parameter.

Example Request:
```
DELETE /api/books/12345 (where 12345 is the book's ID)
```

## Setup and Local Development

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/yourusername/book-api.git
   cd book-api
   ```

2. Install the project dependencies:

   ```
   npm install
   ```

3. Configure MongoDB:
   - Create a MongoDB database.
   - Update the MongoDB connection string in `index.js`.

4. Start the application:

   ```
   node index.js
   ```

5. The API will be accessible at `http://localhost:3000/api/books`.

## Decisions and Assumptions

- The API assumes that book data includes a title(required), author, and summary.
- MongoDB is used as the database, and Mongoose is the ODM.
- The API uses proper error handling and validation for scenarios like attempting to access or modify non-existent books.
- For security, you should consider implementing authentication and authorization mechanisms in a production environment.
