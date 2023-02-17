// console.log("ok");

// const prenom = ("Zuzanna");
// const nom = "Sich";
// const age = 44;
// const phrase = " Bonjour je m'apelle " + prenom +" "+ nom + " et j'ai " + age + " " + "ans";

// alert(phrase)


// for (let pas = 0; pas <= 5; pas++) {
//     // Ceci sera exécuté 5 fois
//     // À chaque éxécution, la variable "pas" augmentera de 1
//     // Lorsque'elle sera arrivée à 5, le boucle se terminera.
//     console.log('Faire ' + pas + ' pas vers l\'est');
//   }

// const div = document.getElementsByClassName('carres');

// Array.from(div) // pour transformer liste en tableau
// const arrDiv = Array.from(div)

// console.log(div);

// div[0].style.backgroundColor = 'rgb(255, 0, 0)';
// div[2].style.backgroundColor = 'rgb(255, 0, 0)';
// div[4].style.backgroundColor = 'rgb(255, 0, 0)';

// const array = [div];




// for (let index = 0; index < div.length; index++) {
//     if (index % 2 !=0) {
//         div[index].style.backgroundColor = 'rgb(255, 0, 0)'
//     } else {
//         div[index].style.backgroundColor = 'rgb(0; 255, 0)'
//     }

// }
// console.log(div);



const div = document.getElementsByClassName('carres')
const arrDiv = Array.from(div)


arrDiv.map((element, index) => index % 2 != 0 
? 
element.style.backgroundColor = 'rgb(255, 0, 0)'
:
element.style.backgroundColor = 'rgb(0, 255, 0)'

)


// // Pass a function to map
// const map = array.map(x => x * 2);

// console.log(map);
// // Expected output: Array [2, 8, 18, 32]



// Sofiane Correction

// 1) mouvaise pratique

// / div[0].style.backgroundColor = 'rgb(255, 0, 0)';
// // div[1].style.backgroundColor = 'rgb(0, 255, 0)';
// // div[2].style.backgroundColor = 'rgb(255, 0, 0)';
// // div[3].style.backgroundColor = 'rgb(0, 255, 0)';
// // div[4].style.backgroundColor = 'rgb(255, 0, 0)';

// Boucle for:

// // for (let index = 0; index < div.length; index++) {
// //   if (index % 2 != 0) {
// //     div[index].style.backgroundColor = 'rgb(255, 0, 0)'
// //   } else {
// //     div[index].style.backgroundColor = 'rgb(0, 255, 0)'
// //   }
// // }

// methode map:

// // div.map((element, index) => {
// //   if(index % 2 != 0){
// //     element.style.backgroundColor = 'rgb(255, 0, 0)'
// //   } else {
// //     element.style.backgroundColor = 'rgb(0, 255, 0)'
// //   }
// // })


// // div.map((element, index) => index % 2 != 0
// //    ?
// //   element.style.backgroundColor = 'rgb(255, 0, 0)'
// //    :
// //   element.style.backgroundColor = 'rgb(0, 255, 0)'
// // )
// // div.map((element, index) => {
// //   if(index % 2 != 0){
// //     return element.style.backgroundColor = 'rgb(255, 0, 0)'
// //   }
// //   return element.style.backgroundColor = 'rgb(0, 255, 0)'
// // })



//A COMPLETER photos jeudi 16 fevrier
//div[0].style.backgroundColor = 'rgb('

