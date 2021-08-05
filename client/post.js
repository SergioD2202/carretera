const sendData = (url_api,json) => {

    return new Promise((resolve,reject)=>{

        const xhr = new XMLHttpRequest()
        xhr.open('POST',url_api,true)

        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = ( () => {
            if(xhr.readyState === 4) {

                xhr.status===200? resolve(xhr.response):reject(new Error('Error',url_api))

                if(xhr.status===500) window.location.reload()
                    
                
            }
        })

        xhr.send(json)
        
    })
    
}

export {sendData}