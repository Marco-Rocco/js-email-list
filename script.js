//connetto api
const randomMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

//connetto ul
let emailList = document.getElementById('listcontainer')
console.log(emailList)


//invoca la funzione
generateMails()


//crea una funzione che aziona il ciclo e genera la mail
function generateMails(){
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
}

//////////

// collego il bottone
let fetchButton = document.getElementById('fetch10');

// crea l'evento al click che richiama la funziona nuovamente
fetchButton.addEventListener('click', function(event){
    event.preventDefault
    console.log('click')
    generateMails()
})
