// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier =  function(integer) {
    return function(fare) {
        return integer * fare
    }
}

const fareDoubler = function(integer) {
    return createFareMultiplier(integer)(2)
}

const fareTripler = function(integer) {
    return createFareMultiplier(integer)(3)
}

const selectDifferentDrivers = function(drivers, selected) {
    return selected(drivers)
}