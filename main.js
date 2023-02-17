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


// var heureOuverture = 9;

// var heureFermeture = 17;

// var heureActuelle = 8;




// if (heureActuelle < heureOuverture) {
//     alert('il est trop tôt')
//   }else if (heure >= heureOuverture && heure <= heureFermeture) {
//     if (heureActuelle < 12) {
//       alert('bienvenu nous sommes le matin')
//     } else {
//       alert("bienvenu nous sommes l'apres-midi")
//     }
//   } else {
//     alert('revenez demain')
//   }

    
//   if (heureActuelle < heureOuverture) {
//     alert('il est trop tôt')
//   }else if (heureActuelle >= heureOuverture && heure <= heureFermeture) {
//     // if (heure < 12) {
//     //   alert('bienvenu nous sommes le matin')
//     // } else {
//     //   alert("bienvenu nous sommes l'apres-midi")
//     // }
//     (heureActuelle < 12) ?
//     alert('bienvenu nous sommes le matin')
//      :
//     alert("bienvenu nous sommes l'apres-midi")
//   } else {
//     alert('revenez demain')
//   }

// var  note = 15;
// var noteAmericaine = "";

// if (note > 19 ) {
//     noteAmericaine = "A+"
// }else if (note >= 18 && note <= 19) {
// noteAmericaine = "A"  
// }else if (note >= 15 && note <18) {
// noteAmericaine = "B"  
// }else if (note >= 12 && note <15) {
// noteAmericaine = "C"  
// }else if (note >= 9 && note <12) {
// noteAmericaine = "D"  
// }else if (note >= 6 && note < 9) {
// noteAmericaine = "E"  
// }else if (note < 6){
// noteAmericaine = "F"  
// }else {
//     noteAmericaine = "ABS"
// }

// le case ne prend pas le valeur unique (number string ext)
// on peut maitre un swich dans un if mais pas if dans le case

// switch (noteAmericaine) {

//         case "A+":
//         alert ("Excellent travail")
//         break;

//         case "A":
//         alert ("Trés bon travail")
//         break;

//         case "B":
//         alert ("Bon Travail")
//         break;
       
//         case "C":
//         alert ("Trravaille corect")
//         break;

//         case "D":
//         alert ("Travail moyen")
//         break;
       
//         case "E":
//             alert ("Travail Insuffisant")
//             break;
            
//         case "F":
//             alert ("Nul")
//             break;

//     default:
//         alert("non definie");
//         break;
// }



//console.log("Excellent travail")
// idem
//alert ("Excellent travail")


//EX SWICH CASE 
// Afficher la valeur d'une réduction déterminée par calcul. 
// Ce calcul tiendra compte du montant introduit dans une fenêtre pop-up. 
// Elle sera nulle tant que le montant de la facture n'atteint pas les 1000 €, de 5 % si le montant est compris entre 1000 et 2500 € 
// et de 10 % si le total facture dépasse les 2500 €.


// var facture = 500 ;
// var reduction = 0;

// if (facture < 1000 ) {
//     reduction = 0;
// }
// else if (facturre >= 1000 && facture >=2500 ) {
//     reduction = 5 ;
// }
// else {
//     reduction = 10;
// }


// var total = facture-((reduction /100)*facture);


// switch (reduction) {

//     case 5: 
//     alert ("total")
//     //console.log("total : ", total)
//     break;

//     case 10: 
//     alert ("total")
//     //console.log("total : ", total)
//     break;

//     default: 
//     alert ("autre")
//     //console.log("autre : ", facture);
//     break;
// }

//c'est mieux et plus corect

// switch (reduction){
//     case 0:
//     console.log("pas de reduction : ", facture);
//     break;
//     default:
//     console.log("total : ", total);
//     break;
// }


// var arrayNbr = [1 ,2 ,3];
// var arrayStr = ["a", "b", "c"];

// arrayNbr.push(4); // envoie le 4 à la fin du tableau [1 ,2 ,3, 4]
// arrayNbr.pop(); // retire le dernier du tableau car renvoi [1,2]
// arrayNbr.shift(); //[2,3] retire la premiere valeure
// arrayNbr.unshift(0); //[0, 1 ,2 ,3, ] ajute la valeur indiqué au debut du tableau


// arrayStr.concat("d");
// console.table(arrayStr);

// console.table(arrayStr);

// console.log(arrayStr);

