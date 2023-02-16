# <p align= "center"> Cours de JavaScript  </p>
![affichage](img/JavaScript-logo.png)
   ## <p align= "center"> Intoduction au JavaScript </p>  
   **JavaScript** est un langage de programmation qui permet de créer du contenu mis à jour de façon dynamique, de contrôler le contenu multimédia, d'animer des images, et tout ce à quoi on peut penser. Bon, peut-être pas tout, mais vous pouvez faire bien des choses avec quelques lignes de JavaScript.
   ## <p align= "center"> Qu’est-ce qu’une variable ? </p>  
   Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.
   Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.
   Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.
   Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. Nous allons illustrer leur utilité par la suite.
 


```
var maChaine = new String("")
var a = 42;
var b = 4.2;
var c = -42;
var d = "42";

alert("ma variable a est de type : " + typeof(a) +
"\nma variable b est de type : " + typeof(b) +
"\nma variable c est de type : " + typeof(c) +
"\nma variable d est de type : " + typeof(d)
)
```

La méthode alert() de JavaScript m'affiche une fenêtre ci-dessous:
![affichage](https://github.com/Zuzanna06/coursJS/blob/main/img/alert-ma-variable-typ.jpg)


```
var machaine = "exemple";
var maChaine = new String("exemple");

alert("ma variable machaine est de type: " + typeof(machaine) +
"\nma variable maChaine est de type : " + typeof(maChaine));
```

La méthode alert() de JavaScript m'affiche une fenêtre ci-dessous:
![affichage](https://github.com/Zuzanna06/coursJS/blob/main/img/2.png)


```
var n = null;
var u = undefined;
var nn = NaN;

alert("ma variable n est de type: " + typeof(n) +
"\nma variable u est de type : " + typeof(u) +
"\nma variable nn est de type : " + typeof(nn));
alert("ma variable")
```

La méthode alert() de JavaScript m'affiche une fenêtre ci-dessous:
![affichage](https://github.com/Zuzanna06/coursJS/blob/main/img/3.png)

## <p align= "center"> Operateur mathématiques </p>
operation matematique operateurs comparaison operateur d'affetion les 3 principaux

```
var x = 32;
var y = 5;
var z = 2;
alert(y)

y += z //équivaut y = y + z
alert(y) //renvoi 7
y *= z //équivaut y = y * z
alert(y) //renvoi 14
y -= z //équivaut y = y - z
alert(y) //renvoi 12
y /= z //équivaut y = y / z
alert(y) //renvoi 6
y %= z //équivaut y = y % z
alert(y) //renvoi 0
```

| Operateur | Définition | 
| :---------| :---------:|
| == | Permet de tester l'égalité sur les valeurs | 
| === | Permet de tester l'égalité en termes de valeurs et de types | 
| != | Permet de tester la différence en valeurs |
| <> | Permet également de tester la différence en valeurs |
| !== | Permet de tester la différence en valeurs ou en types |
| < | Permet de tester si une valeur est strictement inférieure à une autre |
| > | Permet de tester si une valeur est strictement supérieure à une autre |
| <= | Permet de tester si une valeur est inférieure ou égale à une autre |
| >= | Permet de tester si une valeur est strictement supérieure à une autre |





## <p align= "center"> Conditions </p>
<span style="color: #26B260">texte coloré en vert</span> 



```
if (heureActuelle < heureOuverture) {
    alert('il est trop tôt')
  }else if (heure >= heureOuverture && heure <= heureFermeture) {
    if (heureActuelle < 12) {
      alert('bienvenu nous sommes le matin')
    } else {
      alert("bienvenu nous sommes l'apres-midi")
    }
  } else {
    alert('revenez demain')
  }

    
  if (heureActuelle < heureOuverture) {
    alert('il est trop tôt')
  }else if (heureActuelle >= heureOuverture && heure <= heureFermeture) {
    // if (heure < 12) {
    //   alert('bienvenu nous sommes le matin')
    // } else {
    //   alert("bienvenu nous sommes l'apres-midi")
    // }
    (heureActuelle < 12) ?
    alert('bienvenu nous sommes le matin')
     :
    alert("bienvenu nous sommes l'apres-midi")
  } else {
    alert('revenez demain')
  }
```


```
var arrayNbr = [1, 2, 3];
var arrayStr = ["a", "b", "c"];
 
 arrayNbr.push(4); // [1, 2, 3, 4] ajoute la valeur indiqué à la fin du tableau
 
 arrayNbr.pop(); //[1, 2] retire la dernière valeur
 
 arrayNbr.shift(); //[2, 3] retire la première valeur
 
 arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau
 
 arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
 
 arrayStr.join('-'); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
 
 arrayStr.slice(1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial
 
 arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
 
 arrayStr.includes("c"); //true vérifie si la valeur existe
 
 arrayStr.indexOf("c"); //2 renvoi le position (index) de la valeur dans le tableau
 
 arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau
 
 arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
 
 arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
 
 arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
 
 arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test
 
 arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
 
 arrayNbr.every(el => el > 1); si tous les element respect la condition (TouF)
 
 arrayNbr.reverse(); enverse tout les element dans le tableau

```

| Méthode | Résultat |
|:-------:|:---------|
| push(4) |  ajoute la valeur indiqué à la fin du tableau ([1, 2, 3, 4])|
 | pop() | [1, 2] retire la dernière valeur|
 | shift() | [2, 3] retire la première valeur|
 | unshift(0) | [0, 1, 2, 3] ajoute la valeur indiqué au début du tableau|
 | concat("d")| fusionne des tableaux sans changer les valeurs du tableau initial|
 | join('-')|  a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial|
 | slice(1)|  ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial|
 | slice(-1)|  ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial|
 | includes("c")| true vérifie si la valeur existe|
 | indexOf("c")| 2 renvoi le position (index) de la valeur dans le tableau|
 | reduce((acc, cou)=> acc + cou ) |  additionne tous les éléments du tableau|



# Titre
## titre
### titre
#### titre
##### titre
###### titre
texte
> section
>
> ca part de ca !!
> **en gras**

quand j'ecri du texte
et ca donne ca

**gras**

***italique***

*italique*

1. numero 1
2. numero 2
3. numero 3

> section
>
> > avec section

1. num1
   1. sou num
      1. a
      2. b
      3. c
2. num 2


- bullet 1
  - sous bullet 1
    - ldkschsd
      - caree
  


- bullet 2
- bullet 3


        <html>
        <head>
        <title>Test</title>
        </head>
        toto

My favorite search engine is [Duck Duck DO](http://duckduck.com).


Une image ![Duck Duck DO](/img/banner_bg.jpg)


***
des lignes!
***
     

> section
