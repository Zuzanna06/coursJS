

  
  
  var body = document.querySelector('body');
  var button = document.getElementsByTagName('button');

  button[0].addEventListener("click", function(){
    body.style.backgroundColor = 'rgb('+getRandomInt(256)+','+getRandomInt(256)+','+getRandomInt(256)+')';
  });
  

//   button[0].addEventListener("click", function(){
//     body.style.backgroundColor = 'rgb('+getRandomInt(256)+','+getRandomInt(256)+','+getRandomInt(256)+')';
//   });
  

  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//   console.log(getRandomInt(3));
//   // Expected output: 0, 1 or 2
  
//   console.log(getRandomInt(1));
//   // Expected output: 0
  
//   console.log(Math.random());
//   // Expected output: a number from 0 to <1


// var img = document.createElement("img");

// img.src = "JavaScript-localStorage.png";

// var block = document.getElementDyId("x");

// block.appendChild(img);


const img = document.querySelector('#img')
console.log('img', img);


img.setAttribute('src','img/JavaScript-logo.png');

// img.src =  "img/JavaScript-logo.png";

const test = document.getElementsByClassName('test')
console.log(test)



for (let index = 0; index < test.length; index++) {
console.log(test[index].getAttribute('id'));
}


Array.from(test).forEach(element =>{
    element.addEventListener(
      'click',
      function (e){
        console.log(e.currentTarget.id)
      }
      )
  });
