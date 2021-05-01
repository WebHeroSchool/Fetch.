let body = document.body;
let loader = document.getElementById("loader");
let url = 'https://api.github.com/users/NataliiaChuienko';
let today = new Date();

setTimeout(() => (loader.style.display = "none"), 3000);

let getData = new Promise((resolve,reject) => {	
	setTimeout(() => 
	(today ? resolve(today) : reject('Дата не найдена')	),
    3000)  
})

let getUrl = new Promise((resolve,reject) => {
    setTimeout(() =>
        (url ? resolve(url) : reject('Ссылка не найдена') ),
        2000)
}) 

Promise.all([getData, getUrl])
.then(([today, url]) => fetch(url))
    .then(res => res.json())
    .then((json) => {
        let img = document.createElement('img');
        if (json.avatar_url != null) {
        img.src = json.avatar_url;
        } else {
        img.src = 'Информация о пользователе недоступна'
         }
        body.appendChild(img);

        let name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Информация о пользователе недоступна';
        }
        body.appendChild(name);

        let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Информация о пользователе недоступна';
        }
        body.appendChild(bio);

    let date = document.createElement('div');
        date.id = 'today';
       date.innerHTML = today;
    document.body.appendChild(date);
    })
    .catch(err => console.log(err));
