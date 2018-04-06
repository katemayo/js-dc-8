let houseNum = [2125, 450, 320, 1999, 4258, 810];
let streetName = ['Massachusetts Ave NW', 'Euclid St', 'G street', 'Shore Drive', 'West Albermarle Blvd'];
let city = ['Washington', 'Virginia Beach', 'Charlottesville', 'Miami'];
let state = ['VA', 'DC', 'FL', 'KY', 'WV'];
let zip = [20001, 23451, 22903, 22201];

let ranHouse = Math.floor(Math.random() * houseNum.length);
let ranStreet = Math.floor(Math.random() * streetName.length);
let ranCity = Math.floor(Math.random() * city.length);
let ranState = Math.floor(Math.random() * state.length);
let ranZip = Math.floor(Math.random() * zip.length);

console.log(`${houseNum[ranHouse]} ${streetName[ranStreet]}, \n${city[ranCity]}, ${state[ranState]} ${zip[ranZip]}`);