// oauth for github
class Github{
    constructor(){
        this.client_id = 'd49d03709c8cc65a9ddf';
        this.client_secret = '948f6e29f1d403e8b08d0fbe4d269412831d37c3';
    }
}
const github = new Github;

// selecting variables
let searchBtnUI = document.querySelector('.hero__contents--btn');
let formFieldUI = document.querySelector('#form-submit');
let insertElemUI = document.querySelector('.insert-content');

let user = '';
let result;


// event listeners
searchBtnUI.addEventListener('click',(e)=>{
    insertElemUI.innerHTML = `
                <div class="container" id="start-your-search">
                    <div class="main__header">
                        <h2>Search Github Users</h2>
                        <p>Enter a username to fetch a user profile and repos</p>
                        <div class="header__contents--form">
                            <form class="form" action="app.js" autocomplete="off">
                                <input type="text" class="form__field" placeholder="Username" name="name" id='form-submit' height="50"/>
                                <!-- 
                                    <a href="#!" class="hero__contents--btn btn">Search<a> 
                                --> 
                            </form>
                        </div>
                    </div>
        
                    <div class="main__contents row-2">
                        <div class="info-one">
                            <div class="main__contents--images">
                                <img src="images/2048px-Octicons-mark-github.svg.png" alt="">
                            </div>
                            <a href="#" class="btn-2">View Profile</a>
                        </div>
                        
                        <div class="info-two">
                            <div class="information-1 row">
                                <p class="info-1 first-category">Public Repos: </p>
                                <p class="info-2 first-category">Public Gists: </p>
                                <p class="info-3 first-category">Followers: </p>
                                <p class="info-4 first-category">Following: </p>
                            </div>
                            <div class="information-2 ">
                                <p class="company second-category">Public Repos: </p>
                                <p class="website-blog second-category">Public Gists: </p>
                                <p class="location second-category">Followers: </p>
                                <p class="info-4 second-category">Following: </p>
                            </div>
                        </div>
                    </div>
                </div>`;
        insertElemUI.scrollIntoView(true);
    e.preventDefault();
});



/* 
user = formFieldUI.value;

    if (user === ''){
        console.log('Please enter a username');
    }else{
        fetch(`https://api.github.com/users/${user.trim()}?client_id=${github.client_id}&client_secret${github.client_secret}`,
            {method: 'GET'})
            .then(elem => elem.json())
            .then(res => {
                
                console.log(res);
                
            })
            .catch(err => console.error('An error has occured with request : ', err));  
    }

 */



