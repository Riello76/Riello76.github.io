// Close all open paragraphs when a button is clicked
var buttons = document.querySelectorAll('.btn-secondary');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Close all open paragraphs
        var collapses = document.querySelectorAll('.collapse.show');
        collapses.forEach(function (collapse) {
            collapse.classList.remove('show');
        });
    });
});

// Split the formatted text into words
const words = formattedDate.split(' ');

// Apply color to the first letter of each word and join the words back
const coloredWords = words.map(colorizeFirstLetter);
const formattedText = coloredWords.join(' ');

// Set the formatted text inside your HTML element with id 'date-time'
dateTimeElement.innerHTML = formattedText;
