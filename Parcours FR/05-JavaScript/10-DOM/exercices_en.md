## DOM

- Download file "file.zip"

## EXERCISE 1: Class Manipulation

- select the body
- remove the class "bg-aqua"
- add the class "bg-olive"

- select first-paragraph
- remove the classes "bg-lime" and "gray"
- add the class "aqua"

- select all items that have the class 'bg-silver'
- modify all these elements by adding them the class "bg-teal"
- modify all these elements by deleting them the class "bg-silver"

- select all elements of type 'blockquote'
- modify all these elements by adding them the class "bg-white"

## EXERCISE 2: CSS Selector

- with `querySelector` select the 'my-table' element
- add the class "bg-purple"

- with `querySelectorAll` select all paragraphs in 'container'
- modify all these elements by adding the class 'shadow'

## EXERCISE 3

- select all elements of type 'pre'
- with the `style` property changes the text color
- with the `style` property changes the background color with` backgroundColor`

- with the `style` property add a `border-top` of `3px solid red` (do not forget that you can access the property of a grace object like this: [" prop-name "])
- with the `style` property add a `border-bottom` of `3px solid red`

- selects the first element of type 'h3'
- move its HTML content to `<em> Itelic title! yeah! </ em>`

- selects the first element of type 'h2'
- move its text content to `<strong> HTML doens't work! </ strong> `


## EXERCISE 4: Creating Elements

- select the first 'ul'
- creates an element of type 'li'
- add this text to `My best friend' is <a href='http://www.google.com'> Google </a> `in 'li'
- add this 'li' element in the ul

- select the first link in the 'li' previously created
- with the `style` property changes the text color of this link

## EXERCISE 4: Creating and Deleting Multiple Items

- select the first element 'ol'
- loop all children of the latter thanks to his `children` property
- remove each child from 'ol' with `removeChild ()`

- declare in a table the following values: ["Silent Teacher", "Code Monkey", "CodeCombat"]
- make a loop on all the children of the table previously created
- for each value of the table creates an element 'li' thanks to `document.createElement ()`
- add to each 'li' the current table value
- then add each 'li' to the 'ol' element previously selected


### Reminder

Selecteurs
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector()
- document.querySelectorAll()

Création d'éléments
- document.createElement()
- element.appendChild()

Manipulation de classes CSS
- element.className
- element.classList.remove()
- element.classList.add()
- element.classList.toggle()

Manipulation CSS
- element.style _( ex : `element.style.backgroundColor = "blue"`)_

Autres
- element.id
- element.innerHTML
- element.innerText




