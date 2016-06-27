function max() {
    var mysql = require("mysql");
    var inquirer = require('inquirer');

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

console.log(vehicleOptions.type);

    console.log('choose your vehicle:');
    inquirer.prompt([
    	{
        type: "list",
        name: "vehicleChoice",
        message: "What type of vehicle do you want to drive?",
        choices: [vehicleOptions.type]
    	}


    ]).then(function(choice){
    	console.log("inside choice function" + choice.vehicleChoice);	
    }





); // end of inquirer.prompt to choose vehicle




    function transport() {

    }

} // end of max function


max()
