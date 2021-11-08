const nextArrow = document.getElementById('nextArrow');
const backArrow = document.getElementById('backArrow');
const projectContainer = document.getElementById('projectContainer');

const projectTitles = [ 'TravelShare', 'HabiPad'];

let arrayCount = 0;

function nextProject(e) {
    arrayCount++;
    //let projectTitle = projectTitles[arrayCount] blah blah
    //append new title, etc to projectContainer
    console.log('clicked');
}

function previousProject(e) {
    arrayCount--;
    //same as above but backwards
    console.log('clicked');
}

nextArrow.addEventListener('click', e => {
    nextProject(e);
});

backArrow.addEventListener('click', e => {
    previousProject(e);
});