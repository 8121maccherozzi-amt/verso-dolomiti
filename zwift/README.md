# Zwift ↔ piano "Verso le Dolomiti"

- `zwift-match.js`: lettura di file `.zwo`, metriche (durata, IF, TSS, tempo in zona, sforzi ≥88% FTP), punteggio di somiglianza 0–100, `bestMatches()`, `toZwo()` (genera il `.zwo` della seduta).
- `build-library.mjs`: `node build-library.mjs <cartella_zwo> zwift-library.json` crea la libreria compatta da qualsiasi raccolta di `.zwo`.

Punteggio: zone 30% · curva tempo-sopra-soglia 25% · struttura sforzi 20% · durata 15% · TSS 10% (`WEIGHTS`).
Fallback: se il miglior punteggio è < soglia (proposta 75), si usa `toZwo()` e si importa il file in
`~/Documents/Zwift/Workouts/<ID_Zwift>/`.

Da fare: adattatore `planToSegments()` sullo schema reale delle sedute; libreria dei workout Zwift.
