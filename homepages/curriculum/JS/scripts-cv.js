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
document.addEventListener('DOMContentLoaded', function() {
    var curriculumBtn = document.getElementById('curriculum-btn');
    var btnGroup = document.querySelector('.btn-group');

    curriculumBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        btnGroup.classList.toggle('show-buttons'); 
    });
});
document.getElementById('menu-btn').addEventListener('click', function() {
    toggleButtonsVisibility();
});

document.getElementById('curriculum-btn').addEventListener('click', function() {
    toggleButtonsVisibility();
});

document.getElementById('projects-btn').addEventListener('click', function() {
    toggleButtonsVisibility();
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

