const authUser = new Promise((resolve, rejected) => {
    const auth = false;
    const a = 1;
    
    if (auth) {
        resolve('User authenticated');
    }
    else {
        rejected('User not authenticated');
    }
});
console.log(authUser);
authUser
    .then(message => console.log(message))
    .catch(error => console.log(error));
//# sourceMappingURL=app7.js.map
