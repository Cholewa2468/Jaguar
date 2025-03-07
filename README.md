
---

# jaguar

Jaguar to aplikacja, która zamienia skróty na pełne formuły. Użytkownicy mogą wprowadzać skróty, a aplikacja automatycznie zamienia je na pełne teksty.

## Funkcje

- Wyszukiwanie skrótów
- Wyświetlanie pełnych formuł na podstawie skrótów
- Dynamiczne ładowanie danych z pliku JSON


## Struktura projektu

- `index.html`: Główny plik HTML aplikacji.
- `styles.css`: Plik CSS zawierający style aplikacji.
- `popup.js`: Plik JavaScript odpowiedzialny za dynamiczne ładowanie danych i interakcje użytkownika.
- `shortcuts.json`: Plik JSON zawierający skróty i ich pełne formuły.

## Przykładowy plik JSON

```json
[
    { "shortcut": "--ty", "content": "Thank you" },
    { "shortcut": "--imo", "content": "In my opinion" },
    { "shortcut": "--cod", "content": "Dzień dobry, Proszę o zeskanowanie kodów kalibracji skanera, wyślemy państ..." }
]
```

## Użycie

1. Otwórz aplikację w przeglądarce.
2. Wprowadź skrót w polu wyszukiwania.
3. Aplikacja automatycznie wyświetli pełną formułę na podstawie skrótu.

## Przykład

- Skrót: `--ty`
- Pełna formuła: `Thank you`

## Autorzy

- Patryk Lasek
- Artur Cholewski


---
