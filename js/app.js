//recuperation des donnees de l api avec la methode fetch
let url = "https://randomuser.me/api/";
fetch(url).then((response) => 
    response.json().then((data) =>{ 
        //recuperer les données et les inserées dans des variables

        //image
        let picture = data.results[0]['picture']['large'];
        //prenom et nom
        let first = data.results[0]['name']['first'];
        let last = data.results[0]['name']['last'];
        //email
        let email = data.results[0]['email'];
        //date de naissance
        let birthday_date = data.results[0]['dob']['date'];
        birthday_date.split(" ", 5);
        let birthday = birthday_date;
        //adresse
        let address_number = data.results[0]['location']['street']['number'];
        let address_name = data.results[0]['location']['street']['name'];
        //numero de télephone
        let phone_number = data.results[0]['phone'];
        //mot de passe
        let password = data.results[0]['login']['password'];
        
        //inserer variables image
        let user_image = document.getElementById("user-image");
        user_image.src = picture;
        
        
       // remplir la  dom
        let info = document.getElementById("info");
        let p1 = document.createElement('p');
        p1.textContent = 'Hi, My name is';
        let h3 = document.createElement('h3');
        h3.innerHTML = first +' '+ last;
        info.append(p1);
        info.append(h3);

        //definir les variables non survolés
        let user = document.querySelector('#user');
        let mail = document.querySelector('#email');
        let calendar = document.querySelector('#calendar');
        let map = document.querySelector('#map');
        let phone = document.querySelector('#phone');
        let lock = document.querySelector('#lock');
        
        //definir les variables survolées
        let hover_user = document.querySelector("#hover-user");
        let hover_email = document.querySelector("#hover-email");
        let hover_calendar = document.querySelector("#hover-calendar");
        let hover_map = document.querySelector("#hover-map");
        let hover_phone = document.querySelector("#hover-phone");
        let hover_lock = document.querySelector("#hover-lock");

        //affichage au lancement du site cacher certaines variables
        user.style.display = "none";
        hover_email.style.display = "none";
        hover_calendar.style.display = "none";
        hover_map.style.display = "none";
        hover_phone.style.display = "none";
        hover_lock.style.display = "none";

        //les évènements au survol
        mail.addEventListener("mouseover", () =>{
            p1.textContent = 'My email address is';
            h3.innerHTML = email;
            user.style.display = "block";
            hover_user.style.display = "none";
            mail.style.display = "none";
            hover_email.style.display = "block";
            calendar.style.display="block";
            hover_calendar.style.display="none";
            map.style.display="block";
            hover_map.style.display="none";
            phone.style.display="block";
            hover_phone.style.display="none";
            lock.style.display="block";
            hover_lock.style.display="none";
            
        });
        user.addEventListener("mouseover", () =>{
            p1.textContent = 'Hi, My name is';
            h3.innerHTML = first +' '+ last;
            user.style.display = "none";
            hover_user.style.display = "block";
            mail.style.display = "block";
            hover_email.style.display = "none";
            calendar.style.display="block";
            hover_calendar.style.display="none";
            map.style.display="block";
            hover_map.style.display="none";
            phone.style.display="block";
            hover_phone.style.display="none";
            lock.style.display="block";
            hover_lock.style.display="none";
        });
        calendar.addEventListener("mouseover", () =>{
            p1.textContent = 'My birthday is';
            h3.innerHTML = birthday;
            calendar.style.display="none";
            hover_calendar.style.display="block";
            user.style.display = "block";
            hover_user.style.display = "none";
            mail.style.display = "block";
            hover_email.style.display = "none";
            map.style.display="block";
            hover_map.style.display="none";
            phone.style.display="block";
            hover_phone.style.display="none";
            lock.style.display="block";
            hover_lock.style.display="none";
        });
        map.addEventListener("mouseover", () =>{
            p1.textContent = 'My address is';
            h3.innerHTML = address_number +' '+ address_name;
            calendar.style.display="block";
            hover_calendar.style.display="none";
            user.style.display = "block";
            hover_user.style.display = "none";
            mail.style.display = "block";
            hover_email.style.display = "none";
            map.style.display="none";
            hover_map.style.display="block";
            phone.style.display="block";
            hover_phone.style.display="none";
            lock.style.display="block";
            hover_lock.style.display="none";
        });
        phone.addEventListener("mouseover", () =>{
            p1.textContent = 'My phone number is';
            h3.innerHTML = phone_number;
            calendar.style.display="block";
            hover_calendar.style.display="none";
            user.style.display = "block";
            hover_user.style.display = "none";
            mail.style.display = "block";
            hover_email.style.display = "none";
            map.style.display="block";
            hover_map.style.display="none";
            phone.style.display="none";
            hover_phone.style.display="block";
            lock.style.display="block";
            hover_lock.style.display="none";
        });
        lock.addEventListener("mouseover", () =>{
            p1.textContent = 'My Password is';
            h3.innerHTML = password;
            calendar.style.display="block";
            hover_calendar.style.display="none";
            user.style.display = "block";
            hover_user.style.display = "none";
            mail.style.display = "block";
            hover_email.style.display = "none";
            map.style.display="block";
            hover_map.style.display="none";
            phone.style.display="block";
            hover_phone.style.display="none";
            lock.style.display="none";
            hover_lock.style.display="block";
        });
        
    })
);

