Uppgiften är att göra en webbapplikation för hemautomation. Det innebär att skapa en backend med ett REST-API eller WebSocket-API som ger ut kontinuerlig information om mätpunkter för rum i en fastighet. Eftersom du suttit mycket med webb känns det som rätt uppgift för dig!

URL:en för att hämta information om ett hus är enligt:
GET /homes/{id}/data
där {id} är en dynamisk identifierare för ett hus, t.ex. "hus1". URL:en blir då /homes/hus1/data.

Datat från API:t ska ha minst följande data enligt formen
{ "rooms": [ room... ] }
room: { "name": string, "temperature": float, "humidity": float }
string är en sträng ex: "rum1"
float är ett flyttal ex: 3.14

ett exempel på full data kan vara:
{ "rooms": [ { "name": "Vardagsrum", "temperature": 21, "humidity": 0.5 }, { "name": "farstun", "temperature": -3, "humidity": 95 } ] }

Vill du lägga till ytterligare information går det bra. Om du lägger till mer data, förklara gärna väldigt kort vad ytterligare egenskaper tillför, det kan räcka med en kommentar i koden.

Teknologin för backend går bra att göra med antingen ASP.NET MVC, eller NodeJS (Vi brukar själva använda .net core när vi gör backendlösningar). Något väldigt enkelt går bra ifall du inte brukar jobba med det. Frontend bör konsumera kontinuerligt ifrån API:t, t.ex. med en timer eller om du vill lösa det med websockets så går det också bra.

Skapa också en design för en frontend som konsumerar datat från backend och visar det. Det kan vara något enkelt som en lista, eller om du vill göra något mer avancerat med olika vyer - det är upp till dig. Vill du lösa uppgiften med något ramverk i frontend som Angular är det givetvis pluspoäng! Här har du möjlighet att imponera!

Lösningen går bra att zippa ihop och skicka tillbaka till mig. Har du några andra frågor är det bara att höra av dig så ska jag göra mitt bästa för att svara.
 
