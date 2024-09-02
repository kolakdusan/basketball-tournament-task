# config.js

Fajl `utils/config.js` sadrži konstante koje se koriste za upravljanje rezultatima utakmica i prilagođavanje:

- **Koeficijent za Odustajanje (`forfeitCoefficient`)**: Ovaj koeficijent (0.01) predstavlja koliko često tim odustaje od utakmica. U ovom slučaju, vrednost `0.01` znači da je verovatnoća odustajanja vrlo mala, tj. 1 od 100. Ako želite da povećate učestalost odustajanja, povećajte ovu vrednost. Na primer, promenom na `0.05` povećavate verovatnoću na 5 od 100.

- **Logistički Koeficijent (`logisticCoefficient`)**: Koeficijent (0.2) koji se koristi u logističkim funkcijama ili modelima za prilagođavanje rezultata ili rangiranja na osnovu određenih uslova. Da biste promenili način na koji se prilagođavanje primenjuje, modifikujte ovu vrednost. Više vrednosti će povećati osetljivost logističke funkcije.

- **Koeficijent za Prilagođavanje Forme (`formAdjustmentCoefficient`)**: Koeficijent (0.25) koji se koristi za prilagođavanje performansi tima na osnovu nedavnih rezultata. Prilagodite ovu vrednost kako biste promenili uticaj nedavnih rezultata na rangiranje tima. Povećanjem vrednosti, nedavni rezultati će imati veći uticaj, dok će smanjivanje vrednosti smanjiti njihov uticaj.


Testirajte uticaj ovih prilagođavanja kako biste pronašli odgovarajuću ravnotežu za vašu aplikaciju.


# Struktura Projekta

### `core/`
Glavna logika za različite faze turnira (grupna faza, žrebanje, eliminaciona faza).

### `print/`
Moduli za štampanje i formatiranje rezultata faza turnira.

### `services/`
Usluge za rad sa podacima.

### `utils/`
Korisne pomoćne funkcije i moduli.

## Opis `utils` foldera

### `helpers`
Sadrži funkcije koje olakšavaju rad sa podacima, kao što su rad sa redovima (`Queue`) i nasumično premeštanje elemenata u nizu (`shuffleArray`).

### `match`
Obuhvata funkcionalnosti vezane za simulaciju i analizu utakmica, uključujući praćenje rezultata, simulaciju bodova, i upravljanje slučajevima kada tim odustane.

### `matchStats`
Upravljanje statistikom utakmica, uključujući kreiranje modela za statistiku i analizu rezultata utakmica za timove.

### `teamStats`
Obuhvata funkcionalnosti za upravljanje statistikom timova, uključujući primenu rezultata iz prijateljskih utakmica, ažuriranje statistike tima i kalkulaciju verovatnoće pobede.

### `scheduling`
Sadrži funkcije za planiranje utakmica, uključujući generisanje rasporeda utakmica, dodavanje utakmica u kola i kreiranje jedinstvenih parova.

### `sort`
Pruža funkcionalnosti za sortiranje timova, uključujući sortiranje prema bodovima, razlici u bodovima i kreiranje grupa timova koji su izjednačeni.
