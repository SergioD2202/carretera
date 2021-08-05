const dow = require('./calendario/calendario.js')

const dayjs = require('./node_modules/dayjs')

const startDate = new Date(2021,11,24,21,0,0)

const endDate = new Date(2021,11,25,8,0,0)

const randomAccident = () =>{
    const value = Math.random()

    return value <= 0.1
}

const decision = () =>{
    const value = Math.random()

    return value <= 0.5
}

const ride = (light_cars) =>{
    let road1 = 0, road2 = 0
    for(let i = light_cars; i>0;i--){
        if(decision()) road1++
        else road2++
    }
    return [road1,road2]
}

simulacion(startDate,endDate)

function holidayRoad (accdnt1,accdnt2,day,current){

    let lightRide

    const cars = {
        "total":0,
        "lightWeight":0,
        "heavyWeight":0
    }

    const road = {
        "north_south":0,
        "south_north":0,
        "light_1":0,
        "light_2":0,
        "emergency":0
    }

    cars.total = 125
    cars.lightWeight = Math.floor(cars.total * Math.random())
    cars.heavyWeight = cars.total - cars.lightWeight
    lightRide = ride(cars.lightWeight * 2)
    road.light_1 = lightRide[0]
    road.light_2 = lightRide[1]

    if(!accdnt1) road.north_south = cars.heavyWeight
    else road.emergency += cars.heavyWeight

    if(!accdnt2) road.south_north = cars.heavyWeight
    else road.emergency += cars.heavyWeight

    console.log(`${day.dayWeek} [${current.toDate()}]
    
    Vehículos en Norte-Sur: ${road.north_south}
    Vehículos en Sur-Norte: ${road.south_north}
    Vehículos en Aérea 1: ${road.light_1}
    Vehículos en Aérea 2: ${road.light_2}
    Vehículos en la vía de emergencia: ${road.emergency}     
    `)
}

function weekendRoad (){

}

const weekRoad = () => {}

function simulacion(start,end) {

    let current = dayjs(start)
    let day, accident1, accident2

    while(current.toDate().getTime()<=end.getTime()){
        day = dow(current.toDate())

        if(day.isHoliday) {

            accident1 = randomAccident()
            accident2 = randomAccident()

            holidayRoad(accident1, accident2,day,current)
            
        }

        else if(day.dayNumber === 0 || day.dayNumber === 6){
            console.log("to be added")
        }

        else console.log("to be added")

        if(current.hour() === 22) current = current.add(8,"hours")

        else current = current.add(30,"minutes")
    }
    
}




