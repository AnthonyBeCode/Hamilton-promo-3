# Exercice : jeu du pendu
# Exercise : hangman

Info : le nombre d'essais est illimité
Info: the number of attempts is unlimited !

* Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R', ( EN : Create an array that contains the letters: 'B','O','N','J','O','U','R', )
* Créer un autre tableau pour mettre les lettres devinées : '_','_','_','_','_','_','_' ( EN : create another array that will hold the letters that need to be guessed like so   '_','_','_','_','_','_','_' )

* Écrivez une fonction appelée "guessLetter" cette fonction va ( EN : write a function called "guessLetter", this function will : )
    - Itérer à travers les lettres ( EN : iterate through each letter)
    - Voir si la lettre deviné se trouve dans le mot ( EN : check if the guessed letter is in the word )
    - Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre ( EN : )
    - Afficher dans la console les lettre devinés ( EN : display guessed letters in the console)
    - Le jeu doit savoir quand la partie est finie et féliciter le joueur ( EN : the game must know when the game is completed and congratulate the player )


* Bonus: Se rapprocher du vrais pendu : (EN bonus: look like the real hangman game )
    - Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois. 
    (EN : keep in memory each guessed letter ( both correct and incorrect ) and only allow players to guess each letter once )
    - Si une lettre est entrée deux fois, ne rien faire. ( EN : if a letter is entered twice, nothing happens)
    - compter le nombre de tentatives ratés ( EN : count the number of failed attempts )
