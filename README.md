# Contact Form App

This is a Contact Form app built with React Native. It allows users to fill out a contact form with their name, mobile number, email, and message, and submit the form to send an email.

## Features

- User-friendly contact form with validation
- Integration with SendGrid API to send emails
- Clean and attractive UI design

## Installation

Dependencies
The project relies on the following dependencies:

- @react-navigation/native: Routing and navigation library for React Native.
- @react-navigation/stack: Stack navigator for managing screens.
- react-native-paper: UI component library following Material Design guidelines.
- react-native-masked-text: Masked text input component for handling specific input formats.
- expo-mail-composer: Allows composing and sending emails using the device's default email client.
- axios: Promise-based HTTP client for making API requests.
  
## Folder Structure 

- src/components: Contains reusable components used in the contact form.
- src/screens: Contains the main screen component for the contact form.
- src/utils: Contains utility functions for sending emails using the SendGrid API.
- App.js: Entry point of the app.