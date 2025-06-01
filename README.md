# RestfulAPI

# Project

A simple Node.js REST API using Express for managing items.

## Setup Instructions

1. **Clone the repository**  
   git clone <your-repo-url>  
   cd project

2. **Install dependencies**  
   npm install

3. **Start the server**  
   node index.js  
   The server will run on http://localhost:4800.

## API Documentation

### Base URL

http://localhost:4800/users

### Endpoints

#### Get all items

- GET users
- Response: 200 OK  
  Returns an array of items.

#### Get item by ID

- GET `/users/:id`
- Response: 200 OK  
  Returns a single item object.
- Error: 404 Not Found  
  { "error": "Item not found" }

#### Add a new item

- POST users
- Body:  
  { "name": "New Item", "description": "Description" }
- Response: 201 Created  
  Returns the created item.
- Errors:  
  400 Bad Request – All fields are required  
  409 Conflict – Item with this name already exists

#### Update an item

- PUT `/users/:id`
- Body:  
  { "name": "Updated Name", "description": "Updated Description" }
- Response: 200 OK  
  Returns the updated item.
- Errors:  
  400 Bad Request – All fields are required  
  404 Not Found – Item not found  
  409 Conflict – Item with this name already exists

#### Delete an item

- DELETE `/users/:id`
- Response: 200 OK  
  Returns the deleted item.
- Error: 404 Not Found  
  { "error": "Item not found" }

---

**Author:** Igwegbe Emmanuel
