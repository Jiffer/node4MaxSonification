const maxApi = require("max-api");

// say hello once you're up and running
maxApi.outlet("hello");

const weather = require('openweather-apis');

	weather.setLang('en');
	// English - en, Russian - ru, Italian - it, Spanish - es (or sp),
	// Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
	// Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
	// Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
	// Turkish - tr, Croatian - hr, Catalan - ca


	// set city by name
	// weather.setCity('Fairplay');
 	// // or set the coordinates (latitude,longitude)
	// weather.setCoordinate(50.0467656, 20.0048731);
	// // or set city by ID (recommended by OpenWeatherMap)
	// weather.setCityId(4367872);

    // Boulder, CO
    var coords = [40.01, -105.27]; 
    // weather.setCoordinate(coords[0], coords[1]);

    maxApi.addHandler("latLong", (lat, long) => {
        coords[0] = lat;
        coords[1] = long;
        weather.setCoordinate(coords[0], coords[1]); 
    })
    // or set zip code
	// weather.setZipCode(80026);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('imperial');

	// check http://openweathermap.org/appid#get for get the APPID
    // go to openweathermap.org and create an account to get your own ID
 	weather.setAPPID("Your APPID");

    maxApi.addHandler("getWeather", () => {
        weather.setCoordinate(coords[0], coords[1]);
        // get all the JSON file returned from server (rich of info)
        weather.getAllWeather(function(err, JSONObj){
            maxApi.outlet(JSONObj);
        });
    });

