export const addToFavs = async (data) => {
    await fetch(`http://localhost:3003/favs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => { return res.json()})
    .then(data => console.log('Resp: ',data))
    .catch(err => console.log('Error: ',err))
}