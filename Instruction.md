# Freelancer Management System

## Running the Server

##### Start the server on PORT 9090. Ensure strict adherence to this port number.

## Project Overview

##### You are tasked with building an API for a Freelancer Management System. The project should include the following features.
- Register And Login JWT use and cooike set.
- CURD Operation performance.
- Import/Export CSV File.
- payment Use For Razorpay.

## Follow these instructions strictly.
### Implement in MVC Structure.
#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'db.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

#### Database Schema Design.

2. Create a 'models' folder.
    - create a file named 'user.Schema.js' with the following schema.

``` 
username,
email,
password,
role:{
    type:String,
    enum:['User','Client'],
    require:true
}

```
3. create a file named 'freelancer.Schema.js' with the following schema.
```
title,
description,
userId:{
    type:mongoose.Schema.Types.ObjectId, ref:'User',require:true
},
dueDate,
  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active",
  },
createdAt: { 
    type: Date, 
    default: Date.now 
},
```

4. create a file named 'Pyment.Schema.Schema.js' with the following schema.

```
userid:{
    type:mongoose.Schema.Types.ObjectId, ref:'User', required:true // Your UserID in User Schema
},
projectid:{
    type:mongoose.Schema.Types.ObjectId, ref:'Freelancer' // Your ProjectID 
},
amount:{
    type:Number,
    required:true
},
status:{
    type:String,
    enum:['pending','completed'],
    default:'pending'
}

```

## Sign Up and Login
### Sign Up - POST route
- Endpoint: Create a POST route at ```/Auth/register```.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email
    - role

### Login - POST route
- Create a POST route named ```/Auth/login```.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

## Freelancer Management System API EndPoint.

### GET route :- All Freelancer Project Show.
- Create a GET route at ```/Freelancer/project/show```.

### POST route :- Create Freelancer Project.
- Create a Post route at ```/Freelancer/project/create```.
- send a response containing all available event.
- Import File Upload And Database in Save.

### POST route :- Export Freelancer Project.
- Create a Post route at ```/Freelancer/project/export```.
- send a response containing all available event.

### PATCH route :-Freelancer Project Update.
- Create a Post route at ```/Freelancer/update/:id```.
- send a response containing all available event.
- find id and Update A Freelancer Project.

### DELETE route :- Freelancer Project Delete.
- Create A Delete route at ```/Freelancer/project/delete```.

### POST route :- Freelancer Project Delete.
- Create A Post route at ```/Freelancer/payment```.
- User Only Payment Use API.
- Use A Razorpay.

## Routes
### User / Auth.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/Auth/register```   | User Register .   |
| ```POST```    | ```/Auth/login```   | User Login..   |    

### Freelancer Management System API EndPoint.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/Freelancer/project/show```   | Freelancer Project Fetch all items.   |
| ```POST```    | ```/Freelancer/project/create```   | Freelancer Project Create .   |
| ```POST```    | ```/Freelancer/payment```   | Payment API..   |
| ```POST```    | ```/Freelancer/project/export```   | Freelancer Project Export..   |
| ```PATCH```    | ```/Freelancer/update/:id```   | Freelancer Project Update..   |
| ```DELETE```    | ```/Freelancer/project/delete```   | Freelancer Project Delete Multiple..   |

## Setup and Installation

### Steps:

1. Clone the repository.
```
git clone <repository-url> 
```

2. Install dependencies.
```
npm install
```

3. Create a .env file and add your MongoDB connection string.
``` bash 
PORT=9090
MONGODB_URL=mongodb+srv://freelancer:freelancer@cluster0.dgwjmgh.mongodb.net/freelancer?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=MY_JWT_SECRET_QUIZ_APPLICATION

```

4. Start the server

``` 
npm start
```
