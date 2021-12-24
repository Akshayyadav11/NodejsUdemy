// 21.

const square = function(x) {
    return x * x
}
console.log(square(2));

const sq = (x) => {
    return x * x
}
console.log(sq(2));

const eventList = {
    eve_name: 'Birthday Party',
    guestList: ['akshay', 'aksh'],
    printGuestList: function() {
        console.log('Guest list for ' + this.eve_name);
        this.guestList.forEach(element => {
            console.log(element + ' is attandening ' + this.eve_name);
        });
    }
}
eventList.printGuestList()