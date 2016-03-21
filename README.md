 + **Beschreibung:**
     + Dieser 'Chart - Explorer' kann in Ergänzung zu bereits vorhandenen Datenbank Verwaltungsprogrammen genutzt werden.
                                Der 'Chart - Explorer' hat die Aufgabe Datensätze in Diagrammform zu visualisieren.
                                An den 'Chart Explorer' wird das Ergebnis einer Datenbankabfrage als CSV übergeben.
                                In der ersten Zeile der übernimmt der 'Chart Explorer' die Spaltennamen.
                                Mit der zweiten Zeile werden die Datensätze übergeben. In der linken Spalte befinden sich die Werte für die X - Achse der Diagramme.
                                Alle nachfolgenden Spalten beinhalten nummerische Werte. Die Zellen der einzelnen Zeilen sind untereinander mit Semikolon getrennt.
                                Der Inhalt der Zellen wird nicht escaped.
                                Die Zeilen werden mit '\n' beendet.
+ **Demo:** <a href="http.//chart-explorer.stephankrauss.de">Demo</a>
+ **Installation:**
	+ Im 'Document Root' eines Servers wird ein Verzeichnis anlegen. Der Inhalt der Zip - Datei  wird in dieses Verzeichnis kopiert. Durch Aufruf der /app/index.html wird die Applikation gestartet.
+ **Credits:**
    + JQuery , MIT
    + JQueryUI , MIT
    + Bootstrap , MIT
    + Handlebars , MIT
    + uvCharts , MIT
    + Async , Free
+ **zu erledigen:**
	+ Verhinderung der Eingabe von 'unsauberen' Werten , Vers. 0.3
    + Überarbeitung der Anzeige / Reaktion auf Fehler , Vers. 0.4
    + Anbindung an relationale Datenbanken , Vers. 0.5
    + nachträgliche interaktive Veränderung der Diagramme , 0.6
