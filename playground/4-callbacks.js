const geocode = (address, callbacks) => {
    setTimeout(() => {
        const data = {
            x: 0,
            y: 1
        }
        callbacks(data)
            // return data
    }, 2000);

}
geocode('Mumbai', (data) => {
    console.log(data);
})

// 35.
const addition = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        callback(sum)
    }, 2000);
}
addition(1, 2, (sumparam) => {
    console.log(sumparam);
})