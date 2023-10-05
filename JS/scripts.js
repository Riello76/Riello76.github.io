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

// Update the element with id 'date-time' with the current date and time
const dateTimeElement = document.getElementById('date-time');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);
dateTimeElement.textContent = formattedDate;
// Function to apply color to the first letter of each word
function colorizeFirstLetter(word) {
    // Check if the first character is a letter (not a number or other character)
    const firstChar = word.charAt(0);
    // Exclude the word "at" from color modification
    if (word.toLowerCase() === 'at') {
        return word;
    }
    // Apply color to the first letter of each word and concatenate the rest of the word
    if (/[a-zA-Z]/.test(firstChar)) {
        return `<span class="colored-text">${firstChar}</span>${word.slice(1)}`;
    }
    return word;
}

// Split the formatted text into words
const words = formattedDate.split(' ');

// Apply color to the first letter of each word and join the words back
const coloredWords = words.map(colorizeFirstLetter);
const formattedText = coloredWords.join(' ');

// Set the formatted text inside your HTML element with id 'date-time'
dateTimeElement.innerHTML = formattedText;
