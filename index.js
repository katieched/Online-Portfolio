const nextArrow = document.getElementById('nextArrow');
const backArrow = document.getElementById('backArrow');
const projectContainer = document.getElementById('projectContainer');

function nextProject(e) {
    console.log('clicked');
}

nextArrow.addEventListener('click', e => {
    nextProject(e);
});

backArrow.addEventListener('click', previousProject);