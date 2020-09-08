# Emed Application Endpoints

**NB:** Endpoints should be added here for easy collaboration and for reference for the frontend team. If you write a feature that has an endpoint, please add it here
with all necessary information. Ideally this will be on Postman or some other service but for easy collaboration in this case, please lets add it here.

## Documentation Guide

Please add your endpoints in the following manner. All endpoints should accespt JSON.

```
ENDPOINT
Method
Parameters/Expected data format
Expected response
Any other relevant information
```

### /user/register

Method: POST

Expected Post Data

```
{
    "firstname": "John",
    "lastname": "Doe",
    "phone": "080********",
    "email": "johndoe@mail.com",
    "password": "johnnydoe13"
}
```

Expected Response

```
{
    "status": "success",
    "message": "You have been registered",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6IkVsIiwibGFzdG5hbWUiOiJVbnlpIiwicGhvbmUiOiIwODAzOTEwMTg2MSIsImVtYWlsIjoiZWx2aXMub25vYm9AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkNEltL3QvaWdXc0JEOVRWNHZodkF5dWRIM3JFM1NQcmpmalI0ekdIbHJzTm02WHdLVFRQRGUiLCJrZXkiOiJJTHZmWjZudnNNIiwiaWQiOjl9LCJpYXQiOjE1OTk1MTQxMDgsImV4cCI6MTU5OTUxNzcwOH0.SCPHXXeDYNWId5iReW2bHLD-kvHG7gnk2iv7IvvzhZs"
}
```

### /user/verify/email/:key

Method: PUT

Should be passed a key parameter which will be used to verify the user's email.
