// init git hub 
const github = new Github;

// selecting variables
let formTextUI = document.querySelector('.form');
let formFieldUI = document.querySelector('#form-submit');


let formText='';

// event listeners
formTextUI.addEventListener('submit',(e)=>{
    formText = formFieldUI.value;
    github.getUser(userText)
        .then(data=>{ 
                if (data.profile.message==='Not Found'){
                    // show alert 

                }
            })



    
    console.log(formText);
    e.preventDefault();
});






