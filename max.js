function max() {
    var mysql = require("mysql");
    var inquirer = require('inquirer');

    var currentVehicle = {};

    var vehicleOptions = [{
        type: 'Sedan',
        wheels: '4',
        tankSize: '20',
        oilLife: '100',
        fuelRemain: '20',
    }, {
        type: 'Truck',
        wheels: '4',
        tankSize: '40',
        oilLife: '100',
        fuelRemain: '40',
    }, {
        type: 'Motorcyle',
        wheels: '4',
        tankSize: '40',
        oilLife: '100',
        fuelRemain: '40',
    }]

    var vehicleTypes = ['Sedan', 'Truck', 'Motorcycle'];

    inquirer.prompt([{
            type: "list",
            name: "vehicleChoice",
            message: "What type of vehicle do you want to drive?",
            choices: vehicleTypes
        }

    ]).then(function(choice) {
            console.log("You chose " + choice.vehicleChoice);

            switch (choice.vehicleChoice) {
                case 'Sedan':
                    currentVehicle = {
                        type: 'Sedan',
                        wheels: '4',
                        tankSize: '20',
                        oilLife: '100',
                        fuelRemain: '20',
                    };
                    break;
                case 'Truck':
                    currentVehicle = {
                        type: 'Truck',
                        wheels: '4',
                        tankSize: '40',
                        oilLife: '100',
                        fuelRemain: '40',
                    }
                    break;
                case Motorcycle:
                    currentVehicle = {
                        type: 'Motorcycle',
                        wheels: '2',
                        tankSize: '15',
                        oilLife: '100',
                        fuelRemain: '15',
                    }
                    break;

            } // end of case switch statement

           console.log(currentVehicle);

        }

    ); // end of inquirer.prompt to choose vehicle

    function transport() {

    }

    function buyGas(tankSize, inTank) {

    }
} // end of max function

max() //start mad-max game!!!
