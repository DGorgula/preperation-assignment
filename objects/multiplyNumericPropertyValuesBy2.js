function multiplyNumeric(obj) {
    for (let property in obj) {
        if (typeof obj[property] === 'number') {
            
            obj[property] = 2*obj[property];
        }
            
        }
}