# L'Amélioration progressive
## Sprint : Amélioration progressive

- Emplacement : [GitHub](https://github.com/) sur un repository intitulé "`progressive-enhancement`"
- Visualisation : Faire en sorte que votre projet soit consultable via GitHub Pages et mettre le lien dans votre repo GitHub.
- Slides : [La typographie web](https://drive.google.com/file/d/0B1mdnkbeKh9FVkRRR1E1WmdXZkk/view?usp=sharing)

## 1. Sémantique HTML
- Ca veut dire quoi "**sémantique**" ?
Pour bien composer un document HTML, il faut raisonner en terme de structure du document.
Utiliser une balise "titre" pour un titre, une balise "définition" pour une définition, etc.
Concrètement, se poser la question: "*Ce bout de texte, c'est quoi : un titre ? Un paragraphe ? Une légende ? Et ce bloc, est-ce un chapitre ? Une note de l'auteur ?*" et en fonction de la réponse, choisir la balise correspondante ou s'en rapprochant le plus.

- **Pourquoi** la sémantique est importante pour le web developer ?
googlebot (donc SEO organique) + Accessibilité (liseuses d'écran).
Le googlebot est une calculatrice chargée de retourner à un humain les meilleurs résultats possibles pour ce qu'il a cherché (quelques mots). Elle analyse le contenu d'une page HTML en lisant les balises, ce qui lui permet de "comprendre" ce dont parle la page. Si celle-ci semble correspondre à la recherche, elle va la retourner à l'utilisateur sinon, pas.

Par conséquent, si nos pages ne sont pas bien sémantiques, Google ne les montrera jamais, et vos sites n'auront pas de traffic. 

> Findability Precedes Usability
> In the Alphabet and on the Web.
> You Can't Use What You Can't Find.
> – [Peter Morville](https://thatsthespir.it/quote/view/10)

**À toi de jouer !**
- Retranscris [ce document Texte](doc-le-paysan-chinois.txt) en sémantique HTML, donc en utilisant les bons blocs HTML (pas de `div` ni de `span`)  
- Utilise les balises suivantes : `h1`, `h2`, `blockquote`, `q`, `img`, `p`, `img`, `hr`, `figure` et `caption`, `table`, `th`, `tr`, `td`, `ul` ou `ol` et `li`. 
- Retrouve, pour chacune de ces balises, l'origine de leur nom (c'est comme ça qu'on les retient). En cas de doute, cherche la réponse sur [html5doctor.com](http://html5doctor.com).
- Ajoute deux ou trois liens de ton choix dans la page HTML via la balise `a`
- Y-a-t-il une partie que l'on pourrait considérer comme une entête ? Si oui, regroupe la dans une balise `header`. 
- Et un pied de page ? Si oui, => balise `footer`
- Mets toutes les instances des mots "Bien" et "Mal" dans une balise `span` , `em` ou `strong`. 

### Les balises et les attributs
Trop de sémantique tue la sémantique. La règle (comme souvent en programmation) est :  
	**Le moins de code possible, mais autant que nécessaire.**

**Les attributs HTML** : ils permettent de définir les caractéristiques des balises. Imagine qu'il y ait une balise "humain". Exemple :
```<human name="Steve Job" nationality="USA" origin="Syria" job="CEO" company="Apple" hair="grey">Steven Paul Jobs, dit Steve Jobs, (San Francisco, 24 février 1955 - Palo Alto, 5 octobre 2011) est un entrepreneur... </human>```  

De la sorte, en augmentant la sémantique des balises par des attributs, on a ainsi clarifié pour une machine qui est cet humain là. Remarque la syntaxe :

``` <balise attribut="valeur">Contenu</balise> ``` 

**À toi de jouer !**
- Rajoute l'attribut `Alt` aux images. À quoi sert cet attribut ?  
- Ajoute une classe "*bien*" ou "*mal*" aux balises entourant les mots "Bien" et "Mal".
- Trouve l'attribut des liens permettant d'indiquer la page vers laquelle doit mener le lien, et ajoute-le.  
- Fais en sorte que lorsqu'on clique sur les liens, la page s'ouvre dans un nouvel onglet du navigateur.  
- Trouve l'attribut permettant d'afficher une petite boite de texte au survol des liens   
![Exemple](https://cdn.searchenginejournal.com/wp-content/uploads/2008/09/title-usability.jpg)
	
## 2. CSS (Le look)
 
### Les sélecteurs en CSS (part 1) : via la balise
Contrôler l'aspect du texte : `font-style` (serif / sans-serif), `font-size`, `color`, `line-height`.

**À toi de jouer !**
- stylise les paragraphes : utilise une police à empatement, augmente un peu l'interlignage, utilise une taille de base bien lisible. Donne au texte de couleur foncée, mais pas noire.
- stylise les liens de manière à les rendre bien lisibles.
- stylise l'état "survolé" et l'état "visité" des liens.
- le **bloc** : margin / padding / Width / Height  

#### Une balise en forme de bloc ?

Une balise est rendue sous forme de "bloc". Tu peux contrôler les dimensions et les espacements de ce bloc :   
![Le bloc](https://www.dropbox.com/s/jhv1lod1kw1ieas/Capture%20d%27%C3%A9cran%202017-05-15%2023.39.38.png)

- `width`/`height` : dimensions
- `border` : contrôle la bordure. Par exemple : `border:1px solid #FF0000;` crée un bord fait d'un trait continu (`solid`) rouge `#FF0000` et de 1px d'épaisseur.
- `padding` : l'espace entre le contenu du bloc et son contour (le `border`). Le padding "gonfle" le bloc.  
- `margin` : l'espace autour du bloc, à l'extérieur de lui. Le margin distancie le bloc de son entourage.  

**À toi de jouer !**
- Donne au `body` une largeur maximum de 90% 
- Ensuite, centre le `body` en jouant avec la propriété `margin`  
- Fais en sorte que les citations ne prennent en largeur que la moitié de la page   
- En utilisant uniquement la propriété `margin`, positionne les citations au milieu.  
- Augmente la taille du texte dans les citations à 160% de la taille du texte par défaut  
- Donne une couleur légèrement grisée au fond des citations   
- Ajoute une bordure à gauche de chaque citation, de 3px et de couleur brique    
- Le texte des citations touche la bordure, ce n'est pas joli. Ajoute un espace de 30px entre la bordure et le texte de la citation.  
- Fais en sorte que les citations aient un espace vide de 80 pixels au dessus et en dessous.  
	
#### Le background
Le fond du bloc : `background-color`, `background-image`

**À toi de jouer !**
- ajoute une couleur de fond à ton `body`
- change la couleur de fond pour utiliser un dégradé de couleur (va sur [http://www.colinkeany.com/blend/](http://www.colinkeany.com/blend/))
- ajoute une image de fond à ton `body`
- fais en sorte que l'image ne se répète pas 
- change son positionnement à `bottom right` 
- change sa taille à `cover`

### Les sélecteurs en CSS (part 2) : 
#### Les plus courants
Le plus souvent, on sélectionne les éléments à styliser via l'attribut `class` (`.nom-de-la-classe`) et `id` (`#nom-de-lid`).  

**À toi de jouer !** 

En utilisant uniquement la balise comme sélecteur, mets toutes les citations en italique.  
- Identifie les citations des villageois et celles du fermier en assignant à chacune une classe correspondante.
- Change la couleur du bord gauche des citations en fonction de la personne qui parle.  
- Sélectionner via parent et enfant  

**À toi de jouer !**

- Sélectionne un élément du `header` et donne lui un fond jaune.
Tous les autres sélecteurs : 
-  `+` et `>` 
-  Sélectionner via l'attribut `[attribute]`
-  Il y en a quelques autres. Pour te faire une idée de ce qu'ils permettent, va lire la petite [doc officielle](https://www.w3schools.com/cssref/css_selectors.asp), puis joue à [CSS Diner](http://flukeout.github.io/)

**À toi de jouer !**

- Mets en italique le texte des citations
- Mets en lettres majuscules toutes les instances des mots "bien" et "mal".
- Mets en rouge les mots "Mal"
- Mets en vert les mots "Bien"
- Stylise la table pour que la couleur de fond de chaque rangée soit en alternance grise ou blanche
- Au premier élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image ![bien](bien.png)  
- Au deuxième élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image  ![mal](mal.png)  
- Au troisième élément de la liste (les types de gens), joue avec `background-image` et `padding-right` pour faire apparaître l'image  ![chat](chat.png)  
- Mets en gras le premier paragraphe
		
### CSS de positionnement :  
Comprendre le flux (display `inline`/`inline-block`/`block`) 
- Théorie interactive : https://codepen.io/pixeline/pen/QvrbPv 
- Exercice : un menu horizontal https://codepen.io/pixeline/pen/PmdPYL 
- Exercice : une grille https://codepen.io/pixeline/pen/aWavWq  --  `float` va laisser le block flotter sur le block suivant (au lieu de le pousser à la ligne)--  Exercice : fais en sorte que le texte courre autour des images, en utilisant, sur les images, la propriété float (ajuste avec du margin pour distancier le texte de l'image).   --  sortir du flux: position `static` / `relative` / `absolute` / `fixed`   
- la propriété `position` permet de positionner un élément n'importe où (via les propriétés `top` et `left`), à partir des coordonnées de son premier parent en position: relative ou static. [Expérimente via ce Pen](https://codepen.io/pixeline/pen/vmzNjw?).
- Exercice : une [notification d'interface](https://codepen.io/pixeline/pen/dWqMxe)
- Exercice : [position absolue](https://codepen.io/pixeline/pen/JNaKJv) 
- Plus d'informations sur le positionnement CSS : http://fr.learnlayout.com

## 3. Web fonts
Par défaut, le navigateur utilise les polices de caractères installées sur l'ordinateur du client. Cependant, tu peux utiliser des polices de caractères spécifiques : les **webfonts**.
- Va sur [Google Webfonts](https://fonts.google.com/) : change la police de caractère de ton document à celle-ci : Open Sans. Si tu n'y arrives pas, [fais d'abord cet exercice](https://d157rqmxrxj6ey.cloudfront.net/chadsansing/20997/) (clique sur le bouton "remix").
- Choisis une autre police pour les titres, suffisamment différente.

## 4. Reset et Normalize
- Élimine le css utilisé par défaut par les navigateurs (`reset.css`), ou pars sur une base normalisée (`normalize.css`)  

## Du bon HTML ? 
- Vérifie que ton HTML est **valide** via le [validateur du w3c](https://validator.w3.org/)
- Vérifie que ton HTML permet **une bonne SEO organique**, via d'autres outils comme [Woorank (payant)](https://www.woorank.com/fr/)

## Exercice pratique terminant ce sprint
Sans aller voir le code source, reproduis le plus fidèlement possible les layouts suivants :    
- [homepage de turlututu.com](turlututu.png)

## Bonus
- Crée une version en HTML sémantique de ces documents et améliore la lisibilité en appliquant tout le css pour en améliorer le contenu. Cherche à produire un résultat favorisant la lecture, proche d'un article sur Medium :
- [8 façons simples d’améliorer la typographie dans vos designs](doc-ameliorer-sa-typo.txt) 
- [Petit Guide Typographique](doc-guide-typographie.txt)