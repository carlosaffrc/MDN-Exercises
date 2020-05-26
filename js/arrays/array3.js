let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
let myString = '';


myArray.pop();
myArray.push('Honda', 'Bison');

for(let i = 0; i < myArray.length; i++){
     let number = '(' + i + ')';
     myArray[i] = myArray[i].concat(number) ;
     
}

myString = myArray.join(' - ');

console.log(myString);