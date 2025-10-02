function loweCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
        } else {
            const filtered = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());
            resolve(filtered);
        }
    });
}

// Example usage:
const mixedArray =['Pizza', 10, true, 25, false, 'Wings'];
loweCaseWords(mixedArray)
    .then(result => console.log(result)) // Output: ['pizza', 'wings']
    .catch(error => console.error(error));

