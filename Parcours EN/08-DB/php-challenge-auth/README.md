# PHP Challenge

We learned the CRUD principles with the [hiking](../php-training-mysql) activity.

Certain CRUD actions shouldn't be accessible by anyone: such as creating, updating or deleting.

With this exercise, we will add some protection to the pages *create.php, update.php, delete.php* of the [hiking](../php-training-mysql) activity. We will make these functionalities only available to users registered in the database (trusted users).

# How does it work

First of all, you should know that to be able to do this, you will need to know how to use PHP sessions. This [short tutorial](http://www.lephpfacile.com/cours/18-les-sessions) explains how sessions work and also describes the principle of login and logout pages.

# Inserting users

To identify them, there have to be users in the database.

With phpmyadmin, add users to the database.

# Page Protection

At the beginning of each *create.php*, *update.php*, *delete.php* page, verify if the user is logged in.

Doing this is pretty simple. By logging in you had to save the user information to the session variable. This means it's now enough to check if the session variable exists to know if the user is valid. !

TIPS : Create a function you can reuse at the beginning of each page.

> Note that this is a very weak protection, but it's so you understand the principle.

# GO DEEPER

If you take a look at the database, you'll see that the passwords are stored as "clear" values, you can read them. This is not the most secure solution.
We will have to encrypt the passwords ! Know that there are functions which will do this for you. We will use the [sha1()](http://php.net/manual/fr/function.sha1.php) function.

The password will have to be encrypted in the database. In phpmyadmin, when you add/edit a line, you can see the *FUNCTION* column. In this column you choose *SHA1*. After executing this, you can see that the password is a succession of numbers and letters.

You're going to tell me there's a problem. Because when the user logs in, we compare the password with what's in the *password* field of our database and it's clearly not the same anymore.

You have a point. This is why, when logging in, the function  ```sha1()``` is used with the password entered by the user as a parameter. If you pass the same parameter to this function, it returns the same result.

To summarize, in the file that verifies users and passwords, it is enough to use the function ```sha1()``` to compare the passwords.

For example :

```php
//request to find the user in database
$req = $bdd->prepare('SELECT nom FROM user WHERE username = ? AND password <= ?');
//$username and $password are variable you got from the login form
$req->execute(array($username, sha1($password)));
```
