# PHP/ Exercices dirigés: les conditions

## Table of contents

- [Introduction](php-introduction.md)
- [Variables](php-variables.md)
- [Conditions](php-conditions.md)
- Drill: [Exercise on Conditions](php-exercices-conditions.md) ←
- [Table (array)](php-array.md)
- [Loops](php-loops.md)
- [Functions](php-functions.md)

Here follows a series of exercises intended to drill you at conditional expressions in programming.

## As a reminder

To express your conditions, there are a few operators made available for you.

`==` : equals to
`!=` : not equals to || different than
`>`  : greater than
`<`  : smaller than
`>=` : greater- or equal to
`<=` : less- or equal to

The syntax of a basic conditional if/else structure:

```php

$temperature  = 34; // Play with this value to test your script.

if( $temperature > 21 ) {
  // code to be executed if condition is TRUE
  $clothing_of_the_day = "T-shirt";

  }elseif ( $temperature > 10 ){
    $clothing_of_the_day = "Pull-over";

 } else {
   // code to be executed if all conditions present are FALSE
   $clothing_of_the_day = "Pull-over, écharpe et bonnet";
 }

 echo $clothing_of_the_day;
```

## Exercises

Launch your local development server.
In the root folder of your server, create a file named `conditions.php`.

### 0. Represent the need to clean your room when it is dirt, using code.

**Trick:** Initialize a boolean variable `$room_is_dirty` then use a condition to test it. If true, display "Clean your room, looks like a bonobo's habitat!". Else, display "Your room is clean, live some!" 

Done? Congratz. As it is now, edit your script to represent the way your parents would do so.

Thenforth, let's make the excuses more verbose by allowing gradation.
Your room could either be "disgusting", "dirty", "in order", "immaculate", "manic". Use a `if/ elseif / else` to structure this. Think of the messages to display in function to the different cases.

### 1. Display a custom welcome message according to the current time.
If the time is between 05h00 and 09h00 AM, display "Mornin'!".
If the time is between 09h01 and 12h00 AM, display "Have a good day!".
If the time is between 12h01 and 16h00 PM, display "Good afternoon!".
If the time is between 16h01 and 21h00 PM, display "Good evening!".
If the time is between 21h01 and 04h59 PM, display "Good night!".

**Trick:** Exploit the fact we can combine conditions (with the `AND` / `OR` operators).

### 2. Display a different welcome message according to the user's age.
Create a small form containing one question: "What's your age ?" (Number field type)
Method: GET
Display a different message according to the anwered form.
-If the age is lesser than 12 years, display "Hi kiddo!"
-If the age is between 12 and 18 years, display "Hi teenager!"
-If the age is between 18 and 115 years, display "Hi adult!"
-If the age is greater than 115 years, display "Wow! Still alive?"

### 3. Display a welcome message according to the user's age and gender.
Complete the form of the previous exercise by adding a second question: "Male or Female?" (field type radio)
If the gender is female, customize the answer of the age corresponding to the female gender.
For example, if the age is between 12 and 18 years and the gender is female, display "Hi female teenager!" else display "Hi male teenager!".
Same for the other age-tiers.
**Trick:** Exploit the fact you can nest conditions (write conditions inside conditions).

### 4. Display a welcome message according to the user's age, gender and native tongue.
Complete the form of the previous exercise by adding a third question : "Do you speak english?" (field of type radio: possible answers: "yes" or "no").
Adapt the form's script accordingly:
-If the age is lesser than 12 years and anwers "yes",
return: "Hi boy!" or "Hi girl!" according to his gender.
-If the age is between 12 and 18 years and the user answers "yes", display "Hello Teenage boy!" or "Hello Teenage girl!" according to his gender.
-If the age is between 18 and 115 years and the user answers "yes", display "Hello Sir!" or "Hello Lady!" according to his gender.
-if the age is greater than 115 years and the user answers "yes", display "Wow! Still alive, old man?" or "old lady?" according to his gender.

### 5. Back to school of failure and judgment
Create a small form that reacts to the student's grade.
If the grade is equals to 1, 2, or 3, display "That's garbage"
If the grade is equals to 6, 7, 8 or 9 display "That's not the worst"
If the grade is equals to 10, display "Close call!"
If the grade is equals to 11, 12, 13 or 14, display "That's not bad."
If the grade is equals to 15, 16, 17, or 18, display "Congratz!".
If the grade is equals to 19 or 20, display "Police! Stop this cheater!".

![Giphy](http://media2.giphy.com/media/NzWGJoHbR4zAI/giphy.gif)

### 6. Using the "Switch".

With a switch, we first start defining what variable we want to work with. What we communicate to PHP is: I'm going to analyze the value of `$note`. Then, we make use of `cases` to analyze each case (`case 0`, `case 10`, etc.). What this means is we can do the following: In the case of value 0.. do X, in the case of value 10 .. do Y, etc.

Advantage : no need to use comparison operators. by default it doesn't work with other symbols (`< > <= >= !=`). Put clearly, a switch can only test for equalities.

![A Switch](./rail-switch.png)

Read the documentation on [switch structure](http://php.net/manual/en/control-structures.switch.php).

Afterwards, create a new file `conditions-switch.php` and redo the previous exercise but replace the if/else structure by a switch structure.

### 7. Writing a conditional expression
... use the variables $age and $gender in a `if/else` instruction to select a person of female gender whos age is between 21 and 40 years and display a message accordingly.
- Message if TRUE: *"Hello, welcome among us!"*
- Message if FALSE: *"Sorry, you do not meet the selection criteria."*

### 8. Rewrite it without making use of ELSE.

Making use of simple `if`s (no `else`) try and return the same result.

### 9. The "Ternary" structure.

I imagine that like myself, you haven't ever heard of this strange word: "ternary". Actually, it's not very complicated: it's a quick way to determine the value of a variable determined by a condition.

Example:

```php
$age = 24;
$adult = ($age >= 18) ? true : false;
```

Which is the same as:

```php
<?php
$age = 24;
if ($age >= 18)
{

	$adult = true;

} else {

	$adult = false;
}

```

### 10. Exercise on ternary

In a script `ternary.php` declare with the help of a ternary expression, a variable `$welcome` whose value is a salutation message depending on whether `$gender` is 'M' or 'F'.
Display the contents of `$welcome`


Did you complete all of the exercises? Congratz, here's a gif!

![Giphy](http://media0.giphy.com/media/CNprQ8KGpORVu/giphy.gif)

