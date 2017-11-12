## Objectifs

- Améliorations des compétences en Markdown
- Améliorations des compétences en Git
- Apprentissage d'un workflow avec des contributeurs sur GitHub

## Instructions

Temps : 1 Jour

Réaliser un [Cadavre exquis](https://fr.wikipedia.org/wiki/Cadavre_exquis_(jeu)) avec GitHub

### Etape 1 : Initialisation
1. Créer un dépôt sur GitHub nommé "Exercice-Cadavre-Exquis-MonPrenom"
1. Créer un fichier *README.md*
1. En markdown, donner un titre à votre histoire
1. `clone` de votre dépôt sur votre ordinateur
1. Créer une branche __"developpement"__
1. Aller dans cette nouvelle branche
1. Rédiger *3* lignes de textes pour débuter une histoire dans le *README.md* __(en utilisant un maximum le markdown)__
1. Faire un `add`
1. Faire un `commit`
1. Faire un `push` de la branche __"developpement"__
1. Inviter vos collègues en tant que __contributeurs__

### Etape 2 : Contributions
1. Aller sur un dépôt où vous avez été invité
1. Faire un `clone`
1. Faire `git branch -a` pour afficher la liste des branches sur le serveur
1. Faire un `pull` de la branche __"developpement"__
1. Faire un `checkout` sur la branche __"developpement"__
1. Créer une branche nommée __"ajouts-votre-prenom"__ à partir de __"developpement"__
1. Ajouter vos *3* lignes de texte dans le *README.md* à la suite du précédent utilisateur 
1. Faire un `add`
1. Faire un `commit` 
1. Faire un `push`de la branche  __"ajouts-votre-prenom"__
1. Faire un `merge` de votre branche __"ajouts-votre-prenom"__ avec __"developpement"__
1. Faire un `push`de la branche  __"developpement"__
1. Faire ceci pour tous vos autres collègues

### Etape 3 : Versioning
1. Quand tous vos collègues sont passés chez vous, retourner sur votre dépôt
1. Faire un `merge` de "developpement" sur "master"
1. Faire un `tag` de "master" nommé __"version-1"__

### Etape 4 : Correction
1. Créer une branche "corrections" à partir de __"master"__
1. Faire les corrections d'orthographe. S'il n'y en a pas, ajouter la mention ("Sans faute")
1. Faire un `add`
1. Faire un `commit` 
1. Faire un `push`
1. Faire un `merge` avec __"master"__
1. Aller sur la branche __"developpement"__
1. Mettre à jour __"developpement"__ en faisant un merge avec la branche __"corrections"__

# English version

## OBJECTIFS

- Markdown Skills Improvements
- Git Skills Improvements
- Learning a workflow with contributors on GitHub

## Instructions

Time: 1 Day
Create an [Exquisite Corpse](https://en.wikipedia.org/wiki/Exquisite_corpse) with GitHub

### Step 1: Initialization

1. Create a GitHub repository named "Cadavre-exquis-MonPrenom"
1. Create a **README.md** file
1. In markdown, give a title to your story
1. `clone` your deposit on your computer
1. Create a `branch` _"developpement"_
1. Go to this new branch
1. Write **3** lines of texts to start a story in the **README.md** (using a maximum markdown)
1. Make an `add`
1. Make a `commit`
1. `Push` the branch ****"developpement"**
1. Invite your colleagues as contributors

### Step 2: Contributions

1. Go to a deposit where you have been invited
1. Make a `clone`
1. Do `git branch -a` to display the list of branches on the server
1. Make a `pull` of the branch ****"developpement"**
1. `Checkout` the **"developpement"** branch
1. Create a branch named *******"add-your-name"****** from ****"developpement"**
1. Add your 3 lines of text in the **README.md** following the previous user
1. Make an `add`
1. Make a `commit`
1. `Push` the branch **"add-your-name"**
1. Make a `merge` of your branch **"add-your-name"** with **"developpement"**
1. `Push` the **"developpement"** branch
1. Do this for all your other colleagues

### Step 3: Versioning

1. When all your colleagues have pushing to your repo, return to your deposit
1. Make a `merge` of ****"developpement"*** on **"master"**
1. Make a **"master"** `tag` named **"version-1"**
### Step 4: Corrections

1. Create a branch **"corrections"*** from **"master"**
1. Make the spelling corrections. If there is none, add the mention ("Without fault")
1. Make an `add`
1. Make a `commit`
1. Make a `Push`
1. Make a `merge` with **"master"**
1. Go to the branch **"developpement"**
1. Update **"developpement"** branch and make a `merge` with the branch **"corrections"**

## Ressources

- [Git Basics](https://rogerdudler.github.io/git-guide/index.fr.html)
- [Git Cheat Sheet](https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf)

![Git workflow](http://blog.launchdarkly.com/wp-content/uploads/2016/07/Slide2.jpg)

