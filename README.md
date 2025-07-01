# Inlämningsuppgift 3 - Javascript 3 React - Webshop 

#### Projekt på utbildningen:
[Front end webbutvecklare](https://gritacademy.se/front-end-webbutvecklare/) 400 YH-poäng - [Grit Academy](https://gritacademy.se/)  
(2023-2025)

#### Kurs
FE23 | JavaScript 3

#### Deploy på netlify
https://js3webshop.netlify.app/

___

## Uppgiften

### Applikation "Webshop"
I denna inlämningsuppgift ska du utveckla en enkel webbshop. Du kommer inte att använda något
backend, detta kommer du att simulera i uppgiften. Du kommer att skapa ett antal olika komponenter med React och bygga ett dynamiskt webbgränssnitt i en Single Page Application. Du kommer dessutom att deploya din applikation.

I applikationen ska användaren kunna:
1. Söka efter produkter och visa resultaten i en lista. Sökningen sker i produktens namn eller
beskrivning. En enkel "contains" är tillräcklig för att uppfylla detta krav.
2. Användaren ska ha möjlighet att lägga produkter till sin kundkorg. Om flera av samma produkt är
tillagda skall endast en synas men antalet av den produkten skall stämma.
3. Användaren ska ha möjlighet att ta bort produkter från sin kundkorg
4. En total skall visas i botten av kundkorgen.
5. I sökresultatet skall en bild och en länk till mer information visas. Om användaren trycker på mer
information kommer denna att visas i en modal popup.
6. Din applikation skall vara tillgänglig online (dvs deployad) - du kan t.ex. använda Netlify eller
Vercel.

Produkterna kan läggas i en JSON-fil som läses/inkluderas när applikationen startas. Produkterna
behöver minst följande egenskaper; namn, produktnummer, pris, en beskrivande text. Du behöver
skapa en JSON-fil med minst 10 produkter; dessa kan vara påhittade eller så blir du inspirerad av din
favoritbutik.

