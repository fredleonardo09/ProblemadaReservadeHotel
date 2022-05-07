const util = require('../util/util');

function getCheapestHotel (input) {
    
    var args = input.split(':');
    var type = args[0];
    var days = args[1].split(',');

    var client = {
        'type' : args[0],
        'days' : days
    }

    var hotel = util.verifyHotel(client);

    console.log(hotel[0].nome)

    //DO NOT change the function's name.
    return hotel[0].nome;
}

exports.getCheapestHotel = getCheapestHotel
