// hello = (name) => {
//     return `hello ${name}`
// }

// console.log(hello("Connor"));



// let bigArray = [
//     {name: "Connor", colour: "yes"},
//     {name: "Biscuits", colour: "yes"}
// ]

// for (item of bigArray) {
//     console.log(item);
// };

// bigArray[1].name = "John";

// for (item of bigArray) {
//     console.log(item);
// };


// const movie = { 
//     title: "Yes",
//     genre: "sci-fi",
//     runtime: 105
// }

// let {title, genre, length = movie.runtime} = movie;

// console.log(`my favourite movie is ${title} and it lasts for ${length} minutes. Just like most ${genre} movies`);



let promiseFunc = new Promise( ( resolve, reject) => {

    let a = (1 + 1);
    if(a==2) {
        resolve("Successful");
    } else {
        reject("failed");
    }
});

promiseFunc.then((messages) => {
    console.log(messages);
}).catch((messages) => {
    console.log(messages);
})




const asyncTimeout = async () => {
    console.log("Timer starts!");

    let newProm = new Promise((res, rej) => {
        setTimeout(() => {
            res("Timer has finished");
        }, 5000)
    });
    let result = await newProm;
    console.log(result);
}

asyncTimeout();