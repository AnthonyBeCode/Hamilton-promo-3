# Work Integration

- Repository: `frontend-AllezCine`
- Time required: 2 weeks
- Work: team

## Learning Objectives
- respect a design provided
- consolidate the gains in git, HTML, CSS, Bootstrap
- use javascript and jQuery in a realistic project
- have a new project to add to his portfolio

## The Front-End Integration Work

This TI concludes the two months of front-end we had together.
You have ** 3 jobs to make **.
- A site in ONE PAGE with a provided design ([yes!](Layout-one-page.jpg)). [[Quick Access]](#a-website-with-layout)
- Fan site (Design not included) [[Quick Access]](#b-fan-Site)
- Creation of a newsletter to promote the news on your site. [[Quick Access]](#c-the-newsletter-bonus)

For this, you must use all the technos seen from the beginning, ie:
- HTML
- CSS
- JavaScript
- jQuery
- Responsive design
- Bootstrap
- Font Awesome Icons
** First of all, you should write a readme.md indicating:
- the project description
- the names of the members of the team

** Using a kanban **

Use the [Projects] tab of your repo to create and organize your work with this:
![Kanban](https://github.com/becodeorg/BeCode/blob/master/img/kanban.jpg)

Columns "to do", "in progress", "done" to make simple and tickets attributed to the right people. This for you / allow us to visualize clearly and simply the progress of the project.

## A. Website with LAYOUT

You will realize, as a group, a website for renting and selling films. WARNING, this is a **one-page** site!

- [Click here to see the layout](layout-one-v2.jpg)
- We also put at your disposal some movie posters, just to save you some time (titles, years and genre are in the names of the pictures.

### Entrance
When entering the site, you must **force the user to indicate his age**.
If he is 18 or older, allow him to enter the site, otherwise redirect him to IMDB. (For this use JS or jQuery for a pop-up).

Once on the site, display anywhere on the site a box for the **warning of cookies**. (we see lately all over the internet)
  When you click on the [login or register] buttons, display a login form in JS or jQuery in a box. (see the website http://www.commeaucinema.com)
  This login form will contain:
  - identifier,
  - password,
  - a [OK] button,
  - a [Create an account] button,
  - a [stay connected],
  - a link [If you have forgotten your password],
  - and a link [cancel].
  For the register form
  - name
  - E-mail
  - Password
  - Confirm password
  - General conditions of use [select button]
  - Register button

(Difficulty: make the form disappear when you click on CANCEL, on the form or the register button, and vice versa).

### Menu
A ** menu ** in bootstrap with submenus. (**Hamburger menu for responsive**).

Since it's a onepage, the links in the menu should point to the dedicated sections.

### On your mind
The ** jumbotron ** of the header must be 100% of the width of the screen in which there is a slide (Cf layout). Make the ** slide ** work in CSS or JS or jQuery)

### The social networks buttons
The ** social network buttons ** are in a fixed position. If you click on a button, it must lengthen with an animation (here just use CSS).

### Movies Section
Each film must include:
- a poster,
- a title,
- the year of release,
- and the kind.

If you click on the image or title of the film, make appear in a modal (Bootstrap) the trailer youtube of the film, the description, the director, the year of release of the film, the genre, the actors ...

### Featured Movies Section
Create buttons to filter movies by genre (Jquery or JS).
If you click on the ACTION button for example, only show the action movies, etc.

When you click on the "plus movies" button, show the other hidden movies. Remove the "more movies" button and replace it with the "Less movies" button if you click on "less movies", hide the movies and make the "more movies" button reappear (In jQuery it will be easier, with a toggle for example).

### Section Shop Movie
Use the two small buttons on the right to scroll the movies from left to right and aim-versa (Jquery, bootstrap, JS choice)

### Section Contact Us
Create a form and display in a
the entries of the form when clicking on "Send Message". (No treatment in php, soon promised)

Bonus: put a map in the Contact us section.


### Section Footer
Make sure that when you click on the small red button with the white arrow, you go up to the header of the site, the little button disappears once the header appears.

CONSTRAINT: create this button in pure JS with createElement (), createTextNode () and company (), display it on the DOM, position it then style it in CSS in the style sheet.

MAKE THE SITE RESPONSIVE (Bootstrap + Media queries)


## B. Fan Site
There is no imposed layout but nothing prevents you from taking over that of site A.

Make a website on a character of your choice (TV series, movie, video game, ...). The best is that this character is cross-media (eg Batman is present in movies, series, video games, comics, ...) for the part "presentation". Try to choose a character that is in at least two media.

Minimum 5 pages with:
- **Presentation**
- **Biography**
- ** Photographs ** (Photo Gallery of the characters),
- ** Goodies ** (Derivatives purchase simulation page),
- ** Contact ** (I do not make you a drawing)

**NOT OBLIGATORY BONUS**: Instead of 5 pages, make 5 tabs and make this site on one web page.

### Presentation
The special feature of this page is that it will contain a submenu with tabs. One tab per medium in which the character appears. (minimum two tabs). To borrow Batman's example, you could make a tab [Batman 1989] and briefly talk about Batman in this movie and then another tab [Gotham] and briefly talk about Batman in this series. If you are not inspired for the content, you can use wikipedia text but MENTION YOUR SOURCES! (at least in the readme.md which will be obviously in the repo of your project).

### Biography
It will be necessary that the life of the personage is "chapter" (example: "childhood, adolescence, adult life, end of life" OR "season 1, season 2, ..."). We will have to click on the title of the chapter to unwind the text. This will prevent spoilers. (for example with a toggle method with maybe a speed parameter)

### Photographs
Make a photo gallery of the character. Use jQuery to make it pretty. A carousel, a lighbox, ... Make the code yourself or use a plugin, do whatever you want.

### Goodies
A page with a list of derivatives with the amount per piece, a field for the user to indicate how many items he wants to buy. By clicking the [Preview Before Purchase] button, the user sees the total of his purchase. The display is done either in a pop-up (alert) or in the HTML page (plan a location for the display).
BONUS: If the amount is less than 15 €, the user will have to pay 10 € delivery costs. If the amount is between € 16 and € 30, the fee is only € 7. If the amount of the order is more than 31 €, shipping costs are free.

### Contact
Make a contact form that will verify that all the fields are filled. If the fields are empty, give them a background of color to highlight them and indicate below
**Advice**

1. Make the HTML first, put the content in it, then write the necessary scripts.
2. Do not forget:
- correctly encode your HTML (titles with h1, h2, paragraphs in p tags ...). A well organized code and always easier to process.
- correctly name your IDs. Use names that make sense, easy to locate on your page.

## C. The newsletter (BONUS)

Use this site https://putsmail.com/tests/new to test your newsletter.
You can use TABLES, or HTML5 (some webmails accept HTML5 but but be careful with CSS)

Reference: take a look in your inbox to see how newsletters are made, it's essentially tables.

Good luck. (PS: we love you)

### NOTES:
You work in a group. Get organized. Communicate (remember the benefits of scrum meetings).
