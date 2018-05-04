# React

## Table des matières

1. [installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)
8. [LifeCycle](./LifeCycle.md)
9. [Deploiment](./Deploiment.md)
10. [Animation](./Animations.md)


## Props et State

Un élement hyper important de React, c'est les **props** ! Le props (propriété) est un paramètre qui nous permet de faire passer des informations d'un élément à un autre.

La syntaxe de base pour envoyer un props :

```JS
var valeur = 'bonjour';
<List NomDuProps={valeur}/>
```

Donc on appel le component puis on lui passe des paramètres comme une balise en html. Ici le nom du props est : "NomDuProps" et sa valeur est le contenu de la variable valeur.

pour récupérer la valeur du props, une fois dans le component List appelé juste au dessus, n'importe où dans la class, on utilisera :
```JS
var test = this.props.NomDuProps;
console.log(test);
```
Pour finir, dans la console, il affiche "bonjour".

Pour notre application, on va créer une ToDoList. Pour ce faire, dans le component App on va ajouter un component `List` dans le dossier Component. Pour le moment, il n'affiche pas grand chose.

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">

        </div>
    );
  }
}
```

(N'oubliez pas de l'importer dans App et d'importer React dans la list ; ) )

Pour passer des valeurs d'un component à un autre, il faut simplement ajouter une ou plusieurs props:

```JS
// Dans le render de App.js :
<List todos={['vaiselle','cuisiner']} NomDeMaProps2={valeur2} />
```
Pour afficher les données qui sont passé d'un component à un autre, retourner dans le component List:

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">
            {this.props.todos.length} // égale 2
        </div>
    );
  }
}
```

Ici nous avons afficher quelque chose de dynamique dans le render avec l'HTML. Lorsque on veux afficher le contenu d'une  variable dans le return, on utilise "{  }" sinon, on peut bien sûr créer des fonctions dans notre component pour traiter les informations qui nous sont envoyées.

```JS
export default class List extends React.Component {
  render() {
    function test(){
      return 'bonjour';
    }
    return (
        <div className="liste">
            {this.props.todos.length}
            {test()}
        </div>
    );
  }
}
```

Donc les informations passées en paramètres sont accessible avec l'attribut props. 

Pour notre App, on n'a un component pour afficher le nombre de tâches à réaliser (todos), actuellement il n'affiche que la taille, mais il nous faut aussi un component pour les créer et garder une logique de séparation des components. Appelons le <TodoForm /> dans App.

Crée un nouveau component appelé TodoForm, dans lequel tu vas faire un formulaire dans une div dans lequel il va y avoir deux choses (un input type text et un bouton).

```HTML
<div className="liste">
    <form>
        <input type="text" />
        <button>Ajouter</button>
    </form>
</div>
```

Tu dois voir un formulaire apparaitre avec un bouton et une input. L'idéal serais que à chaque fois que l'on execute notre bouton, qu'il ajoute une todo, donc chaque fois qu'on appuie sur le bouton il l'ajoute à notre App. On va lui passer un props aussi nomé onNewTodo. Dans ce props on peut passer des fonctions.

````JS
class App extends Component {
  onNewTodo(todo){
    console.log(todo);
  }
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bonjour</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoForm onNewTodo={this.onNewTodo} />
        <List todos={["vaiselle", "cuisine"]} />
      </div>
    );
  }
}
````

Dans le component TodoForm, nous avons un input et un bouton pour ajouter des "todo". Ce qu'on veux c'est que lorsque l'on clique sur le boutton, on recupère la valeur dans l'input et nous la passons au component parent. Utilise le "ref" dans l'input, c'est un attribut qui va recevoir une fonction, un objet, une simple chaine de caractère,... Et va donner un nom pour permettre de s'en servir plus tard.

```JS
<input type="text" ref={(input) => this.ToDoTitle = input} />
```

On crée une propriété ToDoTitle, pour prendre la valeur que l'on rentre dans l'input. Mais pour le moment pour elle ne s'affiche nulle part, on utilise this.ToDoTitle pour pouvoir avoir accès à la variable dans le component parent. 

