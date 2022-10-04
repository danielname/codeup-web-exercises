const baseURL = 'https:fuchsia-almondine-fisher.glitch.me/';

function getMovies(){
    fetch(`${baseURL}movies`).then(resp => resp.json()).then(data => console.log(data));
}

getMovies();

const bookToPost = {
    title: 'The Murder of Roger Ackroyd',
    author: {
        firstName: 'Agatha',
        lastName: 'Christie'
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks(){
    fetch(`${baseURL}books`).then(resp => resp.json()).then(data => console.log(data));
}

// fetch(`${baseURL}books`, postOptions).then(getBooks);



const patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modification)
}