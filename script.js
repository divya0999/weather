const api = {
    key: '2eb4e8e35ed724e98f9da47cd845b578',
    base: 'https://api.openweathermap.org/data/2.5/',
}

const search = document.querySelector('.search-box');
search.addEventListener('keypress', setQuery);

function setQuery (evt) {
    // console.log(evt.keyCode);
    // console.log(evt);
    if(evt.keyCode == 13) {
        // console.log(search.value);
        fetchData(search.value);
    }
}

function fetchData(data) {
    fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayData);
}

function displayData(data) {
    console.log(data);
    const city = document.querySelector('.cityDet .city');
    city.innerText = `${data.name}, ${data.sys.country}`;
    const Date = document.querySelector('.cityDet .date');
    Date.innerText = getDate();
    const temp = document.querySelector('.tempDet .celcius');
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    const weather = document.querySelector('.tempDet .weather');
    weather.innerText = `${data.weather[0].description}`;
    const hilow = document.querySelector('.tempDet .hi-low');
    hilow.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`;
}
// get date in required format
function getDate(){
    let days = [    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
    let months = [
        "January","February","March","April","May","June","July",
            "August","September","October","November","December"
    ];
    let today = new Date();
    let d = today.getDate();
    let day = days[today.getDay()];
    console.log(day);
    console.log(today.getDay());
    let month = months[today.getMonth()];
    console.log(month);
    let year = today.getFullYear();
    console.log(year);

    return `${day} ${d} ${month} ${year}`
}