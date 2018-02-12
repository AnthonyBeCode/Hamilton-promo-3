# PHP/ Arrays

## Table of contents

- [Introduction](php-introduction.md)
- [Variables](php-variables.md)
- [Conditions](php-conditions.md)
- Drill: [Exercise on Conditions](php-exercices-conditions.md)
- [Table (array)](php-array.md)   ←
- [Loops](php-loops.md)
- [Functions](php-functions.md)

## Arrays

![Closet](https://www.dropbox.com/s/ybomkz94bwzu2zo/armoire.png?dl=1)

As a reminder, in the chapter about variables, we had identified several types of variables:

1. Chains of characters (*string*, ex: `"Hello"`)
2. Whole numbers (*int*, ex: `11`)
3. Decimal numbers (*float*, ex: `3.131518`)
4. Booleans (`true` or `false`)
5. nothing (`null`)

Arrays are the sixth (and last) type of variable. They are a bit particular because, while any other type of variable consists of a name and a value, an Array can hold multiple values.

Arrays are very useful to represent collections, like for instance:
- all countries on Earth
- family members
- system components
- a recipe's ingredients
Etc.

**Analogy**
Personaly, arrays remind me of a closet, because,
if I declare this:

```php
$personal_pronouns  = array( 'I' , 'you' , 'he' , 'she', 'it', 'we', 'they', 'one' );
```

PHP writes this in memory:

```
Array
(
    [0] => I
    [1] => you
    [2] => he
    [3] => she
    [4] => it
    [5] => we
    [6] => they
    [7] => one
)
```

The numbers (0 to 7) are automatically added by PHP. They are the **keys** that allow us to then go grab **the value** that lives on the corresponding floor of the closet.

Note that the first element is at floor 0 (and not floor 1).

Example:

```php
echo $personal_pronouns[2];
// Will display "he"
```

## How to create an Array?

You have to declare an Array with the function call `array()`.

```php
$team = array();
```

As it is often the case in PHP, or any good programming language, there is a more compact way:

```php
$team = [];
```

After creation you can add any number of elements inside of it.

```php
$team = [ 'Vincent Company', 'Eden Hazard', 'Manneken Pis' ];
```

Take notice that each of the array's "éléments" are seperated by a comma.

You could also create the Array story by story:
```php
$team[0] = 'Vincent Company';
$team[1] = 'Eden Hazard';
$team[2] = 'Manneken Pis';
```

### Exercises

2. Here's an array

```php
$countries = array( 'Belgium', 'France' , 'Germany', 'Netherlands', 'Ukraine' );
```

What will be returned by this ?

```php
 echo $countries[2];
```

2. Create an array that represents your family.
3. Display its content with the `print_r` function.
4. Create an array describing your favourite dishes.
5. Display its content with the `print_r` function.
6. Create an array listing your favourite movies and tv-shows.
7. En utilisant cet array, affiche uniquement ton film/série préféré

### current operations

#### Display
As you have seen before, to "return" the data of an array, we use the key(s) in square brackets `[ ]`.

```php
// In a relational array :
echo $person['firstname'];
echo $person['dad']['firstname']; // Returns the value of the key 'firstname' of the sub-array 'dad' of array $person.
echo $countries[2]; // Returns the 3rd key of the $countries array
echo $person['dad']['hobbies'][1]; // returns the 2nd hobby of $person's dad.
```

#### Adding an element

There are two ways to do it.
The long way:

```php
array_push($person['hobbies'], 'Football');
```

The short way:

```php
// If a digit key suffices;
$person['hobbies'][] = 'Football';

// If you want a relational key;
$person['papa']['firstname'] = 'Georgio';
```


#### Replacing a key's value
Image that `$person['papa']['firstname'] = 'Georgio'; `

To change his firstname, you can overwrite it.

```php
$person['papa']['firstname'] = 'Georgio';
echo $person['papa']['firstname'];
$person['papa']['firstname'] = 'Sebastano';
echo '<br>';
echo $person['papa']['firstname']; // returns "Sebastano"
```

## Relational Arrays

Until now, the arrays we have created use a

So far, the tables we created use a numeric key (that is, a number).

Relational arrays work the same way, only instead of numbering the different stories (floors), we'll **label them by giving a unique name to each**

For instace, imagine my goal, in one array, save the data of somebody (firstname, lastname, address, city, etc.). If the array it numeric, how to know that n°0 is the name, the n°1 firstname, the n°2 the address… ? That's where relational arrays become useful.

### Creating a Relational Array

For creating one, we'll use the `array` function (or the shortened version `[]` ) like before, but we'll add the label ( the `key` ) for each value.

```php
$user = array (
    'firstname' => 'Juan',
    'lastname' => 'Pablo',
    'address' => '3 Rue du Paradis',
    'city' => 'Brussels'
    );
```

**Note 1**:  there is only one instruction here (one semicolon ;).
I could have written everything on the same line, but nothing stops me from seperating this on several lines to improve the readability.

**Note 2**: remarque qu'on écrit une flèche (`=>`) pour dire « associé à ». Par exemple, on dit « ville » associée à « Bruxelles ».

**Note 2**: notice that we write an arrow (`=>`) to state « related with ». For instance, we say « city » related with « Brussels ».

So, to display a story's (floor) content, it's more intuitive:

```php
echo $utilisateur['ville'];
```

#### Exercise
1. Describe yourself as a relational array: `$me`. Use at least two values of types: text (for example: `firstname`), boolean (for example: `likes_football`) and Int (for example: `age`).

## Multi-dimensional arrays
You have seen it in the previous exercise: you can write values of type "text", "int", "boolean" in an array. But you can also write another array as a value. Your first array will then become **multi-dimensional array**

Imagine also having to save your hobies in the `$me` array.
Here's how:

```php
$me = array(
  'birth'     => 1973 ,
  'firstname' => 'Alexandre' ,
  'lastname'  => 'Plennevaux' ,
  'hobbies'   => array()
);

echo '<pre>';
print_r($me);
echo '</pre>';

```

### Exercices
1. Add your hobbies as an array in the `$me` array.
2. Create a second array that describes someone in your family, for example: `$dad`.
3. Make sure you also added its hobbies.
4. Next, your `$me` array, add one element which has key `dad` and value equals to `$dad`.
5. Display the content of `$me`. (Use the html `<pre>` tags to make it more readable)
6. Read your code line by line to assure yourself you've understood what's happening.

## Playing with arrays

### Counting
-You want to know how many hobbies has your dad. Try and find the php function that allows to **count** the number of elements in an array.
-Count your own hobbies.
-Add up both (yours and your family member) and display the result.

### Adding
A friend has made you discover the joys of taxidermy. Find the right syntax to add the hobby "Taxidermy" to your hobbies array.

### Replacing
You're arguing with your father and you decide to change your family name.
Your choice has no other purpose than to **** the system and bring yourself media exposure. You decide be named John Doe.
How to update your array to reflect the name-change?

### Create an array from two arrays (or more)
One day, you meet your `$soul_mate`.
Desribe him/her as an array `$you`.
What will be the hobbies of your future child?

It turns out that you saw a documentary on the TV where-in a specialist in hereditary genetics explain that there are 2 possible approaches:

1. either **parallel** (the hobbies equals in both arrays),
2. either **combine/fuse/merge** (all hobbies from each arrays).
Guess the names of both PHP functions in the PHP documentation (hint: they both start with `array_`) and check the syntax. Display the result of each of them with the function `print_r()`.

## Exercises

**Note:** For each of these exercises, display the result with the `print_r()` function and make sure you obtain the right result. (And in an HTML banner `<pre>` is even better).

- Create an array `$web_development` with two keys; "frontend" and "backend". For each key relate/associate an empty array.
-Next, add a line that assigns "xhtml" to the appropriate key.
-Next, add a line that assigns "Ruby on Rails" to the appropriate key.
-Next, add a line that assigns "CSS" to the appropriate key.
-Next, add a line that assigns "Flash" to the appropriate key.
-Next, add a line that assigns "Javascript" to the appropriate key.
-Next, add a line that replaces the line containing "xhtml" and change it to "html"
-Lastly, add a line that deletes the line containing "Flash".
