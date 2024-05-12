import React, { useState } from "react";
import "./App.css";

import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [metric, setMetric] = useState("");
  let [weather, setWeather] = useState({});

  function displayTemperature(response) {
    setWeather({ temperature: Math.round(response.data.main.temp) });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`The weather in ${city} is`);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de2c40e370d58e257faf07ba4ea95840&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    setMetric(`°C`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="citySearch" onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>
        {message} {weather.temperature}
        {metric}
      </h2>
    </div>
  );
}
