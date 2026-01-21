# Hvordan Legge Til Nye Kurs

Denne mappen inneholder JSON-filer som automatisk genererer kurssider.

## JSON-struktur

Hver kurs JSON-fil skal følge denne strukturen:

```json
{
  "metadata": {
    "id": "unik-kurs-id",
    "title": "Kurstittel",
    "description": "Kort beskrivelse",
    "image": "/img/bilde.jpg",
    "imageAlt": "Bildebeskrivelse",
    "imageSource": "Kildenavn",
    "imageSourceUrl": "https://kilde-url.com"
  },
  "sections": [
    {
      "content": [
        {
          "type": "heading",
          "level": 2,
          "text": "Seksjonstitel"
        },
        {
          "type": "text",
          "content": "Avsnittstekst"
        }
      ]
    }
  ]
}
```

## Innholdstyper

### Tekst

```json
{
  "type": "text",
  "content": "Din tekst her"
}
```

### Overskrift

```json
{
  "type": "heading",
  "level": 2,
  "text": "Overskriftstekst"
}
```

### Liste

```json
{
  "type": "list",
  "items": ["Element 1", "Element 2", "Element 3"]
}
```

### Kodeblokk

```json
{
  "type": "code",
  "language": "python",
  "code": "print('Hei Verden')"
}
```

### Bilde

```json
{
  "type": "image",
  "src": "/img/bilde.jpg",
  "alt": "Beskrivelse",
  "width": "60%",
  "caption": "Valgfri bildetekst"
}
```

### Lenke

```json
{
  "type": "link",
  "text": "Lenketekst",
  "url": "https://eksempel.com",
  "external": true
}
```

### Varselbokser (Alert)

```json
{
  "type": "alert",
  "variant": "info",
  "title": "Tittel (valgfri)",
  "content": "Innholdstekst her"
}
```

**Varianter:** `info` (blå), `warning` (gul), `tip` (grønn), `danger` (rød).

### Video

Støtter direkte lenker til YouTube (embeddes automatisk via iframe). For andre videoer, brukes `url` som en link.

```json
{
  "type": "video",
  "url": "https://www.youtube.com/watch?v=...",
  "caption": "Videobeskrivelse"
}
```

### Iframe (for undersøkelser, innebygd innhold)

```json
{
  "type": "iframe",
  "src": "https://iframe-url.com",
  "width": "500px",
  "height": "550px",
  "caption": "Valgfri bildetekst"
}
```

### Python Runner (interaktiv Python-editor)

```json
{
  "type": "python-runner"
}
```

Dette legger til en fullstendig interaktiv Python-editor med:

- Kode-editor
- Fire forhåndslagde eksempler
- Kjør-knapp for å utføre koden
- Output-område
- Støtte for `print()` statements
- Fungerer helt uten å installere Python!

## Legge Til Et Nytt Kurs

1. Opprett en ny JSON-fil i denne mappen (f.eks. `mitt-nye-kurs.json`)
2. Følg strukturen ovenfor
3. Legg til importen i `src/utils/courseLoader.ts`
4. Legg den til i `allCourses`-arrayet i `courseLoader.ts`
5. Kurset vil automatisk dukke opp på `/kurs`-siden!

## Eksempel

Se `python-starter.json`, `it-oop.json`, eller `html-css-basics.json` for komplette eksempler.
