## gitjorn:

- Min offisielle programmeringshjemmeside. Dette er et pågående prosjekt som stadig skal oppdateres; filer legges til og slettes unna... Jobber med dette sammen med elevene på vg1 IM og vg2 IT.

---

## Skrivestandarder:

- **Filnavn og Lenker**: Ikke bruk åpenrom (space) mellom ord i filnavn eller lenker. Bruk helst camelCase. og fil navn skal være på engelsk. Eksempel:
  - Korrekt: `HomePage.tsx`
  - Feil: `HjemmeSide.tsx`
- **Bilder**: Alle bilder skal ligge i mappen `src/public/img/`. Bruk beskrivende filnavn uten mellomrom, f.eks. `myImageFile.png`.
- **Kursfiler**: Alle kursfiler skal ligge i mappen `src/data/courses/`. Bruk beskrivende filnavn uten mellomrom, f.eks. `myCourseFile.json`.
- **Språkbruk**: Tekst i dokumentet er hovedsakelig på norsk, men vi oversetter ikke fagspråk som oftest. Det vil si ord som f.eks. "branch" – når vi snakker om "branch", snakker vi om en branch i Git. Hvis vi oversetter til "grein", kan man komme til å tenke på en grein fra et vanlig tre.

- **Hjemmeside**: Her er linken til selve hjemmesiden for prosjektet: [Gitjorn Hjemmeside](https://jornkane.github.io/gitjorn/).

- **SSL Aktivering**: Husk aktivering av SSL:
  ```bash
  git config --global http.sslVerify true
  ```

---

## 📚 Kurssystem

Dette prosjektet bruker et JSON-basert kurssystem som gjør det enkelt å legge til nye kurs uten å skrive React-kode!

**📖 [Se hvordan du lager nye kurs →](src/data/courses/HowToMakeACourse.md)**

---

## Kom i gang

1. **Klon repoet:**
   ```sh
   git clone <repo-url>
   cd gitjorn
   ```

2. **Installer avhengigheter:**
   - Med pnpm:
     ```sh
     pnpm install
     ```
   - Eller med npm:
     ```sh
     npm install
     ```

3. **Start utviklingsserver:**
   - Med pnpm:
     ```sh
     pnpm run dev
     ```
   - Eller med npm:
     ```sh
     npm run dev
     ```

4. **Åpne nettsiden:**
   Gå til adressen som vises i terminalen (vanligvis http://localhost:5173 eller lignende).

> Bruk kun én pakkebehandler om gangen for å unngå lockfile-konflikter.