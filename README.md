*Project Run: npm run major-2*

install the necessary package

Creating a Blood Bank Web Application using the MERN stack (MongoDB, Express.js, React.js, Node.js) is a great full-stack development project

that can be both practical and impactful. Here's an overview of how the application can be structured and what features it might include:

🏗️ Project Overview

A Blood Bank Web App allows users to:

Register as donors or requesters, Admin, Hospital, Organization.

Search for available blood types.

Request or donate blood.

🧱 Tech Stack (MERN)
MongoDB – Database to store user info, blood stock, requests, etc.

Express.js – Backend framework to create RESTful APIs.

React.js – Frontend library for UI.

Node.js – Runtime environment for running the backend.

API Testing: Postman API

✨ Key Features

1. User Authentication
   
Register/Login as Donor or Hospital/Patient or organization or Admin.

JWT-based authentication

2. Dashboard
   
Donors: View donation history, availability, and requests

Hospitals: Request blood, view inventory

3. Blood Stock Management
   
Admin can add or update blood units

Auto-update stock on donation/request

6. Admin Panel
Manage users, monitor inventory, approve requests

🛠️ Backend Structure (Node + Express + MongoDB)

/api/users – User registration & login

/api/blood – Add, update, fetch blood units

/api/requests – Handle blood requests

/api/donations – Log and confirm donations

🖼️ Frontend (React)
Pages:

Home

Login / Register

Dashboard

Blood Request Form

Donation History

Admin Panel

🔐 Security

JWT for authentication

Role-based access control (Admin, Donor, Hospital, Organization)
