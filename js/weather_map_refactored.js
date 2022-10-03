$(function (){
    // globally defined lng, lat, and update put into an object to be called as properties/methods.
    const Defaults = {
        lat: 29.428106704221186,
        lng: -98.49567610253364,
        update(){
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat:    Defaults.lat,
                lon:    Defaults.lng,
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
                console.log(data)

                function loop(){
                    for (let j = 1; j <= 5; j++) {
                        let utilArray = [];
                        let utilArray1 = [];
                        let high = -900;
                        let low = 10000;
                        let wNumber = dNumber = pNumber = hNumber = 0;
                        for (let i = ((j - 1) * 8); i < (j * 8); i++) {
                            if (data.list[i].main.temp_max > high) {
                                high = data.list[i].main.temp_max;
                            }
                            if (data.list[i].main.temp_min < low) {
                                low = data.list[i].main.temp_min;
                            }
                            utilArray.push(data.list[i].weather[0].icon);
                            utilArray1.push(data.list[i].weather[0].description);
                            wNumber += data.list[i].wind.speed;
                            dNumber += data.list[i].wind.deg;
                            pNumber += data.list[i].main.pressure;
                            hNumber += data.list[i].main.humidity;
                        }
                        $(`#hi-low${j}`).html(`<p className="card-text">${low}&deg;F/${high}&deg;F</p><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`);
                        $(`#day${j}-description`).text(`Description: ${mostFrequent(utilArray1)}`);
                        $(`#day${j}-wind`).html(`Wind: ${(wNumber / 8).toFixed(2)}<br>${windCardinalDirection(parseInt(dNumber / 8))}`);
                        $(`#day${j}-pressure`).text(`Pressure: ${parseInt(pNumber / 8)}`);
                        $(`#day${j}-humidity`).text(`Humidity: ${parseInt(hNumber / 8)}`);
                        $(`#date-${j}`).text(data.list[(j - 1) * 8].dt_txt.slice(0,10));
                        $(`#hi-low${j}c`).html(`<p className="card-text">${low}&deg;F/${high}&deg;F</p><img src="http://openweathermap.org/img/w/${mostFrequent(utilArray)}.png">`);
                        $(`#day${j}c-description`).text(`Description: ${mostFrequent(utilArray1)}`);
                        $(`#day${j}c-wind`).html(`Wind: ${(wNumber / 8).toFixed(2)}<br>${windCardinalDirection(parseInt(dNumber / 8))}`);
                        $(`#day${j}c-pressure`).text(`Pressure: ${parseInt(pNumber / 8)}`);
                        $(`#day${j}c-humidity`).text(`Humidity: ${parseInt(hNumber / 8)}`);
                        $(`#date-${j}c`).text(data.list[(j - 1) * 8].dt_txt.slice(0,10));
                    }
                }
                loop()

                reverseGeocode({lat: Defaults.lat, lng: Defaults.lng}, WEATHER_MAP_TOKEN).then(function(reverseResults){
                    stateNameUSA = String(String(reverseResults.split(', ')[2]).split(' ')[0]);
                    if (data.city.country === 'US') {
                        $('#current-city,#m-current-city').text(`${data.city.name}, ${stateNameUSA}, USA`);
                    } else{
                        $('#current-city,#m-current-city').text(`${data.city.name}, ${data.city.country}`);
                    }
                })
            });
        }
    }
    Defaults.update();

    //the following makes the map visible
    mapboxgl.accessToken = WEATHER_MAP_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [Defaults.lng, Defaults.lat], // starting position [lng, lat]
        zoom: 10, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    // the following puts a marker on the map, and when the marker is dragges, map is double clicked, or search bar is used, calls updateScreen.
    const marker = new mapboxgl.Marker({
        color: "#FF0000",
        draggable: true
    }).setLngLat([Defaults.lng, Defaults.lat])
        .addTo(map);
    map.on('dblclick', e => {
        marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
        Defaults.lat = e.lngLat.lat;
        Defaults.lng = e.lngLat.lng;
        Defaults.update();
    });
    marker.on('dragend', () => {
        Defaults.lat = marker.getLngLat().lat;
        Defaults.lng = marker.getLngLat().lng;
        Defaults.update();
    });
    $('#search-input').on('keypress',function(e) {
        if(e.which === 13 || e.keyCode === 13) {
            geocode($(this).val(),WEATHER_MAP_TOKEN).then(function(result){
                Defaults.lat = result[1];
                Defaults.lng = result[0];
                let stateNameUSA = '';
                map.setCenter([Defaults.lng,Defaults.lat]);
                Defaults.update();
                marker.setLngLat([Defaults.lng,Defaults.lat]);
            });
        }
    });

// dropdown

    // JavaScript code to avoid dropdown
    // menu close

    // Clicking dropdown button will toggle display
    $('.dropbutton').on('click', function(){
        document.getElementById("Dropdown").classList.toggle("show");
    })

    // Prevents menu from closing when clicked inside
    document.getElementById("Dropdown").addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Closes the menu in the event of outside click
    window.onclick = function(event) {
        if (!event.target.matches('.dropbutton')) {

            var dropdowns =
                document.getElementsByClassName("dropdownmenu-content");

            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});