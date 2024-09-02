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


