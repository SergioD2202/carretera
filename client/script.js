import { sendData } from "./post.js";

const doc = document.querySelector(".result")

const startDate = document.getElementById('inicio')

const endDate = document.getElementById('final')

const numberStart = document.getElementById('hora-inicio');

const numberEnd = document.getElementById('hora-final');

const btn = document.querySelector(".send")


numberStart.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
} 

numberEnd.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
} 

btn.addEventListener('click', (e)=>{
    let startArray, endArray, aux1, aux2, hour1, hour2 

   if(!startDate.value || !endDate.value || !numberStart.value || !numberEnd.value) alert("Ingrese todos los campos")

   else {
       startArray = startDate.value
       startArray = startArray.split("-")
       startArray = startArray.map(e => Number(e))

       endArray = endDate.value
       endArray = endArray.split("-")
       endArray = endArray.map(e => Number(e))

       hour1 = numberStart.value
       hour2 = numberEnd.value

       aux1 = new Date(startArray[0],startArray[1]-1,startArray[2])

       aux2 = new Date(endArray[0],endArray[1]-1,endArray[2])

       if((aux2.getTime()-aux1.getTime())<0) alert("No puede colocar una fecha inicio mayor a la fecha final")

       else if((hour1 < 6 || hour1 > 22) || (hour2 < 6 || hour2 > 22)) alert("Error: las horas permitidas para la simulación van desde las 6 (6am) hasta las 22 horas (10pm)")

       else{
           requestSim(new Date(startArray[0],startArray[1]-1,startArray[2],hour1,0,0),new Date(endArray[0],endArray[1]-1,endArray[2],hour2,0,0))
       }
   }

})

async function requestSim(start,end){
    doc.innerHTML = ""
    try {
        const data = await sendData("/simulacion",JSON.stringify({"start":start, "end":end}))

        const json = JSON.parse(data)

        for(let i = 0; i<json.results.length;i++){
            doc.innerHTML+=`<h4>${json.results[i]}</h4> <br> <br>`
        }
    } catch (error) { 
        console.error(error)
    }
} 
