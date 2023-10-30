var buttons = document.querySelectorAll('.button-cv');
var paragraphs = document.querySelectorAll('.paragraph-cv');

buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Nascondi tutti gli iframe
        paragraphs.forEach(function(paragraph) {
            paragraph.style.display = 'none';
        });

        // Mostra solo l'iframe corrispondente al pulsante cliccato
        paragraphs[index].style.display = 'block';
    });
});