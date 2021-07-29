

function holyWeek(year, day){

}

function carnival(year, day){
    
}

function daysBefore(diff){
    const today = new Date()
    const oneDay = 1000 * 60 * 60 *24
    
    const before = today.getTime() - (diff*oneDay)

    return new Date(before).getUTCMonth()
}

module.exports = daysBefore