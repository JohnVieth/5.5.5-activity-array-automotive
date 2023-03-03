//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//this shows how to call from this module...
let mercuryA28 = new Car.Vehicle("Mecury", "Sedan", "1965", "color", "mileage", 5, 140, 13, 30000);
console.log(mercuryA28.make)

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage, maximumPassengers, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = maximumPassengers;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }

    loadPassenger(num) {
        if (num <= this.maximumPassengers) {
            super.passengers = num;
            return true;
        } else {
            return false;
        }
    }

    start() {
        if (this.fuel > 0)
            return true;
        else
            return false;
    }

    scheduleService(mileage) {
        if (mileage > this.scheduleService) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    Car
}