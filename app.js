// Practicing different ways to fetch api
// trying out different free api:s out there, just wanna get better
// doing this in vanilla js now, and next up is to practice more in react
const randomUserResults = document.querySelector('.fetched-random-results')
const danceSteps = document.querySelector('.getDanceSteps')
const getPersons = document.querySelector('.randomBtn')

const userList = []

// run function to see console log

// create function to get data
const getRandomUser = async () => {
    const res = await fetch('https:/randomuser.me/api?results=20')
    //  const data = await res.json() destructure results
    const { results } = await res.json()
    console.log(results)
    results.innerHTML = ''

    results.forEach(user => {
        const list = document.createElement('li')
        list.classList.add('card')
        userList.push(list)
        
        // and here we will use the ternary operator to create the cards for the list of users
        list.innerHTML = `
        <div class="container">
        <img src="${user.picture.medium}" alt="${user.name.first}" class="cardImg">
        <h3 class="title"><b>${user.name.first} ${user.name.last}</b></h3>
        <div class="info">
        <p class="email">${user.email}</p>
        <span>Age:${user.dob.age} Gender:${user.gender}</span>
        <p>Sweden, Stockholm </p>
            
        </div>
    </div>
        `

        randomUserResults.appendChild(list)
    })
}
getPersons.addEventListener('click', getRandomUser)



// async await
// making multiple functions to call data from json file folder
// attaching the functions to a button
// an async function is non blocking

const getLockingSteps = async () => {
    const res = await fetch('dancesteps/lockingsteps.json')
    const data = await res.json()

    return data 
}
const getPoppingSteps = async () => {
    const res = await fetch('dancesteps/poppingsteps.json')
    const data = await res.json()

    return data 
}
const getHiphopSteps = async () => {
    const res = await fetch('dancesteps/hiphopsteps.json')
    const data = await res.json()

    return data 
}


// need to the promise and resolve the data


// buttons to get data
// not optimal way to do it but i wanted to try :)
danceSteps.addEventListener('click', () => {
    console.log('btn works')
    getLockingSteps().then(data => console.log(data))
    getHiphopSteps().then(data => console.log(data))
    getPoppingSteps().then(data => console.log(data))
        // by changing one of the json paths we can check if catch error works
    .catch(err => console.log("error", err))
})





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