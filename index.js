const nextArrow = document.getElementById('nextArrow');
const backArrow = document.getElementById('backArrow');

const projectContainer = document.getElementById('projectContainer');
const projectTitle = document.querySelector('.projectTitle');
const projectDescription = document.querySelector('.projectDescription');
const projectImage = document.querySelector('.projectImage');
const siteLink = document.getElementById('siteLink');
const repoLink = document.getElementById('repoLink');

const projectTitles = [ 'TravelShare', 'HabiPad'];

const projectDescriptions = [
    'TravelShare is an anonymous blogging website that allows users to make posts about their travel experiences. HTML, CSS and JavaScript were used to create the front-end, whilst node.js and express were used to create the back-end. The server for this app was deployed using Heroku.',
    'HabiPad is a full stack application that allows users to create an acount, track their habits, and build a habit streak. Express and PostgreSQL were used for the back-end, whilst HTML, CSS and JavaScrip were used for the front-end. User authentication was implemented using json web tokens.'
];

const projectImageLinks = [
    "images/TravelShare.png",
    "images/HabiPad.png"
];

const siteLinks = [
    "https://bagels-journal-project.netlify.app/client/html/mainpage",
    "https://wellbeing-habit-tracker-client.netlify.app/"
];

const repoLinks = [
    "https://github.com/Rachiey/journalproject",
    "https://github.com/Forum-123/Lap-2-Project-Server"
];



let arrayIndex = 0;

function nextProject(e) {
    arrayIndex = (arrayIndex + 1) % projectTitles.length;
}

function previousProject(e) {
    arrayIndex = (arrayIndex - 1 + projectTitles.length) % projectTitles.length;
}

function displayProject(e) {
    projectTitle.textContent = projectTitles[arrayIndex];
    projectDescription.textContent = projectDescriptions[arrayIndex];
    projectImage.setAttribute("src", `${projectImageLinks[arrayIndex]}`);
    siteLink.setAttribute("href", siteLinks[arrayIndex]);
    repoLink.setAttribute("href", repoLinks[arrayIndex]);
}

nextArrow.addEventListener('click', e => {
    nextProject(e);
    displayProject(e);
});

backArrow.addEventListener('click', e => {
    previousProject(e);
    displayProject(e);
});