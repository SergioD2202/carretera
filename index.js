const dow = require('./calendario/calendario.js')

const dayjs = require('./node_modules/dayjs')

const startDate = new Date(2021,2,31,21,30,0)

const endDate = new Date(2021,3,2,20,0,0)

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

function weekendRoad (accdnt1,accdnt2,hour,day,current){
    let lightRide

    const cars = {
        "total_road1":0,
        "lightWeight_road1":0,
        "heavyWeight_road1":0,
        "total_road2":0,
        "lightWeight_road2":0,
        "heavyWeight_road2":0
    }

    const road = {
        "north_south":0,
        "south_north":0,
        "light_1":0,
        "light_2":0,
        "emergency":0
    }

    if(hour<12){
        cars.total_road1 = 105
        cars.total_road2 = 80
        cars.lightWeight_road1 = Math.floor(cars.total_road1 * Math.random())
        cars.lightWeight_road2 = Math.floor(cars.total_road2 * Math.random())
        cars.heavyWeight_road1 = cars.total_road1 - cars.lightWeight_road1
        cars.heavyWeight_road2 = cars.total_road2 - cars.lightWeight_road2
        lightRide = ride(cars.lightWeight_road1 + cars.lightWeight_road2)
        road.light_1 = lightRide[0]
        road.light_2 = lightRide[1]

        if(!accdnt1) road.north_south = cars.heavyWeight_road1
        else road.emergency += cars.heavyWeight_road1

        if(!accdnt2) road.south_north = cars.heavyWeight_road2
        else road.emergency += cars.heavyWeight_road2
    }
    else if(hour<18){
        cars.total_road1 = 107
        cars.total_road2 = 90
        cars.lightWeight_road1 = Math.floor(cars.total_road1 * Math.random())
        cars.lightWeight_road2 = Math.floor(cars.total_road2 * Math.random())
        cars.heavyWeight_road1 = cars.total_road1 - cars.lightWeight_road1
        cars.heavyWeight_road2 = cars.total_road2 - cars.lightWeight_road2
        lightRide = ride(cars.lightWeight_road1 + cars.lightWeight_road2)
        road.light_1 = lightRide[0]
        road.light_2 = lightRide[1]

        if(!accdnt1) road.north_south = cars.heavyWeight_road1
        else road.emergency += cars.heavyWeight_road1

        if(!accdnt2) road.south_north = cars.heavyWeight_road2
        else road.emergency += cars.heavyWeight_road2
    }
    else{
        cars.total_road1 = 85
        cars.total_road2 = 54
        cars.lightWeight_road1 = Math.floor(cars.total_road1 * Math.random())
        cars.lightWeight_road2 = Math.floor(cars.total_road2 * Math.random())
        cars.heavyWeight_road1 = cars.total_road1 - cars.lightWeight_road1
        cars.heavyWeight_road2 = cars.total_road2 - cars.lightWeight_road2
        lightRide = ride(cars.lightWeight_road1 + cars.lightWeight_road2)
        road.light_1 = lightRide[0]
        road.light_2 = lightRide[1]

        if(!accdnt1) road.north_south = cars.heavyWeight_road1
        else road.emergency += cars.heavyWeight_road1

        if(!accdnt2) road.south_north = cars.heavyWeight_road2
        else road.emergency += cars.heavyWeight_road2
    }

    console.log(`${day.dayWeek} [${current.toDate()}]
    
    Vehículos en Norte-Sur: ${road.north_south}
    Vehículos en Sur-Norte: ${road.south_north}
    Vehículos en Aérea 1: ${road.light_1}
    Vehículos en Aérea 2: ${road.light_2}
    Vehículos en la vía de emergencia: ${road.emergency}     
    `)
}

