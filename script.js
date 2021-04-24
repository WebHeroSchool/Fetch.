let body = document.body;
let url = 'https://api.github.com/users/NataliiaChuienko';


fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
   

        let img = document.createElement('img');
        if (json.avatar_url != null) {
        img.src = json.avatar_url;
        } else {
        img.src = 'Информация о пользователе недоступна'
         }
        body.append(img);

        let name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(name);

        let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(bio);

    })
    .catch(err => console.log(err));



