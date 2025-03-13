const randomMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

for (let i = 1; i <= 10; i++ ){
    axios.get(randomMail) 
        .then((response) => {
            console.log(response)
        })
        .catch((error => {
            console.error('bashtardo')
        }))
}