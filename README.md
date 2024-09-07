# Livauth

Livauth is a robust authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It provides essential authentication functionalities including user registration, login, forgot password, and reset password. This project is designed to be used as an authentication API for future projects.

## Features

- **User Registration**: Allows new users to create an account by providing their name, email, and password.
- **Login**: Authenticates users with their email and password.
- **Forgot Password**: Sends a password reset link to the user's registered email.
- **Reset Password**: Allows users to reset their password using the link sent to their email.

## Technologies Used

- **MongoDB**: NoSQL database for storing user information.
- **Express**: Node.js web application framework for building the server-side API.
- **React**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime for running the server-side code.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/jaswanthkumarpolisetty/livauth.git
    cd livauth
    ```

2. **Install dependencies**:

    Navigate to the `server` and `client` directories and install dependencies.

    **Server**:
    ```bash
    cd Server
    npm install
    ```

    **Client**:
    ```bash
    cd ../Client
    npm install
    ```

3. **Environment Variables**:

    Create a `.env` file in the `Server` directory and add the following:

    ```plaintext
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    SMTP_HOST=your_smtp_host
    SMTP_PORT=your_smtp_port
    SMTP_USER=your_smtp_user
    SMTP_PASS=your_smtp_pass
    ```

4. **Run the Server**:

    Start the server to run the backend API.

    ```bash
    cd Server
    npm start
    ```

    The server will be running on `http://localhost:9000`.

5. **Run the Client**:

    Start the React application.

    ```bash
    cd ../Client
    npm start
    ```

    The client will be running on `http://localhost:3000`.

### API Endpoints

- **POST /api/register**: Register a new user
- **POST /api/login**: Login a user
- **POST /api/forgot-password**: Send a password reset link
- **POST /api/reset-password**: Reset the user's password


### Future Enhancements

- **Account Verification**: Add email verification during registration.
- **OAuth Integration**: Support for logging in with third-party providers like Google, Facebook, etc.
- **Two-Factor Authentication**: Add an extra layer of security for user accounts.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



