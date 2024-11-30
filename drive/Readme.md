# MEN Stack File Manager Web App

## Overview
This is a basic web application built using the **MEN Stack** (MongoDB, Express, Node.js). It provides users with a simple platform to manage their files. 

The app supports user authentication and file storage, with the following core features:

## Features
1. **User Authentication**
   - Login functionality.
   - Signup functionality.
   - Authentication implemented using **JWT** and cookies.

2. **File Management**
   - File upload functionality.
   - View all files uploaded by the user.
   - Download uploaded files.

3. **Home Page**
   - A centralized page for navigation and user interaction.

## Technology Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT and Cookies
- **File Storage**: Firebase Storage

## How It Works
1. Users can create an account and log in.
2. Authenticated users can:
   - Upload files to Firebase Storage.
   - View a list of their uploaded files.
   - Download files directly from the platform.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
