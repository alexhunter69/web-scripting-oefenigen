let dataJson ='{"temperatuur": 22.5, "luchtvochtigheid": 45, "tijdstip": "2024-09-05T14:30:00Z"}'
let data = JSON.parse(dataJson);
let date = new Date(data.tijdstip);

console.log("De temperatuur is "+ data.temperatuur +" °C, de luchtvochtigheid is "+ data.luchtvochtigheid +" %, en de meting is gedaan op " + data.tijdstip);
console.log('de meting is gedaan op ' + date.getFullYear()+"-" + date.getMonth() +"-" + date.getDate() +"-"+ date.getHours() +"-"+ date.getMinutes());