le "(input)=>" est une nouvelle syntaxe pour faire une fonction en JavaScript ES6, faire function input(){this.ToDoTitle = input} reviens à faire la même chose. On va ajouter une function au bouton qui va arreter l'evenement en cours et nous afficher le contenu de la console.

```JS
AddTodo(event){ 
    event.preventDefault();
    console.log(this.ToDoTitle.value);
}
```

```JS
<button onClick={this.AddTodo.bind(this)} >Ajouter</button>
```

Si cela fonctionne on remplace le console.log par une "const" txt dans la quel on lui donne la valeur de l'input, dans ce cas ci, "this.ToDoTitle.value". Maintenant on va envoyer à la function parent (onNewTodo) les valeur qu'on à récupérées sous forme d'objet.


```JS
AddTodo(event){
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
        title: txt,
        createdAt: new Date()
    })
}
```

Alors on va sur notre page et test formulaire. Si tout va bien, il doit afficher: {title: "test", createdAt: Tue Nov 14 2017 15:30:56 GMT+0100 (CET)}.

Pour récapituler:
- On envoie en props la function onNewTodo vers le component TodoForm.
- TodoForm recoit la fonction
- On met à jours notre variable txt lorsqu'on click sur le boutton grace à la fonction AddTodo
- On appel la fonction onNewTodo depuis le props
- On lui passe les paramètres nescessaire
- On execute la function donc le console.log

Bon c'est certain, c'est trop cool mais en vrai ça sert à rien ^^, Maintenant le but est d'envoyer le tout dans notre component List.

Un truc tout simple aurait été d'envoyer un table vers l'autre component (nosTodo.push(todo)) mais React a fait quelque chose d'autre pour nous. Un composent à deux types de données :
- Les données propres aux composants -> **State**
- Les données qui lui sont passées -> **Props**


Un truc tout simple aurais pu être d'envoyer une table vers l'autre component (nosTodo.push(todo)) mais React à fais quelque chose d'autre pour nous. Un composant à deux types de données:
- Les données propres au composants -> State
- Les donnée qui lui sont passée -> Props
Ce qu'on va faire à la place, c'est que nous allons mettre à jour ce fameux state.
Le state est donc un objet interne à notre component et pour l'utiliser on doit utiliser un constructor pour le déclarer et la fonction setState() pour le modifier. Le constructor est une foncion qui va mettre en place les premiers paramètres de notre component. Donc dans le App.js : 
```JS
constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}

onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
}
```
Mais alors pourquoi on a fait newTodoList.push(todo) tout de suite ? La seul manière que react nous donne pour modifier le state, est la fonction setState(), toute autre tentative sera ignoré. Et maintenant que nous avons un state, nous pouvons le passer dans le component List en props: <List todos={this.state.todos} />
Si on test, on remarquera que ça ne fonctionne pas parce que ça ne fonctionne pas... Cannot read property 'todos' of undefined. On n'envoie pas le bon "this" a notre fonction et pour se faire, il faut bind(this) pour la fonction. (Un peu bizarre je vous l'accorde mais ça marche)

```JS
<TodoForm onNewTodo={this.onNewTodo.bind(this)} />
```

Gardez bien en tête le state et le props qui sont deux éléments très très important dans react. Le props permet de passé des informations d'un component à un autre, peu importe que ce soit un objet, une variable, une fonction, le state, ... Le state lui est un objet qui reste juste à portée de notre component et on peut le modifier uniquement avec le setState().

Avant de passé à la suite, il existe une extention google pour React qui permet de voir comment il fabrique notre vue. C'est le react dev tools. Une fois installer, dans l'inspecteur, il y a un nouvel onglet qui est apparut (c'est le dernier donc il est peut être cacher). Avec ça, on peut voir les components de la vue et les props qui lui sont passé et aussi l'état du state sans devoir faire de console.log :)

![Giphy](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)

Rendez-vous à la prochaine leçon : [Interaction entre les components P1](./InteractionEntreComponentPartie1.md).
