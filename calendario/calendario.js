

function dayOfWeek(date) {
    const week = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

    const day = date.getDay()

    return isPublicHoliday(date)? `Hoy es ${week[day]} y es un día festivo`:week[day]
}

function isPublicHoliday(date) {

const VenezuelaPublicHolidays = ['1/1','31/12','24/12','25/12','1/5','19/4','24/6','5/7','24/7','12/10']

const month = date.getUTCMonth() + 1

const day = date.getUTCDate()

return VenezuelaPublicHolidays[0] === day+'/'+month

}


module.exports = dayOfWeek