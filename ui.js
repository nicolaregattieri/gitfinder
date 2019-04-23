class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    //Disply profilein the ui
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${
                      user.avatar_url
                    }" alt="" class="img-fluid mb-2" />
                    <a
                    href="${user.html_url}"
                    target="_blank"
                    class="btn btn-primary btn-block mb-4"
                    >View Profile</a
                    >
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary m-2">Public Repos: ${
                      user.public_repos
                    }</span>
                    <span class="badge badge-secondary m-2"
                    >Public Gists: ${user.public_gists}</span
                    >
                    <span class="badge badge-success m-2">Followers: ${
                      user.followers
                    }</span>
                    <span class="badge badge-info m-2">Following: ${
                      user.following
                    }</span>
                    <br /><br />
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${
                      user.created_at
                    }</li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 class="page-heading mb-3">Latest Repos</h3>


        <div id="repos"></div> `;
  }

  // Show repos
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `<div class="card card-body mb-2">
      <div class-"row">
        <div class="col-md-6"><a href="${repo.html_url}">${repo.name}</a></div>
        <div class="col-md-6">
          <span class="badge badge-primary m-2"
            >Stars: ${repo.stargazers_count}</span
          >
          <span class="badge badge-secondary m-2"
            >Watchers: ${
              repo.watchers_count === undefined ? 0 : repo.watchers_count
            }</span
          >
          <span class="badge badge-success m-2">Forks: ${
            repo.fork_count === undefined ? 0 : repo.fork_count
          }</span>
        </div>
      </div>
    </div>`;
    });

    //Output repos
    document.getElementById('repos').innerHTML = output;
  }

  //Show alert if not found
  showAlert(message, className) {
    // Clear any remaining alert
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // getParent
    const container = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout to clear after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // Clear profile if search is empty
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
