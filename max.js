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
    // var currentTask = {};

    // var vehicleOptions = [{
    //     type: 'Sedan',
    //     wheels: '4',
    //     tankSize: '20',
    //     oilLife: '100',
    //     fuelRemain: '20',
    // }, {
    //     type: 'Truck',
    //     wheels: '4',
    //     tankSize: '40',
    //     oilLife: '100',
    //     fuelRemain: '40',
    // }, {
    //     type: 'Motorcyle',
    //     wheels: '4',
    //     tankSize: '40',
    //     oilLife: '100',
    //     fuelRemain: '40',
    //     attack: '20',
    //     defense: '30',
    // }]

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
                    };
                    break;
                case 'Motorcycle':
                    currentVehicle = {
                        type: 'Motorcycle',
                        wheels: '2',
                        tankSize: '15',
                        oilLife: '100',
                        fuelRemain: '15',
                    };
                    break;

            } // end of case switch statement
        console.log('--------------------------------------------------');
        console.log(currentVehicle);
        console.log('--------------------------------------------------');
        whatyouwanttodo();
        }
    ); // end of inquirer.prompt to choose vehicle

    function transport() {
        currentVehicle.fuelRemain = currentVehicle.fuelRemain -20;
        currentVehicle.oilLife = currentVehicle.oilLife -5;
        console.log('--------------------------------------------------');
        console.log("This mission cost you; Fuel (-20), Oil (-5)");
        console.log('--------------------------------------------------');
        console.log('Current Fuel: ' + currentVehicle.fuelRemain);
        console.log('Current Oil: ' + currentVehicle.oilLife);
        console.log('--------------------------------------------------');

        // check after mission complete
        function checkFuelOil() {
            if (currentVehicle.fuelRemain < 0) {
                console.log('You have run out of fuel...');
                console.log('--------------------------------------------------');
            } else if (currentVehicle.oilLife < 0) {
                console.log('Something is wrong with your engine. Your car has stopped working.');
                console.log('-------------------------------------------------------------------');
            } else {
                console.log("Well done. Mission successful.");
                console.log('--------------------------------------------------');
            }
        }
    
    }

    // function to refuel your car
    function refuel() {
        if (currentVehicle.fuelRemain < currentVehicle.tankSize) {
        console.log("Fuel status: " + currentVehicle.fuelRemain);
        console.log("Searching for fuel...");
        console.log("No fuel found.");
        console.log('--------------------------------------------------');
        
        } else {
            console.log("Tank is full.");
        }
        whatyouwanttodo();
    }

    // possible actions while in shop
    var maxActions = ['refuel', 'transport'];

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

            }// end of switch
        whatyouwanttodo();

        });
    }
} // end of max function

max(); //start mad-max game!!!