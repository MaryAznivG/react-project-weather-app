import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
          />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity:{weatherData.humidity}%</li>
            <li> Wind:{weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
