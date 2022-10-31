//input:
let ganadores = ["Anna", "Beth", "Cara"];

//output Usando Ecmascript 6
// "Oro ganador: Anna, Plata ganadora: Beth, Bronce ganador: Cara"

let oro = ganadores.filter((_, idx) => idx === 0)
let plata = ganadores.filter((_, idx) => idx === 1)
let bronce = ganadores.filter((_, idx) => idx === 2)

console.log(`Oro ganador: ${oro}, Plata ganadora: ${plata}, Bronce ganador: ${bronce}`)

const data = [
    {
    "errorCode":100,
    "message":{},
    "name":"InternetGatewayDevice.LANDevice.1.Hosts.HostNumberOfEntries",
    "value":"2"
    }
  ];

  console.log(data[0].errorCode)


