const github = new Github;

const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
  const userText = e.target.value;
  if (userText !== '') {
   // console.log(userText);
   github.getUser(userText)
    .then((data) =>{ 

      if(data.profile.message === 'Not Found'){
        //Alert if user not found
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        //Show Profile
          ui.showProfile(data.profile);
        // Show the repositories
        ui.showRepos(data.repos);
      }
      //console.log(data);
      
    });

  } else {
    
    //Clear profile
    ui.clearProfile();

  }
});