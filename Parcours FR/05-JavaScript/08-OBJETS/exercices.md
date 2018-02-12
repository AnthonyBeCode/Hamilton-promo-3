# Exercice

## Français :fr:
(English version is below)

### Exercice 1: PNJ (Personnage non-joueur)

* Crée un objet `Character` qui contient les informations suivantes :

  - name (string)
  - age (numero)
  - items_to_give (tableau)


- afficher chaque information sur une ligne séparés dans la console __(for in)__

- faire une fonction `giveItem` qui permet au PNJ de donner un objet aléatoirement

### Exercice 2 : Shop

Crée un tableau avec des *objets* à vendre (épée, hache, sceptre, etc.)

Caractéristique de chaque objet :

- title (string)
- physic (int)
- magic (int)
- minLevel (int)
- available (boolean)

Manipulation :

- faire une fonction pour afficher tout les objets
- faire une fonction pour afficher les objets disponibles
- faire une fonction pour afficher les objets dont le niveau minimum est de 10

### Exercice 3: Personnage

* crée un objet `mainCharacter` qui possède le propriétés suivantes :

  - name (string)
  - level (int)
  - life (int)
  - weapon (object)
  - attack (function)
	

* l'objet `weapon` possède les propriétés suivantes :

	- name (string)
	- damage (int)

	
* Appeler la fonction `attack` du personnage

	- la fonction doit retourner :
		(le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)

### BONUS: Adversaire

* crée un objet `character` qui possède le propriétés suivantes :

	- name (string)
	- level (int)
	- life (int)
	- weapon (object)
	- attack (function)
	- receiveDamage (function)


* l'objet `weapon` possèe les propriétés suivantes :

	- name (string)
	- damage (int)


* crée un objet `opponentCharacter` a partir de `character`

* crée un objet `mainCharacter` a partir de `character`

* Appeler la fonction `attack` de `mainCharacter` afin qu'il attaque `opponentCharacter`
	- la fonction doit afficher dans la console (ligne par lige)
		+ (le nom du personnage) attaque (nom de l'adversaire)
		+ avec l'arme (nom de l'arme)
		+ et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
		+ (nom de l'adversaire) a maintenant (life de l'adversaire) de vie


## English :uk:

### Exercice 1: NPC (non-player character)

* Create an objet `Character` that contains the following informations :

	- name (string)
	- age (numero)
	- items_to_give (array)
	

- display each informations about him on separated lines in the console __(for in)__

- create a function `giveItem` that allow the NPC to give an item randomly

### Exercice 2: Shop

Create an Array with *objects* to sell (sword, axe, sceptre, etc.)

Characteristics of each object :

- title (string)
- physic (int)
- magic (int)
- minLevel (int)
- available (boolean)

Manipulation :

- create a function to display all the objects in the shop
- create a function to display all the objects available in the shop
- create a function to display all the objects having a minimum level of 10

### Exercice 3: Character

* create an object `mainCharacter` that have the following properties :

	- name (string)
	- level (int)
	- life (int)
	- weapon (object)
	- attack (function)


* the object `weapon` have the following properties :

	- name (string)
	- damage (int)


* Execute the method `attack` of the character
  - the function should return :
    (the name of the character) attacks with the weapon (name of the weapon) the damages are (the level of the character multiplied by the damage of the weapon)


### BONUS: Opponent

* Create an object `character` that has the following characteristics

	- name (string)
	- level (int)
	- life (int)
	- weapon (object)
	- attack (function)
	- receiveDamage (function)


* The object `weapon` have the following characteristics

	- name (string)
	- damage (int)


* Create an oject `opponentCharacter` from `character`

* Create an oject `mainCharacter` from `character`

* Call the function `attack` from `mainCharacter` to attack `opponentCharacter`
	- The function must display in the console (line by line)
		+ (name of the character) attacks (name of the opponent)
		+ with the weapon (nom de l'arme)
		+ and made to him (level of the character multiplies with the damage of the weapon) of damages
		+ (name of the opponent) has now (life of the opponent) health points
