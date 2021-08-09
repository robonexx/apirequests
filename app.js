const danceSteps = document.querySelector('.getDanceSteps')
const getPersons = document.querySelector('.randomBtn')





// buttons to get data
danceSteps.addEventListener('click', () => {console.log('btn works')})

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



// ================================== REQUEST TESTS ======================= ///

// === USING FETCH ============== //


// using FETCH API instead of XML
/* 
const getSteps = () => {

    fetch('dancesteps/lockingsteps.json')
        .then((res) => {
            console.log(res)
            return res.json()
        }).then(data => {
            console.log(data)
            console.log(data[0])
        })
        .catch(() => {
        console.log('error', err)
    })
} */

//getting request with XML getting request from JSON file
/* 
const getSteps = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject("could not get resource")
            }
        });
        /*  request.open('GET', 'steps.json'); */ // getting one request
        // mulitple req´s
       /*  request.open('GET', resource)
        request.send();
    });
}  */


// using promises to chain the request events 
// setting the catch in the end gets all errors if an error would accure
/* 
getSteps('dancesteps/lockingsteps.json').then(data => {
    console.log('Promise 1 resolve:', data)
    return getSteps('dancesteps/hiphopsteps.json');
}).then(data => {
    console.log('promise 2 resolved: ', data)
    return getSteps('dancesteps/poppingsteps.json');
}).then(data => {
    console.log('promise 3 resolved: ', data)
})
    .catch(err => {
    console.log('Promise rejected', err)
})
 */

// using promises
// nesting callbacks = callback HELL!!!! ==================== //
/* 
getSteps('dancesteps/hiphopsteps.json', (err, data) => {
    console.log(data);
    getSteps('dancesteps/lockingsteps.json', (err, data) => {
        console.log(data)
        getSteps('dancesteps/poppingsteps.json', (err, data) => {
            console.log(data)
        })
    }) */
    /* if (err) {
        console.log(err)
    } else {
        console.log(data)
    } */