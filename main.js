// const firstname = "Zuzanna";
// const lastname = "Sich";
// //const age = 26;
// var age = 26;
// console.log(firstname.length);


// var  my_time = new Date()
// alert(my_time);
// var dt= new Date();

// document.write(dt);


// var myTab = new Array();
// myTab['enfant'] = 'toto';
// myTab['maman'] = 'tati';
// myTab['papa'] = 'tutu';

// console.log(myTab);
// var a = 42;
// var b = 4.2;
// var c = -42;
// var d = "42";

// alert("ma variable a est de type : " + typeof(a) +
// "\nma variable b est de type : " + typeof(b) +
// "\nma variable c est de type : " + typeof(c) +
// "\nma variable d est de type : " + typeof(d)
//                     )

// var machaine = "exemple";
// var maChaine = new String("exemple");

// alert("ma variable machaine est de type: " + typeof(machaine) +
// "\nma variable maChaine est de type : " + typeof(maChaine));


// var n = null;
// var u = undefined;
// var nn = NaN;

// alert("ma variable n est de type: " + typeof(n) +
// "\nma variable u est de type : " + typeof(u) +
// "\nma variable nn est de type : " + typeof(nn));
// alert("ma variable")


// //les opérateurs mathématiques
// var x = 32;
// var y = 5;
// var z = 2;
// // multiplication
// alert(y*z);
// //division
// alert(y/z);
// //addition
// alert(y + z);
// // soustraction
// alert(y - z);
// // modulo est le restant d'une division
// alert(x % y);
// // priorité mathématiques
// // la multiplication est prioritaire
// alert (y+z*x)
// // l'addition est prioritaire
// alert((y+z)*x)

// // y = y + z équivaut à y += z additionne et affecte
// y += z // équivaut à y = y + z renvoi 7 car y = 5 + 2
// y *= z // équivaut à y = y * z renvoi 14
// y -= z // équivaut à y = y - z renvoi 12
// y /= z // équivaut à y = y / z renvoi 6
// y %= z // équivaut à y = y % z renvoi 0
// // renvoie la valeur de 0 car à chaque fois écrase la valeur précédente
// alert(y);


var heureOuverture = 9;

var heureFermeture = 17;

var heureActuelle = 8;




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








