
function sundayOfR(year){

    //Gauss algorithm for Sunday of Resurrection

    const a = year % 19

    const b = year % 4

    const c = year % 7

    const k = Math.floor(year/100)

    const p = Math.floor((13+8*k)/25)

    const q = Math.floor(k/4)

    const M = (15 - p + k - q) % 30

    const N = (4 + k - q) % 7

    const d = (19*a + M) % 30

    const e = (2*b + 4*c + 6*d + N) % 7

    if(d + e < 10) return new Date(year,2,(d + e + 22))

    else{
        if(d + e - 9 > 25) return new Date(year,3,19)

        if(d === 28 && e === 6 && a > 10) return new Date(year,3,18)

        return new Date(year,3,(d + e - 9))
    }
}


function holyWeek(year, opt){
    const resurrection = sundayOfR(year)

    let holiday

    //Jueves Santo
    if(opt === 1) {
        holiday = daysBefore(resurrection,2)
        
        return `${holiday.getUTCDate()}/${holiday.getUTCMonth()+1}`
    }

    //Viernes Santo
    if(opt === 2) {
        holiday = daysBefore(resurrection,1)
        
        return `${holiday.getUTCDate()}/${holiday.getUTCMonth()+1}`
    }

}

function carnival(year, opt){
    const resurrection = sundayOfR(year)

    let holiday

    //Lunes de carnaval
    if(opt === 1) {
        holiday = daysBefore(resurrection,47)
        
        return `${holiday.getUTCDate()}/${holiday.getUTCMonth()+1}`
    }

    //Martes de carnaval
    if(opt === 2) {
        holiday = daysBefore(resurrection,46)
        
        return `${holiday.getUTCDate()}/${holiday.getUTCMonth()+1}`
    }
}

function daysBefore(end, diff){

    const oneDay = 1000 * 60 * 60 *24
    
    const before = end.getTime() - (diff*oneDay)

    return new Date(before)
}

module.exports = {holyWeek, carnival}