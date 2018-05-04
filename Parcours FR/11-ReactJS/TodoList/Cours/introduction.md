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


## Introduction
React est une view library créée par Facebook et Instagram. React se limite à modifier la vue et utilise principalement un système avec des components. 
### Qu'est-ce qu'un component? 
Un component n'est qu'un bout de code qui peut être un simple bouton ou même toute une application.

![alt text](http://nitrajka.com/wp-content/uploads/2016/08/uimockscript.png)

Dans l'image ci-dessus, on peut voir les différents components de notre application qui vont du simple `EmployeeList` jusqu'à l'app.

Sur la gauche, un component avec un bouton, un header et une liste dont chaque élement est un component. Mais on peut encore décomposer la liste d'employés avec le component `EmployeeListItem` qui contient trois components : Profil Photo, Profil nom, Profil post.
On va voir avec React comment on peut partir de petits components tout simples pour en faire une interface complète.

React n'est pas le seul dans sa catégorie. Angular ou Backbone sont de "vrais" framework MVC. Il y a aussi le nouvel ELM.

## Créer un composant React
React permet de créer des views de manière **dynamique** plutôt que **statique**.

Pour notre premier composant, on va créer une class :
```JS
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```
Nous avons là notre premier component React. C'est un objet qui implémente la methode render, et retourne 
quelque chose qui ressemble à du HTML mais qui ne l'est pas. 

Normalement en HTML on utilise la class pour donner un nom à notre élément et pour pouvoir le sélectionner. Ici on utilisera dans le HTML non pas `class` mais `className`, parce que React utilise déjà Class. 

ASTUCE : Pour ne pas le confondre, utilise `className` lorsque tu veux faire du HTML dans une class React.

Le HTML que vous voyez s'appelle JSX (Javascript Extension). Nous allons voir en détail pourquoi React fonctionne de la sorte avec HTML.

Crée un fichier `Welcome.js` dans le dossier `Component` préalablement créer par tes soins dans le dossier `src`, et met le petit bout de code juste au-dessus dans ce fichier. Regarde ce qu'il se passe dans ton navigateur.

Rien ne se passe et c'est normal ! Il faut l'afficher :On a créé un component mais on n'a pas dit à notre application de l'afficher. Pour faire ça, on va retourner à la base de notre component qui est `App.js` et appeler le component `Welcome`.

```JS
<Welcome/> 
```

À l'endroit où l'on veut qu'il s'ajoute (en quelque sorte comme un include) mais dans le render. Tout ce qui se passe dans le render sera tout ce qu'il s'affiche à l'écran.

Et là c'est le bug... 

Il y a quelques règles de base à retenir pour mettre un component dans notre vue :
- Un component doit toujours contenir une method render dans laquelle se trouve un return
- Dans le return, c'est ici qu'on met le JSX mais il ne peut y avoir qu'une seule div principale : 

```
<div className="main">
    <div className="container">
        bonjour
    </div>
    <div className="container">
        Aurevoir
    </div>
</div>
```
-> c'est bon

MAIS


```
<div className="main">
    bonjour
</div>
<div className="container">
    Aurevoir
</div>
```
-> c'est pas bon

- Il faut aussi qu'on importe notre componant dans le fichier où l'on veut qu'il apparaisse
- Il faut qu'on exporte le componenet qu'on doit afficher

Donc, dans App.js on ajoute
```JS
    import Welcome from './component/Welcome';
```
(en français : on importe notre class "Welcome" -> de -> ./ (dans le même dossier) -> Welcome (qui revient à dire Welcome.js (React comprend que c'est du JS mais si c'est un autre langage il faut lui présiser)))

Si on ajoute le import ça fait une erreur de moins mais il nous en reste encore deux. 

Dans Welcome.js il faut qu'on lui dise qu'on veut exporter. Il y a 2 manières de faire :
```JS
class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}

export default Welcome;
```

ou 

```JS
export default class Welcome extends React.Component {
    render() {
      return <h1>Hello</h1>;
    }
}
```

Et là il nous reste qu'une seule étape qui est simplement de dire à notre projet que notre component est un component en ajoutant au-dessus dans Welcome.js :

```JS
import React from 'react';
```

Vous allez me dire "Diantre, mais comment importer React si on ne dit nulle part où il se trouve ?"
Pour faire simple, quand on ne met pas de ./ avant, par defaut il va chercher dans les node_modules que nodeJS à installer avec le react-create-app et un de ceux-là s'appelle React et il va donc le charger.

Si tout s'est bien passé, on devrait avoir notre application qui tourne correctement avec notre tout premier component !

![Giphy](https://www.acsu.buffalo.edu/~cas7/gifs/react.gif)


Rendez-vous à la prochaine leçon : [Dom](./Dom.md).


