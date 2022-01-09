import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import "./Banner.css";

export const Banner = () => {
    const [temperature, setTemperature] = useState("-");
    const { changeSearchValue, filterItems, searchValue } = useContext(Context);

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
                <form className="input__wrapper" onSubmit={(e) => e.preventDefault()} autoComplete="off">
                    <input className="banner__input" id="banner__input" placeholder="Search" onChange={(e) => changeSearchValue(e.target.value)} value={searchValue} />
                    <button className="search__button search__button-banner" type="submit">
                        <svg viewBox="0 0 19 19" fill="none" className="search__icon">
                            <path d="M13 13L18 18M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#C5D1DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    )
}