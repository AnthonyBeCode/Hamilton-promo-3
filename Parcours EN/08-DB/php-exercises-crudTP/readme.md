# PDO - Practical Work
For each Practical Work, you will have to follow the following rules :
- Follow the MVC model
- Name variables, functions, bases, tables and fields in english  
- Use proper and clean CSS
- Make sure your HTML is valid and working
- Use Netbeans and Xdebug
- Each Practical Work should have its own VHOST
- Using classes is a plus
- Use useful comments




## Practical Work #1
Create a database with a table allowing you to enter a `user`. A user is defined as follows :
- Last Name - 50 characters max
- First Name - 50 characters max
- Date of birth - Date
- Address - Text
- Postal Code - 5 characters max
- Phone number - 10 characters max
- Service - Integer

Create a table called `Service` :
- Name of service - 50 characters max
- Description - 100 characters max

Fill in the `Service` table with the following info :

Name of service   |   Description
------           |    ---
Maintenance      |   Hardware specialists
Web Developer    |   For them nothing has sense unless it's code
Web Designer     |   Only CSS matters
SEO Expert      |   Look at Google SERPs day and night

Create an index page listing all the users and displaying the following data:
- Their last name and first name
- Their age
- Their full address
- Their phone number
- Their service

On this page you should be able to filter through all the services via a dropdown list and only display the ones you've selected.
You should also be able to delete a user via a button. 

Create another page that allows you to add a new user. You should make sure the data entered by the user are correct.
**Watch out for hackers !!**


## Practical Work #2
Create a database containing 3 tables. 
Table `client` :
- Last name - 50 characters max
- First name - 50 characters max
- Date of birth - Date
- Address - Text
- Postal Code - 5 characters max
- Phone number - 10 characters max
- Marital status - Integer

Table `maritalstatus` :
- Status - 50 characters max

Fill in the `maritalstatus` table with the following info :

Status   
------           
Single      
Cohabitation    
Divorced     
Married
Widow

Table `credit` :
- Organisation - 50 characters max
- Amount - decimal

Create 4 pages :
- Add client : allows you to add a client
- Add credit : allows you to add a credit
- Client list : allows you to list all the clients
- Client details : displays clients info (personal info, credits)

**A client can have many credits.**