document.addEventListener('DOMContentLoaded', function() {
    var buttons = ['profile', 'experience', 'education', 'skills', 'hobbies', 'about-me'];

    buttons.forEach(function(buttonId) {
        var button = document.getElementById(buttonId + '-btn');
        var content = document.getElementById(buttonId);

        button.addEventListener('click', function() {
            toggleContent(content);
        });

        // Hide content initially
        content.style.display = 'none';
    });

    function hideAll() {
        buttons.forEach(function(buttonId) {
            var content = document.getElementById(buttonId);
            content.style.display = 'none';
        });
    }

    var curriculumBtn = document.getElementById('curriculum-btn');
    var btnGroup = document.querySelector('.btn-group');

    curriculumBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        btnGroup.classList.toggle('show-buttons'); 
    });

    // Additional code for other buttons and toggling can remain the same

    function toggleContent(content) {
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            hideAll();
            content.style.display = 'block';
        }
    }
});
