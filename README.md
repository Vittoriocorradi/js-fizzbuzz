Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


ESERCIZIO


Creo una variabile containerFizzBuzz il cui valore sarà l'elemento div container che conterrà le varie stringhe del ciclo

Uso un ciclo che avrà come variabile i = 1 e che andrà avanti fino a che i non sia uguale a 100; ad ogni iterazione i aumenterà di 1

    Creo una variabile stringFizzBuzz il cui valore sarà l'elemento div che conterrà un numero, fizz, buzz o fizzbuzz

    Appendo a containerFizzBuzz l'elemento della variabile stringFizzBuzz

    Aggiungo all'elemento della variabile stringFizzBuzz una classe per le dimensioni dei riquadri in cui sarà contenuto il testo

    SE i è un multiplo di tre ma non di cinque

        la stringa riporterà Fizz su console, verrà aggiunto come append a stringFizzBuzz la parola Fizz e verrà aggiunta all'elemento la classe per determinarne il colore di background

    ALTRIMENTI SE i è un multiplo di cinque ma non di tre

        la stringa riporterà Buzz su console, verrà aggiunto come append a stringFizzBuzz la parola Buzz e verrà aggiunta all'elemento la classe per determinarne il colore di background

    ALTRIMENTI SE i è un multiplo sia di tre sia di cinque

        la stringa riporterà FizzBuzz su console, verrà aggiunto come append a stringFizzBuzz la parola FizzBuzz e verrà aggiunta all'elemento la classe per determinarne il colore di background

    ALTRIMENTI 

        la stringa riporterà i su console, verrà aggiunto come append a stringFizzBuzz il valore di i e verrà aggiunta all'elemento la classe per determinarne il colore di background

    

