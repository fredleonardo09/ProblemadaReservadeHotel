const getHotel = require ("./src/main");

var hotel1 = getHotel.getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)"); 
var hotel2 = getHotel.getCheapestHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"); 
var hotel3 = getHotel.getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"); 

