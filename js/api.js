class Github{
    constructor(){
        this.client_id = 'd49d03709c8cc65a9ddf';
        this.client_secret = '948f6e29f1d403e8b08d0fbe4d269412831d37c3';
    }

    async getUser(user){
        const getUserProfile = await fetch(`https://api.github.com/users/
        ${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        
        const profileData = await profileResponse.json();
        return{
            profile
        } 
    }
}