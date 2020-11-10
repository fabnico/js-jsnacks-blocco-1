/*
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


var bikesList = [
   {
      'nome': 'bici1',
      'peso': 10
   },
   {
      'nome': 'bici2',
      'peso': 5
   },
   {
      'nome': 'bici3',
      'peso': 8
   }
];

console.log(bikesList)

var lightBike = bikesList[0];

for (var i = 0; i < bikesList.length; i++){
   if(bikesList[i].peso < lightBike.peso){
      lightBike = bikesList[i];
   }
}

console.log(lightBike)
