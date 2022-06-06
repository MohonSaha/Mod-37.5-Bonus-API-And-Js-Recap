const API_KEY = `6b7b0f7323c892841bd77a172bee47ab`;

const searchTempareture = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTempareture(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerHTML = text;
}

const displayTempareture = tempareture => {
    setInnerText('city', tempareture.name);
    setInnerText('tempareture', tempareture.main.temp);
    setInnerText('condition', tempareture.weather[0].main);

    //========================= set icon =========================
    const url = `https://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute('src', url);
}