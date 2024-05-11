import React, { useState } from "react";
import "./App.css";

import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [weather, setWeather] = useState("");
  let apiKey = "f0e04696ccdobt2cada9106542efcc36";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    return response.data.main.temperature;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`The weather in ${city} is`);
    setWeather(`${response.data.temperature}`);
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
        {message} {weather}
      </h2>
    </div>
  );
}
