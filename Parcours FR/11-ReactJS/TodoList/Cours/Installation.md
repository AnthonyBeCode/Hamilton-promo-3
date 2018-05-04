# React

## Table des matières

1. [Installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [DOM](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)
8. [LifeCycle](./LifeCycle.md)
9. [Deploiment](./Deploiment.md)
10. [Animation](./Animations.md)


## Installation
Pour travailler en React, nous avons besoin de Node js. S'il n'est pas déjà installé, on lance le terminal :

```
sudo apt-get update
sudo apt-get install nodejs npm
```

## Create React App
- Crée un dossier pour React dans lequel on mettra tous les projets.
- Installe et crée ton projet React avec le terminal.

Enfin utilise la commande `create-react-app` en global (avec `-g`). Cette commande crée le squelette de l'application.

```
create-react-app
npm install -g create-react-app
```

Une fois le package installé, on crée un dossier à l'endroit ou on souhaite stocker l'appli en tapant :

```
create-react-app
create-react-app serie
```
- [Plus d'info](https://reactjs.org/docs/installation.html)

### Pour générer une application et la démarrer

```
strat app
cd serie
npm start
```

Après avoir lancé la commande `npm start`, l'application est disponible ici : [localhost:3000](localhost:3000). Elle met en place un système de livereloading pour qu'à chaque fois qu'on sauve un fichier, l'appli se mette à jour sans devoir recharger la page.

Pour tester, modifie la ligne "Welcome To React" dans App.js par un autre titre puis vérifie dans le navigateur que tout se change automatiquement sans refresh.

![Giphy](https://media.giphy.com/media/pt0EKLDJmVvlS/giphy.gif)

Rendez-vous à la prochaine leçon : [Introduction](./introduction.md).
