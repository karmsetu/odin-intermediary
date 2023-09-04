const searchBar = document.getElementById(`search-bar`)
const contentDisplay = document.querySelector(`.content`)
const API_KEY = `96a2b63f7c7448fb87d101708230309`
let url = ` http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=paris`

async function call() {
    const fetched = await fetch(url) 
    const fetchedData = await fetched.json()
    // for (let index = 0; index < fetchedData.current; index++) {
    //     const element = array[index];
        
    // }
    displayData = fetchedData.current
    console.log({displayData})
}

call()

