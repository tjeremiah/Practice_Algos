const UndergroundSystem = function() {

    this.customer = {};
    this.dest = {};
};    
      
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.customer[id] = [stationName, t]
}   
      
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [checkin_station, checkinTime] = this.customer[id];
         
    console.log(this.dest[(checkin_station, stationName)])
    if (!(checkin_station in this.dest) && !(stationName in this.dest)){
        this.dest[checkin_station, stationName] = [t - checkinTime, 1]
    }
    else {
        this.dest[(checkin_station, stationName)][0] += t - checkinTime
        this.dest[(checkin_station, stationName)][1] += 1
    }    
}        
 
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    console.log(this.dest[(startStation, endStation)][0])
    return this.dest[(startStation, endStation)][0] / this.dest[(startStation, endStation)][1]
}   
      
 
 
const undergroundSystem = new UndergroundSystem();
 undergroundSystem.checkIn(45, "Leyton", 3);
 undergroundSystem.checkIn(32, "Paradise", 8);
 undergroundSystem.checkIn(27, "Leyton", 10);
 undergroundSystem.checkOut(45, "Waterloo", 15); 
 undergroundSystem.checkOut(27, "Waterloo", 20);  
 undergroundSystem.checkOut(32, "Cambridge", 22); 
 console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); 
 console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    
 undergroundSystem.checkIn(10, "Leyton", 24);
 console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    
 undergroundSystem.checkOut(10, "Waterloo", 38);  
 console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));   
 