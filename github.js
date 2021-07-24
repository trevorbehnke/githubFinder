class Github {
  constructor() {
    this.client_id = "1071af8b914a49f2baf9";
    this.client_secret = "32728643a996088297d713d5f09dce35b5e68a13";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
