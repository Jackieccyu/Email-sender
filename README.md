# BringX Exercise 2 
## This is a simple Node.js application demonstrating email sending functionality. The app has been deployed on Google App Engine.

Installation
To run this project locally, follow these steps:

Clone the Repository:

```bash
git clone [Your Repository Link]

cd [Repository Name]
```


Install Dependencies:

Run the following command in the project's root directory:

```bash
npm install
```

Set Environment Variables:

Create a .env file and fill in the necessary environment variables:

makefile
```bash
EMAIL_USER=your_email
EMAIL_PASS=your_password_or_app_specific_password
```

Run the Application:

# How To Test on local
```bash
node app.js
```
The application will run on localhost:3000.

# Testing the Deployed Endpoint
To test the endpoint deployed on Google App Engine, use the following steps:

# Using Postman:

Set the request type to POST.

Enter the URL: https://bringx-coding-assignment.uc.r.appspot.com/emails.

Set the body to JSON format and input the following data:
```bash
json

{
  "to": "example@example.com",
  "subject": "hi",
  "body": "Hello World!"
}
```

# Using PowerShell:

Execute the following command:

powershell
```bash
$body = @{
    to = "example@example.com"
    subject = "hi"
    body = "Hello World!"
} | ConvertTo-Json

Invoke-WebRequest -Uri "https://bringx-coding-assignment.uc.r.appspot.com/emails" -Method POST -Body $body -ContentType "application/json"
```
Check the returned response to confirm the status of the email sent.

More Information
For more information on deploying Node.js apps on Google Cloud Platform, refer to the GCP Documentation.
If you have questions or need assistance, please submit an Issue or contact the project maintainer.
