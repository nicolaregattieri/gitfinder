// Init Github class
const github = new Github();

//Init UI class
const ui = new UI();
// search input

const searchUser = document.getElementById('searchUser');
// add event listener
searchUser.addEventListener('keyup', e => {
  // get input text
  let userText = e.target.value;
  //   sure if its not blank
  if (userText !== '') {
    // make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        //Show Profile
        ui.showProfile(data.profile);
        // Show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
