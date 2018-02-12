# PHP: Conditions

## Table of contents

- [Introduction](php-introduction.md)
- [Variables](php-variables.md)
- [Conditions](php-conditions.md) ←
- Drill: [Exercise on Conditions](php-exercices-conditions.md)
- [Table (array)](php-array.md)
- [Loops](php-loops.md)
- [Functions](php-functions.md)

![Rail Switch](https://pmcdn.priceminister.com/photo/Aiguillage-train-miniature-1097270594_L.jpg)

## Conditionals

The world we live in is a dynamic system, forever in movement.
Sometimes, it's daytime, sometimes nighttime. Sometimes the person across from you is a man, sometimes it's a woman. Sometimes it's warm, sometime's it's cold. etc.
Us, humans, have learned that we should wear a jacket when cold. If on the contrary there's a sunflare, we'd be happy with a t-shirt. Right?
Well, in our unconsciousness, our way of thinking has made it possible to take decisions with things that vary.
So, we have to "test" these hypotheses ("is it warm outside?"), and if they check-out to be true, then we do this ("wear a T-shirt"), else, we do that ("wear a Sweater").

In programming, we call these hypotheses **conditions**. The most common use-case is the `if/else`.

```php
if( condition ) {
   // code that is executed only if the condition is TRUE
  echo "The condition is right";
 } else {
   // code that is executed only if the condition is FALSE
   echo "The condition is wrong";
 }
```
### Operators

To define your conditions, you dispose of several different operators:

`==` : equals to
`!=` : not equals to || different than
`>`  : greater than
`<`  : smaller than
`>=` : greater- or equal to
`<=` : less- or equal to

Let's take our example of weather-forecasting. This would give this, in PHP code.

```php
if( $temperature > 21 ) {
  // code that is executed only if the condition is TRUE
  $clothing_of_the_day = "T-shirt";
 } else {
  // code that is executed only if the condition is FALSE
  $clothing_of_the_day = "Sweater";
 }
```

#### Exercice:
- Change the condition to be: "if the temperature is greater or equal to 15 degrees".

## Combining conditions

### condition1 AND / OR condition2

You can verify a "multiple value condition" (several conditions combined), using the keywords `AND` or `OR`.

```php
if ( $age <= 12 AND $langue == "french" ) { ...
```

## Hierarchical conditions
You can also nest conditions in each other. Be careful where to place your braces.
**Tip** Use code indentation to help you find yourself in your code.

```php
if ($gender == 'woman'){

  // Here, code to be executed if gender is "woman"

	if ( $age <= 12 and $language == "french" ) {
    // Here, code to be executed if the gender if "woman", that the age is lesser than 13 and the language is "french"
		...
	} else{
    // Here, code to be executed if the gender is "woman", and that the age is greater than 13 or language isn't "french"
		...
	}

} else {
  // Here, code to be executed if the genre isn't "woman"

	if ( $age <= 12 and $language == "french" ) {
    // Here, code to be executed if the genre isn't "woman", that age is lesser than 13 and the language is "french"
		...
	}
}

```

### Practise
Familiarize yourself writing conditions thanks to[this serie of exercises](php-exercices-conditions.md).
Once completed, carefully examine the next section about .

## Good practice: the PHP before HTML
As you noticed, we can mix html with php within one file `.php`. That being said, it's better practice to first write the back-end ("php") BEFORE starting to write HTML, that means, returning the response from the server to the browser.

## Use-case 1: Generator of excuses
Parents need to sometimes make up excuses for their kid. [Create a form](./php-exercice-generateur-excuses.md) that allows to suggest pre-defined excuses.

## Use-case 2: Validate a form-field

When we build a script that executes a form, we have to verify the input, to avoid errors and hacking attempts.
For example, we have to verify for a required variable to be present. One would write it as: "If the number of characters of the email variable is less than 1"

```PHP
$fullname = $_GET['fullname'];

if ( strlen($fullname) == 0 ){
  echo "You forgot to fill in your name";
}
```

Can you guess what to expect from the function: `strlen()`?

Note there are other ways to express this condition "is not empty". Explore the following PHP functions by visiting the [documentation](http://php.net/manual/fr/index.php):
- ` empty() `
- `filter_var()`

![Giphy](https://media0.giphy.com/media/gpDtMjkONKp7a/giphy.gif)
