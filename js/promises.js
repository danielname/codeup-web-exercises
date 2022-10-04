function lastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': GITHUB_PROMISES_TOKEN
        }
    }).then( response => response.json())
        .then( events => {
            console.log(events[0].created_at);
        })
        .catch( error => console.error(error));
}

function wait(number){
    const waitPromise = new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve(setTimeout(() => {
                console.log(`you will see this after ${number / 1000} seconds`);
            }, number))
        } else {
            reject('sorry, request failed')
        }
    })
}