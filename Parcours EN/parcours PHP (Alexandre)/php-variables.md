# PHP

## Table of contents

- [Introduction](php-introduction.md)
- [Variables](php-variables.md) ←
- [Conditions](php-conditions.md)
- Drill: [Exercise on Conditions](php-exercices-conditions.md)
- [Table (array)](php-array.md)
- [Loops](php-loops.md)
- [Functions](php-functions.md)

##  Introduction, Variables and Conditions

Programming = manipulating information/data.

```php
$name_of_variable = 'Value of the variable';
$president_usa = 'Donald Trump';
$birth_date = 1973;
$is_raining = false;
$team_players = array('john','Jeanne','Julien');
```

1. Launch your local server
2. In a working directory served by PHP, create a folder variable and create a file `humans.php` containing this code:

```php
<html>
  <head><title>Hi!</title></head>
  <body>
    <h1>Hello <?php echo $_GET['name']; ?>!</h1>
  </body>
</html>
```
3. Once done, visit these urls and observe what happens:
  - [http://localhost:80/variable/humans.php?name=Alexandre](http://localhost:80/variable/humans.php?name=Alexandre)
  - [http://localhost:80/variable/humans.php?name=Pierre](http://localhost:80/variable/humans.php?name=Pierre)
  - [http://localhost:80/variable/humans.php?name=Jennifer](http://localhost:80/variable/humans.php?name=Jennifer)
  - try other variations.
4. Read the script carefully and try to understand what it does.

As you see, this file contains mostly html, with some code that starts with `<?php` and ends with `?>`. Consider the fact they are tags that allow to write php in HTML.

### examine this piece of PHP code

```php
<?php echo $_GET['name']; ?>
```

- ` $_GET ` is a variable.
- in PHP, a variable must always start with `$`
- `echo ` is a function provided by PHP, that serves to display something (what is on the right side of the function).
- the line ends with `;`

But let's start with the beginning: the variable.

## 1st logic structure: variables

![Cardboard](https://www.dropbox.com/s/pec9eeigmw5a8ra/carton.png?dl=1)

With *variables* we can retain data temporarely in memory. With these, we're able to for example save the visitor's username, run calculations and many other things.

A variable, is a small piece of data saved in memory temporarely. Most don't have a long life-span. In PHP, the variable (the data) exists so long the page is in loading state. Once the PHP page is generated (making use of the variables), all variables are deleted from memory because they are useless from here on. So it is not a file that is saved on the hard drive but a small temporary piece of information living in cache memory.

Your turn to create variables. Create them when you need to save information.

### A name and a value

A variable is always composed of two elements :
- its **name** : as an identifier, you give a name to your variable.
For example `$age_of_visitor`;
- its **value** : is the data its holding, and which can be edited.
For example : `17`.
Here, I gave you an example of a variable named `$age_of_visitor` that holds the value `17`.
We can edit when we want the value of this variable, apply operations, etc. And when we need to, we call it (using its given name), and it gently returns us the value it holds.

### different types of variables
Personally, variables make me think of a cardboard box. We can put inside what we want:
pizzas, shoes, documents...

Looking at data, it's the same: the variables allow to stock many things of different nature: numbers (for example: age, the price or quantity of a product...), text (for example: the first name of a user, the name of a pizza, the type of shoes...), etc.
There's different kinds of variables made available to you, types that you will choose according to the needs of your script, and the nature of data to be treated.

Here are the primary types to know by heart.
- **The chains of characters** (*strings*) : in other words, text. All is called as a chain of characters. In PHP, this type of data has a name :string.
We can save text short or long as you need.
A chain of characters has to be wrapped by **single- or double quotes** : 'I am a piece of text'.
- **integers** (*int*) : these are numbers like 1, 2, 3, 4, etc. This also includes relative integers : -1, -2, -3...
Example : `42`.
- **decimals** (*float*) : these are numbers with decimals (a comma), like `14,738`. Warning, the numbers have to be written with a dot instead of a comma. (as is the english notation).
Example :`63.5538`.
- **booleans** (*bool*) : this is a type that allows to save either *true* or *false*. We use these frequently.
- **nothing** (*NULL*) : however strange this may appear, sometimes we need to assign a variable as empty. Nothing at all. So we save it as with a value of NULL. It is not really a data type, but an absence of any type.
- **arrays** (*Array*) : arrays have the ability to contain different types of data, that's stored belonging to a unique key. It is a very powerful logical structure but it needs a chapter in itself ([here](php-array.md)).

Example:

```php
$classroom= array(0 => 'Cindy', 1 => 'Jean', 2 => 'Mustapha', 3 => 'Pierre', 4 => '', 5=>'Eric');
```

This array holds 6 elements. Each element has a key (the number) and a value (the part right of the `=>` sign).

### Defining a variable
Here's how to initialize a new variable:

```php
$age_of_visitor = 17;
```

### Exercises

- Initialize a variable representing your first name.
- Next, on the second line, initialize a variable representing your age.
- Next, on the next line, initialize a variable desribing whether you are hungry or not.
- Next, on the next line, initialize a variable that describes the color of your eyes.
- Next, on the next line, initialize a variable that describes your family (using an array, each entry being a member of your family).

