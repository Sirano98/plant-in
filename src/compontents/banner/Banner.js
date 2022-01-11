import { useEffect, useState } from "react";
import { SearchForm } from "../search-form/Search-form";
import "./Banner.css";

export const Banner = () => {
    const [temperature, setTemperature] = useState("-");

    useEffect(() => {
        getGeolocationData();
    }, [])

    const getGeolocationData = () => {
        if (navigator) {
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
        } else {
            setTemperature("-");
        }
    }

    const geoSuccess = (position) => {
        getWeatherData(position.coords.longitude, position.coords.latitude);
    }

    const geoError = () => {
        setTemperature("-");
    }

    const getWeatherData = (long, lat) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9b8fbc52a5e4d0c87d96ed277b0822a8')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const celsiusDegree = transfornTemperature(data.main.temp);
                setTemperature(celsiusDegree);
            })
    }

    const transfornTemperature = (degreesKelvin) => {
        return Math.round(degreesKelvin - 273.15);
    }

    return (
        <section className="banner">
            <div className="banner__content">
                <p className="banner__title">Stay always tuned with planting trends</p>
                <p className="banner__text">Current temperature is: {temperature}°C</p>
                <p className="banner__text banner__text-mobile">Tips &#38; Tricks selected specially for you!</p>
                <SearchForm />
            </div>
        </section>
    )
}