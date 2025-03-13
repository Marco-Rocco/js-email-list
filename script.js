//connetto api
const randomMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

//connetto ul
let emailList = document.getElementById('listcontainer')
console.log(emailList)

// creo una variabile al di fuori del ciclo (da riassegnare dopo) e poi la CONCATENO, così invece di riassegnarsi 10 volte, se ne aggunge uno nuovo
// così da mostrare 10 mail invece che 1 sola. 
let result = ''

for (let i = 1; i <= 10; i++ ){
    axios.get(randomMail) 
        .then((response) => {
            let showEmail = response.data.response;
            
            console.log(showEmail)
        
            // qui riassegno la variabile usando il backtick, e poi lo aggiungo all'inner html
            result += `<li>${showEmail}</li> `
            emailList.innerHTML = result
            
            
        })
        .catch((error => {
            console.error('ERRORE')
        }))
}


//////////

// collego il bottone
let fetchButton = document.getElementById('fetch10');

// crea l'evento al click
fetchButton.addEventListener('click', function(){
    console.log('click')
    fetch(randomMail)
    .then(response)
})
