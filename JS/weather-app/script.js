const searchBar = document.getElementById(`search-bar`)
const searchBtn = document.getElementById(`search-button`)
const contentDisplay = document.querySelector(`.content`)
const dataPoint = document.querySelectorAll(`.data-point`)
const API_KEY = `96a2b63f7c7448fb87d101708230309`

async function call() {
    let searchQuery = searchBar.value
    let url = ` http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchQuery}`
    const fetched = await fetch(url) 
    const fetchedData = await fetched.json()
    // for (let index = 0; index < fetchedData.current; index++) {
    //     const element = array[index];
        
    // }
    displayData = fetchedData.current
    dataPoint[0].innerHTML = displayData.condition.text
    dataPoint[1].innerHTML = displayData.feelslike_c
    dataPoint[2].innerHTML = displayData.gust_kph
    dataPoint[3].innerHTML = displayData.humidity
    // contentDisplay.innerHTML = 
    console.log({fetchedData, searchQuery})
}

console.log({searchBtn})
searchBtn.addEventListener(`click`, call)
// call()

