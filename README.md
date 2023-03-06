# CS495\_API

How to run:

1. Run 'npm install' in the terminal
2. Run 'node main.js' to start the API

Testing:

1. Access localhost:8080 through Postman API tool
2. Run GET request at /tshirt endpoint
1. Should get JSON information for user 'John'
2. 200 response
3. Run POST at /tshirt/{id} endpoint
1. POST: localhost:8080/tshirt/6 (no body)
   1. Should get 418 response saying "We need a logo"
2. POST: localhost:8080/tshirt/6 (body)
   1. Send body of

{

"logo": "logo"

}

Should get 200 response:

{

"tshirt": "T-shirt with your logo and ID of 6"

}
