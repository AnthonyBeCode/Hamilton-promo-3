# PHP/ Functions

![Robot presse-oranges](http://ecx.images-amazon.com/images/I/51g-YUKLUoL.jpg)


## Table of contents

- [Introduction](php-introduction.md)
- [Variables](php-variables.md)
- [Conditions](php-conditions.md)
- Drill: [Exercise on Conditions](php-exercices-conditions.md)
- [Table (array)](php-array.md)
- [Loops](php-loops.md)
- [Functions](php-functions.md) ←

## Introduction

In programming, we often say DRY:
> " Don't Repeat Yourself ".

Consider this code:

```php

$name = "Maurice";
echo "<p>Hello $name!</p>";
echo '<hr>';
$name = "Alice";
echo "<p>Hello $name!</p>";
echo '<hr>';
$name = "Jésus";
echo "<p>Hello $name!</p>";
echo '<hr>';
$name = "Judas";
echo "<p>Hello $name!</p>";
echo '<hr>';
// OUTPUT
Hello Maurice!
_______________________________
Hello Alice!
_______________________________
Hello Jésus!
_______________________________
Hello Judas!
```

This works, but is it DRY? No: we repeat the same code 4 times. The day in which we need to modify this program for whatever reason we'd have to modify it 4 times, hence increases the risk of introducing bugs.

Compare this script realising exactly the same, but which's code uses a function.

```php

// Declaring the function
function say_hello($name){
	echo "<p>Hello $name!</p>";
	echo '<hr>';
}

// Calling the function
say_hello("Maurice")
say_hello("Alice");
say_hello("Jésus");
say_hello("Judas");

// OUTPUT

Hello Maurice!
_______________________________
Hello Alice!
_______________________________
Hello Jésus!
_______________________________
Hello Judas!
_______________________________
```

As you can see, the code is cleaner. For instance if a designer on this project one day decided to add a "red-text" on the banner, then you'd only have to modify the function and anywhere it's used will be automatically updated.
> Information is power. - Anynomous.

## Definition
**Functions** are a bit like "smart" robots that adapt to what you want to do and automate most common tasks. They often (but not always) take one or more *input* (call ed **arguments** of the function) that they transform and then return (via the `return` function). And yes, you can use functions in function!

It's a bit like a machine to make orange juice: in *input* you put fresh oranges. In *output* you get the orange juice (and peelings).
![orange juice-o bot](http://ecx.images-amazon.com/images/I/51g-YUKLUoL.jpg)

Like in the example here-under, you can create your own function. You can also use [several functions provided by PHP](http://php.net/manual/fr/funcref.php).

Btw, you are already using some:
-`array()` : function that creates a variable of type `array`

```php
$team = array('Elvis', 'Johnny');
```
Here, the arguments `'Elvis', 'Johnny'` entering will become and the end (captured by the variable `$team`) the elements that will compose the array.

- `print_r($array)` : is used to display the contents of an array.
- `die("message")` : is used to stop the execution of the script after displaying the message indicated in argument of the function.
- `echo("texte to display");` : is used to display arguments. This function does not require parantheses.
- `phpinfo();` Displays the php configuration of your server.
- `date('d M Y')` to get the current date.

### Concrete example:

The `str_shuffle()` function (read: "**shuffle** **str**ing") allows you to mix the characters of a string

```php

$string = 'This string will be shuffled !';
$string = str_shuffle($string);

echo $string;
```

Here you go. It's not necessarily very useful but it's [funny](http://www.my-os.net/blog/index.php?2006/05/20/410-ordre-de-lecture):

![scramble text](http://www.my-os.net/blog/images/2006%20mai/lecture.jpg)

## Syntax

The use of a function is done in two steps:
**Time 1. Create the function** (we say: "define" or "declare" a function). Here is the syntax to follow to declare a function.

```php
function name_of_function( $argument1, $argument2,...){
	//	a series of operations manipulating the arguments
}
```

Note that the set of commands is between two brackets : `{` to open the code block and `}` to close it. Typically (but not necessarily) a function will **ret**u**rn** the result. (orange juice)

Here is a function that allows to sanatize input:

```php
function sanitize( $input ){
	return strip_tags( trim( $input) );
}
```

The argument (here called `$input`) is sent to the `trim()` function which returns its result to the `strip_tags()` function which returns the result to the `return` function which... returns the result out of the function I named `sanitize()` (and which allows me to do both trim and script_tags at once).


**Time 2. Use the function** (we say: "call up the function"): Once the function is declared somewhere in your code, you can use it wherever you want, and as many times as needed.

Let's go back to this famous `sanitize()` function and use it. Here is a concrete example:

```php

// If the form has been submitted...
if (isset($_POST) && !empty($_POST) ){

	// sanitisation of inputs
	$name = sanitize( $_POST['name'] );
	$email = sanitize( $_POST['email'] );

	// validation...
	...
}
```

##Exercises
-Use a function that capitalizes the first letter of the argument. For example if the input of the function is `"emile"` the output will be `"Emile"`
-Use the function provided by PHP to display the current year.
-Now display the date, time, minutes and seconds using the same function.
-Create a function that takes two numerical arguments and returns the sum of these two arguments
-Enhance the previous function so that if of (or both) of the send arguments is not a numeric value (int), the function returns the following message: *"Error, non-numeric argument"*.
-Create a function that takes as an argument a string of characters (several words) and returns the initials of each word in capital letters. (Example: ``In code we trust!`` becomes `ICWT`).
-Invent a function that replaces the character "æ" in each of the following strings: ``caecotrophy "," chaenichthys "," microsphaera "," sphaerotheca "`.
-Create a function allowing you to manage messages to the user thanks to two arguments: the first argument is the message, the second one allows you to specify an html class attribute that will be used by the CSS (for example:"info","error","warning").
Thanks to this function, we can write in php:

```php
echo feedback("wrong email adress", "warning");
```
 which will cause this html injection:

 ```html
 <div class="warning">wrong email adress.</div>
 ```

 - Find out for yourself in the [php documentation](http://php.net/manual/fr/functions.arguments.php) how to modify your function so that if the second argument is not specified, its values equals `"info"`
 - Create a random word generator, generating two words: one from 1 to 5 letters, the other from 7 to 15 letters. The screen will show only this: A title inviting the user to generate a new word, then the two word generated, then: a button to refresh the page (and thus recreate two words).
 - Convert the following string: `"STOP SHOWING I DO NOT HAVE ANYTHING MORE!!!"' in lower-case letters.
 -  In your new job, you get code from the previous developer:

 ```php
// calculation of the volume of a cone of radius 5 and height 2
$volume = 5 * 5 * 3.14 * 2 * (1/3);
echo 'The volume of the cone of radius 5 and height 2 is : ' . $volume . ' cm<sup>3</sup><br />';
// calculation of the volume of a cone of radius 3 and height 4
$volume = 3 * 3 * 3.14 * 4 * (1/3);
echo 'The volume of the cone of radius 5 and height 2 is : ' . $volume . ' cm<sup>3</sup><br />';
```

WOA! A rehearsal! Your subconscious immediately screams *DRY! DRY! DRY!*
In order to leave you alone, create a `cone_volume' function, which will calculate the volume of the cone as a function of radius and height. This function will not display anything, we just want it to return the volume we are looking for.  Here is a diagram, to confuse you well (But yes, in reality, the information useful to this mission is in the code above...)
![Cone](https://user.oc-static.com/files/5001_6000/5758. gif)

 - More [exercises on fonctions here](http://www.w3resource.com/php-exercises/php-function-exercises.php).


## Exercise #godmode #yourock
- Invent a reverse_string($stringToReverse) function that rewrites a string of characters inside out. In Wallonia, the youth movements have a popular song named "[Buvons un coup ma serpette est perdue](http://www.mamalisa.com/?t=fs&p=1797)". Use the `str_replace` function with `$substitutions = array (E, I, O, O, U, OU, OR, E, È, OI, UI, YES, AN, IN, IN, ON, UN, OIN); ` to automatically transform the vowels of the verse according to each array element and thus generate the complete lyrics of the song.
