const API_KEY = "5341f3b4f67c822c816bbab17dc83348";

const searchTemp = () => {
  const city = document.getElementById("weather-city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));

  document.getElementById("form").addEventListener("click", (e) => {
    e.preventDefault();
  });
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerHTML = text;
};

const displayTemp = (tempareture) => {
  setInnerText("city-name", tempareture.name);
  setInnerText("temp", tempareture.main.temp);
  setInnerText("clouds", tempareture.weather[0].main);

  const url = `https://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
