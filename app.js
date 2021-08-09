const danceSteps = document.querySelector('.getDanceSteps')
const getPersons = document.querySelector('.randomBtn')


//getting request with XML getting request from JSON file

const getSteps = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if ( request.readyState === 4 ) {
            callback("could not fetch data", undefined)
        }
    })
    request.open('GET', 'steps.json');
    request.send();
}



getSteps((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


// buttons to get data
danceSteps.addEventListener('click', () => {
    console.log(' steps button works')
})
getPersons.addEventListener('click', () => {
    console.log('Person button works')
})

/* 
const getRandomUser = () => {
fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then((data) => {
        data.result
        console.log(data)
})
} */


/* const randomTemp = () => {

    const html = `
    
    `
} */