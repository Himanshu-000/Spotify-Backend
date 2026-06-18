# Spotify Backend Clone

A production-style Spotify-inspired backend application built using Node.js, Express.js, MongoDB, JWT Authentication, and ImageKit. This project provides secure user authentication, role-based access control, music management, and cloud-based media storage.

## Features

### Authentication & Authorization

* User Registration and Login
* JWT-based Authentication
* Protected Routes
* Secure Password Hashing
* Cookie-based Authentication
* Role-Based Access Control (RBAC)

### User Roles

#### Artist

Artists can:

* Upload music files
* Upload album cover images
* Create and manage songs
* Access artist-specific routes

#### Normal User

Users can:

* View available music
* Access public music resources
* Use authenticated user features

### Music Management

* Upload music files
* Create songs and albums
* Store music metadata in MongoDB
* Retrieve music information through REST APIs

### Cloud Media Storage

* Integrated with ImageKit.io
* Upload audio files to cloud storage
* Upload album cover images
* Convert uploaded files into publicly accessible URLs
* Store generated URLs in MongoDB

### Database Management

* MongoDB Database
* Mongoose ODM
* User Schema
* Album Schema
* Music Schema

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* Bcrypt.js
* Cookie Parser

### File Storage

* ImageKit.io
* Multer

### Version Control

* Git
* GitHub

## Project Architecture

```plaintext
src/
├── controller/
├── db/
├── middlewares/
├── models/
├── routes/
├── services/
└── app.js

server.js
package.json
```

## API Modules

### Authentication Module

* Register User
* Login User
* Verify User
* Role Validation

### Music Module

* Upload Music
* Create Album
* Fetch Music
* Manage Artist Content

## Security Features

* JWT Authentication
* Protected API Routes
* Role-Based Authorization
* Password Hashing using Bcrypt
* Environment Variable Protection

## Environment Variables

Create a .env file and add:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

IMAGEKIT_PUBLIC_KEY=YOUR_IMAGEKIT_PUBLIC_KEY
IMAGEKIT_PRIVATE_KEY=YOUR_IMAGEKIT_PRIVATE_KEY
IMAGEKIT_URL_ENDPOINT=YOUR_IMAGEKIT_URL_ENDPOINT
```

## Installation

```bash
git clone https://github.com/Himanshu-000/Spotify-Backend.git

cd Spotify-Backend

npm install

npm run dev
```

## Future Improvements

* Playlist Management
* Like Songs Feature
* Search Functionality
* Recently Played Songs
* Frontend Integration using React
* Admin Dashboard

## Learning Outcomes

Through this project, I learned:

* Backend Architecture Design
* REST API Development
* JWT Authentication
* Role-Based Authorization
* MongoDB Data Modeling
* Cloud File Storage with ImageKit
* File Upload Handling
* Git & GitHub Workflow
* Production-Oriented Backend Development
