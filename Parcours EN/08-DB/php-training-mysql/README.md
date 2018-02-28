> This repository needs to be directly cloned into your apache repository(/var/www/html or htdocs or etc.)

# PHP & MySQL

PHP is nice but with a database it's even better. We are going to see a example where we will use PHP and MYSQL.
These [slides](https://docs.google.com/presentation/d/1hHX4lXuyRvciIvs613N29j-hWV4wth_ZhM6n9xQI7D4/edit?usp=sharing)  and this [ressource](https://www.codecademy.com/learn/learn-sql) explains how databases work. After having done the Manipulation and Queries chapters you can start our example. 

# Objective

We are going to create a web that will list hiking trails on the Reunion island.


# Creation of the database
I have created a database for this example. You can find the database to import in *database/reunion_island.sql*. Like you have seen before, it's easier to this by using Phpmyadmin.

This database contains, at this moment, only the table *hiking*

# Remplir la base de données

It's easier to start, having already some data.

That's why you are going fill the table *hiking* using data you will fetch from the website [randopitons.re](https://www.randopitons.re)


Insert 5 hiking trails. Each hiking trail will have to inform following columns:
* name
* difficulty (very easy, easy, etc.)
* distance
* duration
* height_difference

# Show the list of hinking trails

Within the file *read.php*, retrieve the hiking trails directly from the database and display them in the table.

You need to use PHP of course, but also PDO.

> Reminder : we can't open a php file in the navigator by using a drag and drop! This doesn't work! 
You absolutely have to go through you local apache server : http://localhost/ or http://localhost:8000/ etc.

TIPS : using the method ```query()``` of PDO is a good start *(in this case)*

# Add a hiking trail

You now need to add a trail, not by using phpmyadmin, but rather by using a file meant to do this job.


There is a file *create.php* already containing a form. You need to retrieve the information sent by this form and save them in the database.

TIPS : You can check the methods ```exec()``` or ```prepare()``` and ```execute``` from PDO.

## Improvements

When you succeed to add a trail, it's good to notify this by displaying a message.

If you haven't done it already, display the message "The trail has been added successfully." when the trail is added.

You are free to use whatever way you want to display the message.


# Modify a trail

Imagine we wrong when adding the informations on a certain trail, we need to able to modify it afterwards.

The file *update.php* has been created for this purpose.

First, in the table from the file *read.php*, add a link for the name of each hiking trail. This link will return to the file *update.php*.

Within this file we will be able to make modifications for a certain trail. The fields from the form existing in this file need to be prefilled with the information of the chosen hiking trail.


TIPS : To distinguish the hiking trails, we need to rely on the id and maybe find a way to pass variables between webpages.

# Remove a hinking trail

We will now see the last action, the removal.

Add a button *delete* in the table for each row of hiking trail. By clicking on the button it should return the *id* of the trail to the file *delete.php*.

Each time you delete a hiking trail, the user should be redirected to to the page *read.php* automatically(without the user having to do anything).


TIPS : For the redirection to the page *read.php* you should probably take a look at the function [header()](http://php.net/manual/en/function.header.php)

# GO FURTHER

Doing this exercice we have done CRUD (Create Read Update Delete). These are basic manipulations you can do on a database.


## Add a new column

The trails are sometimes closed due to different reasons (rain, landslides, etc.). Add the column *available* to the table *hiking*

Since we have a new column, we need to add it to our different pages: 


* into the table of *read.php*
* into the forms of *create.php* and *update.php*

## Control the inputs of the forms

There will always be people who will try to hack your application including by hacking through the form.

Protect yourself by checking if each information sent by the form is valid before save it in the database.

Check if the fields *distance*, *height_difference* and *duration* are numbers only.

If you used the methods ```query()``` or ```exec()``` with variables, you will need to replace them with ```prepare()``` and ```execute()```. This methods are more secure when working with variables sent by the website visitor.


*There are other precautions to take, but that will be for another time ;)*

## Refactoring PHP code

If you added, in each file, the connection to the database, you should know that there is a way to refactor all of this by using ```include()```. Know that you know this, you only need to apply it :)

That's a way to refactor your code, but there are others...
