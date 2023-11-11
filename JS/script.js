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
