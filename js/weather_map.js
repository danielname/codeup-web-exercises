$(function (){
    let latDefault = 29.428106704221186;
    let lngDefault = -98.49567610253364
    //the following makes the map visible
    mapboxgl.accessToken = WEATHER_MAP_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [lngDefault, latDefault], // starting position [lng, lat]
        zoom: 10, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    map.on('dblclick', e => {
        marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
        latDefault = e.lngLat.lat;
        lngDefault = e.lngLat.lng;
        updateScreen();
    })
    const marker = new mapboxgl.Marker({
        color: "#FF0000",
        draggable: true
    }).setLngLat([lngDefault, latDefault])
        .addTo(map);

    marker.on('dragend', () => {
        latDefault = marker.getLngLat().lat;
        lngDefault = marker.getLngLat().lng;
                updateScreen();
            })
function updateScreen(){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    latDefault,
        lon:    lngDefault,
        units: "imperial"
    }).done(function(data) {
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
        console.log(data)

        $('#hi-low1').html(() => {
            let utilArray = [];
            let high = -900;
            let low = 10000;
            for (let i = 0; i < 8; i++){
                if (data.list[i].main.temp_max > high) {
                    high = data.list[i].main.temp_max;
                }
                if (data.list[i].main.temp_min < low){
                    low = data.list[i].main.temp_min;
                }
                utilArray.push(data.list[i].weather[0].icon);
            }
           return `<p className="card-text">${low}&deg;F/${high}&deg;F</p>
        <br><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`;
        });
        $('#hi-low2').html(() => {
            let utilArray = [];
            let high = -900;
            let low = 10000;
            for (let i = 8; i < 16; i++){
                if (data.list[i].main.temp_max > high) {
                    high = data.list[i].main.temp_max;
                }
                if (data.list[i].main.temp_min < low){
                    low = data.list[i].main.temp_min;
                }
                utilArray.push(data.list[i].weather[0].icon);
            }
            return `<p className="card-text">${low}&deg;F/${high}&deg;F</p>
        <br><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`;
        });
        $('#hi-low3').html(() => {
            let utilArray = [];
            let high = -900;
            let low = 10000;
            for (let i = 16; i < 24; i++){
                if (data.list[i].main.temp_max > high) {
                    high = data.list[i].main.temp_max;
                }
                if (data.list[i].main.temp_min < low){
                    low = data.list[i].main.temp_min;
                }
                utilArray.push(data.list[i].weather[0].icon);
            }
            return `<p className="card-text">${low}&deg;F/${high}&deg;F</p>
        <br><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`;
        });
        $('#hi-low4').html(() => {
            let utilArray = [];
            let high = -900;
            let low = 10000;
            for (let i = 24; i < 32; i++){
                if (data.list[i].main.temp_max > high) {
                    high = data.list[i].main.temp_max;
                }
                if (data.list[i].main.temp_min < low){
                    low = data.list[i].main.temp_min;
                }
                utilArray.push(data.list[i].weather[0].icon);
            }
            return `<p className="card-text">${low}&deg;F/${high}&deg;F</p>
        <br><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`;
        });
        $('#hi-low5').html(() => {
            let utilArray = [];
            let high = -900;
            let low = 10000;
            for (let i = 32; i < 40; i++){
                if (data.list[i].main.temp_max > high) {
                    high = data.list[i].main.temp_max;
                }
                if (data.list[i].main.temp_min < low){
                    low = data.list[i].main.temp_min;
                }
                utilArray.push(data.list[i].weather[0].icon);
            }
            return `<p className="card-text">${low}&deg;F/${high}&deg;F</p>
        <br><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`;
        });
        $('#day1-description').text(() => {
            let utilArray = [];
            for (let i = 0; i < 8; i++){
                utilArray.push(data.list[i].weather[0].description);
            }
            return `Description: ${mostFrequent(utilArray)}`;
        });
        $('#day2-description').text(() => {
            let utilArray = [];
            for (let i = 8; i < 16; i++){
                utilArray.push(data.list[i].weather[0].description);
            }
            return `Description: ${mostFrequent(utilArray)}`;
        });
        $('#day3-description').text(() => {
            let utilArray = [];
            for (let i = 16; i < 24; i++){
                utilArray.push(data.list[i].weather[0].description);
            }
            return `Description: ${mostFrequent(utilArray)}`;
        });
        $('#day4-description').text(() => {
            let utilArray = [];
            for (let i = 24; i < 32; i++){
                utilArray.push(data.list[i].weather[0].description);
            }
            return `Description: ${mostFrequent(utilArray)}`;
        });
        $('#day5-description').text(() => {
            let utilArray = [];
            for (let i = 32; i < 40; i++){
                utilArray.push(data.list[i].weather[0].description);
            }
            return `Description: ${mostFrequent(utilArray)}`;
        });
        $('#day1-wind').text(() => {
            let pNumber = 0;
            let qNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].wind.speed;
                qNumber += data.list[i].wind.deg;
            }
            return `Wind: ${(pNumber/8).toFixed(2)} ${windCardinalDirection(parseInt(qNumber/8))}`;
        });
        $('#day2-wind').text(() => {
            let pNumber = 0;
            let qNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].wind.speed;
                qNumber += data.list[i].wind.deg;
            }
            return `Wind: ${(pNumber/8).toFixed(2)} ${windCardinalDirection(parseInt(qNumber/8))}`;
        });
        $('#day3-wind').text(() => {
            let pNumber = 0;
            let qNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].wind.speed;
                qNumber += data.list[i].wind.deg;
            }
            return `Wind: ${(pNumber/8).toFixed(2)} ${windCardinalDirection(parseInt(qNumber/8))}`;
        });
        $('#day4-wind').text(() => {
            let pNumber = 0;
            let qNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].wind.speed;
                qNumber += data.list[i].wind.deg;
            }
            return `Wind: ${(pNumber/8).toFixed(2)} ${windCardinalDirection(parseInt(qNumber/8))}`;
        });
        $('#day5-wind').text(() => {
            let pNumber = 0;
            let qNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].wind.speed;
                qNumber += data.list[i].wind.deg;
            }
            return `Wind: ${(pNumber/8).toFixed(2)} ${windCardinalDirection(parseInt(qNumber/8))}`;
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
        $('#day1-pressure').text(() => {
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].main.pressure;
            }
            return `Pressure: ${parseInt(pNumber/8)}`;
        });
        $('#day2-pressure').text(() => {
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].main.pressure;
            }
            return `Pressure: ${parseInt(pNumber/8)}`;
        });
        $('#day3-pressure').text(() => {
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].main.pressure;
            }
            return `Pressure: ${parseInt(pNumber/8)}`;
        });
        $('#day4-pressure').text(() => {
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].main.pressure;
            }
            return `Pressure: ${parseInt(pNumber/8)}`;
        });
        $('#day5-pressure').text(() => {
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].main.pressure;
            }
            return `Pressure: ${parseInt(pNumber/8)}`;
        });
        $('#day1-humidity').text(() => {
            let pNumber = 0;
            for (let i = 0; i < 8; i++){
                pNumber += data.list[i].main.humidity;
            }
            return `Humidity: ${parseInt(pNumber/8)}`;
        });
        $('#day2-humidity').text(() => {
            let pNumber = 0;
            for (let i = 8; i < 16; i++){
                pNumber += data.list[i].main.humidity;
            }
            return `Humidity: ${parseInt(pNumber/8)}`;
        });
        $('#day3-humidity').text(() => {
            let pNumber = 0;
            for (let i = 16; i < 24; i++){
                pNumber += data.list[i].main.humidity;
            }
            return `Humidity ${parseInt(pNumber/8)}`;
        });
        $('#day4-humidity').text(() => {
            let pNumber = 0;
            for (let i = 24; i < 32; i++){
                pNumber += data.list[i].main.humidity;
            }
            return `Humidity ${parseInt(pNumber/8)}`;
        });
        $('#day5-humidity').text(() => {
            let pNumber = 0;
            for (let i = 32; i < 40; i++){
                pNumber += data.list[i].main.humidity;
            }
            return `Humidity: ${parseInt(pNumber/8)}`;
        });
        $('#date-one').text(data.list[0].dt_txt.slice(0,10));
        $('#date-two').text(data.list[8].dt_txt.slice(0,10));
        $('#date-three').text(data.list[16].dt_txt.slice(0,10));
        $('#date-four').text(data.list[24].dt_txt.slice(0,10));
        $('#date-five').text(data.list[32].dt_txt.slice(0,10));

        reverseGeocode({lat: latDefault, lng: lngDefault}, WEATHER_MAP_TOKEN).then(function(reverseResults){
            stateNameUSA = String(String(reverseResults.split(', ')[2]).split(' ')[0]);
            if (data.city.country === 'US') {
                $('#current-city').text(`${data.city.name}, ${stateNameUSA}, USA`);
            } else{
                $('#current-city').text(`${data.city.name}, ${data.city.country}`);
            }
        })
    });
}
updateScreen();

    $('#search-input').on('keypress',function(e) {
        if(e.which === 13 || e.keyCode === 13) {
            geocode($(this).val(),WEATHER_MAP_TOKEN).then(function(result){
                latDefault = result[1];
                lngDefault = result[0];
                let stateNameUSA = '';
                map.setCenter([lngDefault,latDefault]);
                updateScreen();

            });
        }
    });
});