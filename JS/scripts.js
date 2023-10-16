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
