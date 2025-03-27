const input = document.querySelector('input')
const country = document.querySelector('.country')
const tempMax = document.querySelector('.temp-max')
const tempMin = document.querySelector('.temp-min')
const img = document.querySelector('img')

let images = {
	"Clouds": "./cloud.png",
	"Snow": "./snow.png",
	"Clear": "./sun.png",
	"Wind": "./wind.png",
	"Rain": "./rain.png"
};

const h1 = document.querySelector('h1')
const button = document.querySelector('button')
async function weather() {
	let city = input.value.trim().toLocaleLowerCase()
	if (city === '') {
		city = 'tashkent'
	}
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8369fee6abdb792893bd2540d41f5a28`
	let response = await fetch(url)
	let data = await response.json()

	
	h1.textContent = `${data.main.temp}C°`
	tempMax.textContent = `Max: ${data.main.temp_max}C°`
	tempMin.textContent = `Min: ${data.main.temp_min}C°`
	country.textContent = `${data.name}`

	let weatherCondition = data.weather[0].main; 
	if (images[weatherCondition]) {
		img.src = images[weatherCondition];
} 
const dateElement = document.querySelector('.date');

const today = new Date();
const monthName = today.toLocaleString('en', { month: 'long' });
const day = today.getDate();

document.querySelector('.date').textContent = `${monthName}` + ', ' + `${day}`;


}
button.addEventListener('click', weather)
weather()