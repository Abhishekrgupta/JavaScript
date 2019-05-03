class Github{
  constructor(){
    this.client_id = "bd36a5eb5eb2a4af6d97";
    this.client_secret = "f208bf3ed4f009555fb3f9907e44f7585420e4cf";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile: profile,
      repos: repos
    }
  }
}