function weekRoad(accdnt1,accdnt2,hour,day,current){

    let lightRide

    const cars = {
        "total_road1":0,
        "lightWeight_road1":0,
        "heavyWeight_road1":0,
        "total_road2":0,
        "lightWeight_road2":0,
        "heavyWeight_road2":0
    }

    const road = {
        "north_south":0,
        "south_north":0,
        "light_1":0,
        "light_2":0,
        "emergency":0
    }

    if(hour<12){
        cars.total_road1 = 119
        cars.total_road2 = 117
        cars.lightWeight_road1 = Math.floor(cars.total_road1 * Math.random())
        cars.lightWeight_road2 = Math.floor(cars.total_road2 * Math.random())
        cars.heavyWeight_road1 = cars.total_road1 - cars.lightWeight_road1
        cars.heavyWeight_road2 = cars.total_road2 - cars.lightWeight_road2
        lightRide = ride(cars.lightWeight_road1 + cars.lightWeight_road2)
        road.light_1 = lightRide[0]
        road.light_2 = lightRide[1]

        if(!accdnt1) road.north_south = cars.heavyWeight_road1
        else road.emergency += cars.heavyWeight_road1

        if(!accdnt2) road.south_north = cars.heavyWeight_road2
        else road.emergency += cars.heavyWeight_road2
    }
    else if(hour<18){
        cars.total_road1 = 105
        cars.total_road2 = 98
        cars.lightWeight_road1 = Math.floor(cars.total_road1 * Math.random())
        cars.lightWeight_road2 = Math.floor(cars.total_road2 * Math.random())
        cars.heavyWeight_road1 = cars.total_road1 - cars.lightWeight_road1
        cars.heavyWeight_road2 = cars.total_road2 - cars.lightWeight_road2
        lightRide = ride(cars.lightWeight_road1 + cars.lightWeight_road2)
        road.light_1 = lightRide[0]
        road.light_2 = lightRide[1]

        if(!accdnt1) road.north_south = cars.heavyWeight_road1
        else road.emergency += cars.heavyWeight_road1

        if(!accdnt2) road.south_north = cars.heavyWeight_road2
        else road.emergency += cars.heavyWeight_road2
    }
    else{
        cars.total_road1 = 120
        cars.total_road2 = 76
        cars.lightWeight_road1 = Math.floor(cars.total_road1 * Math.random())
        cars.lightWeight_road2 = Math.floor(cars.total_road2 * Math.random())
        cars.heavyWeight_road1 = cars.total_road1 - cars.lightWeight_road1
        cars.heavyWeight_road2 = cars.total_road2 - cars.lightWeight_road2
        lightRide = ride(cars.lightWeight_road1 + cars.lightWeight_road2)
        road.light_1 = lightRide[0]
        road.light_2 = lightRide[1]

        if(!accdnt1) road.north_south = cars.heavyWeight_road1
        else road.emergency += cars.heavyWeight_road1

        if(!accdnt2) road.south_north = cars.heavyWeight_road2
        else road.emergency += cars.heavyWeight_road2
    }

    console.log(`${day.dayWeek} [${current.toDate()}]
    
    Vehículos en Norte-Sur: ${road.north_south}
    Vehículos en Sur-Norte: ${road.south_north}
    Vehículos en Aérea 1: ${road.light_1}
    Vehículos en Aérea 2: ${road.light_2}
    Vehículos en la vía de emergencia: ${road.emergency}     
    `)
}

function simulacion(start,end) {

    let current = dayjs(start)
    let day, accident1, accident2

    while(current.toDate().getTime()<=end.getTime()){
        day = dow(current.toDate())

        accident1 = randomAccident()
        accident2 = randomAccident()

        if(day.isHoliday) {
            holidayRoad(accident1, accident2,day,current)   
        }

        else if(day.dayNumber === 0 || day.dayNumber === 6){
            weekendRoad(accident1,accident2,current.hour(),day,current)
        }

        else {
            weekRoad(accident1,accident2,current.hour(),day,current)
        }

        if(current.hour() === 22) current = current.add(8,"hours")

        else current = current.add(30,"minutes")
    }
    
}




