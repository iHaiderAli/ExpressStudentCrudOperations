## This project have used the Express.js framework and API endpoints are using the appropriate JSON payloads as input and output. This will covers the compelte CRUD operaions for a university student.

We have following endpoints of this CRUD operations.

### 1. To fetch all the registered students from the db we use this endpoint.
> http://lahorifm.com:8000/una/getStudents

### 2. To fetch a single registered student we use this endpoint.
> http://lahorifm.com:8000/una/getStudentById/studentID

### 3. To create a new student we use this JSON payload.
> http://lahorifm.com:8000/una/addStudent
``` 
{
        "first_name": "ABC",
        "last_name": "XYZ",
        "age": 12,
        "dob": "12-12-1992",
        "gender": "Male"
}
```

### 4. To update a specific user we use this api endpoint with the provided JSON payload.
> http://lahorifm.com:8000/una/updateStudent/studentID
```
{
        "first_name": "ABC",
        "last_name": "XYZ",
        "age": 25,
        "dob": "12-12-1992",
        "gender": "Male"
}
```
### 5. To delete a user we can use this endpoint with user specifix id
> http://lahorifm.com:8000/una/deleteStudent/studentID

### Authors
* **Haider Ali**

### Contact Me
 if you have any query or want to discuss something realted to projects or anything else please feel free to contact me.
 ```
Gmail: ihaiderali.arif@gmail.com
Skype Id: haider7577 
Linked in: https://www.linkedin.com/in/haider-ali-203ab7126/
