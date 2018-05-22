1. El programa ha de saber com crear ell mateix, per tant, hem de crear un sistema de creació de programes
dinàmic. Pot basar-se en què:
	- El programa es divideix en cicles
	- A cada cicle, sempre s'encén un conjunt de bombetes o una sola
	- A cada cicle, també hi ha un temps d'interval. Aquest també pot canviar a cada cicle

	- Per tant, podem fer un array en què cada posició equival a un cicle. Cada posició emmagatzemarà
 	  el conjunt de bombetes a encendre, i l'id.
	- Entre cada posició de l'array (entre cada cicle) hi haurà un "delay", aquest delay el guardarem
	  en un altre array que emmagatzemarà la quantitat exacte en milisegons de delay entre cada posició
          de l'altre array.
	- També podem fer un array bidimensional, i en cada filera, hauràn 2 posicions. Una indicant el conjunt
	  de bombetes a encendre i l'altre indicant el delay.
	- El programa interpreta aquest array, i hem de crear un mecanisme que entengui aquest array, y segons aquest,
	  el programa crea un JSON amb l'informació

	CANVI CORRECTE:
	- HI haurà un array bidimensional en què cada fila representa el conjunt de bombetes que s'ha d'encendre. Aquest 
	interval en què les bombetes estàn enceses, està delimitat per 2 temps. El primer temps és el d'inici, i el segon
	 el del final. Aquests dos temps es guardaràn també en la filera de l'array bidimensionl.

2. El programa al detectar que es clica el botó de crear, el que és simplement mostrar el menú de creació. 
Aquí, el menú es dividirà en línies de temps. Totes començen en el segon 0.
- Quan s'agrega una il·luminació de bombeta a una línia de temps, el programa pregunta exactament a quin segon
comença i a quin segon acaba. Segons això, crea un rectangle (per calcular l'allargada s'ha de fer una regla de 3).
- Així amb totes les bombetes que es vulgui.
- Quan s'acabi i es cliqui en el botó de guardar, el programa crea un array segons el que he explicat abans. Després crea
el JSON amb la informació a interpretar.
- Després aquest JSON amb el nom del programa s'agrega al dataService, on estàn tots els altres programes definits.



COSES PER FER:

- Creació del menú
- Creació de les línies de temps.
- Drag & Drop objectes.
- Mostrar diàleg al inserir un nou objecte.
- Guardar l'acció de l'objecte en l'array bidimensional (guardar els temps també)
- Guardar accions en l'array REPETIDAMENT
- Guardar el programa
- Convertir el programa JSON
- Poder executar el JSON desde la web*





______________________________
|  pins  |  pins   |  pins    |
|2s   5s |  2s  6s | 10s  13s |
______________________________



