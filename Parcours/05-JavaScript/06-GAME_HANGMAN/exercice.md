# Exercice : jeu du pendu
# Exercise : hangman

Info : le nombre d'essais est illimité
Info: the number of attempts is unlimited !

* Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R', ( EN : Create an array that contains the letters: 'B','O','N','J','O','U','R', )
* Créer un autre tableau pour mettre les lettres devinées : '_','_','_','_','_','_','_' ( EN : create another array that will hold the letters that need to be guessed )

* Écrivez une fonction appelée "guessLetter" cette fonction va 
    - Itérer à travers les lettres
    - Voir si la lettre deviné se trouve dans le mot 
    - Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
    - Afficher dans la console les lettre devinés
    - Le jeu doit savoir quand la partie est finie et féliciter le joueur


* Bonus: Se rapprocher du vrais pendu :
    - Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois. 
    - Si une lettre est entrée deux fois, ne rien faire.
    - compter le nombre de tentatives ratés
