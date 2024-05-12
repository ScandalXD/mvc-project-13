# System Monitorowania Wydatków Domowych

## Spis treści

- [Opis](#opis)
- [Funkcjonalności](#funkcjonalności)
- [Technologie](#technologie)
- [Instalacja](#instalacja)
- [Uruchomienie aplikacji](#uruchomienie-aplikacji)

## Opis

Projekt `System Monitorowania Wydatków Domowych` to aplikacja webowa, która pozwala użytkownikom na śledzenie i zarządzanie ich wydatkami domowymi. Aplikacja pozwala na dodawanie, edycję oraz usuwanie wydatków oraz generowanie raportów.

## Funkcjonalności

- **Dodawanie wydatków**: Użytkownicy mogą dodawać wydatki, określając kategorię, kwotę i datę.
- **Przeglądanie historii wydatków**: Możliwość przeglądania wszystkich zapisanych wydatków.
- **Edycja i usuwanie wydatków**: Użytkownicy mogą edytować lub usuwać istniejące wydatki.
- **Generowanie raportów**: Funkcjonalność generowania raportów wydatków według kategorii.

## Technologie

- **Node.js**: Platforma serwerowa.
- **Express.js**: Framework dla aplikacji webowych.
- **EJS**: System szablonów.
- **CSS**: Stylizacja.
- **JavaScript**: Logika frontendu.

## Instalacja

### Wymagania

- Zainstalowany Node.js
- Zainstalowany npm (Node Package Manager)

### Kroki instalacji

1. Klonowanie repozytorium:
   git clone https://github.com/ScandalXD/mvc-project-13
   cd twoje-repozytorium

## Uruchomienie aplikacji

Aby uruchomić aplikację, masz kilka opcji zależnie od tego, czy chcesz użyć `nodemon` dla automatycznego restartowania aplikacji po wprowadzeniu zmian, czy standardowego `node`.

### Używanie Node.js

Wykonaj poniższe polecenie w katalogu głównym projektu, aby uruchomić aplikację przy użyciu Node.js: node app.js

### Używanie Nodemon

Nodemon jest narzędziem, które pomaga w rozwoju aplikacji node.js przez automatyczne restartowanie aplikacji, gdy wykryte zostaną zmiany plików. Jeśli nie masz zainstalowanego Nodemon, możesz go zainstalować globalnie przy pomocy npm: npm install -g nodemon

Następnie możesz uruchomić aplikację przy użyciu: nodemon app.js

Aplikacja będzie dostępna pod adresem `http://localhost:3000` w przeglądarce internetowej.
