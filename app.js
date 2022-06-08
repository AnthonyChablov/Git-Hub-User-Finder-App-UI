// selecting variables
let formTextUI = document.querySelector('.form');
let formFieldUI = document.querySelector('#form-submit');


let formText='';

// event listeners
formTextUI.addEventListener('submit',(e)=>{
    formText = formFieldUI.value;

    e.preventDefault();
    console.log(formText);

});


// practice making get request to chuck norris api
formTextUI.addEventListener('click',(e)=>{
    
})



