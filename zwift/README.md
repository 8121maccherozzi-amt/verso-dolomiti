# Zwift ↔ piano "Verso le Dolomiti"

| File | Contenuto |
|---|---|
| `zwift-match.js` | parsing `.zwo`, metriche (durata, IF, TSS, tempo in zona, sforzi ≥88% FTP: numero/durata/intensità), punteggio 0–100, `bestMatches()`, `toZwo()` |
| `build-library.mjs` | `node build-library.mjs zwift-library.json <dir_ufficiali>=zwift seblambla=seblambla` |
| `zwift-library.json` | 1.405 workout: 1.220 ufficiali Zwift (`source: "zwift"`, 56 collezioni, solo metriche) + 185 seblambla (`source: "seblambla"`) |
| `seblambla/` | i 185 `.zwo` della libreria seblambla/zwift-workouts-library (licenza: uso e condivisione per allenamento personale): **vanno importati** in `~/Documents/Zwift/Workouts/<ID_Zwift>/` |

Fonte libreria: dump `zwift_workouts_all_collections_ordered_Mar21` (repo pubblico isc/web-erg) + `Pro_Training_Camp_Jumbo_Visma`
da JC-Concepts/WorkoutGenerator (Nov 2020). Limiti: fermo a marzo 2021 (workout più recenti assenti, alcuni nomi possono essere cambiati in Zwift).

`bestMatches(seduta, lib, { sources: ["zwift"] })` limita ai workout già presenti in Zwift.
Precedenza: un ufficiale Zwift passa davanti a un seblambla se è entro 5 punti (`prefer: "zwift", preferMargin: 5`); il punteggio mostrato resta quello reale.

Punteggio: zone 30% · tempo-sopra-soglia 25% · sforzi 20% · durata 15% · TSS 10%, penalità per tratti FreeRide.
Fallback: se il migliore è < 75 → `toZwo()` e import in `~/Documents/Zwift/Workouts/<ID_Zwift>/`.

Da fare: adattatore `planToSegments()` sullo schema reale delle sedute + integrazione nella dashboard.
