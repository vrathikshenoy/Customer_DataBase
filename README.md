# Customer Database connected to Google Spreadsheet using Firebase

This repository contains a customer database application built with Firebase. It allows you to store and manage customer information securely in the cloud. Additionally, it is connected to a Google Spreadsheet for seamless integration with other tools.

## Features

- **Real-time Database**: Utilizes Firebase Realtime Database to store customer data.
- **Authentication**: Firebase Authentication is used to authenticate users securely.
- **CRU Operations**: Supports Create, Read, Update, operations for managing customer records.
- **Google Spreadsheet Integration**: Automatically synchronizes customer data with a Google Spreadsheet for easy data manipulation and analysis.
- **Security Rules**: Firebase Security Rules ensure that only authorized users can access and modify data.
- **Scalability**: Firebase scales automatically to handle any number of users and data.
- **Cross-platform**: Can be accessed from web, mobile, and desktop applications.

## Setup

1. **Firebase Account**: Create a Firebase account if you don't have one already.
2. **Create Project**: Create a new Firebase project from the Firebase console.
3. **Enable Database**: Enable Realtime Database from the Firebase console.
4. **Authentication Setup**: Configure authentication methods (e.g., email/password, Google Sign-In) from the Firebase console.
5. **Security Rules**: Set up security rules to restrict access to your database.
6. **Firebase Configuration**: Obtain your Firebase configuration credentials (apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId) from Firebase console.
7. **Google Spreadsheet Connection**: Integrate your Firebase Realtime Database with a Google Spreadsheet using Firebase Cloud Functions or other methods.
8. **Setup Project**: Clone this repository and set up Firebase configuration in your project.
9. **Run Application**: Run the application to start managing customer data.

## Usage

- **Add Customer**: Add new customers to the database using the provided form.
- **View Customers**: View a list of all customers stored in the database.
- **Edit Customer**: Edit existing customer details such as Name, Address, and Phone number.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
