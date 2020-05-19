/*
*   Configuration
*/
document.title = 'equalcoding.dev portfolio'

//devto
let devtoUsername = 'equalcoding';
let state = 'all'; //only usable
let perPage = 6; //total items to show
let page = 1; //returns the first page results
let articles = [];

// Github
let gitUsername = 'equalcoding';
let githubCardLimit = 2;
let githubSort = 'updated'; //Can be one of created, updated, pushed, full_name.
let githubDirection = 'desc'; //Can be asc desc

//Urls for header links
let githubUrl = 'https://bit.ly/3g7cfr1';
let twitchUrl = 'https://bit.ly/3dVyNc1';
let twitterUrl = 'https://bit.ly/2Tg5CJ5';
let linkedInUrl = '';
let youtubeUrl = 'https://bit.ly/2ZmxVsS';
let devtoUrl = 'https://bit.ly/3g0vmTp';
let emailAddress = 'info@equalcoding.dev';

//Default email message
let defaultEmailSubject = ''
let defaultEmailMessage = `Hey! 👋`

/* 
* Document Ready
*/
document.addEventListener('DOMContentLoaded', (event) => {
    loadDevToArticles();
    loadGitRepos();
})

/* 
* Helper functions 
*/
function populateBlogDOM(response, ele) {
    ele.innerHTML = ele.innerHTML +
        `<div class="col-lg-4 pb-4 ">
        <div class="card card-clickable h-100" onclick="window.open('${response.url.toString()}')">
                ${response.cover_image != null ? `<img class="card-img-top img-fluid" src="${response.cover_image}" alt="Card image cap">` : ''}
                <div class="card-body">
                    <h3 class="card-title">${response.title}</h3>
                    <p class="card-text pb-5">${response.description}</p>
                    <p class="card-text bottom-right capitalise"><small class="text-muted">${new Date(response.published_at).toLocaleDateString('en-Gb')}</small></p>
                </div>
        </div>
        </div>`;
}

function populateGitDom(response, ele) {
    ele.innerHTML = ele.innerHTML +
        `<div class="col-lg-4 pb-4">
        <div class="card card-clickable h-100" onclick="window.open('${response.html_url.toString()}')">
                ${response.cover_image != null ? `<img class="card-img-top img-fluid" src="${response.cover_image}" alt="Card image cap">` : ''}
                <div class="card-body">
                    <h3 class="card-title">${response.full_name.split('/')[1]}</h3>
                    <p class="card-text pb-5">${response.description}</p>
                    <p class="card-text bottom-right capitalise"><small class="text-muted">${githubSort} ${new Date(response.updated_at).toLocaleDateString('en-Gb')}</small></p>
                </div>
        </div>
        </div>`;
}

/* 
* Http calls
*/
function loadGitRepos() {
    let ele = document.getElementById('github');
    let request = new XMLHttpRequest();
    request.open('GET', `https://api.github.com/users/${gitUsername}/repos?sort=${githubSort}&direction=${githubDirection}`, true)
    request.onload = function () {
        response = JSON.parse(request.response);
        response.forEach((response, index) => {
            if (index < githubCardLimit) {
                populateGitDom(response, ele);
            }
        });
    }
    request.send();
}

function loadDevToArticles() {
    let ele = document.getElementById('blog');
    let request = new XMLHttpRequest()
    request.open('GET', `https://dev.to/api/articles?username=${devtoUsername}&per_page=${perPage}&page=${page}`)
    request.onload = function () {
        response = JSON.parse(request.response);
        response.forEach(response => populateBlogDOM(response, ele));
    }
    request.send();
}

/* 
*  Link click events
*/
function twitter() {
    window.open(twitterUrl);
}
function twitch() {
    window.open(twitchUrl);
}

function youtube() {
    window.open(youtubeUrl);
}

function linkedIn() {
    window.open(linkedInUrl);
}

function github() {
    window.open(githubUrl);
}

function devto() {
    window.open(devtoUrl);
}

function email(){
    window.location.href = `mailto:${emailAddress}?subject=${defaultEmailSubject}&body=${defaultEmailMessage}`;
}