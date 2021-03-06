import "./Subscribe.css";

export const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="logo subscribe__logo">
                <svg viewBox="0 0 18 24" fill="none" className="logo__icon">
                    <path d="M9.00006 0C11.3011 1.33575 12.8418 3.34385 13.6222 5.57997C11.6364 6.54881 10.0097 8.15628 9.00006 10.1403C7.99043 8.15628 6.36374 6.54881 4.37791 5.57997C5.15831 3.34385 6.69903 1.33575 9.00006 0Z" fill="#04BF94" />
                    <path d="M0 5.71429C4.97056 5.71429 9 9.80768 9 14.8571C9 9.80768 13.0294 5.71429 18 5.71429V14.8571C18 19.9066 13.9706 24 9 24C4.02944 24 0 19.9066 0 14.8571V5.71429Z" fill="#04BF94" />
                </svg>
                <h1 className="logo__text">PlantIn</h1>
            </div>
            <p className="subscribe__title">Get unlimited access to exclusive articles</p>
            <p className="subscribe__text">Get rid of limits and read everything you wish</p>
            <button className="subscribe__button">Try For Free</button>
        </section>
    )
}