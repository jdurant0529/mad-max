function max() {

    // intro to game...
    console.log('--------------------------------------------------');
    console.log("Welcome to Max. Let's see how long you survive...");
    console.log('--------------------------------------------------');

    // var mysql = require("mysql");

    // npm for choice selection
    var inquirer = require('inquirer');

    // array of everything
    var currentVehicle = {};

    // object of car choices
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
                    tankSize: '25',
                    fuelRemain: '25',
                    oilLife: '100',
                    oilStatus: '100',
                };
                break;
            case 'Truck':
                currentVehicle = {
                    type: 'Truck',
                    wheels: '4',
                    tankSize: '35',
                    fuelRemain: '35',
                    oilLife: '100',
                    oilStatus: '100',
                };
                break;
            case 'Motorcycle':
                currentVehicle = {
                    type: 'Motorcycle',
                    wheels: '2',
                    tankSize: '15',
                    fuelRemain: '15',
                    oilLife: '100',
                    oilStatus: '100',
                };
                break;
        }
    console.log("You have chosen: " + currentVehicle);
    whatyouwanttodo();
    });


    // This function runs the transport mission
    function transport() {
        currentVehicle.fuelRemain = currentVehicle.fuelRemain -2;
        currentVehicle.oilLife = currentVehicle.oilLife -5;
        console.log("This mission cost you; Fuel (-20), Oil (-5)");
    };


    // This function runs to attempt to refuel your car
    function refuel() {
        if (currentVehicle.fuelRemain < currentVehicle.tankSize) {
        console.log("Fuel status: " + currentVehicle.fuelRemain);
        console.log("Searching for fuel...");
        console.log("No fuel found.");
        
        } else {
            console.log("Tank is full.");
        }

    // call function after refuel has been completed
    whatyouwanttodo();
    };

    // This function runs when you choose to check your oil
    function checkOil() {
        if (currentVehicle.oilLife < current.oilStatus) {

            console.log("Current Oil: " + current.oilStatus);

        } else if (currentVehicle.oilStatus < 0) {
            console.log('Something is wrong with your engine. Your car has stopped working.');
        } else {
            console.log("Your oil is fine.");
        }
    };


    // possible actions while in shop
    var maxActions = ['refuel', 'transport', 'oil check'];

    function whatyouwanttodo() {
        inquirer.prompt([{
            type: "list",
            name: "taskOption",
            message: "What you want to do?",
            choices: maxActions               
        }
        ]).then(function(choice) {
            console.log("You chose " + choice.taskOption);

             switch (choice.taskOption) {
                case 'refuel': 
                    refuel();
                    break;
                case 'transport':
                    transport();
                    break;
                case 'oil check':
                    checkOil();
                    break;
            }// end of switch

        whatyouwanttodo();

        });
    }
} // end of max function

max(); //start mad-max game!!!