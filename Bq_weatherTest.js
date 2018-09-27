const http = require('http');

getWeather();

function getWeather() {
 getWeatherJSOn(function(responceText)
 {
 	console.log(responceText);
 });

}

function getWeatherJSOn(callback)
{
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2ea2857b15a57f319ab86a453f8d04d3';

	http.get(url, (responce) =>
	{
		let data = '';
		responce.on('data', (chunk) =>
		{
			data += chunk;
		});

		responce.on('end', () => {
			callback(JSON.parse(data).main.temp);
		});
	});

}