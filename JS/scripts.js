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
