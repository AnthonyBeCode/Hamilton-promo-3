# React

## Initiation

## React.JS, what ?
React.JS is an MVC library created in 2013 by facebook, **allowing to create performing user interfaces**
.

## What is React ? What is its use ? What is it good for ?

With the coming of [SPA](https://en.wikipedia.org/wiki/Single-page_application) applications running almost « realtime » like Gmail, Airbnb, SoundCloud or also Netflex, the JS frameworks and library never have been so popular.

![test](http://blog.altima-agency.com/wp-content/uploads/2015/08/nerd-seo.png)

On the one hand, users are becoming more mature and demand for this type of application is extremely satisfying in terms of experience. On the other hand, most developers are looking for better performance (interface fluidity, scalability and cost reduction) and enjoy writing nice code (code please, readability, power and maintainability).

It's hard to miss technologies like AngularJS, Angular(Google's frameworks), Backbone.js, Ember.js or KnockoutJS.

**The massive use of javascript changes the environment also from an SEO point of view**

## So… WTF with JavaScript?

The main problem with these frameworks is that the content is injected on the client side, after the page is loaded on the server side (unlike PHP for example): if you look at the source code, it's empty !

Under these circumstances, Googlebot could not crawl and index this content injected a posteriori : **catastrophic therefore from an SEO point of view ! (apparently...)**

Recently, Google announced that GoogleBot would now try to interpret crawl pages by running Javascript... *Would try to...*

## « We decided to try to understand pages by executing JavaScript »

In a post dated May 23, 2014 Google states that[GoogleBot can interpret JavaScript](https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html) and therefore have the ability to index what used to be invisible content (because generated client-side and not server-side, following along right...). However you can imagine having a that for the scale of the web today, it is a titan's work...

## « It’s hard to do that at the scale of the current web, but we decided that it’s worth it. »

On the developer's side, many initiatives to allow crawl and indexing of content generated in this way have developed but nevertheless remain costly or a minumum constraining in the life cycle of a project.

**That's where React comes in, THE solution! Are you still following?**

## What is React ?

[React](https://en.wikipedia.org/wiki/React_%28JavaScript_library%29) is a library (a composition of methods and functions) allowing you to develop interface with the particularity of **changing constantly**: you can think of a *real time* comment module or even the Facebook Ticker (which summarizes your friends' activity, again in almost "real time")

![react](http://blog.altima-agency.com/wp-content/uploads/2015/08/ticker.png)

The development and publication of this library is the result of the collaboration of a good [hundred developers](https://reactjs.org/acknowledgements.html) working for various companies including Facebook and Instagram : rather serious!

## The strengths of React

**« React is so fast because it never talks to the DOM directly. »**

**Intelligibility** : the product code is "clean" (easy to read, understand and maintain), its reading allows you to see immediately what your pplication will serve and look like.
**Les performance** : this is one of React's key features, the concept of the [Virtual DOM](https://reactjs.org/docs/refs-and-the-dom.html). React will focus on processing and displaying only the changes in a view (setting aside the rest of the view that does not change).
**The community** : ReactJS quickly won over the JS developer community. And that's not to mention React Native which allows you to publish native Iphone applications (and Android soon) by writing JavaScript. This saves considerable development time.
**[HOT SEO] Isomorphisme and server-side rendering(SSR)** : thanks to the use of a Noce server, the code can be generated on the client side **AND** on the server side (a bit like PHP so... but without reloading !) unlike other traditional JS Libraries and frameworks (Backbone.js, AngularJS, Ember.js, etc.) that natively execute code only on the client side (in the browser). This strong point is the one that interests us the most from an SEO point of view because it solves the problem of indexing content (ability to be crawled and indexed) populated only on the client side.

## Isomor… what ?

Just remember that the code between the client (your browser) and the server is the same! And put in another way, "The backend and frontend share the same code." (shown on the right in the diagram)

![schema](http://blog.altima-agency.com/wp-content/uploads/2015/08/isomorphisme.png)

D’ailleurs React n’est pas la seule bibliothèque « embarquant » cette technologie. A ce jour on dénombre déjà une bonne vingtaine telles que Brisket, Cassis, Catberry, Chaplin, Derby, Ezel, Este, Flatiron, Fluxible, Invisible, jsblocks, Loopback, Lazojs, Loopback, Mojito, Sara.js, San Stack et Taunus.
Moreover React is not the only library "embedding" this technology. To date there already about twenty such as Briskes, Cassis, Catberry, Chaplin, Derby, Ezel, Este, Flatiron, Fluxible, Invisible, jsblocks, Loopback, Lazojs, Mojito, Sara.js, San Stack and Taunus

Concernant la terminologie d’ailleurs, certains préfèrent parler d’[Universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) plutôt que d’isomorphisme. Il faut avouer que cette expression est plus simple à appréhender.

Concerning terminology, some prefer to speak of [Universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rather than isomorphism. We must admin that this expression is easier to understand.

« … this is purely anecdotal evidence, but when we use the word **universal** instead of **isomorphic** everyone gets it. »

## ReactJS ≠ AngularJS

**« Lots of people use React as the V in MVC. »**

***No need to compare them, React unlike AngularJS is not a framework.***

Si la [différence entre framework et bibliothèque](https://stackoverflow.com/questions/148747/what-is-the-difference-between-a-framework-and-a-library) vous obsède, n’hésitez pas à jeter un œil à ces discussions. Pour les autres, retenez juste que React n’impose pas d’architecture particulière à votre application et peut donc se greffer à n’importe quel projet utilisant d’autres technologies web (dont AngularJS), de manière complètement autonome.

**« React c’est juste la VUE…» **

## Comment fait-on ?

**On paye, ou on bricole !**

Si on n’a pas trop les moyens, on propose aux robots d’exploration une version HTML alternative (un snapshot) de ses pages grâce à Phantom.js. Oui, du cloaking ! C’est « sale » diront les puristes, difficile à maintenir, mais ça fonctionne, plutôt bien.

Sinon et si vous avez un peu de budget (ou un modèle économique qui tient la route) là c’est plutôt puissant et facile à mettre en place : ça s’appelle [Prerender](https://prerender.io/) ou [BromBone](http://www.brombone.com/) pour ne citer qu’eux. Si le sujet [« How to make your JavaScript apps SEO-friendly  »](http://odino.org/how-to-make-your-javascript-apps-seo-friendly/) vous intéresse, cet article est sympa.

![shema](http://blog.altima-agency.com/wp-content/uploads/2015/08/brombone-seo.png)

## Avantages de ReactJS pour le SEO

La possibilité pour les robots de crawler et d’indexer de manière native le contenu : on a **tous les avantages du JS, sans les inconvénients !**
Les temps de chargement favorables participent à une bonne expérience utilisateur. **Happy users = Happy Google**.
Et c’est tout !?  Oui, pour ce qui est du SEO. Tout dépendra de ce que vous en ferez ensuite côté implémentations back-office.  Et pour compléter l’analyse sur ce sujet je vous conseille de jeter un oeil à cet article Zack Argyle, développeur @Pinterest [« Stop Using React for EVERYTHING »](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644)

**« If you have a highly dynamic application that needs to rerender frequently, and you want to avoid the heavy weight of template diffing, you’re looking at a grass-type opponent and ReactJS’s virtual DOM will be super effective. However, if you’re site doesn’t have those needs, CHOOSE SOMETHING ELSE! »**

## Inconvénients de React ?

Pour faire simple, il n’y en a pas. Si on creuse un peu, on peut relever ceci :

La **documentation** progresse mais il y a encore quelque temps il n’était pas si simple de s’en sortir avec le seul Get started de Facebook.
**Facebook se réserve la possibilité de vous retirer la licence, le droit d’utiliser React**. Ce sujet fait débat bien que naïvement on peut se demander quel intérêt aurait Facebook d’adopter ce type de comportement.

## Qui utilise React ?

De plus en plus de sociétés ! Pour parler des plus connues on peut bien sûr citer Facebook, Instagram mais également Yahoo, Adobe, Airbnb, AdRoll, Asana, BBC, Century 21, Club Med, Dropbox, Feedly, Github, Khan Academy, KissMetrics, Netflix, Reddit, Salesforce, Twitter, WhatsApp et [pleins d’autres](https://github.com/facebook/react/wiki/Sites-Using-React).

![Giphy](https://media1.tenor.com/images/00ecffdc7134e3fa132ebe3505d73ae4/tenor.gif?itemid=6117320)



