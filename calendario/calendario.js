const {holyWeek, carnival} = require("./easter")

function dayOfWeek(date) {
    const week = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

    const day = date.getDay()

    return {
        "dayWeek": week[day],
        "dayNumber":day,
        "isHoliday":isPublicHoliday(date)
    }
}

function isPublicHoliday(date) {

const VenezuelaPublicHolidays = ['1/1','31/12','24/12','25/12','1/5','19/4','24/6','5/7','24/7','12/10']

const year = date.getUTCFullYear()

const day = date.getDate()

const month = day === 1? date.getUTCMonth() + 2:date.getUTCMonth() + 1

const format = `${day}/${month}`

VenezuelaPublicHolidays.push(holyWeek(year,1))

VenezuelaPublicHolidays.push(holyWeek(year,2))

VenezuelaPublicHolidays.push(carnival(year, 1))

VenezuelaPublicHolidays.push(carnival(year, 2))

const len = VenezuelaPublicHolidays.length

for(let i = 0; i<len;i++){
    if(VenezuelaPublicHolidays[i] === format) return true
}

return false

}


module.exports = dayOfWeek