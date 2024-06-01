document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('#container');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '100vw';
    container.style.height = '100vh';

    document.getElementById('SquareButton').addEventListener('click', function() {
        let SquareCount = prompt("Wie viele Rechtecke pro Seite?");

        // Checkt ob der USerInput höher als 100 ist
        if (SquareCount > 100) {
            alert("DIe maximale Anzahl an Rechtecken pro Seite beträgt 100!");
            return;
        }

        SquareCount = SquareCount * SquareCount; // berechnet die Anzahl der Rechtecke

        // Löscht alle Rechtecke
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Generiert die Rechtecke
        for (let i = 0; i < SquareCount; i++) {
            const element = document.createElement('div');
            element.classList.add(`element${i}`);
            element.style.backgroundColor = 'gray';
            element.style.width = `${100 / Math.sqrt(SquareCount)}%`; // Passt die Breite an die Anzahl der Rechtecke an
            element.style.height = `${100 / Math.sqrt(SquareCount)}%`; // Passt die Höhe an die Anzahl der Rechtecke an
            container.appendChild(element);

            element.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'orange';
            });
        }
    });

    // Lädt Css Datei nach JavaScript
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css'; 
    document.head.appendChild(link);
});