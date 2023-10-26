document.addEventListener('DOMContentLoaded', function() {
    var buttons = ['profile', 'experience', 'education', 'skills', 'hobbies', 'about-me'];

    buttons.forEach(function(buttonId) {
        var button = document.getElementById(buttonId + '-btn');
        var content = document.getElementById(buttonId);

        button.addEventListener('click', function() {
            var isVisible = content.style.display === 'block';
            hideAll();
            if (!isVisible) {
                content.style.display = 'block';
            }
        });
    });

    function hideAll() {
        buttons.forEach(function(buttonId) {
            var content = document.getElementById(buttonId);
            content.style.display = 'none';
        });
    }
});
