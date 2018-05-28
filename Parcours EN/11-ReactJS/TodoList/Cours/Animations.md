# React

## Table of contents

1. [Setup](./Installation.md)
2. [Introduction](./introduction.md)
3. [Dom](./Dom.md)
4. [Props and State](./PropsEtState.md)
5. [Interacting with components P1](./InteractionEntreComponentPartie1.md)
6. [Interacting with components P2](./InteractionEntreComponentPartie2.md)
7. [Binding](./Binding.md)
8. [LifeCycle](./LifeCycle.md)
9. [Deployment](./Deploiment.md)
10. [Animations](./Animations.md)


## Animations

Set up an animation system on each todos that appears. To do that we will need a package and therefore to install it on our project. We'll cut the current nodeJs server to make a small command line:

```
npm install ReactCssTransition --save
```

To summarize, npm install to say that we install a package ReactCssTransition to tell which package --save, is to automatically add it to the package.json file that lists all packages used.

To use ReactCssTransitionGroup, nothing could be easier, we have to import the dependancy/library and also a small piece of css to do well:

```JS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';
```

```JS
<div className="messages">
    <ReactCSSTransitionGroup
        component="div"
        className="message"
        transitionName="message"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
    >
        {messages} //boucle pour afficher des éléments comme la Todo.
    </ReactCSSTransitionGroup>
</div>
```

```CSS
/* ----------------------------
	ANIMATIONS
---------------------------- */

.message-enter {
	opacity: 0;
  transform: translateY(100%);
  transition: all 0.2s;
}

.message-enter-active {
	opacity: 1;
	transform: translateY(0);
}

.message-leave {
	opacity: 1;
  transform: translateY(0);
  transition: all 0.2s;
}

.message-leave-active {
	opacity: 0;
	transform: translateY(-100%);
}
```

Pour le reste, ce n'est qu'un peu de configuration :)


![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)


