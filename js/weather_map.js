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
        function averageWind1(){
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].main.wind.speed;
            }
            return parseInt(pNumber/8);
        }
        function averageWind2(){
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].main.wind.speed;
            }
            return parseInt(pNumber/8);
        }
        function averageWind3(){
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].main.wind.speed;
            }
            return parseInt(pNumber/8);
        }
        function averageWind4(){
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].main.wind.speed;
            }
            return parseInt(pNumber/8);
        }
        function averageWind5(){
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].main.wind.speed;
            }
            return parseInt(pNumber/8);
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
        $('#day1-wind').text(`Wind: ${averageWind1()}`);
        $('#day2-wind').text(`Wind: ${averageWind2()}`);
        $('#day3-wind').text(`Wind: ${averageWind3()}`);
        $('#day4-wind').text(`Wind: ${averageWind4()}`);
        $('#day5-wind').text(`Wind: ${averageWind5()}`);
    });

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
})