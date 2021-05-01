let body = document.body;
let loader = document.getElementById("loader");
let url = 'https://api.github.com/users/NataliiaChuienko';
let log = console.log ;
let today = new Date();

let getData = new Promise((resolve,reject) => {	
	setTimeout(() => 
	(today ? resolve(today) : reject('Дата не найдена')	),
    4000) 
  
}) 
let getUrl = new Promise((resolve,reject) => {
    setTimeout(() =>
        (url ? resolve(url) : reject('Ссылка не найдена') ),
        2000)
}) 

 


Promise.all([getData, getUrl])
.then(([today, url]) => fetch(`${url}${today}`))
    .then(res => res.json())
    .then(json => log(json.avatar_url))
    .then(json => log(json.name))
    .then(json =>  log(json.bio))
    .then((json) => {
    setTimeout(() => (loader.style.display = "none"), 4000);
   

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



// let getName = new Promise((resolve,reject) => {
//     setTimeout(() =>
//         (name ? resolve(name) : reject('Имя не найдена') ),
//         3000)
// })
