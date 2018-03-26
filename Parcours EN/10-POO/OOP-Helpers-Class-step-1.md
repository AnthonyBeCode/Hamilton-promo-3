# OOP: Helpers Class : Step 1

## Objective

As you might have noticed, we can embed PHP content in HTML. Hence, it quickly becomes difficult to read smoothly with altering PHP- and HTML tags.

We'll minimize this as much as possible by using PHP classes that will directly generate our HTML.

You'll understand by example. Imagine an EDIT form.

```
<form action="<?php echo $action; ?>" method="POST">
    <input name="name" value="<?php echo $name ?>" >
    <input name="first_name" value="<?php echo $first_name ?>" >
    <input type="submit" value="Update" >
</form>
```
The variables $action, $name, and $first_name have the values retreived from the database.

As you may notice, the HTML and PHP are intertwined.

To minimize this, we can create a class Form that manages the form's generation. We'll have more readable code.

```php
echo $form = new Form();
echo $form->create($action); // create the start of the form
echo $form->text('name',$name); // create an input of type text and as default value $name
create an input of type text and as default value $first_name
echo $form->text('first_name',$first_name); // create an input of type text and as default value $first_name
echo $form->submit('Update'); //create a button to submit the form called Update
echo $form->end(); //Close the form
```

We're less juggling with the opening- and closing of the php tags <?php ?>.

There's many other advantages to use PHP for generating HTML, more precisely making use of PHP to make your generated code customed according to simple parameters :)

Create a class `Form` that generates the different parts of the forms.
For the `Form` class you are not required to use the above as an example.

This class will need methods and properties to generate :

- The start of a form `<form ...>`
- A text input `<input type="text"...>`
- A select `<select ...> ...</select>`
- A submit button `<button type="submit"></button>`
- A textarea `<textarea ...> ...</textarea>`
- A radio button `<textarea ...> ...</textarea>`
- A checkbox `<input type="radio"...>`

You have the create this class keeping in mind it will be use dby another developer.
Name your methods and properties so they make sense, keep it simple and comment your code.

## Ressources

[La POO en PHP (4/30) : Un exemple concret : Form](https://www.youtube.com/watch?v=rTGmcdFAWqw)

