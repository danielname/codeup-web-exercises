$(function (){
    // $.get(`https://api.openweathermap.org/data/3.0/onecall?lat={29.423017}&lon={-98.48527}&appid={${OPEN_WEATHER_APPID}}`).done(function(data){
    //     console.log(data)
    // });

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data)
        let descriptionArray = [];
        function loadDescriptionArray1(){
            for (let i = 0; i < 8; i++){
                descriptionArray.push(data.list[i].weather[0].description);
            }
            return descriptionArray;
        }
        function loadDescriptionArray2(){
            for (let i = 8; i < 16; i++){
                descriptionArray.push(data.list[i].weather[0].description);
            }
            return descriptionArray;
        }
        function loadDescriptionArray3(){
            for (let i = 16; i < 24; i++){
                descriptionArray.push(data.list[i].weather[0].description);
            }
            return descriptionArray;
        }
        function loadDescriptionArray4(){
            for (let i = 24; i < 32; i++){
                descriptionArray.push(data.list[i].weather[0].description);
            }
            return descriptionArray;
        }
        function loadDescriptionArray5(){
            for (let i = 32; i < 40; i++){
                descriptionArray.push(data.list[i].weather[0].description);
            }
            return descriptionArray;
        }
        function mostFrequent(array){
            const arrayElementsCount = array.reduce(function(total, element){
                if (!total[element]) {
                    total[element] = 1;
                } else {
                    total[element] = total[element] + 1;
                }
                return total;
            }, {});
            const arraySorted = Object.entries(arrayElementsCount).sort(function(a, b){
                return b[1] - a[1];
            });
            return arraySorted[0][0];
        }
        function averageWind1(){
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].wind.speed;
            }
            return (pNumber/8).toFixed(2);
        }
        function averageWind1dir(){
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].wind.deg;
            }
            return parseInt(pNumber/8);
        }
        function averageWind2(){
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].wind.speed;
            }
            return (pNumber/8).toFixed(2);
        }
        function averageWind2dir(){
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].wind.deg;
            }
            return parseInt(pNumber/8);
        }
        function averageWind3(){
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].wind.speed;
            }
            return (pNumber/8).toFixed(2);
        }
        function averageWind3dir(){
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].wind.deg;
            }
            return parseInt(pNumber/8);
        }
        function averageWind4(){
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].wind.speed;
            }
            return (pNumber/8).toFixed(2);
        }
        function averageWind4dir(){
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].wind.deg;
            }
            return parseInt(pNumber/8);
        }
        function averageWind5(){
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].wind.speed;
            }
            return (pNumber/8).toFixed(2);
        }
        function averageWind5dir(){
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].wind.deg;
            }
            return parseInt(pNumber/8);
        }
        function windCardinalDirection(degrees){
            let cardinalDirection = '';
            if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
                cardinalDirection = "N";
            } else if (degrees > 11.25 && degrees  <= 33.75) {
                cardinalDirection = "NNE";
            } else if (degrees > 33.75 && degrees <= 56.25) {
                cardinalDirection = "NE";
            } else if (degrees > 56.25 && degrees <= 78.75) {
                cardinalDirection = "ENE";
            } else if (degrees > 78.75 && degrees <= 101.25) {
                cardinalDirection = "E";
            } else if (degrees > 101.25 && degrees <= 123.75) {
                cardinalDirection = "ESE";
            } else if (degrees > 123.75 && degrees <= 146.25) {
                cardinalDirection = "SE";
            } else if (degrees > 146.25 && degrees <= 168.75) {
                cardinalDirection = "SSE";
            } else if (degrees > 168.75 && degrees <= 191.25) {
                cardinalDirection = "S";
            } else  if (degrees > 191.25 && degrees <= 213.75) {
                cardinalDirection = "SSW";
            } else if (degrees > 213.75 && degrees <= 236.25)  {
                cardinalDirection = "SW";
            } else if (degrees > 236.25 && degrees <= 258.75) {
                cardinalDirection = "WSW";
            } else if (degrees > 258.75 && degrees <= 281.25) {
                cardinalDirection = "W";
            } else if (degrees > 281.25 && degrees <= 303.75) {
                cardinalDirection = "WNW";
            } else if (degrees > 303.75 && degrees <= 326.25) {
                cardinalDirection = "NW";
            } else if (degrees > 326.75 && degrees <= 348.75) {
                cardinalDirection = "NNW";
            }
            return cardinalDirection;
        }
        function averagePressure1(){
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].main.pressure;
            }
            return parseInt(pNumber/8);
        }
        function averagePressure2(){
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].main.pressure;
            }
            return parseInt(pNumber/8);
        }
        function averagePressure3(){
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].main.pressure;
            }
            return parseInt(pNumber/8);
        }
        function averagePressure4(){
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].main.pressure;
            }
            return parseInt(pNumber/8);
        }
        function averagePressure5(){
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].main.pressure;
            }
            return parseInt(pNumber/8);
        }
        function averageHumidity1(){
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].main.humidity;
            }
            return parseInt(pNumber/8);
        }
        function averageHumidity2(){
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].main.humidity;
            }
            return parseInt(pNumber/8);
        }
        function averageHumidity3(){
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].main.humidity;
            }
            return parseInt(pNumber/8);
        }
        function averageHumidity4(){
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].main.humidity;
            }
            return parseInt(pNumber/8);
        }
        function averageHumidity5(){
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].main.humidity;
            }
            return parseInt(pNumber/8);
        }
        $('#date-one').text(data.list[0].dt_txt.slice(0,10));
        $('#date-two').text(data.list[8].dt_txt.slice(0,10));
        $('#date-three').text(data.list[16].dt_txt.slice(0,10));
        $('#date-four').text(data.list[24].dt_txt.slice(0,10));
        $('#date-five').text(data.list[32].dt_txt.slice(0,10));
        $('#day1-pressure').text(`Pressure: ${averagePressure1()}`);
        $('#day2-pressure').text(`Pressure: ${averagePressure2()}`);
        $('#day3-pressure').text(`Pressure: ${averagePressure3()}`);
        $('#day4-pressure').text(`Pressure: ${averagePressure4()}`);
        $('#day5-pressure').text(`Pressure: ${averagePressure5()}`);
        $('#day1-wind').text(`Wind: ${averageWind1()} ${windCardinalDirection(averageWind1dir())}`);
        $('#day2-wind').text(`Wind: ${averageWind2()} ${windCardinalDirection(averageWind2dir())}`);
        $('#day3-wind').text(`Wind: ${averageWind3()} ${windCardinalDirection(averageWind3dir())}`);
        $('#day4-wind').text(`Wind: ${averageWind4()} ${windCardinalDirection(averageWind4dir())}`);
        $('#day5-wind').text(`Wind: ${averageWind5()} ${windCardinalDirection(averageWind5dir())}`);
        $('#day1-humidity').text(`Humidity: ${averageHumidity1()}`);
        $('#day2-humidity').text(`Humidity: ${averageHumidity2()}`);
        $('#day3-humidity').text(`Humidity: ${averageHumidity3()}`);
        $('#day4-humidity').text(`Humidity: ${averageHumidity4()}`);
        $('#day5-humidity').text(`Humidity: ${averageHumidity5()}`);
        $('#day1-description').text(`Description: ${mostFrequent(loadDescriptionArray1())}`);
        $('#day2-description').text(`Description: ${mostFrequent(loadDescriptionArray2())}`);
        $('#day3-description').text(`Description: ${mostFrequent(loadDescriptionArray3())}`);
        $('#day4-description').text(`Description: ${mostFrequent(loadDescriptionArray4())}`);
        $('#day5-description').text(`Description: ${mostFrequent(loadDescriptionArray5())}`);

    });

})
