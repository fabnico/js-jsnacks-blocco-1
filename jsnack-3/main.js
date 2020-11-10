/*
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

var triangolo = {
   'base': 10,
   'altezza': 5
};

var area = (triangolo.base * triangolo.altezza) / 2;

console.log(area);

var ipotenusa = Math.sqrt((triangolo.base ** 2) + (triangolo.altezza ** 2));

console.log(ipotenusa);

var perimetro = triangolo.base + triangolo.altezza + ipotenusa;

console.log(perimetro);
