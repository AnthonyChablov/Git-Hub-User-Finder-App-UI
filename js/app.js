// oauth for github
class Github{
    constructor(){
        this.client_id = 'd49d03709c8cc65a9ddf';
        this.client_secret = '948f6e29f1d403e8b08d0fbe4d269412831d37c3';
        this.repo_count=5;
        this.repos_sort = 'created: asc';
    }
}
const github = new Github;

// selecting variables
let searchBtnUI = document.querySelector('.hero__contents--btn');
let formFieldUI = document.querySelector('#form-submit');
let heroHeader = document.querySelector('.hero__contents--header');
let mainHeader = document.querySelector('.main__header');
let mainContents = document.querySelector('.main__contents');
let mainContentRepos = document.querySelector('.main__contents--repos');

// selecting elements to input data into
let inputImage = document.querySelector('.input-image');
let viewProfile = document.querySelector('.view-profile');
let info1 = document.querySelector('.info-1');
let info2 = document.querySelector('.info-2');
let info3 = document.querySelector('.info-3');
let info4 = document.querySelector('.info-4');

let company = document.querySelector('.company');
let websiteBlog = document.querySelector('.website-blog');
let locationUser = document.querySelector('.location');
let memberSince = document.querySelector('.member-since');

let startYourSearchUI = document.querySelector
('#start-your-search');

let repos = document.querySelector('.insert-repos');

let user = '';
let result;

// event listeners
heroHeader.addEventListener('click', (e)=>{
    startYourSearchUI.scrollIntoView(true);
    e.preventDefault();
});

searchBtnUI.addEventListener('click',(e)=>{
    mainHeader.classList.remove('hidden')
    startYourSearchUI.scrollIntoView(true);
    e.preventDefault();
});

mainHeader.addEventListener('submit',(e)=>{
    user = formFieldUI.value;
    // upon error
    if (user.trim() === ''){
        console.log('Please enter a username');
        document.querySelector('.header__contents--form').classList.add('error');
        document.querySelector('.header--error').classList.remove('hidden');
        document.querySelector('.header__contents--form').classList.remove('error');
    //upon success
    } else {
        mainContents.classList.add('hidden');
        // making requests
        // fetch user info
        fetch(`https://api.github.com/users/${user.trim()}?client_id=${github.client_id}&client_secret${github.client_secret}`,
            {method: 'GET'})
            .then(elem => elem.json())
            .then(res => {
                console.log(res);

                if (res.message === "Not Found"){
                    console.log(`not found`);
                    /* document.querySelector('.header__contents--form').classList.add('error'); */
                    document.querySelector('.header--error').classList.remove('hidden');
                    
                }else{ // error state of not found
                    mainContents.classList.remove('hidden');
                    mainContents.scrollIntoView(true);
                    document.querySelector('.header--error').classList.add('hidden');
                    // inputting data into DOM from request
                    inputImage.src=res.avatar_url;
                    viewProfile.href=res.html_url;
                    info1.textContent=`Public Repos: ${res.public_repos}`;
                    info2.textContent = `Public Gists: ${res.public_gists}`;
                    info3.textContent = `Followers: ${res.followers}`;
                    info4.textContent = `Following: ${res.following}`;

                    company.textContent = `Company: ${res.company || 'N/A'}`;
                    websiteBlog.innerHTML = `Website: ${res.blog || 'N/A'}`;
                    locationUser.textContent = `Location: ${res.location||'N/A'}`;
                    memberSince.textContent = `Member Since: ${res.created_at.slice(0,4)}`;
                }
            })
            .catch(err => console.error('An error has occured with user request : ', err));  

        // fetch repos
        fetch(`https://api.github.com/users/${user.trim()}/repos?per_page=${github.repo_count}&sort=${github.repos_sort}&client_id=${github.client_id}&client_secret${github.client_secret}`,
        {method:'GET'})
            .then(elem=> elem.json())
            .then(res=> {
                repos.innerHTML='';
                res.forEach(elem1 => {
                    console.log(elem1)
                    let insertRepos = document.createElement('div')
                    insertRepos.innerHTML=`
                    <div class="insert-repo__1 row3">
                        <p class="repo__1--p">Name:  ${elem1.name}
                        <p class="repo__1--stars">Stars: ${elem1.stargazers_count}</p>
                        <p class="repo__1--watchers">Watchers: ${elem1.watchers}</p>
                        <p class="repo__1--Forks">Forks: ${elem1.forks}</p>
                    </div>`;
                    repos.appendChild(insertRepos);
                    mainContentRepos.classList.remove('hidden')
                });
            })
            .catch(err => console.error('An error has occured with repo request : ', err))
    }
    e.preventDefault();
});






/* document.querySelector('.repo__1--p').textContent=`Name:  ${elem1.name}`;
                    document.querySelector('.repo__1--stars').textContent=`Stars: ${elem1.stargazers_count}`;
                    document.querySelector('.repo__1--watchers').textContent=`Watchers: ${elem1.watchers}`;
                    document.querySelector('.repo__1--Forks').textContent=`Forks: ${elem1.forks}`;*/