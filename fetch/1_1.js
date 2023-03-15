const gitHubForm = document.getElementById('gitHubForm');
const enter = 'Enter';

function requestUserRepos(username) {
  return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}

gitHubForm.addEventListener('submit', (e) => {

  e.preventDefault();
  let usernameInput = document.getElementById('usernameInput');
  let gitHubUsername = usernameInput.value;
  requestUserRepos(gitHubUsername)
    .then(response => response.json())
    .then(data => {
    for (let i in data) {
      let ul = document.getElementById('userRepos');
      let li = document.createElement('li');
      li.classList.add('list-group-item')
      li.innerHTML = (`
      <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
      `);
      ul.appendChild(li);
    }
  })
})