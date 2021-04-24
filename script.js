let response = document.createElement('div');
fetch('https://api.github.com/users/NataliiaChuienko')
.then(res => res.json)
.then(json => response.innerHTML = json.name)
.then(json => response.innerHTML = json.bio)
.then(json => response.innerHTML = json.avatar_url)
.catch(err => console.log(err));
