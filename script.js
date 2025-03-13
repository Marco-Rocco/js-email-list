//connetto api
const randomMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

//connetto ul
let emailList = document.getElementById('listcontainer')
console.log(emailList)

for (let i = 1; i <= 10; i++ ){
    axios.get(randomMail) 
        .then((response) => {
            let showEmail = response.data.response;


            emailList.innerHTML = 
            `
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>
            <li>${showEmail}</li>

            `



            console.log(showEmail)
        })
        .catch((error => {
            console.error('ERRORE')
        }))
}




