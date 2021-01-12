const baseurl = 'http://localhost:3000'
$(document).ready( () => {
    auth()
} )

function auth() {
    if (localStorage.access_token) {
        getData()
    } else {

    }
}

function getData() {
    
}

$('.btn').on("click", even => {
    even.preventDefault()
})