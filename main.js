let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let resultDiv = document.querySelector(".result-div");
let avatar = document.querySelector(".avatar");
let name = document.querySelector(".name");
let link = document.querySelector(".link");
let time = document.querySelector(".time");
let bio = document.querySelector(".bio");
let followers = document.querySelector(".followers");
let repos = document.querySelector(".repos");
let following = document.querySelector(".following");
let locationIcon = document.querySelector(".location-icon");
let locationName = document.querySelector(".location-name");
let blogIcon = document.querySelector(".blog-icon");
let blogName = document.querySelector(".blog-name");
let twitterIcon = document.querySelector(".twitter-icon");
let twitterName = document.querySelector(".twitter-name");
let companyIcon = document.querySelector(".company-icon");
let companyName = document.querySelector(".company-name");

window.onload = () => {
  getUser("mahmoud-26");
  searchInput.value = "mahmoud-26";
}

function getUser(username) {
  fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
  .then(result => {
    if (result.message) {
      alert("Oops, User Not Found!");
    } else {
      avatar.setAttribute("src", result.avatar_url);
      name.innerHTML = result.login;
      link.innerHTML = `<a href="https://github.com/${result.login}">@${result.login}</a>`;
      let date = new Date(result.created_at);
      time.innerHTML = `Joined ${date.getDay()}/${date.getUTCMonth()}/${date.getFullYear()}`;
      bio.innerHTML = result.bio;
      followers.innerHTML = result.followers;
      repos.innerHTML = result.public_repos;
      following.innerHTML = result.following;
      if (result.location === "") {
        locationIcon.style.color = "var(--gray)";
        locationName.style.color = "var(--gray)";
        locationName.innerHTML = "Not Available";
      } else {
        locationName.innerHTML = result.location;
      }
      if (result.blog === "") {
        blogIcon.style.color = "var(--gray)";
        blogName.style.color = "var(--gray)";
        blogName.innerHTML = "Not Available";
      } else {
        blogName.innerHTML = result.blog;
      }
      if (result.twitter_username === null) {
        twitterIcon.style.color = "var(--gray)";
        twitterName.style.color = "var(--gray)";
        twitterName.innerHTML = "Not Available";
      } else {
        twitterName.innerHTML = result.blog;
      }
      if (result.company === null) {
        companyIcon.style.color = "var(--gray)";
        companyName.style.color = "var(--gray)";
        companyName.innerHTML = "Not Available";
      } else {
        companyName.innerHTML = result.blog;
      }
    }
  });
};


searchBtn.addEventListener("click", () => {
  getUser(searchInput.value);
});
