1. El programa ha de saber com crear ell mateix, per tant, hem de crear un sistema de creaci� de programes
din�mic. Pot basar-se en qu�:
	- El programa es divideix en cicles
	- A cada cicle, sempre s'enc�n un conjunt de bombetes o una sola
	- A cada cicle, tamb� hi ha un temps d'interval. Aquest tamb� pot canviar a cada cicle

	- Per tant, podem fer un array en qu� cada posici� equival a un cicle. Cada posici� emmagatzemar�
 	  el conjunt de bombetes a encendre, i l'id.
	- Entre cada posici� de l'array (entre cada cicle) hi haur� un "delay", aquest delay el guardarem
	  en un altre array que emmagatzemar� la quantitat exacte en milisegons de delay entre cada posici�
          de l'altre array.
	- Tamb� podem fer un array bidimensional, i en cada filera, haur�n 2 posicions. Una indicant el conjunt
	  de bombetes a encendre i l'altre indicant el delay.
	- El programa interpreta aquest array, i hem de crear un mecanisme que entengui aquest array, y segons aquest,
	  el programa crea un JSON amb l'informaci�

	CANVI CORRECTE:
	- HI haur� un array bidimensional en qu� cada fila representa el conjunt de bombetes que s'ha d'encendre. Aquest 
	interval en qu� les bombetes est�n enceses, est� delimitat per 2 temps. El primer temps �s el d'inici, i el segon
	 el del final. Aquests dos temps es guardar�n tamb� en la filera de l'array bidimensionl.

2. El programa al detectar que es clica el bot� de crear, el que �s simplement mostrar el men� de creaci�. 
Aqu�, el men� es dividir� en l�nies de temps. Totes comen�en en el segon 0.
- Quan s'agrega una il�luminaci� de bombeta a una l�nia de temps, el programa pregunta exactament a quin segon
comen�a i a quin segon acaba. Segons aix�, crea un rectangle (per calcular l'allargada s'ha de fer una regla de 3).
- Aix� amb totes les bombetes que es vulgui.
- Quan s'acabi i es cliqui en el bot� de guardar, el programa crea un array segons el que he explicat abans. Despr�s crea
el JSON amb la informaci� a interpretar.
- Despr�s aquest JSON amb el nom del programa s'agrega al dataService, on est�n tots els altres programes definits.



COSES PER FER:

- Creaci� del men�
- Creaci� de les l�nies de temps.
- Drag & Drop objectes.
- Mostrar di�leg al inserir un nou objecte.
- Guardar l'acci� de l'objecte en l'array bidimensional (guardar els temps tamb�)
- Guardar accions en l'array REPETIDAMENT
- Guardar el programa
- Convertir el programa JSON
- Poder executar el JSON desde la web*





______________________________
|  pins  |  pins   |  pins    |
|2s   5s |  2s  6s | 10s  13s |
______________________________



