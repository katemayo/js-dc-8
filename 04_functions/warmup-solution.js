// Use conditional logic to determine if the thermostat should heat or cool
// your house. Define your current temperature and your desired temperature, then determine if
// your house should be cooled or heated.

const desiredTemp = 67
let temp = 67
let thermostatStatus = ''

if (temp > desiredTemp) {
  thermostatStatus = 'cooling'
} else if (temp < desiredTemp) {
  thermostatStatus = 'heating'
} else {
  thermostatStatus = "we're good"
}

console.log(thermostatStatus)
