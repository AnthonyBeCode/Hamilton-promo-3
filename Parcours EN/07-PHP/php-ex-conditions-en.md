# PHP - Les conditions
## Exercice 1
Create a variable `age` and initialize it with a value.  
If age is superior or equal to 18, show **You are an adult**.
Else, show **You are minor**.

## Exercice 2
Create a variable `IsEasy` of type boolean and initialize it with a value.  

Show **It's easy!!** if this is the case. If not, show **It's difficult !!!**.  

**Bonus :** Write it in 2 different ways.

## Exercice 3
Create two variables `age` and `gender`. The variable `gender` is able to have these values :
- Man
- Woman  

In function of the age and gender, show one of the following messages :

- You're a man and you're an adult
- You're a man and you're a minor
- You're a woman and you're an adult
- You're a woman and you're a minor

Cover all cases.

## Exercice 4
The Richter magnitude scale is a way to measure the magnitude of an earthquake. This scale goes from 1 to 9.  

Create a variable `magnitude`. In function a of the value of `magnitude`, show one of following messages.  

|Magnitude   |   Phrase|
|------      |    ---|
|1           |   Microearthquakes, not felt, or felt rarely. Recorded by seismographs.|
|2           |   Felt slightly by some people. No damage to buildings.|
|3           |   Often felt by people, but very rarely causes damage. Shaking of indoor objects can be noticeable.|
|4           |   Noticeable shaking of indoor objects and rattling noises. Felt by most people in the affected area. Slightly felt outside. Generally causes none to minimal damage. Moderate to significant damage very unlikely. Some objects may fall off shelves or be knocked over.|
|5           |   Can cause damage of varying severity to poorly constructed buildings. At most, none to slight damage to all other buildings. Felt by everyone.|
|6           |   Damage to a moderate number of well-built structures in populated areas. Earthquake-resistant structures survive with slight to moderate damage. Poorly designed structures receive moderate to severe damage. Felt in wider areas; up to hundreds of miles/kilometers from the epicenter. Strong to violent shaking in epicentral area.|
|7           |   Causes damage to most buildings, some to partially or completely collapse or receive severe damage. Well-designed structures are likely to receive damage. Felt across great distances with major damage mostly limited to 250 km from epicenter.|
|8           |   Major damage to buildings, structures likely to be destroyed. Will cause moderate to heavy damage to sturdy or earthquake-resistant buildings. Damaging in large areas. Felt in extremely large regions.|
|9           |   At or near total destruction – severe damage or collapse to all buildings. Heavy damage and shaking extends to distant locations. Permanent changes in ground topography.  |

Cover all cases.  

*Use something else than 'if' or 'else', like for example, a switch*

## Exercice 5
Translate this code using 'if' and 'else' :  


    <?php
      echo ($myVariable != 'Man') ? 'She\'s a developper' !!!' : 'He\'s a developper !!!';
    ?>

## Exercice 6
Translate this code using 'if' and 'else' :  


    <?php
      echo ($myAge >= 18) ? 'You are an adult' : 'You are not an adult';
    ?>
## Exercice 7
Translate this code using 'if' and 'else' :  


    <?php
      echo ($myVariable == false) ? 'It\'s not good' !!!' : 'It\'s' ok !!';
    ?>
## Exercice 8
Translate this code using 'if' and 'else' :  


    <?php
      echo ($myVariable) ? 'It\'s ok !!' : 'It\'s not good !!!';
    ?>
