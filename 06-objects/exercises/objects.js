/*

Data Modeling

Create a JavaScript object that is modelled off of a car.

Declare a variable and assign your object to it. Give your car at least four
properties, at least one of which is a method.

*/
let train = {
    capacity: 100,
    fare: '$2.00',
    profitPerRider = '$1.00',
    function daysTillService (),
}

//eg
let reservation = {
    checkIn: new Date();
    checkOut: new Date();
    userId: 1;
    roomNum: 100;
    paid: false;
    settleUserAccount: function (){
        this.paid = true
    }
}

/*

Get one of the properties from your object using dot notation

*/
train.capacity;
//eg
reservation.settleUserAccount()
reservation.paid
/*

Get one of the properties from your object using bracket notation

*/
train[capacity]
/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/
train.fare = '$5.00'
/*

Call your car's method

*/
