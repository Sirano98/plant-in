import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="list__item"><a href="#" className="footer__link">Terms of Service</a></li>
                <li className="list__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                <li className="list__item"><a href="#" className="footer__link">Subscription Policy</a></li>
            </ul>
            <p className="footer__text">©Copyright  © 2020 PlantIn. All rights reserved</p>
        </footer>
    )
}