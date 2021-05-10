const http = require("http");

exports.Get_HTTP = (hostname,route,port=80)=>{
    return new Promise ((resolve , reject)=>{
        const options = {
            hostname: hostname,
            port: port,
            path: route,
            method: 'GET'
        }

        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
            let data = ""
            res.on('data', d => {
                data += d
            })
            res.on("end", () => {
                resolve(JSON.parse(data))
            })
        })

        req.on('error', error => {
            reject(error)
        })

        req.end()
    })
}