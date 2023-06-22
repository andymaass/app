// Erstelle ein Array mit den Zahlen 1, 2, 3, 4, 5. Schreibe eine Schleife, die die Summe aller Zahlen im Array berechnet und das Ergebnis in der Konsole ausgibt.

var zahlenArray = [1, 2, 3, 4, 5];
var summe = 0;
for (var i = 0; i < zahlenArray.length; i++) {
    summe += zahlenArray[i];
  }
console.log("Die Summe aller Zahlen im Array beträgt: " + summe);