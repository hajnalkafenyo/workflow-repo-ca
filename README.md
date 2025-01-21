# Workflow repo for the CA

This project is a workflow repository, that was made for the testing a page with some tools.

## Installation

First, you need to install the dependencies:

- npm install

After that, you can start the project:

- npm start

## Testing

You need to provide a valid username and password in order to run the end-to-end tests.
Copy the .env.example file to a .env file then fill the required values.

- TEST_USER_EMAIL: the email address of the test user
- TEST_USER_PASSWORD: the password of the test user

Do not commit your username and password to the repository!

You can start playwright UI with the following command:

- npm run e2e-ui
