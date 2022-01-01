import "./Banner.css";
import bannerImg from "../../assets/img/bannerImg.png";

export const Banner = () => {
    return (
        <div className="container">
            <section className="banner">
                <div className="banner__content">
                    <p className="banner__title">Stay always tuned with planting trends</p>
                    <p className="banner__text">Current temperature is: {24}°C</p>
                    <input className="banner__input" placeholder="Search" />
                </div>
                <img src={bannerImg} alt="nature" />
            </section>
        </div>
    )
}