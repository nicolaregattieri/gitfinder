class Github {
  constructor() {
    this.client_id = '44e057db84269964a535';
    this.client_secret = '370d883cb31d7e1a391c2915477e8e460d9d769a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    console.log(repos);
    return { profile, repos };
  }
}
