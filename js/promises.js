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