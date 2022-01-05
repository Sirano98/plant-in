import "./Banner.css";

export const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__content">
                <p className="banner__title">Stay always tuned with planting trends</p>
                <p className="banner__text">Current temperature is: {24}°C</p>
                <p className="banner__text banner__text-mobile">Tips &#38; Tricks selected specially for you!</p>
                <div className="input__wrapper">
                    <input className="banner__input" id="banner__input" placeholder="Search" />
                    <button className="search__button search__button-banner">
                        <svg viewBox="0 0 19 19" fill="none" className="search__icon">
                            <path d="M13 13L18 18M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#C5D1DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}