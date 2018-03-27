# OOP: Car park

## Objectives

We want to simulate the management of a car park, so we'll create a `class Car`
a car's properties for this are : 

- a licence plate
- a release date
- the mileage
- a model
- a brand
- a color
- a weight

### When instantiating the class be able to determine if :

- The model is an `Audi` then it is automatically `reserved` otherwise it is `free`
- The vehicle is a utility or commercial depending on its weight (> 3.5 tons)
- The country where the car comes from is Belgium, France or Germany depending on the registration which begins with `BE`,`FR` or `DE`
- Determine if it was used a lot `low < 100.000` or `middle > 100.000` or `high > 200.000` depending on the mileage
- Calculate the number of years since the release date

### Change

Make sure that:

- if the mileage changed, the `class` has to re-check the condition to find out if it has been use a lot
- We **can't change** the release date
- We **can't change** the licence plate
- We **can't change** the model
- We **can't change** the brand

Create a function `drive` which makes "the car move 100 000km forward"  and that the wear goes from `low` to` high`

### Display

create a methode `display` which displays the photo of the car and its features in an HTML table

- [Here you will find images and models of cars](http://www.cars-data.com/)




