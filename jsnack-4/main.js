/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/


function randomNum(){
   return Math.floor(Math.random() * 100)
}


var squadre = [];

for(var i = 0; i < 5; i++){
   var squadra = {};
   var name = prompt('Inserisci il nome della squadra')
   squadra.Nome = name;
   squadra.Punti = 0;
   squadra.Falli = 0;

   squadre.push(squadra);
}

console.log(squadre);

/*
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

for (var i = 0; i < squadre.length; i++){
   squadre[i].Punti = randomNum();
   squadre[i].Falli = randomNum();   
}
