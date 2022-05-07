const { readFileSync } = require("fs");

const data = readFileSync("./data/hotels.json");

const listHotels = JSON.parse(data);

const wknds = ["sat", "sun"];

var listHotelValue = new Array();

function verifyHotel(client) {
  var cheapestHotel;
  var wday = 0;
  var wend = 0;

  listHotels.hotels.forEach((hotel) => {
    var hotelValue = 0;

    if (client.type == "Rewards") {
      wday = hotel.rewards.weekday;
      wend = hotel.rewards.weekend;
    } else {
      wday = hotel.regular.weekday;
      wend = hotel.regular.weekend;
    }

    client.days.forEach((day) => {
      if (wknds.includes(dayOfWeek(day))) {
        hotelValue += wend;
      } else {
        hotelValue += wday;
      }
    });

    listHotelValue.push({
      nome: hotel.nome,
      classificacao: hotel.rating,
      valor: hotelValue,
    });
  });

  cheapestHotel = filterHotel(listHotelValue);

  return cheapestHotel;
}

//#region [+] Aux Methods

function dayOfWeek(param) {
  var result = param.substring(param.indexOf("(") + 1, param.lastIndexOf(")"));

  return result;
}
function filterHotel(list) {

  var result;
  var values = [];
  var ratings = [];

  list.forEach((index) => {
    values.push(index.valor);
    ratings.push(index.classificacao);
  });

  result = list.filter((element) => {
    return element.valor == Math.min(...values);
  });

  if (result.length > 1) {
    result = list.filter((element) => {
      return element.classificacao == Math.max(...ratings);
    });
  }

  return result;
}

//#endregion
exports.verifyHotel = verifyHotel;
