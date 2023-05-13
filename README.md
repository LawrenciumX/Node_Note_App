# Note-taking API
This project is a simple note-taking API built using Node.js and Express.js.

# Installation
Before running the application, make sure that Node.js is installed on your machine.

# Clone the repository using the following command:

git clone https://github.com/LawrenciumX/Node_Note_App


Navigate to the project directory:


cd <project_folder_name>

Install the dependencies:


npm install

Usage

Run the server:
node app.js or npm start

The server will start running on http://localhost:3000.

# API Endpoints
The application provides the following endpoints:

### GET /: This endpoint returns a string message.

### GET /notes: This endpoint returns all the notes. If an id is provided as a query parameter (/notes?id=<note_id>), it will return a specific note.

Sample URL: GET/notes

Sample URL: GET/notes?id=5

### POST /notes: This endpoint is used to create a new note. The request body should contain an array of note objects, each having 'text' and 'body' properties.

Sample Body:
[

    {
        "text": "Xbox",
        "body": "A console from Microsoft"
    },
    {
        "text": "Xbox",
        "body": "A console from Sony"
    }
]

### PUT /notes/:id: This endpoint is used to update an existing note. The request body should contain the updated 'text'.

Sample URL:PUT /notes/0fe97e70-8168-42a5-aae3-46f59ef25fc9

Sample Body:
[

    {
        "text": "PS5",
        "body": "A console from Sony"
    }
]

### DELETE /notes/:id: This endpoint is used to delete a specific note.

Sample URL:DELETE/notes/0fe97e70-8168-42a5-aae3-46f59ef25fc9

# Data Storage
The data for this application is stored in a local JSON file notes.json.

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.





