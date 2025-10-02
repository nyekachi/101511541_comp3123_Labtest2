//method that revolves a promise after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
};

//method that rejects a promise after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'message': 'delayed exception!'});
        }, 500);
    });
};

//Call resolvedPromise
resolvedPromise()
    .then(result => console.log(result)) // Output: { message: 'delayed success!' }
    .catch(error => console.error(error));

//Call rejectedPromise
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Output: { message: 'delayed exception!' }