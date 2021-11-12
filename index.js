//arrow buttons
const nextArrow = document.getElementById('nextArrow');
const backArrow = document.getElementById('backArrow');

//project container elements
const projectContainer = document.getElementById('projectContainer');
const projectTitle = document.querySelector('.projectTitle');
const projectDescription = document.querySelector('.projectDescription');
const projectImage = document.querySelector('.projectImage');
const siteLink = document.getElementById('siteLink');
const repoLink = document.getElementById('repoLink');

//project details
const projectTitles = [ 'TravelShare', 'HabiPad', 'GitHub Repo Tracker'];

const projectDescriptions = [
    'TravelShare is an anonymous blogging website that allows users to make posts about their travel experiences. HTML, CSS and JavaScript were used to create the front-end, whilst node.js and express were used to create the back-end. The server for this app was deployed using Heroku.',
    'HabiPad is a full stack application that allows users to create an acount, track their habits, and build a habit streak. Express and PostgreSQL were used for the back-end, whilst HTML, CSS and JavaScrip were used for the front-end. User authentication was implemented using json web tokens.',
    'A GitHub Repo Tracker which allows the user to input their GitHub username and then retrieves their repositories. Users are then shown information about their repos, including the number of forks and when the repo was last updated. This app was built using React JS.'
];

const projectImageLinks = [
    "images/TravelShare.png",
    "images/HabiPad.png",
    "images/GitHubRepoTracker.png"
];

const siteLinks = [
    "https://bagels-journal-project.netlify.app/client/html/mainpage",
    "https://wellbeing-habit-tracker-client.netlify.app/",
    "https://github-repository-tracker.netlify.app/"
];

const repoLinks = [
    "https://github.com/Rachiey/journalproject",
    "https://github.com/Forum-123/Lap-2-Project-Server",
    "https://github.com/NXFORG/github_repositories"
];

//functions and event listeners to display projects
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


//send an email
const emailIcon = document.getElementById('emailIcon');

function sendEmail(e) {
    window.open('mailto:katieched98@hotmail.co.uk');
}

emailIcon.addEventListener('click', e => {
    sendEmail(e);
})


//hamburger functionality
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const burgerLinks = document.getElementById('burger-links');

let clickCount = 0;

function hamburgerExpansion(e) {
    clickCount++;

    console.log(clickCount);

    if(clickCount % 2 === 1) {
        burgerLinks.style.display === 'block';
    }
    else {
        burgerLinks.style.display === 'none';
    }
}

hamburger.addEventListener('click', (e) => {
    hamburgerExpansion(e);
})


//submitting contact form

// const form = document.getElementById('form');
// const formStatus = document.getElementById('formStatus');
// function submitForm(e) {
//     const options = {
//         method: form.method,
//         body: data,
//         headers: {
//             "Accept": "application/json"
//         },
//     }

//     fetch("https://formspree.io/f/mayarnqr", options)
//         .then(response => {
//         formStatus.textContent = "Thanks for sending your message!";
//         form.reset();  
//     }).catch(error => {
//         formStatus.textContent = "Oops! There was a problem sending your message."
//     });
// };

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     submitForm(e);
// })