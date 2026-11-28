# Zwift Workout Library

**185 structured indoor cycling workouts** for Zwift and MyWhoosh: 120 sessions of exactly 60 minutes, 60 sessions of 90 minutes, plus FTP tests and pre-race openers, organised as progressive ladders. Written for an intermediate cyclist (3-5 sessions per week). All targets are percentages of FTP, so keep your FTP up to date in the app. No cadence targets are prescribed: ride every session at your natural cadence.

Every workout description (visible in Zwift when you select it) starts with **PICK THIS WHEN** - when to choose that session - and **DAY TYPE** (easy / medium / hard), so you can pick from inside the app.

The same catalogue is available as a printable PDF with clickable index and bookmarks: [`Zwift_Workout_Library.pdf`](Zwift_Workout_Library.pdf).

## Contents

- [How the library is organised](#how-the-library-is-organised)
- [Power zones](#power-zones)
- [TSS and Zwift rating](#tss-and-zwift-rating)
- [Installation (Zwift)](#installation-zwift)
- [Installation (MyWhoosh)](#installation-mywhoosh)
- [Suggested weekly structure](#suggested-weekly-structure)
- [Index](#index)
- Catalogue
  - [Tests & Openers](#tests--openers)
  - [Endurance - 60 min](#endurance---60-min)
  - [Endurance - 90 min](#endurance---90-min)
  - [Sweet Spot - 60 min](#sweet-spot---60-min)
  - [Sweet Spot - 90 min](#sweet-spot---90-min)
  - [Threshold - 60 min](#threshold---60-min)
  - [Threshold - 90 min](#threshold---90-min)
  - [VO2max - 60 min](#vo2max---60-min)
  - [Mixed - 60 min](#mixed---60-min)
  - [Over-Unders - 60 min](#over-unders---60-min)
- [File format notes](#file-format-notes)
- [Repository layout](#repository-layout)

## How the library is organised

Each category is a ladder of **10 load levels** (L01 = easiest, L10 = hardest), 20 workouts per category. In this document the workouts are listed by increasing TSS. Several workouts can share a level: they have a similar load but a different structure, so use the level to progress and the PICK THIS WHEN text to choose between them.

- Start at the level you can complete comfortably, then move up one level every 1-2 weeks.
- If a level fails (power fades more than 5 % on the last block), repeat it or step back one level.
- In Zwift the sessions sort alphabetically, so the levels appear in order inside each folder.
- The 90-minute folders (`01_Endurance_90min`, `02_SweetSpot_90min`, `03_Threshold_90min`) extend each ladder with longer main sets. Use them for the long ride of the week, or when the 60-minute ladder tops out: the 60-minute sweet spot and threshold sessions are limited to about 40 minutes of work, so the top levels differ by only 1-2 % of intensity. The 90-minute sets go up to 2x30 at 92 % and 2x30 at 98 %.
- `00_Tests_and_Openers` holds the FTP tests (retest every 6-8 weeks), two pre-race openers and a 30-minute recovery spin.

## Power zones

| Zone | % FTP | Folder |
| --- | --- | --- |
| Z1 Active recovery | < 55 % | recoveries, cool-downs, Recovery Spin |
| Z2 Endurance | 56-75 % | 01_Endurance (L01-L08), Z2 filler in low levels |
| Tempo | 76-87 % | 01_Endurance (L07-L10), 05_Mixed |
| Sweet spot | 88-94 % | 02_SweetSpot (60 and 90 min) |
| Threshold | 95-105 % | 03_Threshold (60 and 90 min) |
| VO2max | 106-120 % | 04_VO2max |
| Anaerobic / neuromuscular | > 120 % | surges and sprints in 05_Mixed, Openers |
| Over-unders | 85-95 % under / 92-115 % over | 06_OverUnders |

Zones follow Coggan / TrainingPeaks levels, with TrainerRoad's 88-94 % sweet spot band. Colour code used in all graphs:

![Zone colours](docs/img/zones.png)

## TSS and Zwift rating

- **TSS** is estimated from the prescribed power (duration x intensity squared); actual TSS depends on how you ride it.
- **Zwift rating** is the in-game "Effort" score (x/5, half-star steps) shown in the workout picker. Zwift computes it from the structure; it depends mostly on intensity (normalised power), so a VO2max session scores higher than a sweet spot session of equal TSS, and micro-intervals score lower than long blocks.
- Values without `~` were read in Zwift. Values with `~` are predicted by a model fitted on 56 observed 60-minute sessions (30-second smoothed normalised power with half-star thresholds; 52/56 exact, the rest within half a star). `n/a`: 90-minute sessions and tests are not calibrated, because how Zwift weights duration is unknown.

## Installation (Zwift)

1. Copy the folders inside [`Zwift/`](Zwift) into `~/Documents/Zwift/Workouts/<your Zwift ID>/` (the `Documents/Zwift/Workouts/<ID>` folder is created the first time Zwift runs). Remove any previous version of these folders first.
2. Restart Zwift. The workouts appear under **Training > Custom Workouts**, grouped by folder. Select one to read its PICK THIS WHEN / DAY TYPE description.
3. Use the +/- bias in-game (or the FTP setting) if a session is clearly too hard or too easy.

## Installation (MyWhoosh)

MyWhoosh reads the same `.zwo` format, but there is no local workouts folder: every file goes through the web Workout Builder, one at a time. Use the files in [`MyWhoosh/`](MyWhoosh) (same names and folders as the Zwift set).

1. Open [workout.mywhoosh.com](https://workout.mywhoosh.com) and sign in with your MyWhoosh account.
2. Create New > import the `.zwo` file. Check the preview, then click **Export to MyWhoosh**.
3. Quit and relaunch the MyWhoosh app (the list is loaded at startup only). The workout is in **Workouts > MyWorkout**.

Things to know:

- MyWhoosh limits custom workouts with "slots" (free quota not published, more via subscription). Before uploading many files, create one throwaway workout and delete it to check whether deleting frees a slot. If slots are tight, upload only the level you are currently riding and swap as you progress.
- The `MyWhoosh/` files differ from the Zwift ones in two ways, because of how MyWhoosh handles captions and ramps: one caption per block (MyWhoosh shows all captions of a block at once, at its start), and ramped intervals are written as 1-minute power steps instead of a `Ramp` block. Durations, powers and TSS are identical.
- The FTP test uses free-ride blocks (`FreeRide`) for the 5-minute and 20-minute efforts. If the MyWhoosh builder rejects them, use the Ramp Test instead.

## Suggested weekly structure

- With 4 sessions: Tuesday hard session 1 (Threshold or Over-Unders), Thursday Sweet Spot, Saturday hard session 2 (VO2max or Mixed L06+), Sunday Endurance 90 min.
- Two hard days per week maximum, never back-to-back. Put the Endurance L01-L02 sessions after the hardest day.
- Base phase: Endurance + Sweet Spot. Build phase: Sweet Spot + Threshold / Over-Unders, then add VO2max. Race prep: Over-Unders L05+ and Mixed L06-L10; Openers the day before the event.
- Fuel every session at level 7 or above with carbohydrates before and during. Retest FTP every 6-8 weeks.

## Index

Workouts sorted by increasing TSS within each category. Zwift rating: `~` = predicted, `n/a` = not calibrated. Titles link to the detailed card with graph and 'pick this when' text.

### [Tests & Openers](#tests--openers) - `Zwift/00_Tests_and_Openers`

| Workout | Duration | TSS | Pick this when |
| --- | --- | --- | --- |
| [FTP Test 20 min](#ftp-test-20-min) | 60 min | 69 | Every 6-8 weeks, or when sessions at your level feel too easy. Fresh legs, well fuelled. |
| [Ramp Test](#ramp-test) | 37 min | 58 | Same purpose as the 20-min test but shorter; use the same test type each time so results are comparable. |
| [Openers 30 min](#openers-30-min) | 30 min | 24 | The day before a race or hard group ride. |
| [Openers 45 min](#openers-45-min) | 45 min | 36 | The day before an event when you want a bit more volume. |
| [Recovery Spin 30 min](#recovery-spin-30-min) | 30 min | 12 | The day after a race or a very hard session, or when the legs are flat. |

### [Endurance - 60 min](#endurance---60-min) - `Zwift/01_Endurance`

20 workouts - TSS 27 to 54 - Zwift 1 to 2/5

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [Recovery Waves 50-58%](#endurance-l01---recovery-waves-50-58) | 27 | ~1/5 | Easy |
| L01 | [Recovery Spin 40 min @ 55%](#endurance-l01---recovery-spin-40-min--55) | 28 | ~1/5 | Easy |
| L02 | [Easy Z2 45 min @ 58%](#endurance-l02---easy-z2-45-min--58) | 31 | ~1/5 | Easy |
| L02 | [Easy Z2 2x20 @ 60%](#endurance-l02---easy-z2-2x20--60) | 32 | ~1/5 | Easy |
| L03 | [Z2 45 min @ 62%](#endurance-l03---z2-45-min--62) | 36 | ~1/5 | Easy |
| L03 | [Z2 Waves 58-66%](#endurance-l03---z2-waves-58-66) | 36 | ~1/5 | Easy |
| L04 | [Z2 45 min @ 65%](#endurance-l04---z2-45-min--65) | 39 | ~1.5/5 | Easy |
| L04 | [Z2 Steps 58 to 72%](#endurance-l04---z2-steps-58-to-72) | 39 | ~1.5/5 | Easy |
| L05 | [Z2 2x20 @ 70%](#endurance-l05---z2-2x20--70) | 42 | 1.5/5 | Easy |
| L05 | [Z2 45 min @ 68%](#endurance-l05---z2-45-min--68) | 42 | 1.5/5 | Easy |
| L06 | [Z2 3x12 @ 74%](#endurance-l06---z2-3x12--74) | 45 | 2/5 | Easy |
| L06 | [Z2 45 min @ 71%](#endurance-l06---z2-45-min--71) | 45 | 1.5/5 | Easy |
| L07 | [Z2 + 3x5 Tempo @ 85%](#endurance-l07---z2--3x5-tempo--85) | 46 | 2/5 | Easy |
| L07 | [Z2 45 min @ 73%](#endurance-l07---z2-45-min--73) | 47 | 2/5 | Easy |
| L08 | [Upper Z2 45 min @ 75%](#endurance-l08---upper-z2-45-min--75) | 49 | 2/5 | Easy |
| L08 | [Z2 + 4x5 Tempo @ 85%](#endurance-l08---z2--4x5-tempo--85) | 49 | 2/5 | Easy |
| L09 | [Tempo 3x8 @ 84%](#endurance-l09---tempo-3x8--84) | 50 | 2/5 | Easy |
| L09 | [Negative Split 72 to 80%](#endurance-l09---negative-split-72-to-80) | 51 | 2/5 | Easy |
| L10 | [Low Tempo 45 min @ 78%](#endurance-l10---low-tempo-45-min--78) | 52 | 2/5 | Easy |
| L10 | [Tempo 2x15 @ 85%](#endurance-l10---tempo-2x15--85) | 54 | 2/5 | Easy |

### [Endurance - 90 min](#endurance---90-min) - `Zwift/01_Endurance_90min`

20 workouts - TSS 42 to 83

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [Recovery Waves 50-58%](#endurance-90-l01---recovery-waves-50-58) | 42 | n/a | Easy to medium |
| L01 | [Recovery Spin 70 min @ 55%](#endurance-90-l01---recovery-spin-70-min--55) | 43 | n/a | Easy to medium |
| L02 | [Easy Z2 75 min @ 58%](#endurance-90-l02---easy-z2-75-min--58) | 48 | n/a | Easy to medium |
| L02 | [Easy Z2 3x22 @ 60%](#endurance-90-l02---easy-z2-3x22--60) | 49 | n/a | Easy to medium |
| L03 | [Z2 75 min @ 62%](#endurance-90-l03---z2-75-min--62) | 55 | n/a | Easy to medium |
| L03 | [Z2 Waves 58-66%](#endurance-90-l03---z2-waves-58-66) | 55 | n/a | Easy to medium |
| L04 | [Z2 75 min @ 65%](#endurance-90-l04---z2-75-min--65) | 60 | n/a | Easy to medium |
| L04 | [Z2 Steps 58 to 72%](#endurance-90-l04---z2-steps-58-to-72) | 61 | n/a | Easy to medium |
| L05 | [Z2 75 min @ 68%](#endurance-90-l05---z2-75-min--68) | 65 | n/a | Easy to medium |
| L05 | [Z2 3x22 @ 70%](#endurance-90-l05---z2-3x22--70) | 66 | n/a | Easy to medium |
| L06 | [Z2 75 min @ 71%](#endurance-90-l06---z2-75-min--71) | 70 | n/a | Easy to medium |
| L06 | [Z2 4x15 @ 74%](#endurance-90-l06---z2-4x15--74) | 71 | n/a | Easy to medium |
| L07 | [Z2 + 5x5 Tempo @ 85%](#endurance-90-l07---z2--5x5-tempo--85) | 72 | n/a | Easy to medium |
| L07 | [Z2 75 min @ 73%](#endurance-90-l07---z2-75-min--73) | 73 | n/a | Easy to medium |
| L08 | [Z2 + 3x10 Tempo @ 85%](#endurance-90-l08---z2--3x10-tempo--85) | 76 | n/a | Easy to medium |
| L08 | [Upper Z2 75 min @ 75%](#endurance-90-l08---upper-z2-75-min--75) | 77 | n/a | Easy to medium |
| L09 | [Tempo 4x10 @ 84%](#endurance-90-l09---tempo-4x10--84) | 79 | n/a | Easy to medium |
| L09 | [Negative Split 72 to 80%](#endurance-90-l09---negative-split-72-to-80) | 80 | n/a | Easy to medium |
| L10 | [Tempo 3x15 @ 85%](#endurance-90-l10---tempo-3x15--85) | 82 | n/a | Easy to medium |
| L10 | [Low Tempo 75 min @ 78%](#endurance-90-l10---low-tempo-75-min--78) | 83 | n/a | Easy to medium |

### [Sweet Spot - 60 min](#sweet-spot---60-min) - `Zwift/02_SweetSpot`

20 workouts - TSS 49 to 68 - Zwift 2 to 3.5/5

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [4x5 @ 88%](#sweet-spot-l01---4x5--88) | 49 | ~2/5 | Medium |
| L01 | [2x10 @ 88%](#sweet-spot-l01---2x10--88) | 51 | ~2/5 | Medium |
| L02 | [3x8 @ 88%](#sweet-spot-l02---3x8--88) | 51 | 2/5 | Medium |
| L02 | [2x12 @ 88%](#sweet-spot-l02---2x12--88) | 53 | ~2/5 | Medium |
| L03 | [3x10 @ 88%](#sweet-spot-l03---3x10--88) | 55 | 2.5/5 | Medium |
| L03 | [2x15 @ 88%](#sweet-spot-l03---2x15--88) | 56 | 2.5/5 | Medium |
| L04 | [3x10 @ 90%](#sweet-spot-l04---3x10--90) | 57 | 2.5/5 | Medium |
| L04 | [5x6 @ 90% short rest](#sweet-spot-l04---5x6--90-short-rest) | 57 | 2.5/5 | Medium |
| L05 | [4x8 @ 90%](#sweet-spot-l05---4x8--90) | 58 | 2.5/5 | Medium |
| L05 | [2x16 @ 90%](#sweet-spot-l05---2x16--90) | 59 | 2.5/5 | Medium |
| L06 | [2x18 @ 90%](#sweet-spot-l06---2x18--90) | 62 | 3/5 | Medium |
| L06 | [3x12 @ 90%](#sweet-spot-l06---3x12--90) | 62 | 3/5 | Medium |
| L07 | [4x9 @ 91%](#sweet-spot-l07---4x9--91) | 63 | ~3/5 | Medium |
| L07 | [3x12 @ 92%](#sweet-spot-l07---3x12--92) | 64 | 3/5 | Medium |
| L08 | [2x18 @ 92%](#sweet-spot-l08---2x18--92) | 64 | 3.5/5 | Medium |
| L08 | [3x12 @ 93%](#sweet-spot-l08---3x12--93) | 65 | 3.5/5 | Medium |
| L09 | [4x9 @ 94% short rest](#sweet-spot-l09---4x9--94-short-rest) | 66 | 3.5/5 | Medium |
| L09 | [2x20 @ 92%](#sweet-spot-l09---2x20--92) | 67 | 3.5/5 | Medium |
| L10 | [1x40 @ 92%](#sweet-spot-l10---1x40--92) | 68 | 3.5/5 | Medium |
| L10 | [3x13 @ 93%](#sweet-spot-l10---3x13--93) | 68 | 3.5/5 | Medium |

### [Sweet Spot - 90 min](#sweet-spot---90-min) - `Zwift/02_SweetSpot_90min`

20 workouts - TSS 76 to 104

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [3x10 @ 88%](#sweet-spot-90-l01---3x10--88) | 76 | n/a | Medium to hard |
| L01 | [2x15 @ 88%](#sweet-spot-90-l01---2x15--88) | 77 | n/a | Medium to hard |
| L02 | [2x18 @ 88%](#sweet-spot-90-l02---2x18--88) | 80 | n/a | Medium to hard |
| L02 | [4x9 @ 88%](#sweet-spot-90-l02---4x9--88) | 80 | n/a | Medium to hard |
| L03 | [3x12 @ 90%](#sweet-spot-90-l03---3x12--90) | 82 | n/a | Medium to hard |
| L03 | [2x20 @ 88%](#sweet-spot-90-l03---2x20--88) | 83 | n/a | Medium to hard |
| L04 | [2x20 @ 90%](#sweet-spot-90-l04---2x20--90) | 85 | n/a | Medium to hard |
| L04 | [4x10 @ 90%](#sweet-spot-90-l04---4x10--90) | 85 | n/a | Medium to hard |
| L05 | [2x22 @ 90%](#sweet-spot-90-l05---2x22--90) | 88 | n/a | Medium to hard |
| L05 | [3x15 @ 90%](#sweet-spot-90-l05---3x15--90) | 88 | n/a | Medium to hard |
| L06 | [3x15 @ 92%](#sweet-spot-90-l06---3x15--92) | 91 | n/a | Medium to hard |
| L06 | [2x25 @ 90%](#sweet-spot-90-l06---2x25--90) | 92 | n/a | Medium to hard |
| L07 | [3x16 @ 92%](#sweet-spot-90-l07---3x16--92) | 93 | n/a | Medium to hard |
| L07 | [4x12 @ 92%](#sweet-spot-90-l07---4x12--92) | 93 | n/a | Medium to hard |
| L08 | [2x25 @ 92%](#sweet-spot-90-l08---2x25--92) | 95 | n/a | Medium to hard |
| L08 | [3x18 @ 91%](#sweet-spot-90-l08---3x18--91) | 95 | n/a | Medium to hard |
| L09 | [2x28 @ 92%](#sweet-spot-90-l09---2x28--92) | 99 | n/a | Medium to hard |
| L09 | [3x18 @ 93%](#sweet-spot-90-l09---3x18--93) | 99 | n/a | Medium to hard |
| L10 | [2x30 @ 92%](#sweet-spot-90-l10---2x30--92) | 102 | n/a | Medium to hard |
| L10 | [3x20 @ 93%](#sweet-spot-90-l10---3x20--93) | 104 | n/a | Medium to hard |

### [Threshold - 60 min](#threshold---60-min) - `Zwift/03_Threshold`

20 workouts - TSS 52 to 78 - Zwift 2 to 4.5/5

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [2x8 @ 95%](#threshold-l01---2x8--95) | 52 | ~2/5 | HARD |
| L01 | [3x6 @ 95%](#threshold-l01---3x6--95) | 53 | ~2.5/5 | HARD |
| L02 | [4x5 @ 96%](#threshold-l02---4x5--96) | 55 | ~2.5/5 | HARD |
| L02 | [2x10 @ 95%](#threshold-l02---2x10--95) | 56 | ~2.5/5 | HARD |
| L03 | [3x8 @ 96%](#threshold-l03---3x8--96) | 57 | ~3/5 | HARD |
| L03 | [2x12 @ 95%](#threshold-l03---2x12--95) | 59 | ~3/5 | HARD |
| L04 | [3x8 @ 98%](#threshold-l04---3x8--98) | 59 | ~3/5 | HARD |
| L04 | [2x12 @ 98%](#threshold-l04---2x12--98) | 61 | ~3/5 | HARD |
| L05 | [3x9 @ 97%](#threshold-l05---3x9--97) | 61 | 3/5 | HARD |
| L05 | [Progressive 3x8 (95 to 101%)](#threshold-l05---progressive-3x8-95-to-101) | 61 | ~3/5 | HARD |
| L06 | [2x15 @ 97%](#threshold-l06---2x15--97) | 65 | 3.5/5 | HARD |
| L06 | [3x10 @ 98%](#threshold-l06---3x10--98) | 65 | 3.5/5 | HARD |
| L07 | [3x10 @ 100%](#threshold-l07---3x10--100) | 67 | 3.5/5 | HARD |
| L07 | [5x5 @ 105%](#threshold-l07---5x5--105) | 67 | 4/5 | HARD |
| L08 | [4x8 @ 102%](#threshold-l08---4x8--102) | 71 | 4/5 | HARD |
| L08 | [2x18 @ 98%](#threshold-l08---2x18--98) | 72 | 4/5 | HARD |
| L09 | [2x20 @ 97%](#threshold-l09---2x20--97) | 74 | 4.5/5 | HARD |
| L09 | [3x12 @ 100%](#threshold-l09---3x12--100) | 74 | 4.5/5 | HARD |
| L10 | [3x13 @ 100% short rest](#threshold-l10---3x13--100-short-rest) | 77 | 4.5/5 | HARD |
| L10 | [2x20 @ 100%](#threshold-l10---2x20--100) | 78 | 4.5/5 | HARD |

### [Threshold - 90 min](#threshold---90-min) - `Zwift/03_Threshold_90min`

20 workouts - TSS 76 to 112

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [2x10 @ 95%](#threshold-90-l01---2x10--95) | 76 | n/a | HARD |
| L01 | [3x7 @ 96%](#threshold-90-l01---3x7--96) | 77 | n/a | HARD |
| L02 | [2x12 @ 95%](#threshold-90-l02---2x12--95) | 79 | n/a | HARD |
| L02 | [4x6 @ 97%](#threshold-90-l02---4x6--97) | 80 | n/a | HARD |
| L03 | [2x15 @ 95%](#threshold-90-l03---2x15--95) | 84 | n/a | HARD |
| L03 | [3x10 @ 96%](#threshold-90-l03---3x10--96) | 84 | n/a | HARD |
| L04 | [3x10 @ 98%](#threshold-90-l04---3x10--98) | 86 | n/a | HARD |
| L04 | [2x16 @ 97%](#threshold-90-l04---2x16--97) | 87 | n/a | HARD |
| L05 | [4x8 @ 100%](#threshold-90-l05---4x8--100) | 89 | n/a | HARD |
| L05 | [3x12 @ 97%](#threshold-90-l05---3x12--97) | 91 | n/a | HARD |
| L06 | [3x12 @ 99%](#threshold-90-l06---3x12--99) | 93 | n/a | HARD |
| L06 | [2x20 @ 97%](#threshold-90-l06---2x20--97) | 94 | n/a | HARD |
| L07 | [3x12 @ 100%](#threshold-90-l07---3x12--100) | 94 | n/a | HARD |
| L08 | [4x10 @ 100%](#threshold-90-l08---4x10--100) | 97 | n/a | HARD |
| L07 | [2x20 @ 100%](#threshold-90-l07---2x20--100) | 98 | n/a | HARD |
| L08 | [3x15 @ 98%](#threshold-90-l08---3x15--98) | 99 | n/a | HARD |
| L09 | [3x15 @ 100%](#threshold-90-l09---3x15--100) | 102 | n/a | HARD |
| L09 | [2x25 @ 98%](#threshold-90-l09---2x25--98) | 104 | n/a | HARD |
| L10 | [3x18 @ 100%](#threshold-90-l10---3x18--100) | 111 | n/a | HARD |
| L10 | [2x30 @ 98%](#threshold-90-l10---2x30--98) | 112 | n/a | HARD |

### [VO2max - 60 min](#vo2max---60-min) - `Zwift/04_VO2max`

20 workouts - TSS 49 to 73 - Zwift 2.5 to 5/5

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [10x1 @ 115%](#vo2max-l01---10x1--115) | 49 | ~2.5/5 | HARD |
| L01 | [4x3 @ 108%](#vo2max-l01---4x3--108) | 50 | ~2.5/5 | HARD |
| L02 | [5x3 @ 108%](#vo2max-l02---5x3--108) | 52 | 2.5/5 | HARD |
| L02 | [6x2 @ 115%](#vo2max-l02---6x2--115) | 53 | ~3/5 | HARD |
| L03 | [4x4 @ 108%](#vo2max-l03---4x4--108) | 53 | 3/5 | HARD |
| L03 | [5x3 @ 112%](#vo2max-l03---5x3--112) | 54 | 3/5 | HARD |
| L04 | [4x4 @ 115%](#vo2max-l04---4x4--115) | 57 | 3.5/5 | HARD |
| L04 | [30/30 3x10 (120/50)](#vo2max-l04---3030-3x10-12050) | 58 | 3/5 | HARD |
| L05 | [4x5 @ 110%](#vo2max-l05---4x5--110) | 59 | 3.5/5 | HARD |
| L05 | [5x4 @ 110%](#vo2max-l05---5x4--110) | 59 | 3.5/5 | HARD |
| L06 | [6x3 @ 115%](#vo2max-l06---6x3--115) | 60 | 3.5/5 | HARD |
| L06 | [5x4 @ 112%](#vo2max-l06---5x4--112) | 61 | 3.5/5 | HARD |
| L07 | [5x4 @ 115%](#vo2max-l07---5x4--115) | 63 | ~4/5 | HARD |
| L07 | [40/20 3x8 (125/50)](#vo2max-l07---4020-3x8-12550) | 64 | ~3.5/5 | HARD |
| L08 | [30/15 3x13 (120/50)](#vo2max-l08---3015-3x13-12050) | 67 | ~3.5/5 | HARD |
| L08 | [6x4 @ 112%](#vo2max-l08---6x4--112) | 67 | ~4.5/5 | HARD |
| L09 | [5x5 @ 112%](#vo2max-l09---5x5--112) | 69 | ~4.5/5 | HARD |
| L09 | [Hard-Start 6x4 (140 then 110)](#vo2max-l09---hard-start-6x4-140-then-110) | 70 | ~4.5/5 | HARD |
| L10 | [6x4 @ 118%](#vo2max-l10---6x4--118) | 73 | ~5/5 | HARD |
| L10 | [Ramped 6x4 (110 to 125)](#vo2max-l10---ramped-6x4-110-to-125) | 73 | ~5/5 | HARD |

### [Mixed - 60 min](#mixed---60-min) - `Zwift/05_Mixed`

20 workouts - TSS 45 to 71 - Zwift 1.5 to 4.5/5

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [Z2 + 6 Sprints](#mixed-l01---z2--6-sprints) | 45 | ~1.5/5 | Medium to hard |
| L01 | [Z2 + 4x1 @ 120%](#mixed-l01---z2--4x1--120) | 47 | ~2/5 | Medium to hard |
| L02 | [Tempo 3x8 @ 82% + Sprints](#mixed-l02---tempo-3x8--82--sprints) | 49 | ~2/5 | Medium to hard |
| L02 | [Z2 + 4x2 @ 105%](#mixed-l02---z2--4x2--105) | 51 | ~2/5 | Medium to hard |
| L03 | [Z2 + 4x1 @ 130%](#mixed-l03---z2--4x1--130) | 51 | ~2.5/5 | Medium to hard |
| L03 | [Tempo 3x10 @ 82% + Sprints](#mixed-l03---tempo-3x10--82--sprints) | 52 | ~2/5 | Medium to hard |
| L04 | [Sweet Spot 2x10 + 3x1 @ 120%](#mixed-l04---sweet-spot-2x10--3x1--120) | 54 | ~2.5/5 | Medium to hard |
| L04 | [Descending 92 / 88 / 84%](#mixed-l04---descending-92--88--84) | 55 | ~2.5/5 | Medium to hard |
| L05 | [Group Ride Simulation](#mixed-l05---group-ride-simulation) | 56 | ~2.5/5 | Medium to hard |
| L05 | [Zone Ladder Tempo-SS-Threshold](#mixed-l05---zone-ladder-tempo-ss-threshold) | 57 | ~2.5/5 | Medium to hard |
| L06 | [Climb Simulation 20 + 12](#mixed-l06---climb-simulation-20--12) | 62 | ~3/5 | Medium to hard |
| L06 | [Sweet Spot 2x10 + 4x2 @ 118%](#mixed-l06---sweet-spot-2x10--4x2--118) | 62 | ~3.5/5 | Medium to hard |
| L07 | [Anaerobic 20/40 x2 + Sweet Spot](#mixed-l07---anaerobic-2040-x2--sweet-spot) | 63 | ~3/5 | Medium to hard |
| L07 | [Zone Pyramid Tempo-THR-VO2-THR-Tempo](#mixed-l07---zone-pyramid-tempo-thr-vo2-thr-tempo) | 63 | ~3.5/5 | Medium to hard |
| L08 | [Crit Simulation 3x8 (95% + 15s surges)](#mixed-l08---crit-simulation-3x8-95--15s-surges) | 64 | ~3.5/5 | Medium to hard |
| L08 | [Race Simulation](#mixed-l08---race-simulation) | 65 | ~4/5 | Medium to hard |
| L09 | [Kitchen Sink](#mixed-l09---kitchen-sink) | 67 | ~4/5 | Medium to hard |
| L09 | [Threshold 2x10 @ 102% + 3x2 @ 120%](#mixed-l09---threshold-2x10--102--3x2--120) | 67 | ~4/5 | Medium to hard |
| L10 | [Hard Race Simulation](#mixed-l10---hard-race-simulation) | 71 | ~4.5/5 | Medium to hard |
| L10 | [Threshold 2x8 + 4x3 @ 118%](#mixed-l10---threshold-2x8--4x3--118) | 71 | ~4.5/5 | Medium to hard |

### [Over-Unders - 60 min](#over-unders---60-min) - `Zwift/06_OverUnders`

20 workouts - TSS 49 to 79 - Zwift 2 to 5/5

| Level | Workout | TSS | Zwift | Day type |
| --- | --- | --- | --- | --- |
| L01 | [Intro 2x8 (85/92)](#over-unders-l01---intro-2x8-8592) | 49 | ~2/5 | HARD |
| L01 | [Intro 3x6 (85/95)](#over-unders-l01---intro-3x6-8595) | 51 | ~2/5 | HARD |
| L02 | [3x8 (85/95)](#over-unders-l02---3x8-8595) | 55 | ~2.5/5 | HARD |
| L02 | [2x12 (88/95)](#over-unders-l02---2x12-8895) | 56 | ~2.5/5 | HARD |
| L03 | [3x10 (85/95)](#over-unders-l03---3x10-8595) | 58 | ~2.5/5 | HARD |
| L03 | [3x9 (90/100) 2+1](#over-unders-l03---3x9-90100-21) | 58 | ~3/5 | HARD |
| L04 | [3x10 (88/95)](#over-unders-l04---3x10-8895) | 59 | ~3/5 | HARD |
| L04 | [3x8 (90/102) 1+1](#over-unders-l04---3x8-90102-11) | 59 | ~3/5 | HARD |
| L05 | [3x9 (93/105) 2+1](#over-unders-l05---3x9-93105-21) | 62 | ~3/5 | HARD |
| L05 | [2x15 (92/102) 2+1](#over-unders-l05---2x15-92102-21) | 63 | ~3.5/5 | HARD |
| L06 | [2x15 (93/105) 2+1](#over-unders-l06---2x15-93105-21) | 65 | ~3.5/5 | HARD |
| L06 | [3x10 (90/105) 1+1](#over-unders-l06---3x10-90105-11) | 65 | ~3.5/5 | HARD |
| L07 | [3x12 (93/105) 2+1](#over-unders-l07---3x12-93105-21) | 70 | ~4/5 | HARD |
| L07 | [4x8 (90/110) 1+1](#over-unders-l07---4x8-90110-11) | 70 | ~4/5 | HARD |
| L08 | [Pyramid 4-8-10-8-4 (90 / 105-115)](#over-unders-l08---pyramid-4-8-10-8-4-90--105-115) | 72 | ~4.5/5 | HARD |
| L08 | [3x12 (95/108) 2+1](#over-unders-l08---3x12-95108-21) | 73 | ~4.5/5 | HARD |
| L09 | [2x18 (95/110) 2+1](#over-unders-l09---2x18-95110-21) | 74 | ~4.5/5 | HARD |
| L09 | [3x12 (92/110) 1+1](#over-unders-l09---3x12-92110-11) | 76 | ~4.5/5 | HARD |
| L10 | [2x20 (95/112) 3+1](#over-unders-l10---2x20-95112-31) | 78 | ~4.5/5 | HARD |
| L10 | [3x12 (93/115) 1+1](#over-unders-l10---3x12-93115-11) | 79 | ~5/5 | HARD |

## Catalogue

### Tests & Openers

FTP tests (20-minute and ramp), pre-race openers and a recovery spin. Variable durations, no level ladder. Files: [`Zwift/00_Tests_and_Openers`](Zwift/00_Tests_and_Openers) - [`MyWhoosh/00_Tests_and_Openers`](MyWhoosh/00_Tests_and_Openers) - [back to index](#index)

#### FTP Test 20 min

**60 min - TSS 69 - Zwift n/a - Special day** - [`TEST_FTP_Test_20_min.zwo`](Zwift/00_Tests_and_Openers/TEST_FTP_Test_20_min.zwo) ([MyWhoosh version](MyWhoosh/00_Tests_and_Openers/TEST_FTP_Test_20_min.zwo))

![FTP Test 20 min](docs/img/00_Tests_and_Openers/TEST_FTP_Test_20_min.png)

**Pick this when:** Every 6-8 weeks, or when sessions at your level feel too easy. Fresh legs, well fuelled.

10 min warm-up, 3 x (1 min @ 110% / 1 min @ 55%), 5 min @ 60%, 5 min free ride (all-out), 10 min @ 55%, 20 min free ride (all-out), 4 min cool-down.

*Classic 20-minute FTP test with a 5-minute all-out effort before it. FTP = 95% of the 20-min average. Update your FTP in the app afterwards; the whole library is scaled from it.*

#### Ramp Test

**37 min - TSS 58 - Zwift n/a - Special day** - [`TEST_Ramp_Test.zwo`](Zwift/00_Tests_and_Openers/TEST_Ramp_Test.zwo) ([MyWhoosh version](MyWhoosh/00_Tests_and_Openers/TEST_Ramp_Test.zwo))

![Ramp Test](docs/img/00_Tests_and_Openers/TEST_Ramp_Test.png)

**Pick this when:** Same purpose as the 20-min test but shorter; use the same test type each time so results are comparable.

5 min warm-up, 1 min @ 52%, 1 min @ 58%, 1 min @ 64%, 1 min @ 70%, 1 min @ 76%, 1 min @ 82%, 1 min @ 88%, 1 min @ 94%, 1 min @ 100%, 1 min @ 106%, 1 min @ 112%, 1 min @ 118%, 1 min @ 124%, 1 min @ 130%, 1 min @ 136%, 1 min @ 142%, 1 min @ 148%, 1 min @ 154%, 1 min @ 160%, 1 min @ 166%, 1 min @ 172%, 1 min @ 178%, 10 min cool-down.

*Ramp test (TrainerRoad-style protocol): 1-minute steps starting at 46% FTP, +6% per step. Ride until failure, then your new FTP is 75% of the best 1-minute power. Shorter and less painful than the 20-min test, slightly less accurate for riders with a strong sprint.*

#### Openers 30 min

**30 min - TSS 24 - Zwift n/a - Special day** - [`TEST_Openers_30_min.zwo`](Zwift/00_Tests_and_Openers/TEST_Openers_30_min.zwo) ([MyWhoosh version](MyWhoosh/00_Tests_and_Openers/TEST_Openers_30_min.zwo))

![Openers 30 min](docs/img/00_Tests_and_Openers/TEST_Openers_30_min.png)

**Pick this when:** The day before a race or hard group ride.

8 min warm-up, 3 x (1 min @ 110% / 2 min @ 60%), 2 x (20 s @ 150% / 2:40 min @ 60%), 3 min @ 65%, 4 min cool-down.

*Pre-race activation: three 1-minute efforts and two short sprints. Leaves the legs sharp without adding fatigue. Do it the day before (or the morning of) an event.*

#### Openers 45 min

**45 min - TSS 36 - Zwift n/a - Special day** - [`TEST_Openers_45_min.zwo`](Zwift/00_Tests_and_Openers/TEST_Openers_45_min.zwo) ([MyWhoosh version](MyWhoosh/00_Tests_and_Openers/TEST_Openers_45_min.zwo))

![Openers 45 min](docs/img/00_Tests_and_Openers/TEST_Openers_45_min.png)

**Pick this when:** The day before an event when you want a bit more volume.

10 min warm-up, 5 min @ 70%, 2 x (3 min @ 95% / 3 min @ 60%), 3 x (30 s @ 130% / 2:30 min @ 60%), 5 min @ 65%, 4 min cool-down.

*Longer activation for riders who like more volume the day before: two 3-minute threshold touches and three 30-second accelerations.*

#### Recovery Spin 30 min

**30 min - TSS 12 - Zwift n/a - Special day** - [`TEST_Recovery_Spin_30_min.zwo`](Zwift/00_Tests_and_Openers/TEST_Recovery_Spin_30_min.zwo) ([MyWhoosh version](MyWhoosh/00_Tests_and_Openers/TEST_Recovery_Spin_30_min.zwo))

![Recovery Spin 30 min](docs/img/00_Tests_and_Openers/TEST_Recovery_Spin_30_min.png)

**Pick this when:** The day after a race or a very hard session, or when the legs are flat.

5 min warm-up, 20 min @ 50%, 5 min cool-down.

*Thirty very easy minutes to flush the legs the day after a hard session or a race. If in doubt, take the day off instead.*

### Endurance - 60 min

Zone 2 up to low tempo. Aerobic base, active recovery, easy days. Files: [`Zwift/01_Endurance`](Zwift/01_Endurance) - [`MyWhoosh/01_Endurance`](MyWhoosh/01_Endurance) - [back to index](#index)

![Endurance - 60 min training load](docs/img/01_Endurance_progression.png)

#### Endurance L01 - Recovery Waves 50-58%

**60 min - TSS 27 - Zwift ~1/5 - Easy day** - [`END_L01_Recovery_Waves_50_58.zwo`](Zwift/01_Endurance/END_L01_Recovery_Waves_50_58.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L01_Recovery_Waves_50_58.zwo))

![Endurance L01 - Recovery Waves 50-58%](docs/img/01_Endurance/END_L01_Recovery_Waves_50_58.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy. Variable pacing keeps a long ride interesting.

10 min warm-up, 4 x (5 min @ 58% / 5 min @ 50%), 10 min cool-down.

*Recovery ride with gentle waves to keep it interesting. Nothing above low Zone 2.*

#### Endurance L01 - Recovery Spin 40 min @ 55%

**60 min - TSS 28 - Zwift ~1/5 - Easy day** - [`END_L01_Recovery_Spin_40_min_55.zwo`](Zwift/01_Endurance/END_L01_Recovery_Spin_40_min_55.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L01_Recovery_Spin_40_min_55.zwo))

![Endurance L01 - Recovery Spin 40 min @ 55%](docs/img/01_Endurance/END_L01_Recovery_Spin_40_min_55.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy.

10 min warm-up, 40 min @ 55%, 10 min cool-down.

*Pure recovery. Finish fresher than you started; lower the bias if 55% feels like work.*

#### Endurance L02 - Easy Z2 45 min @ 58%

**60 min - TSS 31 - Zwift ~1/5 - Easy day** - [`END_L02_Easy_Z2_45_min_58.zwo`](Zwift/01_Endurance/END_L02_Easy_Z2_45_min_58.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L02_Easy_Z2_45_min_58.zwo))

![Endurance L02 - Easy Z2 45 min @ 58%](docs/img/01_Endurance/END_L02_Easy_Z2_45_min_58.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy.

10 min warm-up, 45 min @ 58%, 5 min cool-down.

*Low Zone 2 all the way. Conversational pace, no surges.*

#### Endurance L02 - Easy Z2 2x20 @ 60%

**60 min - TSS 32 - Zwift ~1/5 - Easy day** - [`END_L02_Easy_Z2_2x20_60.zwo`](Zwift/01_Endurance/END_L02_Easy_Z2_2x20_60.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L02_Easy_Z2_2x20_60.zwo))

![Endurance L02 - Easy Z2 2x20 @ 60%](docs/img/01_Endurance/END_L02_Easy_Z2_2x20_60.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy.

10 min warm-up, 20 min @ 60%, 5 min @ 50%, 20 min @ 60%, 5 min cool-down.

*Two easy blocks with a short break. Good the day after a hard session.*

#### Endurance L03 - Z2 45 min @ 62%

**60 min - TSS 36 - Zwift ~1/5 - Easy day** - [`END_L03_Z2_45_min_62.zwo`](Zwift/01_Endurance/END_L03_Z2_45_min_62.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L03_Z2_45_min_62.zwo))

![Endurance L03 - Z2 45 min @ 62%](docs/img/01_Endurance/END_L03_Z2_45_min_62.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here.

10 min warm-up, 45 min @ 62%, 5 min cool-down.

*Classic low-to-mid Zone 2. Steady pressure through the whole pedal stroke.*

#### Endurance L03 - Z2 Waves 58-66%

**60 min - TSS 36 - Zwift ~1/5 - Easy day** - [`END_L03_Z2_Waves_58_66.zwo`](Zwift/01_Endurance/END_L03_Z2_Waves_58_66.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L03_Z2_Waves_58_66.zwo))

![Endurance L03 - Z2 Waves 58-66%](docs/img/01_Endurance/END_L03_Z2_Waves_58_66.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. Variable pacing keeps a long ride interesting.

10 min warm-up, 5 x (4:30 min @ 66% / 4:30 min @ 58%), 5 min cool-down.

*Rolling Zone 2: shift gears to change power, keep pedalling smoothly.*

#### Endurance L04 - Z2 45 min @ 65%

**60 min - TSS 39 - Zwift ~1.5/5 - Easy day** - [`END_L04_Z2_45_min_65.zwo`](Zwift/01_Endurance/END_L04_Z2_45_min_65.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L04_Z2_45_min_65.zwo))

![Endurance L04 - Z2 45 min @ 65%](docs/img/01_Endurance/END_L04_Z2_45_min_65.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here.

10 min warm-up, 45 min @ 65%, 5 min cool-down.

*Mid Zone 2. The classic aerobic base ride.*

#### Endurance L04 - Z2 Steps 58 to 72%

**60 min - TSS 39 - Zwift ~1.5/5 - Easy day** - [`END_L04_Z2_Steps_58_to_72.zwo`](Zwift/01_Endurance/END_L04_Z2_Steps_58_to_72.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L04_Z2_Steps_58_to_72.zwo))

![Endurance L04 - Z2 Steps 58 to 72%](docs/img/01_Endurance/END_L04_Z2_Steps_58_to_72.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. Variable pacing keeps a long ride interesting.

10 min warm-up, 9 min @ 58%, 9 min @ 62%, 9 min @ 66%, 9 min @ 70%, 9 min @ 72%, 5 min cool-down.

*Five 9-minute steps rising through Zone 2. Heart rate should rise only slightly per step.*

#### Endurance L05 - Z2 2x20 @ 70%

**60 min - TSS 42 - Zwift 1.5/5 - Easy day** - [`END_L05_Z2_2x20_70.zwo`](Zwift/01_Endurance/END_L05_Z2_2x20_70.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L05_Z2_2x20_70.zwo))

![Endurance L05 - Z2 2x20 @ 70%](docs/img/01_Endurance/END_L05_Z2_2x20_70.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here.

10 min warm-up, 20 min @ 70%, 5 min @ 58%, 20 min @ 70%, 5 min cool-down.

*Two structured Zone 2 blocks. Hold the power line flat on the second one.*

#### Endurance L05 - Z2 45 min @ 68%

**60 min - TSS 42 - Zwift 1.5/5 - Easy day** - [`END_L05_Z2_45_min_68.zwo`](Zwift/01_Endurance/END_L05_Z2_45_min_68.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L05_Z2_45_min_68.zwo))

![Endurance L05 - Z2 45 min @ 68%](docs/img/01_Endurance/END_L05_Z2_45_min_68.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here.

10 min warm-up, 45 min @ 68%, 5 min cool-down.

*Solid Zone 2. You should still be able to speak in full sentences.*

#### Endurance L06 - Z2 3x12 @ 74%

**60 min - TSS 45 - Zwift 2/5 - Easy day** - [`END_L06_Z2_3x12_74.zwo`](Zwift/01_Endurance/END_L06_Z2_3x12_74.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L06_Z2_3x12_74.zwo))

![Endurance L06 - Z2 3x12 @ 74%](docs/img/01_Endurance/END_L06_Z2_3x12_74.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here.

10 min warm-up, 12 min @ 74%, 4:30 min @ 60%, 12 min @ 74%, 4:30 min @ 60%, 12 min @ 74%, 5 min cool-down.

*Three blocks near the top of Zone 2 with short easy breaks.*

#### Endurance L06 - Z2 45 min @ 71%

**60 min - TSS 45 - Zwift 1.5/5 - Easy day** - [`END_L06_Z2_45_min_71.zwo`](Zwift/01_Endurance/END_L06_Z2_45_min_71.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L06_Z2_45_min_71.zwo))

![Endurance L06 - Z2 45 min @ 71%](docs/img/01_Endurance/END_L06_Z2_45_min_71.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here.

10 min warm-up, 45 min @ 71%, 5 min cool-down.

*Upper-mid Zone 2. Demands concentration to avoid drifting up into tempo.*

#### Endurance L07 - Z2 + 3x5 Tempo @ 85%

**60 min - TSS 46 - Zwift 2/5 - Easy day** - [`END_L07_Z2_plus_3x5_Tempo_85.zwo`](Zwift/01_Endurance/END_L07_Z2_plus_3x5_Tempo_85.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L07_Z2_plus_3x5_Tempo_85.zwo))

![Endurance L07 - Z2 + 3x5 Tempo @ 85%](docs/img/01_Endurance/END_L07_Z2_plus_3x5_Tempo_85.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful.

10 min warm-up, 9 min @ 66%, 3 x (5 min @ 85% / 7 min @ 65%), 5 min cool-down.

*Zone 2 base with three tempo touches. Same rhythm, just add pressure.*

#### Endurance L07 - Z2 45 min @ 73%

**60 min - TSS 47 - Zwift 2/5 - Easy day** - [`END_L07_Z2_45_min_73.zwo`](Zwift/01_Endurance/END_L07_Z2_45_min_73.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L07_Z2_45_min_73.zwo))

![Endurance L07 - Z2 45 min @ 73%](docs/img/01_Endurance/END_L07_Z2_45_min_73.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful.

10 min warm-up, 45 min @ 73%, 5 min cool-down.

*Near the top of Zone 2 for 45 minutes. Breathing deeper but controlled.*

#### Endurance L08 - Upper Z2 45 min @ 75%

**60 min - TSS 49 - Zwift 2/5 - Easy day** - [`END_L08_Upper_Z2_45_min_75.zwo`](Zwift/01_Endurance/END_L08_Upper_Z2_45_min_75.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L08_Upper_Z2_45_min_75.zwo))

![Endurance L08 - Upper Z2 45 min @ 75%](docs/img/01_Endurance/END_L08_Upper_Z2_45_min_75.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful.

10 min warm-up, 45 min @ 75%, 5 min cool-down.

*The very top of Zone 2 for 45 minutes. Still aerobic, but no longer easy.*

#### Endurance L08 - Z2 + 4x5 Tempo @ 85%

**60 min - TSS 49 - Zwift 2/5 - Easy day** - [`END_L08_Z2_plus_4x5_Tempo_85.zwo`](Zwift/01_Endurance/END_L08_Z2_plus_4x5_Tempo_85.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L08_Z2_plus_4x5_Tempo_85.zwo))

![Endurance L08 - Z2 + 4x5 Tempo @ 85%](docs/img/01_Endurance/END_L08_Z2_plus_4x5_Tempo_85.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful.

10 min warm-up, 5 min @ 68%, 4 x (5 min @ 85% / 5 min @ 66%), 5 min cool-down.

*Four tempo touches inside a Zone 2 ride. Controlled, never hard.*

#### Endurance L09 - Tempo 3x8 @ 84%

**60 min - TSS 50 - Zwift 2/5 - Easy day** - [`END_L09_Tempo_3x8_84.zwo`](Zwift/01_Endurance/END_L09_Tempo_3x8_84.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L09_Tempo_3x8_84.zwo))

![Endurance L09 - Tempo 3x8 @ 84%](docs/img/01_Endurance/END_L09_Tempo_3x8_84.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session.

10 min warm-up, 6 min @ 68%, 3 x (8 min @ 84% / 5 min @ 65%), 5 min cool-down.

*Three tempo blocks with Zone 2 recoveries. Rhythmic and controlled.*

#### Endurance L09 - Negative Split 72 to 80%

**60 min - TSS 51 - Zwift 2/5 - Easy day** - [`END_L09_Negative_Split_72_to_80.zwo`](Zwift/01_Endurance/END_L09_Negative_Split_72_to_80.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L09_Negative_Split_72_to_80.zwo))

![Endurance L09 - Negative Split 72 to 80%](docs/img/01_Endurance/END_L09_Negative_Split_72_to_80.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session. Variable pacing keeps a long ride interesting.

10 min warm-up, 20 min @ 72%, 25 min @ 80%, 5 min cool-down.

*Zone 2 then low tempo. The second half should feel like a deliberate step up.*

#### Endurance L10 - Low Tempo 45 min @ 78%

**60 min - TSS 52 - Zwift 2/5 - Easy day** - [`END_L10_Low_Tempo_45_min_78.zwo`](Zwift/01_Endurance/END_L10_Low_Tempo_45_min_78.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L10_Low_Tempo_45_min_78.zwo))

![Endurance L10 - Low Tempo 45 min @ 78%](docs/img/01_Endurance/END_L10_Low_Tempo_45_min_78.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session.

10 min warm-up, 45 min @ 78%, 5 min cool-down.

*A full 45 minutes of low tempo. Bridge between endurance and sweet spot.*

#### Endurance L10 - Tempo 2x15 @ 85%

**60 min - TSS 54 - Zwift 2/5 - Easy day** - [`END_L10_Tempo_2x15_85.zwo`](Zwift/01_Endurance/END_L10_Tempo_2x15_85.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance/END_L10_Tempo_2x15_85.zwo))

![Endurance L10 - Tempo 2x15 @ 85%](docs/img/01_Endurance/END_L10_Tempo_2x15_85.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session.

10 min warm-up, 10 min @ 65%, 15 min @ 85%, 5 min @ 65%, 15 min @ 85%, 5 min cool-down.

*Two 15-minute tempo blocks. The hardest endurance session in the library.*

### Endurance - 90 min

Same ladder as the 60-minute endurance set with a 75-minute main set. For the long ride of the week. Files: [`Zwift/01_Endurance_90min`](Zwift/01_Endurance_90min) - [`MyWhoosh/01_Endurance_90min`](MyWhoosh/01_Endurance_90min) - [back to index](#index)

![Endurance - 90 min training load](docs/img/01_Endurance_90min_progression.png)

#### Endurance 90 L01 - Recovery Waves 50-58%

**90 min - TSS 42 - Zwift n/a - Easy to medium day** - [`END90_L01_Recovery_Waves_50_58.zwo`](Zwift/01_Endurance_90min/END90_L01_Recovery_Waves_50_58.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L01_Recovery_Waves_50_58.zwo))

![Endurance 90 L01 - Recovery Waves 50-58%](docs/img/01_Endurance_90min/END90_L01_Recovery_Waves_50_58.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt. Variable pacing keeps a long ride interesting.

10 min warm-up, 7 x (5 min @ 58% / 5 min @ 50%), 10 min cool-down.

*Gentle waves to keep a long recovery ride interesting. Nothing above low Zone 2. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L01 - Recovery Spin 70 min @ 55%

**90 min - TSS 43 - Zwift n/a - Easy to medium day** - [`END90_L01_Recovery_Spin_70_min_55.zwo`](Zwift/01_Endurance_90min/END90_L01_Recovery_Spin_70_min_55.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L01_Recovery_Spin_70_min_55.zwo))

![Endurance 90 L01 - Recovery Spin 70 min @ 55%](docs/img/01_Endurance_90min/END90_L01_Recovery_Spin_70_min_55.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 70 min @ 55%, 10 min cool-down.

*Long but very easy. Finish fresher than you started; lower the bias if 55% feels like work. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L02 - Easy Z2 75 min @ 58%

**90 min - TSS 48 - Zwift n/a - Easy to medium day** - [`END90_L02_Easy_Z2_75_min_58.zwo`](Zwift/01_Endurance_90min/END90_L02_Easy_Z2_75_min_58.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L02_Easy_Z2_75_min_58.zwo))

![Endurance 90 L02 - Easy Z2 75 min @ 58%](docs/img/01_Endurance_90min/END90_L02_Easy_Z2_75_min_58.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 58%, 5 min cool-down.

*Low Zone 2 for 75 minutes. Conversational pace, no surges. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L02 - Easy Z2 3x22 @ 60%

**90 min - TSS 49 - Zwift n/a - Easy to medium day** - [`END90_L02_Easy_Z2_3x22_60.zwo`](Zwift/01_Endurance_90min/END90_L02_Easy_Z2_3x22_60.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L02_Easy_Z2_3x22_60.zwo))

![Endurance 90 L02 - Easy Z2 3x22 @ 60%](docs/img/01_Endurance_90min/END90_L02_Easy_Z2_3x22_60.png)

**Pick this when:** Recovery day: the day after a hard session, or when tired. Should feel almost too easy. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 22 min @ 60%, 4:30 min @ 50%, 22 min @ 60%, 4:30 min @ 50%, 22 min @ 60%, 5 min cool-down.

*Three easy blocks with short breaks. Good the day after a hard session or race. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L03 - Z2 75 min @ 62%

**90 min - TSS 55 - Zwift n/a - Easy to medium day** - [`END90_L03_Z2_75_min_62.zwo`](Zwift/01_Endurance_90min/END90_L03_Z2_75_min_62.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L03_Z2_75_min_62.zwo))

![Endurance 90 L03 - Z2 75 min @ 62%](docs/img/01_Endurance_90min/END90_L03_Z2_75_min_62.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 62%, 5 min cool-down.

*Classic low-to-mid Zone 2. Steady pressure through the whole pedal stroke. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L03 - Z2 Waves 58-66%

**90 min - TSS 55 - Zwift n/a - Easy to medium day** - [`END90_L03_Z2_Waves_58_66.zwo`](Zwift/01_Endurance_90min/END90_L03_Z2_Waves_58_66.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L03_Z2_Waves_58_66.zwo))

![Endurance 90 L03 - Z2 Waves 58-66%](docs/img/01_Endurance_90min/END90_L03_Z2_Waves_58_66.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt. Variable pacing keeps a long ride interesting.

10 min warm-up, 8 x (4:30 min @ 66% / 4:30 min @ 58%), 3 min @ 62%, 5 min cool-down.

*Rolling Zone 2 for 72 minutes: shift gears to change power, keep pedalling smoothly. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L04 - Z2 75 min @ 65%

**90 min - TSS 60 - Zwift n/a - Easy to medium day** - [`END90_L04_Z2_75_min_65.zwo`](Zwift/01_Endurance_90min/END90_L04_Z2_75_min_65.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L04_Z2_75_min_65.zwo))

![Endurance 90 L04 - Z2 75 min @ 65%](docs/img/01_Endurance_90min/END90_L04_Z2_75_min_65.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 65%, 5 min cool-down.

*Mid Zone 2 for 75 minutes. The classic aerobic base ride. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L04 - Z2 Steps 58 to 72%

**90 min - TSS 61 - Zwift n/a - Easy to medium day** - [`END90_L04_Z2_Steps_58_to_72.zwo`](Zwift/01_Endurance_90min/END90_L04_Z2_Steps_58_to_72.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L04_Z2_Steps_58_to_72.zwo))

![Endurance 90 L04 - Z2 Steps 58 to 72%](docs/img/01_Endurance_90min/END90_L04_Z2_Steps_58_to_72.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt. Variable pacing keeps a long ride interesting.

10 min warm-up, 15 min @ 58%, 15 min @ 62%, 15 min @ 66%, 15 min @ 70%, 15 min @ 72%, 5 min cool-down.

*Five 15-minute steps rising through Zone 2. Heart rate should rise only slightly per step. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L05 - Z2 75 min @ 68%

**90 min - TSS 65 - Zwift n/a - Easy to medium day** - [`END90_L05_Z2_75_min_68.zwo`](Zwift/01_Endurance_90min/END90_L05_Z2_75_min_68.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L05_Z2_75_min_68.zwo))

![Endurance 90 L05 - Z2 75 min @ 68%](docs/img/01_Endurance_90min/END90_L05_Z2_75_min_68.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 68%, 5 min cool-down.

*Solid Zone 2 for 75 minutes. You should still be able to speak in full sentences. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L05 - Z2 3x22 @ 70%

**90 min - TSS 66 - Zwift n/a - Easy to medium day** - [`END90_L05_Z2_3x22_70.zwo`](Zwift/01_Endurance_90min/END90_L05_Z2_3x22_70.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L05_Z2_3x22_70.zwo))

![Endurance 90 L05 - Z2 3x22 @ 70%](docs/img/01_Endurance_90min/END90_L05_Z2_3x22_70.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 22 min @ 70%, 4:30 min @ 58%, 22 min @ 70%, 4:30 min @ 58%, 22 min @ 70%, 5 min cool-down.

*Three structured Zone 2 blocks. Hold the power line flat on the third one. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L06 - Z2 75 min @ 71%

**90 min - TSS 70 - Zwift n/a - Easy to medium day** - [`END90_L06_Z2_75_min_71.zwo`](Zwift/01_Endurance_90min/END90_L06_Z2_75_min_71.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L06_Z2_75_min_71.zwo))

![Endurance 90 L06 - Z2 75 min @ 71%](docs/img/01_Endurance_90min/END90_L06_Z2_75_min_71.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 71%, 5 min cool-down.

*Upper-mid Zone 2 for 75 minutes. Concentration needed to avoid drifting into tempo. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L06 - Z2 4x15 @ 74%

**90 min - TSS 71 - Zwift n/a - Easy to medium day** - [`END90_L06_Z2_4x15_74.zwo`](Zwift/01_Endurance_90min/END90_L06_Z2_4x15_74.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L06_Z2_4x15_74.zwo))

![Endurance 90 L06 - Z2 4x15 @ 74%](docs/img/01_Endurance_90min/END90_L06_Z2_4x15_74.png)

**Pick this when:** Standard easy day. The bulk of your endurance riding should be here. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 15 min @ 74%, 5 min @ 60%, 15 min @ 74%, 5 min @ 60%, 15 min @ 74%, 5 min @ 60%, 15 min @ 74%, 5 min cool-down.

*Four blocks near the top of Zone 2 with short easy breaks. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L07 - Z2 + 5x5 Tempo @ 85%

**90 min - TSS 72 - Zwift n/a - Easy to medium day** - [`END90_L07_Z2_plus_5x5_Tempo_85.zwo`](Zwift/01_Endurance_90min/END90_L07_Z2_plus_5x5_Tempo_85.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L07_Z2_plus_5x5_Tempo_85.zwo))

![Endurance 90 L07 - Z2 + 5x5 Tempo @ 85%](docs/img/01_Endurance_90min/END90_L07_Z2_plus_5x5_Tempo_85.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 5 min @ 66%, 5 x (5 min @ 85% / 9 min @ 65%), 5 min cool-down.

*Zone 2 base with five tempo touches spread across the ride. Same rhythm, just add pressure. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L07 - Z2 75 min @ 73%

**90 min - TSS 73 - Zwift n/a - Easy to medium day** - [`END90_L07_Z2_75_min_73.zwo`](Zwift/01_Endurance_90min/END90_L07_Z2_75_min_73.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L07_Z2_75_min_73.zwo))

![Endurance 90 L07 - Z2 75 min @ 73%](docs/img/01_Endurance_90min/END90_L07_Z2_75_min_73.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 73%, 5 min cool-down.

*Near the top of Zone 2 for 75 minutes. Breathing deeper but controlled. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L08 - Z2 + 3x10 Tempo @ 85%

**90 min - TSS 76 - Zwift n/a - Easy to medium day** - [`END90_L08_Z2_plus_3x10_Tempo_85.zwo`](Zwift/01_Endurance_90min/END90_L08_Z2_plus_3x10_Tempo_85.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L08_Z2_plus_3x10_Tempo_85.zwo))

![Endurance 90 L08 - Z2 + 3x10 Tempo @ 85%](docs/img/01_Endurance_90min/END90_L08_Z2_plus_3x10_Tempo_85.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 6 min @ 68%, 3 x (10 min @ 85% / 13 min @ 66%), 5 min cool-down.

*Three 10-minute tempo blocks inside a long Zone 2 ride. Controlled, never hard. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L08 - Upper Z2 75 min @ 75%

**90 min - TSS 77 - Zwift n/a - Easy to medium day** - [`END90_L08_Upper_Z2_75_min_75.zwo`](Zwift/01_Endurance_90min/END90_L08_Upper_Z2_75_min_75.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L08_Upper_Z2_75_min_75.zwo))

![Endurance 90 L08 - Upper Z2 75 min @ 75%](docs/img/01_Endurance_90min/END90_L08_Upper_Z2_75_min_75.png)

**Pick this when:** Endurance day when fresh. Upper Zone 2 - still conversational but purposeful. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 75%, 5 min cool-down.

*The very top of Zone 2 for 75 minutes. Still aerobic, but no longer easy. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L09 - Tempo 4x10 @ 84%

**90 min - TSS 79 - Zwift n/a - Easy to medium day** - [`END90_L09_Tempo_4x10_84.zwo`](Zwift/01_Endurance_90min/END90_L09_Tempo_4x10_84.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L09_Tempo_4x10_84.zwo))

![Endurance 90 L09 - Tempo 4x10 @ 84%](docs/img/01_Endurance_90min/END90_L09_Tempo_4x10_84.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 3 min @ 68%, 4 x (10 min @ 84% / 8 min @ 65%), 5 min cool-down.

*Four tempo blocks with Zone 2 recoveries. Rhythmic and controlled. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L09 - Negative Split 72 to 80%

**90 min - TSS 80 - Zwift n/a - Easy to medium day** - [`END90_L09_Negative_Split_72_to_80.zwo`](Zwift/01_Endurance_90min/END90_L09_Negative_Split_72_to_80.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L09_Negative_Split_72_to_80.zwo))

![Endurance 90 L09 - Negative Split 72 to 80%](docs/img/01_Endurance_90min/END90_L09_Negative_Split_72_to_80.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt. Variable pacing keeps a long ride interesting.

10 min warm-up, 35 min @ 72%, 40 min @ 80%, 5 min cool-down.

*35 min Zone 2 then 40 min low tempo. The second part should feel like a deliberate step up. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L10 - Tempo 3x15 @ 85%

**90 min - TSS 82 - Zwift n/a - Easy to medium day** - [`END90_L10_Tempo_3x15_85.zwo`](Zwift/01_Endurance_90min/END90_L10_Tempo_3x15_85.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L10_Tempo_3x15_85.zwo))

![Endurance 90 L10 - Tempo 3x15 @ 85%](docs/img/01_Endurance_90min/END90_L10_Tempo_3x15_85.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 10 min @ 65%, 15 min @ 85%, 5 min @ 65%, 15 min @ 85%, 5 min @ 65%, 15 min @ 85%, 10 min @ 62%, 5 min cool-down.

*Three 15-minute tempo blocks. The hardest endurance session in the library. Eat 40-60 g of carbohydrate per hour on rides this long.*

#### Endurance 90 L10 - Low Tempo 75 min @ 78%

**90 min - TSS 83 - Zwift n/a - Easy to medium day** - [`END90_L10_Low_Tempo_75_min_78.zwo`](Zwift/01_Endurance_90min/END90_L10_Low_Tempo_75_min_78.zwo) ([MyWhoosh version](MyWhoosh/01_Endurance_90min/END90_L10_Low_Tempo_75_min_78.zwo))

![Endurance 90 L10 - Low Tempo 75 min @ 78%](docs/img/01_Endurance_90min/END90_L10_Low_Tempo_75_min_78.png)

**Pick this when:** Tempo-flavoured endurance: counts as a MEDIUM day, not an easy one. Do not place it the day before a hard session. The 90-minute set is for the long ride of the week; ride one level below your 60-minute endurance level if in doubt.

10 min warm-up, 75 min @ 78%, 5 min cool-down.

*A full 75 minutes of low tempo. The bridge between endurance and sweet spot. Eat 40-60 g of carbohydrate per hour on rides this long.*

### Sweet Spot - 60 min

88-94 % FTP. The best load-to-fatigue ratio for building sustained power. Files: [`Zwift/02_SweetSpot`](Zwift/02_SweetSpot) - [`MyWhoosh/02_SweetSpot`](MyWhoosh/02_SweetSpot) - [back to index](#index)

![Sweet Spot - 60 min training load](docs/img/02_SweetSpot_progression.png)

#### Sweet Spot L01 - 4x5 @ 88%

**60 min - TSS 49 - Zwift ~2/5 - Medium day** - [`SS_L01_4x5_88.zwo`](Zwift/02_SweetSpot/SS_L01_4x5_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L01_4x5_88.zwo))

![Sweet Spot L01 - 4x5 @ 88%](docs/img/02_SweetSpot/SS_L01_4x5_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 4 x (5 min @ 88% / 3 min @ 55%), 13 min @ 65%, 5 min cool-down.

*Short blocks to learn the sweet spot feeling: comfortably hard, sustainable.*

#### Sweet Spot L01 - 2x10 @ 88%

**60 min - TSS 51 - Zwift ~2/5 - Medium day** - [`SS_L01_2x10_88.zwo`](Zwift/02_SweetSpot/SS_L01_2x10_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L01_2x10_88.zwo))

![Sweet Spot L01 - 2x10 @ 88%](docs/img/02_SweetSpot/SS_L01_2x10_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 10 min @ 88%, 5 min @ 55%, 10 min @ 88%, 20 min @ 65%, 5 min cool-down.

*First sweet spot session of a block. Even pacing, no fade in the last 2 minutes.*

#### Sweet Spot L02 - 3x8 @ 88%

**60 min - TSS 51 - Zwift 2/5 - Medium day** - [`SS_L02_3x8_88.zwo`](Zwift/02_SweetSpot/SS_L02_3x8_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L02_3x8_88.zwo))

![Sweet Spot L02 - 3x8 @ 88%](docs/img/02_SweetSpot/SS_L02_3x8_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (8 min @ 88% / 4 min @ 55%), 9 min @ 60%, 5 min cool-down.

*Three blocks of 8 minutes. Aim for identical power on all three.*

#### Sweet Spot L02 - 2x12 @ 88%

**60 min - TSS 53 - Zwift ~2/5 - Medium day** - [`SS_L02_2x12_88.zwo`](Zwift/02_SweetSpot/SS_L02_2x12_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L02_2x12_88.zwo))

![Sweet Spot L02 - 2x12 @ 88%](docs/img/02_SweetSpot/SS_L02_2x12_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 12 min @ 88%, 5 min @ 55%, 12 min @ 88%, 16 min @ 65%, 5 min cool-down.

*Slightly longer blocks at low sweet spot.*

#### Sweet Spot L03 - 3x10 @ 88%

**60 min - TSS 55 - Zwift 2.5/5 - Medium day** - [`SS_L03_3x10_88.zwo`](Zwift/02_SweetSpot/SS_L03_3x10_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L03_3x10_88.zwo))

![Sweet Spot L03 - 3x10 @ 88%](docs/img/02_SweetSpot/SS_L03_3x10_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (10 min @ 88% / 4 min @ 55%), 3 min @ 60%, 5 min cool-down.

*30 minutes of sweet spot in three blocks.*

#### Sweet Spot L03 - 2x15 @ 88%

**60 min - TSS 56 - Zwift 2.5/5 - Medium day** - [`SS_L03_2x15_88.zwo`](Zwift/02_SweetSpot/SS_L03_2x15_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L03_2x15_88.zwo))

![Sweet Spot L03 - 2x15 @ 88%](docs/img/02_SweetSpot/SS_L03_2x15_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 15 min @ 88%, 5 min @ 55%, 15 min @ 88%, 10 min @ 60%, 5 min cool-down.

*Two 15-minute blocks. Break each one into three 5-minute chunks in your head.*

#### Sweet Spot L04 - 3x10 @ 90%

**60 min - TSS 57 - Zwift 2.5/5 - Medium day** - [`SS_L04_3x10_90.zwo`](Zwift/02_SweetSpot/SS_L04_3x10_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L04_3x10_90.zwo))

![Sweet Spot L04 - 3x10 @ 90%](docs/img/02_SweetSpot/SS_L04_3x10_90.png)

**Pick this when:** Your weekly sweet spot session during base and build. Repeat a level 1-2 weeks before moving up. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (10 min @ 90% / 5 min @ 55%), 5 min cool-down.

*The standard sweet spot intensity. If the third block drops by more than 3%, you started too hard.*

#### Sweet Spot L04 - 5x6 @ 90% short rest

**60 min - TSS 57 - Zwift 2.5/5 - Medium day** - [`SS_L04_5x6_90_short_rest.zwo`](Zwift/02_SweetSpot/SS_L04_5x6_90_short_rest.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L04_5x6_90_short_rest.zwo))

![Sweet Spot L04 - 5x6 @ 90% short rest](docs/img/02_SweetSpot/SS_L04_5x6_90_short_rest.png)

**Pick this when:** Your weekly sweet spot session during base and build. Repeat a level 1-2 weeks before moving up. Short recoveries: pick it when you want the blocks to blur into one longer effort.

10 min warm-up, 5 x (6 min @ 90% / 2 min @ 55%), 5 min @ 60%, 5 min cool-down.

*Short 2-minute recoveries: fatigue accumulates, the last two blocks feel harder.*

#### Sweet Spot L05 - 4x8 @ 90%

**60 min - TSS 58 - Zwift 2.5/5 - Medium day** - [`SS_L05_4x8_90.zwo`](Zwift/02_SweetSpot/SS_L05_4x8_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L05_4x8_90.zwo))

![Sweet Spot L05 - 4x8 @ 90%](docs/img/02_SweetSpot/SS_L05_4x8_90.png)

**Pick this when:** Your weekly sweet spot session during base and build. Repeat a level 1-2 weeks before moving up. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 4 x (8 min @ 90% / 3 min @ 55%), 6 min cool-down.

*Four blocks with 3-minute recoveries. Stay seated, power line flat.*

#### Sweet Spot L05 - 2x16 @ 90%

**60 min - TSS 59 - Zwift 2.5/5 - Medium day** - [`SS_L05_2x16_90.zwo`](Zwift/02_SweetSpot/SS_L05_2x16_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L05_2x16_90.zwo))

![Sweet Spot L05 - 2x16 @ 90%](docs/img/02_SweetSpot/SS_L05_2x16_90.png)

**Pick this when:** Your weekly sweet spot session during base and build. Repeat a level 1-2 weeks before moving up. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 16 min @ 90%, 5 min @ 55%, 16 min @ 90%, 8 min @ 60%, 5 min cool-down.

*Two 16-minute blocks. Keep the second identical to the first.*

#### Sweet Spot L06 - 2x18 @ 90%

**60 min - TSS 62 - Zwift 3/5 - Medium day** - [`SS_L06_2x18_90.zwo`](Zwift/02_SweetSpot/SS_L06_2x18_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L06_2x18_90.zwo))

![Sweet Spot L06 - 2x18 @ 90%](docs/img/02_SweetSpot/SS_L06_2x18_90.png)

**Pick this when:** Your weekly sweet spot session during base and build. Repeat a level 1-2 weeks before moving up. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 18 min @ 90%, 5 min @ 55%, 18 min @ 90%, 4 min @ 60%, 5 min cool-down.

*Two long blocks at 90%. Comfortably hard: you can speak a short sentence but would rather not.*

#### Sweet Spot L06 - 3x12 @ 90%

**60 min - TSS 62 - Zwift 3/5 - Medium day** - [`SS_L06_3x12_90.zwo`](Zwift/02_SweetSpot/SS_L06_3x12_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L06_3x12_90.zwo))

![Sweet Spot L06 - 3x12 @ 90%](docs/img/02_SweetSpot/SS_L06_3x12_90.png)

**Pick this when:** Your weekly sweet spot session during base and build. Repeat a level 1-2 weeks before moving up. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (12 min @ 90% / 3 min @ 55%), 5 min cool-down.

*36 minutes of sweet spot in three blocks.*

#### Sweet Spot L07 - 4x9 @ 91%

**60 min - TSS 63 - Zwift ~3/5 - Medium day** - [`SS_L07_4x9_91.zwo`](Zwift/02_SweetSpot/SS_L07_4x9_91.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L07_4x9_91.zwo))

![Sweet Spot L07 - 4x9 @ 91%](docs/img/02_SweetSpot/SS_L07_4x9_91.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 4 x (9 min @ 91% / 2:15 min @ 55%), 5 min cool-down.

*Four 9-minute blocks at 91% with short 2:15 recoveries. More blocks, less rest - the fatigue builds through the set.*

#### Sweet Spot L07 - 3x12 @ 92%

**60 min - TSS 64 - Zwift 3/5 - Medium day** - [`SS_L07_3x12_92.zwo`](Zwift/02_SweetSpot/SS_L07_3x12_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L07_3x12_92.zwo))

![Sweet Spot L07 - 3x12 @ 92%](docs/img/02_SweetSpot/SS_L07_3x12_92.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (12 min @ 92% / 3 min @ 55%), 5 min cool-down.

*Upper sweet spot. Focused but sustainable.*

#### Sweet Spot L08 - 2x18 @ 92%

**60 min - TSS 64 - Zwift 3.5/5 - Medium day** - [`SS_L08_2x18_92.zwo`](Zwift/02_SweetSpot/SS_L08_2x18_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L08_2x18_92.zwo))

![Sweet Spot L08 - 2x18 @ 92%](docs/img/02_SweetSpot/SS_L08_2x18_92.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 18 min @ 92%, 5 min @ 55%, 18 min @ 92%, 4 min @ 60%, 5 min cool-down.

*Two long blocks at upper sweet spot. Check position every 5 minutes.*

#### Sweet Spot L08 - 3x12 @ 93%

**60 min - TSS 65 - Zwift 3.5/5 - Medium day** - [`SS_L08_3x12_93.zwo`](Zwift/02_SweetSpot/SS_L08_3x12_93.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L08_3x12_93.zwo))

![Sweet Spot L08 - 3x12 @ 93%](docs/img/02_SweetSpot/SS_L08_3x12_93.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (12 min @ 93% / 3 min @ 55%), 5 min cool-down.

*Top of the sweet spot zone. The last block will feel close to threshold.*

#### Sweet Spot L09 - 4x9 @ 94% short rest

**60 min - TSS 66 - Zwift 3.5/5 - Medium day** - [`SS_L09_4x9_94_short_rest.zwo`](Zwift/02_SweetSpot/SS_L09_4x9_94_short_rest.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L09_4x9_94_short_rest.zwo))

![Sweet Spot L09 - 4x9 @ 94% short rest](docs/img/02_SweetSpot/SS_L09_4x9_94_short_rest.png)

**Pick this when:** Top of the sweet spot ladder: the most work that fits the format. After this, move to the 90-minute set or to threshold. Short recoveries: pick it when you want the blocks to blur into one longer effort.

10 min warm-up, 4 x (9 min @ 94% / 2:15 min @ 55%), 5 min cool-down.

*Top of the zone with only 2.5-minute recoveries. Hard but repeatable.*

#### Sweet Spot L09 - 2x20 @ 92%

**60 min - TSS 67 - Zwift 3.5/5 - Medium day** - [`SS_L09_2x20_92.zwo`](Zwift/02_SweetSpot/SS_L09_2x20_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L09_2x20_92.zwo))

![Sweet Spot L09 - 2x20 @ 92%](docs/img/02_SweetSpot/SS_L09_2x20_92.png)

**Pick this when:** Top of the sweet spot ladder: the most work that fits the format. After this, move to the 90-minute set or to threshold. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 20 min @ 92%, 5 min @ 55%, 20 min @ 92%, 5 min cool-down.

*The classic 2x20 at upper sweet spot. Patience and pacing.*

#### Sweet Spot L10 - 1x40 @ 92%

**60 min - TSS 68 - Zwift 3.5/5 - Medium day** - [`SS_L10_1x40_92.zwo`](Zwift/02_SweetSpot/SS_L10_1x40_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L10_1x40_92.zwo))

![Sweet Spot L10 - 1x40 @ 92%](docs/img/02_SweetSpot/SS_L10_1x40_92.png)

**Pick this when:** Top of the sweet spot ladder: the most work that fits the format. After this, move to the 90-minute set or to threshold. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 40 min @ 92%, 5 min @ 60%, 5 min cool-down.

*One continuous 40-minute block. Builds the durability of long climbs and time trials.*

#### Sweet Spot L10 - 3x13 @ 93%

**60 min - TSS 68 - Zwift 3.5/5 - Medium day** - [`SS_L10_3x13_93.zwo`](Zwift/02_SweetSpot/SS_L10_3x13_93.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot/SS_L10_3x13_93.zwo))

![Sweet Spot L10 - 3x13 @ 93%](docs/img/02_SweetSpot/SS_L10_3x13_93.png)

**Pick this when:** Top of the sweet spot ladder: the most work that fits the format. After this, move to the 90-minute set or to threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (13 min @ 93% / 2 min @ 55%), 5 min cool-down.

*39 minutes at the top of sweet spot. The hardest sweet spot session in the library.*

### Sweet Spot - 90 min

Long sweet spot blocks (up to 2x30) that do not fit in an hour. The natural next step when the 60-minute ladder tops out. Files: [`Zwift/02_SweetSpot_90min`](Zwift/02_SweetSpot_90min) - [`MyWhoosh/02_SweetSpot_90min`](MyWhoosh/02_SweetSpot_90min) - [back to index](#index)

![Sweet Spot - 90 min training load](docs/img/02_SweetSpot_90min_progression.png)

#### Sweet Spot 90 L01 - 3x10 @ 88%

**90 min - TSS 76 - Zwift n/a - Medium to hard day** - [`SS90_L01_3x10_88.zwo`](Zwift/02_SweetSpot_90min/SS90_L01_3x10_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L01_3x10_88.zwo))

![Sweet Spot 90 L01 - 3x10 @ 88%](docs/img/02_SweetSpot_90min/SS90_L01_3x10_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (10 min @ 88% / 4 min @ 55%), 28 min @ 65%, 5 min cool-down.

*3 x 10 min at 88% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L01 - 2x15 @ 88%

**90 min - TSS 77 - Zwift n/a - Medium to hard day** - [`SS90_L01_2x15_88.zwo`](Zwift/02_SweetSpot_90min/SS90_L01_2x15_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L01_2x15_88.zwo))

![Sweet Spot 90 L01 - 2x15 @ 88%](docs/img/02_SweetSpot_90min/SS90_L01_2x15_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (15 min @ 88% / 5 min @ 55%), 30 min @ 65%, 5 min cool-down.

*2 x 15 min at 88% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L02 - 2x18 @ 88%

**90 min - TSS 80 - Zwift n/a - Medium to hard day** - [`SS90_L02_2x18_88.zwo`](Zwift/02_SweetSpot_90min/SS90_L02_2x18_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L02_2x18_88.zwo))

![Sweet Spot 90 L02 - 2x18 @ 88%](docs/img/02_SweetSpot_90min/SS90_L02_2x18_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (18 min @ 88% / 5 min @ 55%), 24 min @ 65%, 5 min cool-down.

*2 x 18 min at 88% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L02 - 4x9 @ 88%

**90 min - TSS 80 - Zwift n/a - Medium to hard day** - [`SS90_L02_4x9_88.zwo`](Zwift/02_SweetSpot_90min/SS90_L02_4x9_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L02_4x9_88.zwo))

![Sweet Spot 90 L02 - 4x9 @ 88%](docs/img/02_SweetSpot_90min/SS90_L02_4x9_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 4 x (9 min @ 88% / 3 min @ 55%), 22 min @ 65%, 5 min cool-down.

*4 x 9 min at 88% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L03 - 3x12 @ 90%

**90 min - TSS 82 - Zwift n/a - Medium to hard day** - [`SS90_L03_3x12_90.zwo`](Zwift/02_SweetSpot_90min/SS90_L03_3x12_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L03_3x12_90.zwo))

![Sweet Spot 90 L03 - 3x12 @ 90%](docs/img/02_SweetSpot_90min/SS90_L03_3x12_90.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (12 min @ 90% / 4 min @ 55%), 22 min @ 65%, 5 min cool-down.

*3 x 12 min at 90% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L03 - 2x20 @ 88%

**90 min - TSS 83 - Zwift n/a - Medium to hard day** - [`SS90_L03_2x20_88.zwo`](Zwift/02_SweetSpot_90min/SS90_L03_2x20_88.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L03_2x20_88.zwo))

![Sweet Spot 90 L03 - 2x20 @ 88%](docs/img/02_SweetSpot_90min/SS90_L03_2x20_88.png)

**Pick this when:** First weeks of a base phase, after a break, or as a lighter sweet spot week. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (20 min @ 88% / 5 min @ 55%), 20 min @ 65%, 5 min cool-down.

*2 long blocks of 20 min at 88%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L04 - 2x20 @ 90%

**90 min - TSS 85 - Zwift n/a - Medium to hard day** - [`SS90_L04_2x20_90.zwo`](Zwift/02_SweetSpot_90min/SS90_L04_2x20_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L04_2x20_90.zwo))

![Sweet Spot 90 L04 - 2x20 @ 90%](docs/img/02_SweetSpot_90min/SS90_L04_2x20_90.png)

**Pick this when:** The long sweet spot session (90 min), for the weekend ride or when the 60-min set at this level feels easy during base and build. Repeat a level 1-2 weeks before moving up. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (20 min @ 90% / 5 min @ 55%), 20 min @ 65%, 5 min cool-down.

*2 long blocks of 20 min at 90%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L04 - 4x10 @ 90%

**90 min - TSS 85 - Zwift n/a - Medium to hard day** - [`SS90_L04_4x10_90.zwo`](Zwift/02_SweetSpot_90min/SS90_L04_4x10_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L04_4x10_90.zwo))

![Sweet Spot 90 L04 - 4x10 @ 90%](docs/img/02_SweetSpot_90min/SS90_L04_4x10_90.png)

**Pick this when:** The long sweet spot session (90 min), for the weekend ride or when the 60-min set at this level feels easy during base and build. Repeat a level 1-2 weeks before moving up. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 4 x (10 min @ 90% / 3 min @ 55%), 18 min @ 65%, 5 min cool-down.

*4 x 10 min at 90% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L05 - 2x22 @ 90%

**90 min - TSS 88 - Zwift n/a - Medium to hard day** - [`SS90_L05_2x22_90.zwo`](Zwift/02_SweetSpot_90min/SS90_L05_2x22_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L05_2x22_90.zwo))

![Sweet Spot 90 L05 - 2x22 @ 90%](docs/img/02_SweetSpot_90min/SS90_L05_2x22_90.png)

**Pick this when:** The long sweet spot session (90 min), for the weekend ride or when the 60-min set at this level feels easy during base and build. Repeat a level 1-2 weeks before moving up. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (22 min @ 90% / 5 min @ 55%), 16 min @ 65%, 5 min cool-down.

*2 long blocks of 22 min at 90%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L05 - 3x15 @ 90%

**90 min - TSS 88 - Zwift n/a - Medium to hard day** - [`SS90_L05_3x15_90.zwo`](Zwift/02_SweetSpot_90min/SS90_L05_3x15_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L05_3x15_90.zwo))

![Sweet Spot 90 L05 - 3x15 @ 90%](docs/img/02_SweetSpot_90min/SS90_L05_3x15_90.png)

**Pick this when:** The long sweet spot session (90 min), for the weekend ride or when the 60-min set at this level feels easy during base and build. Repeat a level 1-2 weeks before moving up. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (15 min @ 90% / 4 min @ 55%), 13 min @ 65%, 5 min cool-down.

*3 x 15 min at 90% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L06 - 3x15 @ 92%

**90 min - TSS 91 - Zwift n/a - Medium to hard day** - [`SS90_L06_3x15_92.zwo`](Zwift/02_SweetSpot_90min/SS90_L06_3x15_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L06_3x15_92.zwo))

![Sweet Spot 90 L06 - 3x15 @ 92%](docs/img/02_SweetSpot_90min/SS90_L06_3x15_92.png)

**Pick this when:** The long sweet spot session (90 min), for the weekend ride or when the 60-min set at this level feels easy during base and build. Repeat a level 1-2 weeks before moving up. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (15 min @ 92% / 4 min @ 55%), 13 min @ 65%, 5 min cool-down.

*3 x 15 min at 92% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L06 - 2x25 @ 90%

**90 min - TSS 92 - Zwift n/a - Medium to hard day** - [`SS90_L06_2x25_90.zwo`](Zwift/02_SweetSpot_90min/SS90_L06_2x25_90.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L06_2x25_90.zwo))

![Sweet Spot 90 L06 - 2x25 @ 90%](docs/img/02_SweetSpot_90min/SS90_L06_2x25_90.png)

**Pick this when:** The long sweet spot session (90 min), for the weekend ride or when the 60-min set at this level feels easy during base and build. Repeat a level 1-2 weeks before moving up. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (25 min @ 90% / 5 min @ 55%), 10 min @ 65%, 5 min cool-down.

*2 long blocks of 25 min at 90%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L07 - 3x16 @ 92%

**90 min - TSS 93 - Zwift n/a - Medium to hard day** - [`SS90_L07_3x16_92.zwo`](Zwift/02_SweetSpot_90min/SS90_L07_3x16_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L07_3x16_92.zwo))

![Sweet Spot 90 L07 - 3x16 @ 92%](docs/img/02_SweetSpot_90min/SS90_L07_3x16_92.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (16 min @ 92% / 4 min @ 55%), 10 min @ 65%, 5 min cool-down.

*3 x 16 min at 92% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L07 - 4x12 @ 92%

**90 min - TSS 93 - Zwift n/a - Medium to hard day** - [`SS90_L07_4x12_92.zwo`](Zwift/02_SweetSpot_90min/SS90_L07_4x12_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L07_4x12_92.zwo))

![Sweet Spot 90 L07 - 4x12 @ 92%](docs/img/02_SweetSpot_90min/SS90_L07_4x12_92.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 4 x (12 min @ 92% / 3 min @ 55%), 10 min @ 65%, 5 min cool-down.

*4 x 12 min at 92% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L08 - 2x25 @ 92%

**90 min - TSS 95 - Zwift n/a - Medium to hard day** - [`SS90_L08_2x25_92.zwo`](Zwift/02_SweetSpot_90min/SS90_L08_2x25_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L08_2x25_92.zwo))

![Sweet Spot 90 L08 - 2x25 @ 92%](docs/img/02_SweetSpot_90min/SS90_L08_2x25_92.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (25 min @ 92% / 5 min @ 55%), 10 min @ 65%, 5 min cool-down.

*2 long blocks of 25 min at 92%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L08 - 3x18 @ 91%

**90 min - TSS 95 - Zwift n/a - Medium to hard day** - [`SS90_L08_3x18_91.zwo`](Zwift/02_SweetSpot_90min/SS90_L08_3x18_91.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L08_3x18_91.zwo))

![Sweet Spot 90 L08 - 3x18 @ 91%](docs/img/02_SweetSpot_90min/SS90_L08_3x18_91.png)

**Pick this when:** When L06 feels comfortable. Solid aerobic work without the cost of threshold. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (18 min @ 91% / 4 min @ 55%), 4 min @ 65%, 5 min cool-down.

*3 x 18 min at 91% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L09 - 2x28 @ 92%

**90 min - TSS 99 - Zwift n/a - Medium to hard day** - [`SS90_L09_2x28_92.zwo`](Zwift/02_SweetSpot_90min/SS90_L09_2x28_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L09_2x28_92.zwo))

![Sweet Spot 90 L09 - 2x28 @ 92%](docs/img/02_SweetSpot_90min/SS90_L09_2x28_92.png)

**Pick this when:** Top of the sweet spot ladder: the biggest sweet spot blocks in the library; a real test of aerobic endurance. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (28 min @ 92% / 5 min @ 55%), 4 min @ 65%, 5 min cool-down.

*2 long blocks of 28 min at 92%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L09 - 3x18 @ 93%

**90 min - TSS 99 - Zwift n/a - Medium to hard day** - [`SS90_L09_3x18_93.zwo`](Zwift/02_SweetSpot_90min/SS90_L09_3x18_93.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L09_3x18_93.zwo))

![Sweet Spot 90 L09 - 3x18 @ 93%](docs/img/02_SweetSpot_90min/SS90_L09_3x18_93.png)

**Pick this when:** Top of the sweet spot ladder: the biggest sweet spot blocks in the library; a real test of aerobic endurance. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 5 min @ 65%, 3 x (18 min @ 93% / 4 min @ 55%), 4 min @ 65%, 5 min cool-down.

*3 x 18 min at 93% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Sweet Spot 90 L10 - 2x30 @ 92%

**90 min - TSS 102 - Zwift n/a - Medium to hard day** - [`SS90_L10_2x30_92.zwo`](Zwift/02_SweetSpot_90min/SS90_L10_2x30_92.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L10_2x30_92.zwo))

![Sweet Spot 90 L10 - 2x30 @ 92%](docs/img/02_SweetSpot_90min/SS90_L10_2x30_92.png)

**Pick this when:** Top of the sweet spot ladder: the biggest sweet spot blocks in the library; a real test of aerobic endurance. Long blocks: closest to a steady climb or time-trial feel.

10 min warm-up, 5 min @ 65%, 2 x (30 min @ 92% / 5 min @ 55%), 5 min cool-down.

*2 long blocks of 30 min at 92%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Sweet Spot 90 L10 - 3x20 @ 93%

**90 min - TSS 104 - Zwift n/a - Medium to hard day** - [`SS90_L10_3x20_93.zwo`](Zwift/02_SweetSpot_90min/SS90_L10_3x20_93.zwo) ([MyWhoosh version](MyWhoosh/02_SweetSpot_90min/SS90_L10_3x20_93.zwo))

![Sweet Spot 90 L10 - 3x20 @ 93%](docs/img/02_SweetSpot_90min/SS90_L10_3x20_93.png)

**Pick this when:** Top of the sweet spot ladder: the biggest sweet spot blocks in the library; a real test of aerobic endurance. Shorter blocks: easier to pace, good first choice at a new level.

10 min warm-up, 3 x (20 min @ 93% / 3 min @ 55%), 6 min @ 65%, 5 min cool-down.

*3 long blocks of 20 min at 93%. Long sweet spot blocks are what the 90-minute format is for - pace the first one conservatively.*

### Threshold - 60 min

95-105 % FTP. Raise FTP and hold long efforts at high intensity. Files: [`Zwift/03_Threshold`](Zwift/03_Threshold) - [`MyWhoosh/03_Threshold`](MyWhoosh/03_Threshold) - [back to index](#index)

![Threshold - 60 min training load](docs/img/03_Threshold_progression.png)

#### Threshold L01 - 2x8 @ 95%

**60 min - TSS 52 - Zwift ~2/5 - HARD day** - [`THR_L01_2x8_95.zwo`](Zwift/03_Threshold/THR_L01_2x8_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L01_2x8_95.zwo))

![Threshold L01 - 2x8 @ 95%](docs/img/03_Threshold/THR_L01_2x8_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Long blocks: time-trial pacing practice.

10 min warm-up, 8 min @ 95%, 5 min @ 55%, 8 min @ 95%, 24 min @ 65%, 5 min cool-down.

*Two 8-minute blocks just under FTP. Start controlled.*

#### Threshold L01 - 3x6 @ 95%

**60 min - TSS 53 - Zwift ~2.5/5 - HARD day** - [`THR_L01_3x6_95.zwo`](Zwift/03_Threshold/THR_L01_3x6_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L01_3x6_95.zwo))

![Threshold L01 - 3x6 @ 95%](docs/img/03_Threshold/THR_L01_3x6_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh.

10 min warm-up, 3 x (6 min @ 95% / 4 min @ 55%), 15 min @ 65%, 5 min cool-down.

*Gentle introduction to threshold. Short blocks just under FTP.*

#### Threshold L02 - 4x5 @ 96%

**60 min - TSS 55 - Zwift ~2.5/5 - HARD day** - [`THR_L02_4x5_96.zwo`](Zwift/03_Threshold/THR_L02_4x5_96.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L02_4x5_96.zwo))

![Threshold L02 - 4x5 @ 96%](docs/img/03_Threshold/THR_L02_4x5_96.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Shorter intervals at higher power: pick when you want quality over duration.

10 min warm-up, 4 x (5 min @ 96% / 3 min @ 55%), 13 min @ 65%, 5 min cool-down.

*Short repeated threshold efforts. Hit the number from the first minute.*

#### Threshold L02 - 2x10 @ 95%

**60 min - TSS 56 - Zwift ~2.5/5 - HARD day** - [`THR_L02_2x10_95.zwo`](Zwift/03_Threshold/THR_L02_2x10_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L02_2x10_95.zwo))

![Threshold L02 - 2x10 @ 95%](docs/img/03_Threshold/THR_L02_2x10_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Long blocks: time-trial pacing practice.

10 min warm-up, 10 min @ 95%, 5 min @ 55%, 10 min @ 95%, 20 min @ 65%, 5 min cool-down.

*Two 10-minute blocks at 95%. Pace it like a time trial.*

#### Threshold L03 - 3x8 @ 96%

**60 min - TSS 57 - Zwift ~3/5 - HARD day** - [`THR_L03_3x8_96.zwo`](Zwift/03_Threshold/THR_L03_3x8_96.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L03_3x8_96.zwo))

![Threshold L03 - 3x8 @ 96%](docs/img/03_Threshold/THR_L03_3x8_96.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh.

10 min warm-up, 3 x (8 min @ 96% / 4 min @ 55%), 9 min @ 60%, 5 min cool-down.

*Three 8-minute blocks with 4-minute recoveries.*

#### Threshold L03 - 2x12 @ 95%

**60 min - TSS 59 - Zwift ~3/5 - HARD day** - [`THR_L03_2x12_95.zwo`](Zwift/03_Threshold/THR_L03_2x12_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L03_2x12_95.zwo))

![Threshold L03 - 2x12 @ 95%](docs/img/03_Threshold/THR_L03_2x12_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Long blocks: time-trial pacing practice.

10 min warm-up, 12 min @ 95%, 5 min @ 55%, 12 min @ 95%, 16 min @ 65%, 5 min cool-down.

*24 minutes just under threshold.*

#### Threshold L04 - 3x8 @ 98%

**60 min - TSS 59 - Zwift ~3/5 - HARD day** - [`THR_L04_3x8_98.zwo`](Zwift/03_Threshold/THR_L04_3x8_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L04_3x8_98.zwo))

![Threshold L04 - 3x8 @ 98%](docs/img/03_Threshold/THR_L04_3x8_98.png)

**Pick this when:** Your hard session of the week in a build phase. Needs fresh legs and a proper meal beforehand.

10 min warm-up, 3 x (8 min @ 98% / 4 min @ 55%), 9 min @ 60%, 5 min cool-down.

*Three blocks very close to FTP. The first 3 minutes should feel too easy.*

#### Threshold L04 - 2x12 @ 98%

**60 min - TSS 61 - Zwift ~3/5 - HARD day** - [`THR_L04_2x12_98.zwo`](Zwift/03_Threshold/THR_L04_2x12_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L04_2x12_98.zwo))

![Threshold L04 - 2x12 @ 98%](docs/img/03_Threshold/THR_L04_2x12_98.png)

**Pick this when:** Your hard session of the week in a build phase. Needs fresh legs and a proper meal beforehand. Long blocks: time-trial pacing practice.

10 min warm-up, 12 min @ 98%, 5 min @ 55%, 12 min @ 98%, 16 min @ 65%, 5 min cool-down.

*Two 12-minute blocks at 98%. Breathe deep and stay smooth.*

#### Threshold L05 - 3x9 @ 97%

**60 min - TSS 61 - Zwift 3/5 - HARD day** - [`THR_L05_3x9_97.zwo`](Zwift/03_Threshold/THR_L05_3x9_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L05_3x9_97.zwo))

![Threshold L05 - 3x9 @ 97%](docs/img/03_Threshold/THR_L05_3x9_97.png)

**Pick this when:** Your hard session of the week in a build phase. Needs fresh legs and a proper meal beforehand.

10 min warm-up, 3 x (9 min @ 97% / 4 min @ 55%), 6 min @ 60%, 5 min cool-down.

*27 minutes of threshold in three blocks.*

#### Threshold L05 - Progressive 3x8 (95 to 101%)

**60 min - TSS 61 - Zwift ~3/5 - HARD day** - [`THR_L05_Progressive_3x8_95_to_101.zwo`](Zwift/03_Threshold/THR_L05_Progressive_3x8_95_to_101.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L05_Progressive_3x8_95_to_101.zwo))

![Threshold L05 - Progressive 3x8 (95 to 101%)](docs/img/03_Threshold/THR_L05_Progressive_3x8_95_to_101.png)

**Pick this when:** Your hard session of the week in a build phase. Needs fresh legs and a proper meal beforehand. Progressive blocks: a good choice when you are unsure of your current FTP.

10 min warm-up, 8 min @ 95%, 4 min @ 55%, 8 min @ 98%, 4 min @ 55%, 8 min @ 101%, 13 min @ 65%, 5 min cool-down.

*Three 8-minute blocks, each one a notch harder: 95, 98 then 101%. Start conservative - the last block is the point of the session.*

#### Threshold L06 - 2x15 @ 97%

**60 min - TSS 65 - Zwift 3.5/5 - HARD day** - [`THR_L06_2x15_97.zwo`](Zwift/03_Threshold/THR_L06_2x15_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L06_2x15_97.zwo))

![Threshold L06 - 2x15 @ 97%](docs/img/03_Threshold/THR_L06_2x15_97.png)

**Pick this when:** Your hard session of the week in a build phase. Needs fresh legs and a proper meal beforehand. Long blocks: time-trial pacing practice.

10 min warm-up, 15 min @ 97%, 5 min @ 55%, 15 min @ 97%, 10 min @ 60%, 5 min cool-down.

*Two 15-minute blocks. Time-trial pacing: the first 5 minutes feel easy.*

#### Threshold L06 - 3x10 @ 98%

**60 min - TSS 65 - Zwift 3.5/5 - HARD day** - [`THR_L06_3x10_98.zwo`](Zwift/03_Threshold/THR_L06_3x10_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L06_3x10_98.zwo))

![Threshold L06 - 3x10 @ 98%](docs/img/03_Threshold/THR_L06_3x10_98.png)

**Pick this when:** Your hard session of the week in a build phase. Needs fresh legs and a proper meal beforehand.

10 min warm-up, 3 x (10 min @ 98% / 4 min @ 55%), 3 min @ 60%, 5 min cool-down.

*Three 10-minute blocks at 98%.*

#### Threshold L07 - 3x10 @ 100%

**60 min - TSS 67 - Zwift 3.5/5 - HARD day** - [`THR_L07_3x10_100.zwo`](Zwift/03_Threshold/THR_L07_3x10_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L07_3x10_100.zwo))

![Threshold L07 - 3x10 @ 100%](docs/img/03_Threshold/THR_L07_3x10_100.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow.

10 min warm-up, 3 x (10 min @ 100% / 5 min @ 55%), 5 min cool-down.

*30 minutes at FTP. If you cannot finish the third block, your FTP is set too high.*

#### Threshold L07 - 5x5 @ 105%

**60 min - TSS 67 - Zwift 4/5 - HARD day** - [`THR_L07_5x5_105.zwo`](Zwift/03_Threshold/THR_L07_5x5_105.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L07_5x5_105.zwo))

![Threshold L07 - 5x5 @ 105%](docs/img/03_Threshold/THR_L07_5x5_105.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow. Shorter intervals at higher power: pick when you want quality over duration.

10 min warm-up, 5 x (5 min @ 105% / 4 min @ 60%), 5 min cool-down.

*Five 5-minute blocks above threshold. Repeatability matters more than any single block.*

#### Threshold L08 - 4x8 @ 102%

**60 min - TSS 71 - Zwift 4/5 - HARD day** - [`THR_L08_4x8_102.zwo`](Zwift/03_Threshold/THR_L08_4x8_102.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L08_4x8_102.zwo))

![Threshold L08 - 4x8 @ 102%](docs/img/03_Threshold/THR_L08_4x8_102.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow. Shorter intervals at higher power: pick when you want quality over duration.

10 min warm-up, 4 x (8 min @ 102% / 3:15 min @ 55%), 5 min cool-down.

*Four blocks just above FTP. The burn builds from minute 4 - stay seated.*

#### Threshold L08 - 2x18 @ 98%

**60 min - TSS 72 - Zwift 4/5 - HARD day** - [`THR_L08_2x18_98.zwo`](Zwift/03_Threshold/THR_L08_2x18_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L08_2x18_98.zwo))

![Threshold L08 - 2x18 @ 98%](docs/img/03_Threshold/THR_L08_2x18_98.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow. Long blocks: time-trial pacing practice.

10 min warm-up, 18 min @ 98%, 5 min @ 55%, 18 min @ 98%, 4 min @ 60%, 5 min cool-down.

*Two long blocks just under FTP. Mentally commit before the second one.*

#### Threshold L09 - 2x20 @ 97%

**60 min - TSS 74 - Zwift 4.5/5 - HARD day** - [`THR_L09_2x20_97.zwo`](Zwift/03_Threshold/THR_L09_2x20_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L09_2x20_97.zwo))

![Threshold L09 - 2x20 @ 97%](docs/img/03_Threshold/THR_L09_2x20_97.png)

**Pick this when:** Peak threshold sessions: the classic 2x20 and beyond. Only when fresh; one per week, and follow it with an easy day. Long blocks: time-trial pacing practice.

10 min warm-up, 20 min @ 97%, 5 min @ 55%, 20 min @ 97%, 5 min cool-down.

*The classic 2x20 just under threshold. Patience in the first 10 minutes.*

#### Threshold L09 - 3x12 @ 100%

**60 min - TSS 74 - Zwift 4.5/5 - HARD day** - [`THR_L09_3x12_100.zwo`](Zwift/03_Threshold/THR_L09_3x12_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L09_3x12_100.zwo))

![Threshold L09 - 3x12 @ 100%](docs/img/03_Threshold/THR_L09_3x12_100.png)

**Pick this when:** Peak threshold sessions: the classic 2x20 and beyond. Only when fresh; one per week, and follow it with an easy day.

10 min warm-up, 3 x (12 min @ 100% / 3 min @ 55%), 5 min cool-down.

*36 minutes at FTP. A benchmark session - fuel before and during.*

#### Threshold L10 - 3x13 @ 100% short rest

**60 min - TSS 77 - Zwift 4.5/5 - HARD day** - [`THR_L10_3x13_100_short_rest.zwo`](Zwift/03_Threshold/THR_L10_3x13_100_short_rest.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L10_3x13_100_short_rest.zwo))

![Threshold L10 - 3x13 @ 100% short rest](docs/img/03_Threshold/THR_L10_3x13_100_short_rest.png)

**Pick this when:** Peak threshold sessions: the classic 2x20 and beyond. Only when fresh; one per week, and follow it with an easy day.

10 min warm-up, 3 x (13 min @ 100% / 2 min @ 55%), 5 min cool-down.

*39 minutes at FTP with only 3-minute recoveries. The hardest threshold session in the library.*

#### Threshold L10 - 2x20 @ 100%

**60 min - TSS 78 - Zwift 4.5/5 - HARD day** - [`THR_L10_2x20_100.zwo`](Zwift/03_Threshold/THR_L10_2x20_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold/THR_L10_2x20_100.zwo))

![Threshold L10 - 2x20 @ 100%](docs/img/03_Threshold/THR_L10_2x20_100.png)

**Pick this when:** Peak threshold sessions: the classic 2x20 and beyond. Only when fresh; one per week, and follow it with an easy day. Long blocks: time-trial pacing practice.

10 min warm-up, 20 min @ 100%, 5 min @ 55%, 20 min @ 100%, 5 min cool-down.

*The reference threshold workout: 40 minutes at FTP. Only when fresh.*

### Threshold - 90 min

3x15, 2x25, 2x30 at threshold: time-trial and long-climb specific work. Files: [`Zwift/03_Threshold_90min`](Zwift/03_Threshold_90min) - [`MyWhoosh/03_Threshold_90min`](MyWhoosh/03_Threshold_90min) - [back to index](#index)

![Threshold - 90 min training load](docs/img/03_Threshold_90min_progression.png)

#### Threshold 90 L01 - 2x10 @ 95%

**90 min - TSS 76 - Zwift n/a - HARD day** - [`THR90_L01_2x10_95.zwo`](Zwift/03_Threshold_90min/THR90_L01_2x10_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L01_2x10_95.zwo))

![Threshold 90 L01 - 2x10 @ 95%](docs/img/03_Threshold_90min/THR90_L01_2x10_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (10 min @ 95% / 5 min @ 55%), 40 min @ 65%, 5 min cool-down.

*2 x 10 min at 95% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L01 - 3x7 @ 96%

**90 min - TSS 77 - Zwift n/a - HARD day** - [`THR90_L01_3x7_96.zwo`](Zwift/03_Threshold_90min/THR90_L01_3x7_96.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L01_3x7_96.zwo))

![Threshold 90 L01 - 3x7 @ 96%](docs/img/03_Threshold_90min/THR90_L01_3x7_96.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh.

10 min warm-up, 5 min @ 65%, 3 x (7 min @ 96% / 4 min @ 55%), 37 min @ 65%, 5 min cool-down.

*3 x 7 min at 96% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L02 - 2x12 @ 95%

**90 min - TSS 79 - Zwift n/a - HARD day** - [`THR90_L02_2x12_95.zwo`](Zwift/03_Threshold_90min/THR90_L02_2x12_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L02_2x12_95.zwo))

![Threshold 90 L02 - 2x12 @ 95%](docs/img/03_Threshold_90min/THR90_L02_2x12_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (12 min @ 95% / 5 min @ 55%), 36 min @ 65%, 5 min cool-down.

*2 x 12 min at 95% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L02 - 4x6 @ 97%

**90 min - TSS 80 - Zwift n/a - HARD day** - [`THR90_L02_4x6_97.zwo`](Zwift/03_Threshold_90min/THR90_L02_4x6_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L02_4x6_97.zwo))

![Threshold 90 L02 - 4x6 @ 97%](docs/img/03_Threshold_90min/THR90_L02_4x6_97.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Shorter intervals at higher power: pick when you want quality over duration.

10 min warm-up, 5 min @ 65%, 4 x (6 min @ 97% / 3 min @ 55%), 34 min @ 65%, 5 min cool-down.

*4 x 6 min at 97% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L03 - 2x15 @ 95%

**90 min - TSS 84 - Zwift n/a - HARD day** - [`THR90_L03_2x15_95.zwo`](Zwift/03_Threshold_90min/THR90_L03_2x15_95.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L03_2x15_95.zwo))

![Threshold 90 L03 - 2x15 @ 95%](docs/img/03_Threshold_90min/THR90_L03_2x15_95.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (15 min @ 95% / 5 min @ 55%), 30 min @ 65%, 5 min cool-down.

*2 x 15 min at 95% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L03 - 3x10 @ 96%

**90 min - TSS 84 - Zwift n/a - HARD day** - [`THR90_L03_3x10_96.zwo`](Zwift/03_Threshold_90min/THR90_L03_3x10_96.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L03_3x10_96.zwo))

![Threshold 90 L03 - 3x10 @ 96%](docs/img/03_Threshold_90min/THR90_L03_3x10_96.png)

**Pick this when:** Introduction to threshold work, or a lighter threshold week. Manageable even when not fully fresh.

10 min warm-up, 5 min @ 65%, 3 x (10 min @ 96% / 5 min @ 55%), 25 min @ 65%, 5 min cool-down.

*3 x 10 min at 96% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L04 - 3x10 @ 98%

**90 min - TSS 86 - Zwift n/a - HARD day** - [`THR90_L04_3x10_98.zwo`](Zwift/03_Threshold_90min/THR90_L04_3x10_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L04_3x10_98.zwo))

![Threshold 90 L04 - 3x10 @ 98%](docs/img/03_Threshold_90min/THR90_L04_3x10_98.png)

**Pick this when:** The long threshold session (90 min): the hard day of the week when you have time, or race-specific preparation for time trials and long climbs. Needs fresh legs and a proper meal beforehand.

10 min warm-up, 5 min @ 65%, 3 x (10 min @ 98% / 5 min @ 55%), 25 min @ 65%, 5 min cool-down.

*3 x 10 min at 98% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L04 - 2x16 @ 97%

**90 min - TSS 87 - Zwift n/a - HARD day** - [`THR90_L04_2x16_97.zwo`](Zwift/03_Threshold_90min/THR90_L04_2x16_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L04_2x16_97.zwo))

![Threshold 90 L04 - 2x16 @ 97%](docs/img/03_Threshold_90min/THR90_L04_2x16_97.png)

**Pick this when:** The long threshold session (90 min): the hard day of the week when you have time, or race-specific preparation for time trials and long climbs. Needs fresh legs and a proper meal beforehand. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (16 min @ 97% / 5 min @ 55%), 28 min @ 65%, 5 min cool-down.

*2 x 16 min at 97% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L05 - 4x8 @ 100%

**90 min - TSS 89 - Zwift n/a - HARD day** - [`THR90_L05_4x8_100.zwo`](Zwift/03_Threshold_90min/THR90_L05_4x8_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L05_4x8_100.zwo))

![Threshold 90 L05 - 4x8 @ 100%](docs/img/03_Threshold_90min/THR90_L05_4x8_100.png)

**Pick this when:** The long threshold session (90 min): the hard day of the week when you have time, or race-specific preparation for time trials and long climbs. Needs fresh legs and a proper meal beforehand. Shorter intervals at higher power: pick when you want quality over duration.

10 min warm-up, 5 min @ 65%, 4 x (8 min @ 100% / 4 min @ 55%), 22 min @ 65%, 5 min cool-down.

*4 x 8 min at 100% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L05 - 3x12 @ 97%

**90 min - TSS 91 - Zwift n/a - HARD day** - [`THR90_L05_3x12_97.zwo`](Zwift/03_Threshold_90min/THR90_L05_3x12_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L05_3x12_97.zwo))

![Threshold 90 L05 - 3x12 @ 97%](docs/img/03_Threshold_90min/THR90_L05_3x12_97.png)

**Pick this when:** The long threshold session (90 min): the hard day of the week when you have time, or race-specific preparation for time trials and long climbs. Needs fresh legs and a proper meal beforehand.

10 min warm-up, 5 min @ 65%, 3 x (12 min @ 97% / 4 min @ 55%), 22 min @ 65%, 5 min cool-down.

*3 x 12 min at 97% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L06 - 3x12 @ 99%

**90 min - TSS 93 - Zwift n/a - HARD day** - [`THR90_L06_3x12_99.zwo`](Zwift/03_Threshold_90min/THR90_L06_3x12_99.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L06_3x12_99.zwo))

![Threshold 90 L06 - 3x12 @ 99%](docs/img/03_Threshold_90min/THR90_L06_3x12_99.png)

**Pick this when:** The long threshold session (90 min): the hard day of the week when you have time, or race-specific preparation for time trials and long climbs. Needs fresh legs and a proper meal beforehand.

10 min warm-up, 5 min @ 65%, 3 x (12 min @ 99% / 4 min @ 55%), 22 min @ 65%, 5 min cool-down.

*3 x 12 min at 99% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L06 - 2x20 @ 97%

**90 min - TSS 94 - Zwift n/a - HARD day** - [`THR90_L06_2x20_97.zwo`](Zwift/03_Threshold_90min/THR90_L06_2x20_97.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L06_2x20_97.zwo))

![Threshold 90 L06 - 2x20 @ 97%](docs/img/03_Threshold_90min/THR90_L06_2x20_97.png)

**Pick this when:** The long threshold session (90 min): the hard day of the week when you have time, or race-specific preparation for time trials and long climbs. Needs fresh legs and a proper meal beforehand. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (20 min @ 97% / 6 min @ 55%), 18 min @ 65%, 5 min cool-down.

*2 long blocks of 20 min at 97%. Long threshold blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Threshold 90 L07 - 3x12 @ 100%

**90 min - TSS 94 - Zwift n/a - HARD day** - [`THR90_L07_3x12_100.zwo`](Zwift/03_Threshold_90min/THR90_L07_3x12_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L07_3x12_100.zwo))

![Threshold 90 L07 - 3x12 @ 100%](docs/img/03_Threshold_90min/THR90_L07_3x12_100.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow.

10 min warm-up, 5 min @ 65%, 3 x (12 min @ 100% / 4 min @ 55%), 22 min @ 65%, 5 min cool-down.

*3 x 12 min at 100% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L08 - 4x10 @ 100%

**90 min - TSS 97 - Zwift n/a - HARD day** - [`THR90_L08_4x10_100.zwo`](Zwift/03_Threshold_90min/THR90_L08_4x10_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L08_4x10_100.zwo))

![Threshold 90 L08 - 4x10 @ 100%](docs/img/03_Threshold_90min/THR90_L08_4x10_100.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow. Shorter intervals at higher power: pick when you want quality over duration.

10 min warm-up, 5 min @ 65%, 4 x (10 min @ 100% / 4 min @ 55%), 14 min @ 65%, 5 min cool-down.

*4 x 10 min at 100% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L07 - 2x20 @ 100%

**90 min - TSS 98 - Zwift n/a - HARD day** - [`THR90_L07_2x20_100.zwo`](Zwift/03_Threshold_90min/THR90_L07_2x20_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L07_2x20_100.zwo))

![Threshold 90 L07 - 2x20 @ 100%](docs/img/03_Threshold_90min/THR90_L07_2x20_100.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (20 min @ 100% / 6 min @ 55%), 18 min @ 65%, 5 min cool-down.

*2 long blocks of 20 min at 100%. Long threshold blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Threshold 90 L08 - 3x15 @ 98%

**90 min - TSS 99 - Zwift n/a - HARD day** - [`THR90_L08_3x15_98.zwo`](Zwift/03_Threshold_90min/THR90_L08_3x15_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L08_3x15_98.zwo))

![Threshold 90 L08 - 3x15 @ 98%](docs/img/03_Threshold_90min/THR90_L08_3x15_98.png)

**Pick this when:** Advanced threshold: for when L06 is completed with power holding steady. Expect to be tired tomorrow.

10 min warm-up, 5 min @ 65%, 3 x (15 min @ 98% / 5 min @ 55%), 10 min @ 65%, 5 min cool-down.

*3 x 15 min at 98% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L09 - 3x15 @ 100%

**90 min - TSS 102 - Zwift n/a - HARD day** - [`THR90_L09_3x15_100.zwo`](Zwift/03_Threshold_90min/THR90_L09_3x15_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L09_3x15_100.zwo))

![Threshold 90 L09 - 3x15 @ 100%](docs/img/03_Threshold_90min/THR90_L09_3x15_100.png)

**Pick this when:** Peak threshold sessions: 2x25, 3x18, 2x30 - the longest threshold work in the library. Only when fresh; one per week, and follow it with an easy day.

10 min warm-up, 5 min @ 65%, 3 x (15 min @ 100% / 5 min @ 55%), 10 min @ 65%, 5 min cool-down.

*3 x 15 min at 100% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L09 - 2x25 @ 98%

**90 min - TSS 104 - Zwift n/a - HARD day** - [`THR90_L09_2x25_98.zwo`](Zwift/03_Threshold_90min/THR90_L09_2x25_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L09_2x25_98.zwo))

![Threshold 90 L09 - 2x25 @ 98%](docs/img/03_Threshold_90min/THR90_L09_2x25_98.png)

**Pick this when:** Peak threshold sessions: 2x25, 3x18, 2x30 - the longest threshold work in the library. Only when fresh; one per week, and follow it with an easy day. Long blocks: time-trial pacing practice.

10 min warm-up, 5 min @ 65%, 2 x (25 min @ 98% / 6 min @ 55%), 8 min @ 65%, 5 min cool-down.

*2 long blocks of 25 min at 98%. Long threshold blocks are what the 90-minute format is for - pace the first one conservatively.*

#### Threshold 90 L10 - 3x18 @ 100%

**90 min - TSS 111 - Zwift n/a - HARD day** - [`THR90_L10_3x18_100.zwo`](Zwift/03_Threshold_90min/THR90_L10_3x18_100.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L10_3x18_100.zwo))

![Threshold 90 L10 - 3x18 @ 100%](docs/img/03_Threshold_90min/THR90_L10_3x18_100.png)

**Pick this when:** Peak threshold sessions: 2x25, 3x18, 2x30 - the longest threshold work in the library. Only when fresh; one per week, and follow it with an easy day.

10 min warm-up, 5 min @ 65%, 3 x (18 min @ 100% / 5 min @ 55%), 6 min cool-down.

*3 x 18 min at 100% - more total work than any 60-minute session at this intensity, with full recoveries.*

#### Threshold 90 L10 - 2x30 @ 98%

**90 min - TSS 112 - Zwift n/a - HARD day** - [`THR90_L10_2x30_98.zwo`](Zwift/03_Threshold_90min/THR90_L10_2x30_98.zwo) ([MyWhoosh version](MyWhoosh/03_Threshold_90min/THR90_L10_2x30_98.zwo))

![Threshold 90 L10 - 2x30 @ 98%](docs/img/03_Threshold_90min/THR90_L10_2x30_98.png)

**Pick this when:** Peak threshold sessions: 2x25, 3x18, 2x30 - the longest threshold work in the library. Only when fresh; one per week, and follow it with an easy day. Long blocks: time-trial pacing practice.

10 min warm-up, 2 x (30 min @ 98% / 6 min @ 55%), 8 min cool-down.

*2 long blocks of 30 min at 98%. Long threshold blocks are what the 90-minute format is for - pace the first one conservatively.*

### VO2max - 60 min

106-120 % FTP. Develop maximal aerobic power. Never two days in a row. Files: [`Zwift/04_VO2max`](Zwift/04_VO2max) - [`MyWhoosh/04_VO2max`](MyWhoosh/04_VO2max) - [back to index](#index)

![VO2max - 60 min training load](docs/img/04_VO2max_progression.png)

#### VO2max L01 - 10x1 @ 115%

**60 min - TSS 49 - Zwift ~2.5/5 - HARD day** - [`VO2_L01_10x1_115.zwo`](Zwift/04_VO2max/VO2_L01_10x1_115.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L01_10x1_115.zwo))

![VO2max L01 - 10x1 @ 115%](docs/img/04_VO2max/VO2_L01_10x1_115.png)

**Pick this when:** First VO2max sessions of a build phase, or a maintenance dose. Hard but short. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 10 x (1 min @ 115% / 1:30 min @ 50%), 15 min @ 65%, 8 min cool-down.

*Short, sharp efforts with 90 s recovery. Commit from the first pedal stroke.*

#### VO2max L01 - 4x3 @ 108%

**60 min - TSS 50 - Zwift ~2.5/5 - HARD day** - [`VO2_L01_4x3_108.zwo`](Zwift/04_VO2max/VO2_L01_4x3_108.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L01_4x3_108.zwo))

![VO2max L01 - 4x3 @ 108%](docs/img/04_VO2max/VO2_L01_4x3_108.png)

**Pick this when:** First VO2max sessions of a build phase, or a maintenance dose. Hard but short. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 4 x (3 min @ 108% / 3 min @ 50%), 16 min @ 65%, 8 min cool-down.

*Gentle introduction to VO2max work. Breathing should be hard by the end of each interval.*

#### VO2max L02 - 5x3 @ 108%

**60 min - TSS 52 - Zwift 2.5/5 - HARD day** - [`VO2_L02_5x3_108.zwo`](Zwift/04_VO2max/VO2_L02_5x3_108.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L02_5x3_108.zwo))

![VO2max L02 - 5x3 @ 108%](docs/img/04_VO2max/VO2_L02_5x3_108.png)

**Pick this when:** First VO2max sessions of a build phase, or a maintenance dose. Hard but short. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 5 x (3 min @ 108% / 3 min @ 50%), 10 min @ 60%, 8 min cool-down.

*Five 3-minute intervals. Go out fast and settle - no fade in the last minute.*

#### VO2max L02 - 6x2 @ 115%

**60 min - TSS 53 - Zwift ~3/5 - HARD day** - [`VO2_L02_6x2_115.zwo`](Zwift/04_VO2max/VO2_L02_6x2_115.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L02_6x2_115.zwo))

![VO2max L02 - 6x2 @ 115%](docs/img/04_VO2max/VO2_L02_6x2_115.png)

**Pick this when:** First VO2max sessions of a build phase, or a maintenance dose. Hard but short. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 6 x (2 min @ 115% / 2 min @ 50%), 16 min @ 65%, 8 min cool-down.

*Six 2-minute efforts with equal recovery. Short enough to go hard.*

#### VO2max L03 - 4x4 @ 108%

**60 min - TSS 53 - Zwift 3/5 - HARD day** - [`VO2_L03_4x4_108.zwo`](Zwift/04_VO2max/VO2_L03_4x4_108.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L03_4x4_108.zwo))

![VO2max L03 - 4x4 @ 108%](docs/img/04_VO2max/VO2_L03_4x4_108.png)

**Pick this when:** First VO2max sessions of a build phase, or a maintenance dose. Hard but short. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 4 x (4 min @ 108% / 4 min @ 50%), 8 min @ 60%, 8 min cool-down.

*Four 4-minute intervals at the bottom of the VO2 zone. Pace the first minute.*

#### VO2max L03 - 5x3 @ 112%

**60 min - TSS 54 - Zwift 3/5 - HARD day** - [`VO2_L03_5x3_112.zwo`](Zwift/04_VO2max/VO2_L03_5x3_112.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L03_5x3_112.zwo))

![VO2max L03 - 5x3 @ 112%](docs/img/04_VO2max/VO2_L03_5x3_112.png)

**Pick this when:** First VO2max sessions of a build phase, or a maintenance dose. Hard but short. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 5 x (3 min @ 112% / 3 min @ 50%), 10 min @ 60%, 8 min cool-down.

*Five 3-minute intervals at 112%.*

#### VO2max L04 - 4x4 @ 115%

**60 min - TSS 57 - Zwift 3.5/5 - HARD day** - [`VO2_L04_4x4_115.zwo`](Zwift/04_VO2max/VO2_L04_4x4_115.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L04_4x4_115.zwo))

![VO2max L04 - 4x4 @ 115%](docs/img/04_VO2max/VO2_L04_4x4_115.png)

**Pick this when:** Standard VO2max day. Fresh legs only, never two days in a row. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 4 x (4 min @ 115% / 4 min @ 50%), 8 min @ 60%, 8 min cool-down.

*Four 4-minute intervals at 115%. Aim to reach maximal breathing within 90 s.*

#### VO2max L04 - 30/30 3x10 (120/50)

**60 min - TSS 58 - Zwift 3/5 - HARD day** - [`VO2_L04_30_30_3x10_120_50.zwo`](Zwift/04_VO2max/VO2_L04_30_30_3x10_120_50.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L04_30_30_3x10_120_50.zwo))

![VO2max L04 - 30/30 3x10 (120/50)](docs/img/04_VO2max/VO2_L04_30_30_3x10_120_50.png)

**Pick this when:** Standard VO2max day. Fresh legs only, never two days in a row. Micro-intervals: more time at high oxygen uptake with less perceived suffering; pick when motivation is low.

12 min warm-up, 10 x (30 s @ 120% / 30 s @ 50%), 5 min @ 55%, 10 x (30 s @ 120% / 30 s @ 50%), 5 min @ 55%, 10 x (30 s @ 120% / 30 s @ 50%), 8 min cool-down.

*Three sets of ten 30/30s. The off is soft-pedalling, not stopping.*

#### VO2max L05 - 4x5 @ 110%

**60 min - TSS 59 - Zwift 3.5/5 - HARD day** - [`VO2_L05_4x5_110.zwo`](Zwift/04_VO2max/VO2_L05_4x5_110.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L05_4x5_110.zwo))

![VO2max L05 - 4x5 @ 110%](docs/img/04_VO2max/VO2_L05_4x5_110.png)

**Pick this when:** Standard VO2max day. Fresh legs only, never two days in a row. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 4 x (5 min @ 110% / 5 min @ 50%), 8 min cool-down.

*Four 5-minute intervals. Long VO2 work - the last 90 s of each is a fight.*

#### VO2max L05 - 5x4 @ 110%

**60 min - TSS 59 - Zwift 3.5/5 - HARD day** - [`VO2_L05_5x4_110.zwo`](Zwift/04_VO2max/VO2_L05_5x4_110.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L05_5x4_110.zwo))

![VO2max L05 - 5x4 @ 110%](docs/img/04_VO2max/VO2_L05_5x4_110.png)

**Pick this when:** Standard VO2max day. Fresh legs only, never two days in a row. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 5 x (4 min @ 110% / 4 min @ 50%), 8 min cool-down.

*Five 4-minute intervals at 110%. Control the first 2 minutes.*

#### VO2max L06 - 6x3 @ 115%

**60 min - TSS 60 - Zwift 3.5/5 - HARD day** - [`VO2_L06_6x3_115.zwo`](Zwift/04_VO2max/VO2_L06_6x3_115.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L06_6x3_115.zwo))

![VO2max L06 - 6x3 @ 115%](docs/img/04_VO2max/VO2_L06_6x3_115.png)

**Pick this when:** Standard VO2max day. Fresh legs only, never two days in a row. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 6 x (3 min @ 115% / 3 min @ 50%), 4 min @ 60%, 8 min cool-down.

*Six 3-minute intervals at 115%. Fast start, then hold.*

#### VO2max L06 - 5x4 @ 112%

**60 min - TSS 61 - Zwift 3.5/5 - HARD day** - [`VO2_L06_5x4_112.zwo`](Zwift/04_VO2max/VO2_L06_5x4_112.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L06_5x4_112.zwo))

![VO2max L06 - 5x4 @ 112%](docs/img/04_VO2max/VO2_L06_5x4_112.png)

**Pick this when:** Standard VO2max day. Fresh legs only, never two days in a row. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 5 x (4 min @ 112% / 4 min @ 50%), 8 min cool-down.

*Five 4-minute intervals at 112%.*

#### VO2max L07 - 5x4 @ 115%

**60 min - TSS 63 - Zwift ~4/5 - HARD day** - [`VO2_L07_5x4_115.zwo`](Zwift/04_VO2max/VO2_L07_5x4_115.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L07_5x4_115.zwo))

![VO2max L07 - 5x4 @ 115%](docs/img/04_VO2max/VO2_L07_5x4_115.png)

**Pick this when:** Advanced VO2max: for when you complete L06 with power holding on the last interval. Classic long intervals: the most reliable VO2max stimulus.

12 min warm-up, 5 x (4 min @ 115% / 4 min @ 50%), 8 min cool-down.

*The classic VO2max session. If you fail the 4th, lower the bias by 3% rather than skipping the 5th.*

#### VO2max L07 - 40/20 3x8 (125/50)

**60 min - TSS 64 - Zwift ~3.5/5 - HARD day** - [`VO2_L07_40_20_3x8_125_50.zwo`](Zwift/04_VO2max/VO2_L07_40_20_3x8_125_50.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L07_40_20_3x8_125_50.zwo))

![VO2max L07 - 40/20 3x8 (125/50)](docs/img/04_VO2max/VO2_L07_40_20_3x8_125_50.png)

**Pick this when:** Advanced VO2max: for when you complete L06 with power holding on the last interval. Micro-intervals: more time at high oxygen uptake with less perceived suffering; pick when motivation is low.

12 min warm-up, 8 x (40 s @ 125% / 20 s @ 50%), 5 min @ 55%, 8 x (40 s @ 125% / 20 s @ 50%), 5 min @ 55%, 8 x (40 s @ 125% / 20 s @ 50%), 6 min @ 60%, 8 min cool-down.

*Three sets of eight 40/20s. The 20 s rest is too short to recover - that is the point.*

#### VO2max L08 - 30/15 3x13 (120/50)

**60 min - TSS 67 - Zwift ~3.5/5 - HARD day** - [`VO2_L08_30_15_3x13_120_50.zwo`](Zwift/04_VO2max/VO2_L08_30_15_3x13_120_50.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L08_30_15_3x13_120_50.zwo))

![VO2max L08 - 30/15 3x13 (120/50)](docs/img/04_VO2max/VO2_L08_30_15_3x13_120_50.png)

**Pick this when:** Advanced VO2max: for when you complete L06 with power holding on the last interval. Micro-intervals: more time at high oxygen uptake with less perceived suffering; pick when motivation is low.

12 min warm-up, 13 x (30 s @ 120% / 15 s @ 50%), 4 min @ 55%, 13 x (30 s @ 120% / 15 s @ 50%), 4 min @ 55%, 13 x (30 s @ 120% / 15 s @ 50%), 2:45 min @ 60%, 8 min cool-down.

*Ronnestad protocol: three sets of thirteen 30/15s. Heart rate climbs steadily and stays near max.*

#### VO2max L08 - 6x4 @ 112%

**60 min - TSS 67 - Zwift ~4.5/5 - HARD day** - [`VO2_L08_6x4_112.zwo`](Zwift/04_VO2max/VO2_L08_6x4_112.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L08_6x4_112.zwo))

![VO2max L08 - 6x4 @ 112%](docs/img/04_VO2max/VO2_L08_6x4_112.png)

**Pick this when:** Advanced VO2max: for when you complete L06 with power holding on the last interval. Classic long intervals: the most reliable VO2max stimulus.

10 min warm-up, 6 x (4 min @ 112% / 3 min @ 50%), 2 min @ 60%, 6 min cool-down.

*Six 4-minute intervals with 3-minute recoveries. Repeatability is the goal.*

#### VO2max L09 - 5x5 @ 112%

**60 min - TSS 69 - Zwift ~4.5/5 - HARD day** - [`VO2_L09_5x5_112.zwo`](Zwift/04_VO2max/VO2_L09_5x5_112.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L09_5x5_112.zwo))

![VO2max L09 - 5x5 @ 112%](docs/img/04_VO2max/VO2_L09_5x5_112.png)

**Pick this when:** Peak VO2max sessions. Reserve for the last 3-4 weeks before a goal, with an easy day either side. Classic long intervals: the most reliable VO2max stimulus.

10 min warm-up, 5 x (5 min @ 112% / 3:30 min @ 50%), 1:30 min @ 60%, 6 min cool-down.

*Five 5-minute intervals with short recoveries. A big VO2max dose.*

#### VO2max L09 - Hard-Start 6x4 (140 then 110)

**60 min - TSS 70 - Zwift ~4.5/5 - HARD day** - [`VO2_L09_Hard_Start_6x4_140_then_110.zwo`](Zwift/04_VO2max/VO2_L09_Hard_Start_6x4_140_then_110.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L09_Hard_Start_6x4_140_then_110.zwo))

![VO2max L09 - Hard-Start 6x4 (140 then 110)](docs/img/04_VO2max/VO2_L09_Hard_Start_6x4_140_then_110.png)

**Pick this when:** Peak VO2max sessions. Reserve for the last 3-4 weeks before a goal, with an easy day either side. Varied-power intervals: a different stimulus when classic 4-minute efforts have become routine.

10 min warm-up, 30 s @ 140%, 3:30 min @ 110%, 3 min @ 50%, 30 s @ 140%, 3:30 min @ 110%, 3 min @ 50%, 30 s @ 140%, 3:30 min @ 110%, 3 min @ 50%, 30 s @ 140%, 3:30 min @ 110%, 3 min @ 50%, 30 s @ 140%, 3:30 min @ 110%, 3 min @ 50%, 30 s @ 140%, 3:30 min @ 110%, 5 min @ 60%, 6 min cool-down.

*30 s at 140% then 3:30 at 110%. The hard start drives oxygen uptake up fast; the 110% part feels much harder than usual.*

#### VO2max L10 - 6x4 @ 118%

**60 min - TSS 73 - Zwift ~5/5 - HARD day** - [`VO2_L10_6x4_118.zwo`](Zwift/04_VO2max/VO2_L10_6x4_118.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L10_6x4_118.zwo))

![VO2max L10 - 6x4 @ 118%](docs/img/04_VO2max/VO2_L10_6x4_118.png)

**Pick this when:** Peak VO2max sessions. Reserve for the last 3-4 weeks before a goal, with an easy day either side. Classic long intervals: the most reliable VO2max stimulus.

10 min warm-up, 6 x (4 min @ 118% / 3 min @ 50%), 2 min @ 60%, 6 min cool-down.

*Six 4-minute intervals at 118% with 3-minute recoveries. The hardest VO2max session in the library.*

#### VO2max L10 - Ramped 6x4 (110 to 125)

**60 min - TSS 73 - Zwift ~5/5 - HARD day** - [`VO2_L10_Ramped_6x4_110_to_125.zwo`](Zwift/04_VO2max/VO2_L10_Ramped_6x4_110_to_125.zwo) ([MyWhoosh version](MyWhoosh/04_VO2max/VO2_L10_Ramped_6x4_110_to_125.zwo))

![VO2max L10 - Ramped 6x4 (110 to 125)](docs/img/04_VO2max/VO2_L10_Ramped_6x4_110_to_125.png)

**Pick this when:** Peak VO2max sessions. Reserve for the last 3-4 weeks before a goal, with an easy day either side. Varied-power intervals: a different stimulus when classic 4-minute efforts have become routine.

10 min warm-up, 4 min from 110% to 125%, 3 min @ 50%, 4 min from 110% to 125%, 3 min @ 50%, 4 min from 110% to 125%, 3 min @ 50%, 4 min from 110% to 125%, 3 min @ 50%, 4 min from 110% to 125%, 3 min @ 50%, 4 min from 110% to 125%, 5 min @ 60%, 6 min cool-down.

*Each interval ramps from 110% to 125%: it finishes at its hardest. Mentally prepare for the final minute.*

### Mixed - 60 min

Combined sessions: race and group-ride simulations, zone pyramids, sprints. Files: [`Zwift/05_Mixed`](Zwift/05_Mixed) - [`MyWhoosh/05_Mixed`](MyWhoosh/05_Mixed) - [back to index](#index)

![Mixed - 60 min training load](docs/img/05_Mixed_progression.png)

#### Mixed L01 - Z2 + 6 Sprints

**60 min - TSS 45 - Zwift ~1.5/5 - Medium to hard day** - [`MIX_L01_Z2_plus_6_Sprints.zwo`](Zwift/05_Mixed/MIX_L01_Z2_plus_6_Sprints.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L01_Z2_plus_6_Sprints.zwo))

![Mixed L01 - Z2 + 6 Sprints](docs/img/05_Mixed/MIX_L01_Z2_plus_6_Sprints.png)

**Pick this when:** A fun, light day: endurance with a few short efforts. Fits anywhere in the week.

10 min warm-up, 10 min @ 68%, 6 x (10 s @ 160% / 4:50 min @ 66%), 5 min @ 68%, 5 min cool-down.

*Zone 2 with six 10-second all-out sprints and full recovery. The 160% target is a floor - beat it.*

#### Mixed L01 - Z2 + 4x1 @ 120%

**60 min - TSS 47 - Zwift ~2/5 - Medium to hard day** - [`MIX_L01_Z2_plus_4x1_120.zwo`](Zwift/05_Mixed/MIX_L01_Z2_plus_4x1_120.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L01_Z2_plus_4x1_120.zwo))

![Mixed L01 - Z2 + 4x1 @ 120%](docs/img/05_Mixed/MIX_L01_Z2_plus_4x1_120.png)

**Pick this when:** A fun, light day: endurance with a few short efforts. Fits anywhere in the week.

10 min warm-up, 15 min @ 68%, 4 x (1 min @ 120% / 4 min @ 60%), 10 min @ 68%, 5 min cool-down.

*Zone 2 with four 1-minute efforts. Full gas, then straight back to easy.*

#### Mixed L02 - Tempo 3x8 @ 82% + Sprints

**60 min - TSS 49 - Zwift ~2/5 - Medium to hard day** - [`MIX_L02_Tempo_3x8_82_plus_Sprints.zwo`](Zwift/05_Mixed/MIX_L02_Tempo_3x8_82_plus_Sprints.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L02_Tempo_3x8_82_plus_Sprints.zwo))

![Mixed L02 - Tempo 3x8 @ 82% + Sprints](docs/img/05_Mixed/MIX_L02_Tempo_3x8_82_plus_Sprints.png)

**Pick this when:** An easy-to-medium day with some intensity touches. Good when you want variety without fatigue.

10 min warm-up, 7:50 min @ 82%, 10 s @ 160%, 4 min @ 55%, 7:50 min @ 82%, 10 s @ 160%, 4 min @ 55%, 7:50 min @ 82%, 10 s @ 160%, 13 min @ 60%, 5 min cool-down.

*Each tempo block ends with a 10-second sprint on tired legs - like a race finish.*

#### Mixed L02 - Z2 + 4x2 @ 105%

**60 min - TSS 51 - Zwift ~2/5 - Medium to hard day** - [`MIX_L02_Z2_plus_4x2_105.zwo`](Zwift/05_Mixed/MIX_L02_Z2_plus_4x2_105.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L02_Z2_plus_4x2_105.zwo))

![Mixed L02 - Z2 + 4x2 @ 105%](docs/img/05_Mixed/MIX_L02_Z2_plus_4x2_105.png)

**Pick this when:** An easy-to-medium day with some intensity touches. Good when you want variety without fatigue.

10 min warm-up, 10 min @ 68%, 4 x (2 min @ 105% / 3 min @ 65%), 15 min @ 68%, 5 min cool-down.

*An endurance ride with four 2-minute touches just above threshold. Teaches you to surge and settle back into Zone 2 without blowing up.*

#### Mixed L03 - Z2 + 4x1 @ 130%

**60 min - TSS 51 - Zwift ~2.5/5 - Medium to hard day** - [`MIX_L03_Z2_plus_4x1_130.zwo`](Zwift/05_Mixed/MIX_L03_Z2_plus_4x1_130.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L03_Z2_plus_4x1_130.zwo))

![Mixed L03 - Z2 + 4x1 @ 130%](docs/img/05_Mixed/MIX_L03_Z2_plus_4x1_130.png)

**Pick this when:** Medium day: tempo and sprints. Useful in the off-season or as a second quality session.

10 min warm-up, 15 min @ 72%, 4 x (1 min @ 130% / 4 min @ 60%), 10 min @ 72%, 5 min cool-down.

*Zone 2 with four 1-minute anaerobic efforts at 130%. The ride stays aerobic overall.*

#### Mixed L03 - Tempo 3x10 @ 82% + Sprints

**60 min - TSS 52 - Zwift ~2/5 - Medium to hard day** - [`MIX_L03_Tempo_3x10_82_plus_Sprints.zwo`](Zwift/05_Mixed/MIX_L03_Tempo_3x10_82_plus_Sprints.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L03_Tempo_3x10_82_plus_Sprints.zwo))

![Mixed L03 - Tempo 3x10 @ 82% + Sprints](docs/img/05_Mixed/MIX_L03_Tempo_3x10_82_plus_Sprints.png)

**Pick this when:** Medium day: tempo and sprints. Useful in the off-season or as a second quality session.

10 min warm-up, 9:50 min @ 82%, 10 s @ 160%, 4 min @ 55%, 9:50 min @ 82%, 10 s @ 160%, 4 min @ 55%, 9:50 min @ 82%, 10 s @ 160%, 7 min @ 60%, 5 min cool-down.

*Three 10-minute tempo blocks, each ending in a sprint. Shift up one gear before you go.*

#### Mixed L04 - Sweet Spot 2x10 + 3x1 @ 120%

**60 min - TSS 54 - Zwift ~2.5/5 - Medium to hard day** - [`MIX_L04_Sweet_Spot_2x10_plus_3x1_120.zwo`](Zwift/05_Mixed/MIX_L04_Sweet_Spot_2x10_plus_3x1_120.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L04_Sweet_Spot_2x10_plus_3x1_120.zwo))

![Mixed L04 - Sweet Spot 2x10 + 3x1 @ 120%](docs/img/05_Mixed/MIX_L04_Sweet_Spot_2x10_plus_3x1_120.png)

**Pick this when:** Medium day combining zones. A good 'something of everything' session.

10 min warm-up, 10 min @ 90%, 4 min @ 55%, 10 min @ 90%, 4 min @ 55%, 3 x (1 min @ 120% / 2 min @ 50%), 8 min @ 60%, 5 min cool-down.

*Sweet spot base then three short VO2 efforts on pre-fatigued legs.*

#### Mixed L04 - Descending 92 / 88 / 84%

**60 min - TSS 55 - Zwift ~2.5/5 - Medium to hard day** - [`MIX_L04_Descending_92_88_84.zwo`](Zwift/05_Mixed/MIX_L04_Descending_92_88_84.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L04_Descending_92_88_84.zwo))

![Mixed L04 - Descending 92 / 88 / 84%](docs/img/05_Mixed/MIX_L04_Descending_92_88_84.png)

**Pick this when:** Medium day combining zones. A good 'something of everything' session.

10 min warm-up, 10 min @ 92%, 4 min @ 55%, 10 min @ 88%, 4 min @ 55%, 10 min @ 84%, 7 min @ 60%, 5 min cool-down.

*Three 10-minute blocks of descending intensity. Each feels similar as fatigue builds.*

#### Mixed L05 - Group Ride Simulation

**60 min - TSS 56 - Zwift ~2.5/5 - Medium to hard day** - [`MIX_L05_Group_Ride_Simulation.zwo`](Zwift/05_Mixed/MIX_L05_Group_Ride_Simulation.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L05_Group_Ride_Simulation.zwo))

![Mixed L05 - Group Ride Simulation](docs/img/05_Mixed/MIX_L05_Group_Ride_Simulation.png)

**Pick this when:** Medium day with race-like changes of pace. Good a few days out from an event.

10 min warm-up, 5 min @ 72%, 6 x (1 min @ 110% / 4 min @ 72%), 5 min @ 95%, 5 min @ 60%, 5 min cool-down.

*Mimics a brisk group ride: steady Zone 2 with six 1-minute surges, then a 5-minute threshold run-in. Good race-feel session with moderate load.*

#### Mixed L05 - Zone Ladder Tempo-SS-Threshold

**60 min - TSS 57 - Zwift ~2.5/5 - Medium to hard day** - [`MIX_L05_Zone_Ladder_Tempo_SS_Threshold.zwo`](Zwift/05_Mixed/MIX_L05_Zone_Ladder_Tempo_SS_Threshold.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L05_Zone_Ladder_Tempo_SS_Threshold.zwo))

![Mixed L05 - Zone Ladder Tempo-SS-Threshold](docs/img/05_Mixed/MIX_L05_Zone_Ladder_Tempo_SS_Threshold.png)

**Pick this when:** Medium day with race-like changes of pace. Good a few days out from an event.

10 min warm-up, 10 min @ 85%, 4 min @ 55%, 10 min @ 90%, 4 min @ 55%, 8 min @ 100%, 9 min @ 60%, 5 min cool-down.

*10 min tempo, 10 min sweet spot, 8 min threshold. Each step changes the sensation.*

#### Mixed L06 - Climb Simulation 20 + 12

**60 min - TSS 62 - Zwift ~3/5 - Medium to hard day** - [`MIX_L06_Climb_Simulation_20_plus_12.zwo`](Zwift/05_Mixed/MIX_L06_Climb_Simulation_20_plus_12.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L06_Climb_Simulation_20_plus_12.zwo))

![Mixed L06 - Climb Simulation 20 + 12](docs/img/05_Mixed/MIX_L06_Climb_Simulation_20_plus_12.png)

**Pick this when:** Medium-hard day. Combines sustained work with short high-power efforts.

10 min warm-up, 4 min @ 90%, 30 s @ 115%, 4:30 min @ 90%, 30 s @ 115%, 4:30 min @ 90%, 30 s @ 115%, 5:30 min @ 90%, 6 min @ 55%, 3:30 min @ 92%, 30 s @ 120%, 3:30 min @ 92%, 30 s @ 120%, 4 min @ 92%, 7 min @ 60%, 5 min cool-down.

*Two simulated climbs at sweet spot with 30-second surges. Settle back without losing power.*

#### Mixed L06 - Sweet Spot 2x10 + 4x2 @ 118%

**60 min - TSS 62 - Zwift ~3.5/5 - Medium to hard day** - [`MIX_L06_Sweet_Spot_2x10_plus_4x2_118.zwo`](Zwift/05_Mixed/MIX_L06_Sweet_Spot_2x10_plus_4x2_118.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L06_Sweet_Spot_2x10_plus_4x2_118.zwo))

![Mixed L06 - Sweet Spot 2x10 + 4x2 @ 118%](docs/img/05_Mixed/MIX_L06_Sweet_Spot_2x10_plus_4x2_118.png)

**Pick this when:** Medium-hard day. Combines sustained work with short high-power efforts.

10 min warm-up, 10 min @ 90%, 4 min @ 55%, 10 min @ 90%, 5 min @ 55%, 4 x (2 min @ 118% / 2 min @ 50%), 5 min cool-down.

*Aerobic base then top-end. Do not overcook the first VO2 interval.*

#### Mixed L07 - Anaerobic 20/40 x2 + Sweet Spot

**60 min - TSS 63 - Zwift ~3/5 - Medium to hard day** - [`MIX_L07_Anaerobic_20_40_x2_plus_Sweet_Spot.zwo`](Zwift/05_Mixed/MIX_L07_Anaerobic_20_40_x2_plus_Sweet_Spot.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L07_Anaerobic_20_40_x2_plus_Sweet_Spot.zwo))

![Mixed L07 - Anaerobic 20/40 x2 + Sweet Spot](docs/img/05_Mixed/MIX_L07_Anaerobic_20_40_x2_plus_Sweet_Spot.png)

**Pick this when:** Hard day touching every zone. A good test of all-round fitness.

10 min warm-up, 3 min @ 70%, 8 x (20 s @ 150% / 40 s @ 50%), 5 min @ 55%, 8 x (20 s @ 150% / 40 s @ 50%), 5 min @ 55%, 16 min @ 92%, 5 min cool-down.

*Two sets of eight 20/40s at 150%, then 16 minutes of sweet spot on tired legs.*

#### Mixed L07 - Zone Pyramid Tempo-THR-VO2-THR-Tempo

**60 min - TSS 63 - Zwift ~3.5/5 - Medium to hard day** - [`MIX_L07_Zone_Pyramid_Tempo_THR_VO2_THR_Tempo.zwo`](Zwift/05_Mixed/MIX_L07_Zone_Pyramid_Tempo_THR_VO2_THR_Tempo.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L07_Zone_Pyramid_Tempo_THR_VO2_THR_Tempo.zwo))

![Mixed L07 - Zone Pyramid Tempo-THR-VO2-THR-Tempo](docs/img/05_Mixed/MIX_L07_Zone_Pyramid_Tempo_THR_VO2_THR_Tempo.png)

**Pick this when:** Hard day touching every zone. A good test of all-round fitness.

10 min warm-up, 7 min @ 85%, 4 min @ 60%, 7 min @ 100%, 4 min @ 55%, 4 min @ 115%, 4 min @ 55%, 7 min @ 100%, 3 min @ 60%, 5 min @ 85%, 5 min cool-down.

*Tempo, threshold, VO2max and back down. Notice how each zone feels different.*

#### Mixed L08 - Crit Simulation 3x8 (95% + 15s surges)

**60 min - TSS 64 - Zwift ~3.5/5 - Medium to hard day** - [`MIX_L08_Crit_Simulation_3x8_95_plus_15s_surges.zwo`](Zwift/05_Mixed/MIX_L08_Crit_Simulation_3x8_95_plus_15s_surges.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L08_Crit_Simulation_3x8_95_plus_15s_surges.zwo))

![Mixed L08 - Crit Simulation 3x8 (95% + 15s surges)](docs/img/05_Mixed/MIX_L08_Crit_Simulation_3x8_95_plus_15s_surges.png)

**Pick this when:** Hard, race-specific session. Use in the 4-6 weeks before an event.

10 min warm-up, 5 min @ 60%, 4 x (1:45 min @ 95% / 15 s @ 150%), 4 min @ 55%, 4 x (1:45 min @ 95% / 15 s @ 150%), 4 min @ 55%, 4 x (1:45 min @ 95% / 15 s @ 150%), 8 min @ 65%, 5 min cool-down.

*Three 8-minute criterium blocks: threshold riding with a 15-second surge every 2 minutes. Trains repeated accelerations on top of a hard base.*

#### Mixed L08 - Race Simulation

**60 min - TSS 65 - Zwift ~4/5 - Medium to hard day** - [`MIX_L08_Race_Simulation.zwo`](Zwift/05_Mixed/MIX_L08_Race_Simulation.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L08_Race_Simulation.zwo))

![Mixed L08 - Race Simulation](docs/img/05_Mixed/MIX_L08_Race_Simulation.png)

**Pick this when:** Hard, race-specific session. Use in the 4-6 weeks before an event.

10 min warm-up, 5 min @ 72%, 1 min @ 140%, 3 min @ 105%, 5 min @ 88%, 1:30 min @ 130%, 8 min @ 97%, 4 min @ 65%, 30 s @ 150%, 2:30 min @ 102%, 4 min @ 65%, 1 min @ 120%, 20 s @ 160%, 4:40 min @ 50%, 4:30 min @ 60%, 5 min cool-down.

*Neutral rollout, attack, chase, breakaway, counter, lead-out, sprint. React to each cue immediately.*

#### Mixed L09 - Kitchen Sink

**60 min - TSS 67 - Zwift ~4/5 - Medium to hard day** - [`MIX_L09_Kitchen_Sink.zwo`](Zwift/05_Mixed/MIX_L09_Kitchen_Sink.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L09_Kitchen_Sink.zwo))

![Mixed L09 - Kitchen Sink](docs/img/05_Mixed/MIX_L09_Kitchen_Sink.png)

**Pick this when:** Very hard session: everything in one ride. Not more than once a week.

10 min warm-up, 10 min @ 92%, 3 min @ 55%, 8 min @ 102%, 3 min @ 55%, 4 x (2 min @ 118% / 2 min @ 50%), 30 s @ 55%, 3 x (15 s @ 160% / 1:15 min @ 55%), 5 min cool-down.

*Sweet spot, threshold, VO2max and sprints in one hour. Intensity rises as duration falls.*

#### Mixed L09 - Threshold 2x10 @ 102% + 3x2 @ 120%

**60 min - TSS 67 - Zwift ~4/5 - Medium to hard day** - [`MIX_L09_Threshold_2x10_102_plus_3x2_120.zwo`](Zwift/05_Mixed/MIX_L09_Threshold_2x10_102_plus_3x2_120.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L09_Threshold_2x10_102_plus_3x2_120.zwo))

![Mixed L09 - Threshold 2x10 @ 102% + 3x2 @ 120%](docs/img/05_Mixed/MIX_L09_Threshold_2x10_102_plus_3x2_120.png)

**Pick this when:** Very hard session: everything in one ride. Not more than once a week.

10 min warm-up, 10 min @ 102%, 4 min @ 55%, 10 min @ 102%, 4 min @ 55%, 3 x (2 min @ 120% / 2 min @ 50%), 5 min @ 60%, 5 min cool-down.

*Supra-threshold first, then VO2max on tired legs. Save something for the 2-minute efforts.*

#### Mixed L10 - Hard Race Simulation

**60 min - TSS 71 - Zwift ~4.5/5 - Medium to hard day** - [`MIX_L10_Hard_Race_Simulation.zwo`](Zwift/05_Mixed/MIX_L10_Hard_Race_Simulation.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L10_Hard_Race_Simulation.zwo))

![Mixed L10 - Hard Race Simulation](docs/img/05_Mixed/MIX_L10_Hard_Race_Simulation.png)

**Pick this when:** The hardest mixed sessions. Peak race preparation only; fresh legs and full fuel.

10 min warm-up, 4 min @ 75%, 1 min @ 145%, 3 min @ 105%, 5 min @ 90%, 1:30 min @ 130%, 8 min @ 100%, 5 min @ 65%, 30 s @ 155%, 3 min @ 102%, 3 min @ 65%, 30 s @ 150%, 2 min @ 98%, 2 min @ 65%, 1 min @ 125%, 20 s @ 160%, 5:10 min @ 50%, 5 min cool-down.

*A race that never lets up: longer break, harder attacks, two sprints. Treat every cue like it decides the race.*

#### Mixed L10 - Threshold 2x8 + 4x3 @ 118%

**60 min - TSS 71 - Zwift ~4.5/5 - Medium to hard day** - [`MIX_L10_Threshold_2x8_plus_4x3_118.zwo`](Zwift/05_Mixed/MIX_L10_Threshold_2x8_plus_4x3_118.zwo) ([MyWhoosh version](MyWhoosh/05_Mixed/MIX_L10_Threshold_2x8_plus_4x3_118.zwo))

![Mixed L10 - Threshold 2x8 + 4x3 @ 118%](docs/img/05_Mixed/MIX_L10_Threshold_2x8_plus_4x3_118.png)

**Pick this when:** The hardest mixed sessions. Peak race preparation only; fresh legs and full fuel.

10 min warm-up, 8 min @ 100%, 4 min @ 55%, 8 min @ 100%, 3 min @ 55%, 4 x (3 min @ 118% / 2:30 min @ 50%), 5 min cool-down.

*Threshold then a full VO2max set. The hardest mixed session - only when fresh and fuelled.*

### Over-Unders - 60 min

Alternating under / over threshold without rest. Lactate clearance, very effective for raising FTP. One per week at most. Files: [`Zwift/06_OverUnders`](Zwift/06_OverUnders) - [`MyWhoosh/06_OverUnders`](MyWhoosh/06_OverUnders) - [back to index](#index)

![Over-Unders - 60 min training load](docs/img/06_OverUnders_progression.png)

#### Over-Unders L01 - Intro 2x8 (85/92)

**60 min - TSS 49 - Zwift ~2/5 - HARD day** - [`OU_L01_Intro_2x8_85_92.zwo`](Zwift/06_OverUnders/OU_L01_Intro_2x8_85_92.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L01_Intro_2x8_85_92.zwo))

![Over-Unders L01 - Intro 2x8 (85/92)](docs/img/06_OverUnders/OU_L01_Intro_2x8_85_92.png)

**Pick this when:** Introduction to over-unders: small over/under gap. Start here even if your threshold level is higher.

10 min warm-up, 4 x (1 min @ 85% / 1 min @ 92%), 5 min @ 55%, 4 x (1 min @ 85% / 1 min @ 92%), 24 min @ 65%, 5 min cool-down.

*Learn the rhythm: 1 min at 85%, 1 min at 92%. Nothing above sweet spot yet. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L01 - Intro 3x6 (85/95)

**60 min - TSS 51 - Zwift ~2/5 - HARD day** - [`OU_L01_Intro_3x6_85_95.zwo`](Zwift/06_OverUnders/OU_L01_Intro_3x6_85_95.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L01_Intro_3x6_85_95.zwo))

![Over-Unders L01 - Intro 3x6 (85/95)](docs/img/06_OverUnders/OU_L01_Intro_3x6_85_95.png)

**Pick this when:** Introduction to over-unders: small over/under gap. Start here even if your threshold level is higher.

10 min warm-up, 3 x (1 min @ 85% / 1 min @ 95%), 4 min @ 55%, 3 x (1 min @ 85% / 1 min @ 95%), 4 min @ 55%, 3 x (1 min @ 85% / 1 min @ 95%), 19 min @ 65%, 5 min cool-down.

*Short blocks, the over touches threshold. Change only the gear between phases. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L02 - 3x8 (85/95)

**60 min - TSS 55 - Zwift ~2.5/5 - HARD day** - [`OU_L02_3x8_85_95.zwo`](Zwift/06_OverUnders/OU_L02_3x8_85_95.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L02_3x8_85_95.zwo))

![Over-Unders L02 - 3x8 (85/95)](docs/img/06_OverUnders/OU_L02_3x8_85_95.png)

**Pick this when:** Introduction to over-unders: small over/under gap. Start here even if your threshold level is higher.

10 min warm-up, 4 x (1 min @ 85% / 1 min @ 95%), 4 min @ 55%, 4 x (1 min @ 85% / 1 min @ 95%), 4 min @ 55%, 4 x (1 min @ 85% / 1 min @ 95%), 13 min @ 65%, 5 min cool-down.

*Three 8-minute blocks. The under at 85% should feel like a real breather. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L02 - 2x12 (88/95)

**60 min - TSS 56 - Zwift ~2.5/5 - HARD day** - [`OU_L02_2x12_88_95.zwo`](Zwift/06_OverUnders/OU_L02_2x12_88_95.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L02_2x12_88_95.zwo))

![Over-Unders L02 - 2x12 (88/95)](docs/img/06_OverUnders/OU_L02_2x12_88_95.png)

**Pick this when:** Introduction to over-unders: small over/under gap. Start here even if your threshold level is higher.

10 min warm-up, 6 x (1 min @ 88% / 1 min @ 95%), 5 min @ 55%, 6 x (1 min @ 88% / 1 min @ 95%), 16 min @ 65%, 5 min cool-down.

*Two longer blocks with the under in sweet spot. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L03 - 3x10 (85/95)

**60 min - TSS 58 - Zwift ~2.5/5 - HARD day** - [`OU_L03_3x10_85_95.zwo`](Zwift/06_OverUnders/OU_L03_3x10_85_95.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L03_3x10_85_95.zwo))

![Over-Unders L03 - 3x10 (85/95)](docs/img/06_OverUnders/OU_L03_3x10_85_95.png)

**Pick this when:** Your weekly over-under session once sweet spot L04-L05 feels comfortable.

10 min warm-up, 5 x (1 min @ 85% / 1 min @ 95%), 4 min @ 55%, 5 x (1 min @ 85% / 1 min @ 95%), 4 min @ 55%, 5 x (1 min @ 85% / 1 min @ 95%), 7 min @ 60%, 5 min cool-down.

*The light over-under classic: 30 minutes total, under at 85%. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L03 - 3x9 (90/100) 2+1

**60 min - TSS 58 - Zwift ~3/5 - HARD day** - [`OU_L03_3x9_90_100_2plus1.zwo`](Zwift/06_OverUnders/OU_L03_3x9_90_100_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L03_3x9_90_100_2plus1.zwo))

![Over-Unders L03 - 3x9 (90/100) 2+1](docs/img/06_OverUnders/OU_L03_3x9_90_100_2plus1.png)

**Pick this when:** Your weekly over-under session once sweet spot L04-L05 feels comfortable. Long unders: closer to a hard climb with attacks.

10 min warm-up, 3 x (2 min @ 90% / 1 min @ 100%), 4 min @ 55%, 3 x (2 min @ 90% / 1 min @ 100%), 4 min @ 55%, 3 x (2 min @ 90% / 1 min @ 100%), 10 min @ 60%, 5 min cool-down.

*2 min under at 90%, 1 min over at FTP. The first time the over hits 100%. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L04 - 3x10 (88/95)

**60 min - TSS 59 - Zwift ~3/5 - HARD day** - [`OU_L04_3x10_88_95.zwo`](Zwift/06_OverUnders/OU_L04_3x10_88_95.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L04_3x10_88_95.zwo))

![Over-Unders L04 - 3x10 (88/95)](docs/img/06_OverUnders/OU_L04_3x10_88_95.png)

**Pick this when:** Your weekly over-under session once sweet spot L04-L05 feels comfortable.

10 min warm-up, 5 x (1 min @ 88% / 1 min @ 95%), 4 min @ 55%, 5 x (1 min @ 88% / 1 min @ 95%), 4 min @ 55%, 5 x (1 min @ 88% / 1 min @ 95%), 7 min @ 60%, 5 min cool-down.

*30 minutes with the under in sweet spot. Steady breathing on the unders. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L04 - 3x8 (90/102) 1+1

**60 min - TSS 59 - Zwift ~3/5 - HARD day** - [`OU_L04_3x8_90_102_1plus1.zwo`](Zwift/06_OverUnders/OU_L04_3x8_90_102_1plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L04_3x8_90_102_1plus1.zwo))

![Over-Unders L04 - 3x8 (90/102) 1+1](docs/img/06_OverUnders/OU_L04_3x8_90_102_1plus1.png)

**Pick this when:** Your weekly over-under session once sweet spot L04-L05 feels comfortable. 1+1 format: frequent changes, feels like a surging group ride.

10 min warm-up, 4 x (1 min @ 90% / 1 min @ 102%), 4 min @ 55%, 4 x (1 min @ 90% / 1 min @ 102%), 4 min @ 55%, 4 x (1 min @ 90% / 1 min @ 102%), 13 min @ 65%, 5 min cool-down.

*Overs just above FTP, unders at 90%. Equal 1-minute phases. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L05 - 3x9 (93/105) 2+1

**60 min - TSS 62 - Zwift ~3/5 - HARD day** - [`OU_L05_3x9_93_105_2plus1.zwo`](Zwift/06_OverUnders/OU_L05_3x9_93_105_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L05_3x9_93_105_2plus1.zwo))

![Over-Unders L05 - 3x9 (93/105) 2+1](docs/img/06_OverUnders/OU_L05_3x9_93_105_2plus1.png)

**Pick this when:** Your weekly over-under session once sweet spot L04-L05 feels comfortable. Long unders: closer to a hard climb with attacks.

10 min warm-up, 3 x (2 min @ 93% / 1 min @ 105%), 4 min @ 55%, 3 x (2 min @ 93% / 1 min @ 105%), 4 min @ 55%, 3 x (2 min @ 93% / 1 min @ 105%), 10 min @ 60%, 5 min cool-down.

*The classic protocol: 2 min at 93%, 1 min at 105%. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L05 - 2x15 (92/102) 2+1

**60 min - TSS 63 - Zwift ~3.5/5 - HARD day** - [`OU_L05_2x15_92_102_2plus1.zwo`](Zwift/06_OverUnders/OU_L05_2x15_92_102_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L05_2x15_92_102_2plus1.zwo))

![Over-Unders L05 - 2x15 (92/102) 2+1](docs/img/06_OverUnders/OU_L05_2x15_92_102_2plus1.png)

**Pick this when:** Your weekly over-under session once sweet spot L04-L05 feels comfortable. Long unders: closer to a hard climb with attacks.

10 min warm-up, 5 x (2 min @ 92% / 1 min @ 102%), 5 min @ 55%, 5 x (2 min @ 92% / 1 min @ 102%), 10 min @ 60%, 5 min cool-down.

*Two long blocks. Patience: the fifth over of each block is the one that counts. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L06 - 2x15 (93/105) 2+1

**60 min - TSS 65 - Zwift ~3.5/5 - HARD day** - [`OU_L06_2x15_93_105_2plus1.zwo`](Zwift/06_OverUnders/OU_L06_2x15_93_105_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L06_2x15_93_105_2plus1.zwo))

![Over-Unders L06 - 2x15 (93/105) 2+1](docs/img/06_OverUnders/OU_L06_2x15_93_105_2plus1.png)

**Pick this when:** Advanced over-unders: bigger over phases. Pick when L05 has been completed without power fading. Long unders: closer to a hard climb with attacks.

10 min warm-up, 5 x (2 min @ 93% / 1 min @ 105%), 5 min @ 55%, 5 x (2 min @ 93% / 1 min @ 105%), 10 min @ 60%, 5 min cool-down.

*Classic protocol in two long blocks of five cycles. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L06 - 3x10 (90/105) 1+1

**60 min - TSS 65 - Zwift ~3.5/5 - HARD day** - [`OU_L06_3x10_90_105_1plus1.zwo`](Zwift/06_OverUnders/OU_L06_3x10_90_105_1plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L06_3x10_90_105_1plus1.zwo))

![Over-Unders L06 - 3x10 (90/105) 1+1](docs/img/06_OverUnders/OU_L06_3x10_90_105_1plus1.png)

**Pick this when:** Advanced over-unders: bigger over phases. Pick when L05 has been completed without power fading. 1+1 format: frequent changes, feels like a surging group ride.

10 min warm-up, 5 x (1 min @ 90% / 1 min @ 105%), 4 min @ 55%, 5 x (1 min @ 90% / 1 min @ 105%), 4 min @ 55%, 5 x (1 min @ 90% / 1 min @ 105%), 7 min @ 60%, 5 min cool-down.

*Three blocks of ten 1-minute switches. The under at 90% must be held. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L07 - 3x12 (93/105) 2+1

**60 min - TSS 70 - Zwift ~4/5 - HARD day** - [`OU_L07_3x12_93_105_2plus1.zwo`](Zwift/06_OverUnders/OU_L07_3x12_93_105_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L07_3x12_93_105_2plus1.zwo))

![Over-Unders L07 - 3x12 (93/105) 2+1](docs/img/06_OverUnders/OU_L07_3x12_93_105_2plus1.png)

**Pick this when:** Advanced over-unders: bigger over phases. Pick when L05 has been completed without power fading. Long unders: closer to a hard climb with attacks.

10 min warm-up, 4 x (2 min @ 93% / 1 min @ 105%), 3 min @ 55%, 4 x (2 min @ 93% / 1 min @ 105%), 3 min @ 55%, 4 x (2 min @ 93% / 1 min @ 105%), 3 min @ 60%, 5 min cool-down.

*Classic protocol, longer blocks. 36 minutes of over-unders. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L07 - 4x8 (90/110) 1+1

**60 min - TSS 70 - Zwift ~4/5 - HARD day** - [`OU_L07_4x8_90_110_1plus1.zwo`](Zwift/06_OverUnders/OU_L07_4x8_90_110_1plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L07_4x8_90_110_1plus1.zwo))

![Over-Unders L07 - 4x8 (90/110) 1+1](docs/img/06_OverUnders/OU_L07_4x8_90_110_1plus1.png)

**Pick this when:** Advanced over-unders: bigger over phases. Pick when L05 has been completed without power fading. 1+1 format: frequent changes, feels like a surging group ride.

10 min warm-up, 4 x (1 min @ 90% / 1 min @ 110%), 3 min @ 55%, 4 x (1 min @ 90% / 1 min @ 110%), 3 min @ 55%, 4 x (1 min @ 90% / 1 min @ 110%), 3 min @ 55%, 4 x (1 min @ 90% / 1 min @ 110%), 4 min @ 60%, 5 min cool-down.

*Overs at 110% - VO2max territory - with unders at 90%. Four blocks. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L08 - Pyramid 4-8-10-8-4 (90 / 105-115)

**60 min - TSS 72 - Zwift ~4.5/5 - HARD day** - [`OU_L08_Pyramid_4_8_10_8_4_90_105_115.zwo`](Zwift/06_OverUnders/OU_L08_Pyramid_4_8_10_8_4_90_105_115.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L08_Pyramid_4_8_10_8_4_90_105_115.zwo))

![Over-Unders L08 - Pyramid 4-8-10-8-4 (90 / 105-115)](docs/img/06_OverUnders/OU_L08_Pyramid_4_8_10_8_4_90_105_115.png)

**Pick this when:** Advanced over-unders: bigger over phases. Pick when L05 has been completed without power fading. Pyramid: the overs get progressively harder then easier - a mental as much as a physical session.

10 min warm-up, 2 x (1 min @ 90% / 1 min @ 105%), 2:30 min @ 55%, 4 x (1 min @ 90% / 1 min @ 110%), 2:30 min @ 55%, 5 x (1 min @ 90% / 1 min @ 115%), 2:30 min @ 55%, 4 x (1 min @ 90% / 1 min @ 110%), 2:30 min @ 55%, 2 x (1 min @ 90% / 1 min @ 105%), 6 min cool-down.

*Overs rise from 105% to 115% at the peak, unders at 90%. The 10-minute block is the crux. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L08 - 3x12 (95/108) 2+1

**60 min - TSS 73 - Zwift ~4.5/5 - HARD day** - [`OU_L08_3x12_95_108_2plus1.zwo`](Zwift/06_OverUnders/OU_L08_3x12_95_108_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L08_3x12_95_108_2plus1.zwo))

![Over-Unders L08 - 3x12 (95/108) 2+1](docs/img/06_OverUnders/OU_L08_3x12_95_108_2plus1.png)

**Pick this when:** Advanced over-unders: bigger over phases. Pick when L05 has been completed without power fading. Long unders: closer to a hard climb with attacks.

10 min warm-up, 4 x (2 min @ 95% / 1 min @ 108%), 3 min @ 55%, 4 x (2 min @ 95% / 1 min @ 108%), 3 min @ 55%, 4 x (2 min @ 95% / 1 min @ 108%), 3 min @ 60%, 5 min cool-down.

*36 minutes, under at 95%, over at 108%. Fuel before and during. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L09 - 2x18 (95/110) 2+1

**60 min - TSS 74 - Zwift ~4.5/5 - HARD day** - [`OU_L09_2x18_95_110_2plus1.zwo`](Zwift/06_OverUnders/OU_L09_2x18_95_110_2plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L09_2x18_95_110_2plus1.zwo))

![Over-Unders L09 - 2x18 (95/110) 2+1](docs/img/06_OverUnders/OU_L09_2x18_95_110_2plus1.png)

**Pick this when:** Peak over-unders. Race-specific lactate clearance; only when fresh, and never the day before VO2max. Long unders: closer to a hard climb with attacks.

10 min warm-up, 6 x (2 min @ 95% / 1 min @ 110%), 4 min @ 55%, 6 x (2 min @ 95% / 1 min @ 110%), 5 min @ 60%, 5 min cool-down.

*Two long blocks of six cycles, overs at 110%. Mentally commit before the second block. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L09 - 3x12 (92/110) 1+1

**60 min - TSS 76 - Zwift ~4.5/5 - HARD day** - [`OU_L09_3x12_92_110_1plus1.zwo`](Zwift/06_OverUnders/OU_L09_3x12_92_110_1plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L09_3x12_92_110_1plus1.zwo))

![Over-Unders L09 - 3x12 (92/110) 1+1](docs/img/06_OverUnders/OU_L09_3x12_92_110_1plus1.png)

**Pick this when:** Peak over-unders. Race-specific lactate clearance; only when fresh, and never the day before VO2max. 1+1 format: frequent changes, feels like a surging group ride.

10 min warm-up, 6 x (1 min @ 92% / 1 min @ 110%), 3 min @ 55%, 6 x (1 min @ 92% / 1 min @ 110%), 3 min @ 55%, 6 x (1 min @ 92% / 1 min @ 110%), 3 min @ 60%, 5 min cool-down.

*Overs at 110% with only 1-minute unders at 92%. Hard and repeatable. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L10 - 2x20 (95/112) 3+1

**60 min - TSS 78 - Zwift ~4.5/5 - HARD day** - [`OU_L10_2x20_95_112_3plus1.zwo`](Zwift/06_OverUnders/OU_L10_2x20_95_112_3plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L10_2x20_95_112_3plus1.zwo))

![Over-Unders L10 - 2x20 (95/112) 3+1](docs/img/06_OverUnders/OU_L10_2x20_95_112_3plus1.png)

**Pick this when:** Peak over-unders. Race-specific lactate clearance; only when fresh, and never the day before VO2max. Long unders: closer to a hard climb with attacks.

10 min warm-up, 5 x (3 min @ 95% / 1 min @ 112%), 4 min @ 55%, 5 x (3 min @ 95% / 1 min @ 112%), 6 min cool-down.

*The hardest over-under in the library: 40 minutes, 3 min under at 95%, 1 min over at 112%. Only when fresh. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

#### Over-Unders L10 - 3x12 (93/115) 1+1

**60 min - TSS 79 - Zwift ~5/5 - HARD day** - [`OU_L10_3x12_93_115_1plus1.zwo`](Zwift/06_OverUnders/OU_L10_3x12_93_115_1plus1.zwo) ([MyWhoosh version](MyWhoosh/06_OverUnders/OU_L10_3x12_93_115_1plus1.zwo))

![Over-Unders L10 - 3x12 (93/115) 1+1](docs/img/06_OverUnders/OU_L10_3x12_93_115_1plus1.png)

**Pick this when:** Peak over-unders. Race-specific lactate clearance; only when fresh, and never the day before VO2max. 1+1 format: frequent changes, feels like a surging group ride.

10 min warm-up, 6 x (1 min @ 93% / 1 min @ 115%), 3 min @ 55%, 6 x (1 min @ 93% / 1 min @ 115%), 3 min @ 55%, 6 x (1 min @ 93% / 1 min @ 115%), 3 min @ 60%, 5 min cool-down.

*Overs at 115%, unders at 93%, 3-minute recoveries. A race-winning session. The over creates lactate, the under trains your body to clear it while still working - never coast after an over.*

## File format notes

- Each `.zwo` is plain XML (`Warmup`, `SteadyState`, `IntervalsT`, `Ramp`, `FreeRide`, `Cooldown` blocks); durations in seconds, power as a fraction of FTP.
- Every ladder file totals exactly 3600 s (5400 s in the 90-minute folders) and contains in-ride coaching cues (`textevent`) in English. Tests and openers have their own durations (30-60 min).
- Workout names carry the category and level (e.g. `Threshold L07 - 5x5 @ 105%`); file names use a short code (`THR_L07_5x5_105.zwo`).
- Sprint targets (150-160 %) are deliberately conservative floors: go all-out regardless of the number shown.

## Repository layout

```
Zwift/                     .zwo files for Zwift, one folder per category (185 files)
MyWhoosh/                  same workouts adapted for the MyWhoosh importer (185 files)
docs/img/                  graphs used in this README (one per workout + load charts)
Zwift_Workout_Library.pdf  printable catalogue with clickable index and bookmarks
README.md                  this file
```

## Licence

Free to use and share for personal training. Workouts are generic training prescriptions, not medical advice: adapt them to your own fitness and consult a professional if in doubt.
