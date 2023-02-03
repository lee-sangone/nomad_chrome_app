const API_KEY = "84d3c253a51da3b67b938ee1eeb63b77"


function onGeoOk (position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then((data) => {
        const weatehrCon = document.querySelector("#weather span:first-child")
        const cityCon = document.querySelector("#weather span:last-child")
        cityCon.innerText = data.name
        weatehrCon.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoErr () {
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)