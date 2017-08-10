## Arbetsprov

### Instalation

Öppna en terminal i Root mappen och skriv

    ./tools/install.sh

### Att använda

För att köra applikationen i en dev miljö så
Öppna en terminal i Root mappen och skriv

    ./tools/start.sh


### Om applikationen

  Jag Har använt mig av NodeJS för att bygga backenden. Datan som applikationen jobbar med finns i en JSON fil. Jag valde att göra på det sättet då lösningen skulle zipas och jag kände att det är lättare att zippa en JSON än en databas. Jag försökte få datan att vara så lik exemplet som mäjligt och tror jag lyckats.

  Jag har tagit mig friheten att lägga till funktionalitet för att lägga till rum och hus, detta för att kunna testa så att clienten updateras.

  Att lägga till hus görs med följande kommando

     curl -H "Content-Type: application/json" -X PATCH -d '{"house5": {
             "adress": "testvägen 1",
             "rooms": [
               { "name": "Vardagsrum", "temperature": 21, "humidity": 0.5 },
               { "name": "Farstun", "temperature": -3, "humidity": 95 },
               { "name": "Köket", "temperature": 23, "humidity": 0.5 },
               { "name": "Toa1", "temperature": 30, "humidity": 0.6 },
               { "name": "Toa2", "temperature": 25, "humidity": 0.7 },
               { "name": "Sovrum1", "temperature": 19, "humidity": 0.4 },
               { "name": "Sovrum2", "temperature": 17, "humidity": 0.5 },
               { "name": "Garage", "temperature": 2, "humidity": 94 }
             ]
           }}' http://localhost:1337/house/

  och rum läggs till i befintliga hus med

      curl -H "Content-Type: application/json" -X PATCH -d '{ "name": "testrum", "temperature": 21, "humidity": 0.5 }' http://localhost:1337/house/house1


  Backenden är gjorde med NodeJS, jag har använt på express och socket.io detta mycket för att kunna göra tidigare nämda test komandon.
  Jag har använt mig av Backpack för att koka ihop det från JSX kod


  Klienten är gjord med React, och design ramverket Materiallize-react. Jag har även använt recharts för att göra diagramet.  
  Jag har använt Create-react-app för att få en stabil grund att stå på.

  Om det är några fråger eller kommentarer är det bara att höra av sig på

  h.jarleborn[snabbelA]gmail.com
