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

    var curriculumBtn = document.getElementById('curriculum-btn');
    var btnGroup = document.querySelector('.btn-group');

    curriculumBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        btnGroup.classList.toggle('show-buttons'); 
        hideAllExcept(null); // Close content when curriculumBtn is clicked
    });

    // Additional code for other buttons and toggling can remain the same

    function toggleContent(content) {
        hideAllExcept(content);
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }

    function hideAllExcept(exceptContent) {
        buttons.forEach(function(buttonId) {
            var content = document.getElementById(buttonId);
            if (content !== exceptContent) {
                content.style.display = 'none';
            }
        });
    }
});


document.getElementById('home-btn-back').addEventListener('click', function() {
    toggleButtonsVisibility();
});

function toggleButtonsVisibility() {
    var curriculumBtn = document.getElementById('curriculum-btn');
    var projectsBtn = document.getElementById('projects-btn');
    var homeBtnBack = document.getElementById('home-btn-back');
    
    if (curriculumBtn.classList.contains('hidden')) {
        curriculumBtn.classList.remove('hidden');
        projectsBtn.classList.remove('hidden');
        homeBtnBack.classList.remove('hidden');
    } else {
        curriculumBtn.classList.add('hidden');
        projectsBtn.classList.add('hidden');
        homeBtnBack.classList.add('hidden');
    }
}
