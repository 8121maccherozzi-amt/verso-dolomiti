# Zwift ↔ piano "Verso le Dolomiti"

| File | Contenuto |
|---|---|
| `zwift-match.js` | parsing `.zwo`, metriche (durata, IF, TSS, tempo in zona, sforzi ≥88% FTP: numero/durata/intensità), punteggio 0–100, `bestMatches()`, `toZwo()` |
| `build-library.mjs` | `node build-library.mjs <cartella_zwo> zwift-library.json` |
| `zwift-library.json` | 1.220 workout ufficiali Zwift, 56 collezioni (solo nome, collezione, metriche: nessuna struttura) |

Fonte libreria: dump `zwift_workouts_all_collections_ordered_Mar21` (repo pubblico isc/web-erg) + `Pro_Training_Camp_Jumbo_Visma`
da JC-Concepts/WorkoutGenerator (Nov 2020). Limiti: fermo a marzo 2021 (workout più recenti assenti, alcuni nomi possono essere cambiati in Zwift).

Punteggio: zone 30% · tempo-sopra-soglia 25% · sforzi 20% · durata 15% · TSS 10%, penalità per tratti FreeRide.
Fallback: se il migliore è < 75 → `toZwo()` e import in `~/Documents/Zwift/Workouts/<ID_Zwift>/`.

Da fare: adattatore `planToSegments()` sullo schema reale delle sedute + integrazione nella dashboard.
