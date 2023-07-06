# Blog Website with Create and Delete Functionality

This is a simple blog website that allows users to create and delete blog posts. The website is connected to a JSON server to handle data storage and retrieval. This ReadMe file will guide you through the setup and usage of the website.

## Features

- Create new blog posts by providing a title and content.
- View a list of all existing blog posts.
- Delete individual blog posts.
- Data is stored and retrieved from a fake JSON server.

## Walkthrough GIF


![](https://github.com/kokofullstack/phase-2-project/blob/main/public/ezgif.com-video-to-gif.gif)



## Live Website

You can access the live version of the website hosted on Netlify: [https://blogs-2023.netlify.app/](https://blogs-2023.netlify.app/)

## JSON Server on Render

The JSON Server is hosted on Render: [https://json-server-template-61g8.onrender.com/](https://json-server-template-61g8.onrender.com/)

## JSON Server GitHub Repository

You can find the JSON Server's GitHub repository at: [https://github.com/kokofullstack/json-server-template/](https://github.com/kokofullstack/json-server-template/)

## Technologies Used

HTML, CSS, and JavaScript for the frontend. JSON Server for the backend data storage.

## Prerequisites

To run this website on your local machine, you need to have the following installed: Node.js and NPM (Node Package Manager).

## Installation

1. Clone this repository to your local machine or download the ZIP file and extract it.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the required dependencies by running the following command:

```
npm install
```

## Usage

1. Start the JSON server by running the following command in the terminal:

```
npm run json-server
```

This will start the server and load the initial data from the `db.json` file.

2. Open another terminal or command prompt and start the website by running the following command:

```
npm start
```

This will start the development server and open the website in your default browser.

3. You can now use the website to create and delete blog posts.

## API Endpoints

The JSON server provides the following API endpoints:

- `GET /blogs`: Retrieves all blog posts.
- `GET /blogs/:id`: Retrieves a specific blog post by ID.
- `POST /blogs`: Creates a new blog post.
- `DELETE /blogs/:id`: Deletes a specific blog post by ID.

## Customization

If you want to customize the website or modify the backend, you can make changes in the respective files.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project was built using HTML, CSS, JavaScript, and JSON Server. Special thanks to the creators of JSON Server for providing a simple and easy-to-use mock server for testing and development purposes.

## Contact

If you have any questions or need assistance, feel free to reach out to me.
