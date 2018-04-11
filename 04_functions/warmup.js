// Use conditional logic to determine if the thermostat should heat or cool
// your house. Define your current temperature and your desired temperature, then determine if
// your house should be cooled or heated.

const desiredTemp = 74
let temp = 67
let thermostatStatus = 'cooling'

if (desiredTemp < temp) {
  thermostatStatus = 'cooling'
} else if (desiredTemp > temp) {
  thermostatStatus = 'heating'
} else {
  thermostatStatus = 'neither'
}
console.log(thermostatStatus)
