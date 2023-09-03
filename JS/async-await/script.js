console.log(`yo`)
const img = document.querySelector(`.pic`)
const searchBar = document.querySelector(`.search-bar`)
const searchBtn = document.querySelector(`.search`)

function call(params, index = 3) {
    
    API_KEY = `jhKRwHw5tkdNvQrIMdqoQBadySgaPB3I`
    let search = `cats`
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20&q=${params}`)
        .then(Response => Response.json())
        .then(content => {
            // console.log(content.data)
            img.src = content.data[index].images.downsized.url
        })
        .catch(error => {
            console.error(error);
        })
}

searchBtn.addEventListener(`click`, e =>{
    // console.log(searchBar.value)
    call(searchBar.value)
} )

    