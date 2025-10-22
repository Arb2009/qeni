// var linku = "https://dog.ceo/api/breeds/image/random"

// fetch(linku)
//       .then(x => x.json())  //tipi i te dhanes 
//       .then(y =>{
//            document.getElementById("qeni").innerHTML = `
//            <p> Qetu eshte nje foto e nje qeni random:</p>
//            <img src ="${y.message}" alt="Ni foto e qenit"/>
//            <p> ${y.status}</p>
//            `
//       }) //ku ka me dal

//       var linku = "https://api.open-meteo.com/v1/forecast?latitude=42.6629&longitude=21.1655&current_weather=true"

// fetch(linku)
//       .then(x => x.json())  //tipi i te dhanes 
//       .then(y =>{
//            document.getElementById("qeni").innerHTML = `
//            <p> Qetu jon tdhanat e motit:</p>
//            <p>Latitude: ${y.latitude}</p>
//            <p>Temperatura: ${y.current_weather.temperature} ${y.current_weather_units.temperature}</p>
//            <p>Speed: ${y.current_weather.windspeed}</p>
//            `
//      }) 

var linku = "https://store.steampowered.com/api/appdetails?appids=10"

fetch(linku)
      .then(x => x.json())
      .then(y =>{
        const parsedData = JSON.parse(y.contents);
        const gameName = parsedData[10]
        document.getElementById("qeni").innerHTML = `
        <p>${y['10']}</p>
        `
      })