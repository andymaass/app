<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "app";

// Verbindung zur Datenbank herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Überprüfen, ob die Verbindung erfolgreich war
if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}

// Überprüfen, ob alle Werte gesetzt und nicht leer sind
if (isset($_POST['Benutzername']) && isset($_POST['Passwort']) && isset($_POST['Name']) && isset($_POST['Geburtsdatum'])) {
    $benutzername = $_POST['Benutzername'];
    $passwort = $_POST['Passwort'];
    $name = $_POST['Name'];
    $geburtsdatum = $_POST['Geburtsdatum'];
    $registriert = date("Y-m-d"); // Aktuelles Datum im MySQL-Format

    // Überprüfen, ob kein Wert leer ist
    if (!empty($benutzername) && !empty($passwort) && !empty($name) && !empty($geburtsdatum)) {
        // SQL-Abfrage vorbereiten
        $sql = "INSERT INTO users (Benutzername, Passwort, Name, Geburt, Registriert) VALUES ('$benutzername', '$passwort', '$name', '$geburtsdatum', '$registriert')";

        // SQL-Abfrage ausführen
        if ($conn->query($sql) === TRUE) {
            echo "Eintrag erfolgreich hinzugefügt";
        } else {
            echo "Fehler beim Hinzufügen des Eintrags: " . $conn->error;
        }
    } else {
        echo "Alle Felder müssen ausgefüllt sein";
    }
} else {
    echo "Alle Felder müssen ausgefüllt sein";
}

// Verbindung zur Datenbank schließen
$conn->close();
?>
