const form = document.querySelector('#search-giphy');
const gallery = document.querySelector('#gallery-giphy'); 
const removeBtn = document.querySelector('#remove-giphy'); 

// Remove all giphy
removeBtn.addEventListener('click', function(e){
    gallery.innerHTML = ''; 
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const term = document.querySelector('#term'); 
    const apiKey = 'ptKkLfjJP2QBucxJ9vdxpY7xxONdORhP'

    getGiphy(term.value, apiKey);

    term.value = ''; 
})


// get a random giphy with axios
async function getGiphy(term, apiKey) {
    const randNum = Math.floor(Math.random() * 10); 
    console.log(randNum);
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: { q: term, api_key: apiKey, limit: 10}}); 
    // console.log(res.data.data[randNum].images.original.url);
    const url = res.data.data[randNum].images.original.url;

    createImg(url); 
}

// Create the image and append it to the gallery
function createImg(url){
    const img = document.createElement('img'); 
    img.src = url; 
    gallery.append(img);  
}