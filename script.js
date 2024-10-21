const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weather-api-by-any-city.p.rapidapi.com/weather/London');
xhr.setRequestHeader('x-rapidapi-key', '109e0b3089msh7add9c560661c6ep108bf3jsn4cbc252df61b');
xhr.setRequestHeader('x-rapidapi-host', 'weather-api-by-any-city.p.rapidapi.com');

xhr.send(data);