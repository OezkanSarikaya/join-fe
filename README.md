
# Frontend des Join-Demo-Projekts

Dies ist das Frontend eines einfachen, nicht-produktiven Demo-Projekts namens **Join**, das im Rahmen eines Lernkurses erstellt wurde. Es stellt eine Art **Kanban-Board** dar, das zur Verwaltung von Aufgaben (Tasks) genutzt werden kann. Neben dem Erstellen und Bearbeiten von Tasks bietet das Projekt eine **Drag-and-Drop-Funktionalität**, mit der der Status der Aufgaben durch Verschieben verändert werden kann.

> **Wichtiger Hinweis:** Dieses Projekt ist nur für Demonstrationszwecke gedacht. Bitte geben Sie keine sensiblen Daten ein, da weder eine sichere Authentifizierung noch eine Verschlüsselung von Passwörtern implementiert ist.

---

## Inhalt

- [Installation](#installation)
- [Verwendung](#verwendung)
- [Frontend Dokumentation](#frontend-dokumentation)
- [Features](#features)
- [Wichtige Hinweise](#wichtige-hinweise)

---

## Installation

1. Klone dieses Repository:
   ```bash
   git clone <REPO_URL>
   ```
2. Öffne das Projektverzeichnis:
   ```bash
   cd <PROJECT_DIRECTORY>
   ```

Das Projekt benötigt keinen Webserver und kann direkt durch das Öffnen der `index.html`-Datei in einem Browser gestartet werden.

## Verwendung

- **HTML-Templates**: Das Projekt verwendet `w3-include-html`, um wiederverwendbare HTML-Template-Dateien zu laden. Hiermit wird das HTML aufgeräumter und die Templates können zentral bearbeitet werden.
- **API-Integration**: Diese Anwendung interagiert mit dem Backend über verschiedene API-Endpunkte. Stelle sicher, dass das Backend läuft, bevor du das Frontend verwendest.
- **BASE_URL**: In der Datei `data.js` befindet sich die Konstante `BASE_URL`, die die URL des Backends definiert. Setze den Wert dieser Konstante auf den API-Endpunkt des Backends, z.B.:
   ```javascript
   const BASE_URL = "http://127.0.0.1:8000/api/";
   ```

### Beispielhafter Ablauf:
1. Öffne `index.html` in deinem Browser.
2. Die Anwendung nutzt JavaScript, um Daten zu laden und zu aktualisieren.
3. Überprüfe die Konsole und den Netzwerk-Tab in den Entwicklertools für API-Anfragen und Fehlermeldungen.

## Frontend Dokumentation

Eine **vollständige Dokumentation** der verwendeten JavaScript-Funktionen und -Klassen ist in den `JSDoc`-Kommentaren im Projektcode enthalten.

**Dokumentations-HTML**: Die JSDoc-Dokumentation wurde als HTML-Datei erstellt und befindet sich unter:
```
assets/js/out/index.html
```
Öffne diese Datei im Browser, um eine übersichtliche und klickbare Dokumentation der JavaScript-Methoden, Klassen und Variablen zu erhalten.

## Features

- **Kanban-Board für Task-Management**: Aufgaben können erstellt, verwaltet und zwischen verschiedenen Status verschoben werden.
- **Drag-and-Drop-Funktion**: Verschieben Sie Aufgaben zwischen den Spalten, um den Status zu ändern.
- **Responsive Design**: Das Layout ist responsive und optimiert für Bildschirme bis zu einer Breite von 320px.
- **JavaScript für Funktionalität**: Alle Funktionen des Frontends, wie das Laden und Aktualisieren von Daten, wurden in reinem JavaScript umgesetzt.
- **Einbindung von HTML-Templates**: `w3-include-html` wird genutzt, um HTML-Templates modular zu laden, was die Übersichtlichkeit erhöht.
- **Interaktion mit Backend-API**: Das Frontend ruft verschiedene API-Endpunkte des Backends auf, um Daten zu laden und zu ändern.

## Wichtige Hinweise

- **Demo-Projekt**: Dieses Frontend dient nur zu Demonstrationszwecken und ist nicht für den produktiven Einsatz gedacht.
- **Keine sichere Authentifizierung**: Es gibt keine verschlüsselte Authentifizierung. Passwörter werden unverschlüsselt gespeichert und versendet. Eine sichere Authentifizierung wird in einem zukünftigen Update hinzugefügt.
- **Daten**: Bitte verwende keine echten Daten, da die Anwendung nicht für sensible oder persönliche Informationen ausgelegt ist.
- **Kompatibilität**: Dieses Frontend ist mit modernen Browsern kompatibel. Ältere Browser oder der Internet Explorer werden nicht unterstützt.

---

**Vielen Dank, dass du das Join-Demo-Projekt verwendest!**
