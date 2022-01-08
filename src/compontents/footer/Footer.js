import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {

    const [active, setActive] = useState(false);

    return (
        <footer className={`footer ${active ? 'footer-open' : ''}`}>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__flag" onClick={() => setActive((state) => !state)}>
                        <svg viewBox="0 0 7 12" className={`flag__icon ${active ? 'flag__icon-open' : ''}`}>
                            <path d="M1.33333 0L7 6L1.33333 12L1.43051e-06 10.5882L4.33333 6L0 1.41177L1.33333 0Z" />
                        </svg>
                    </div>
                    <ul className="footer__list">
                        <li className="list__item"><NavLink className="footer__link" to="/not-found">Terms of Service</NavLink></li>
                        <li className="list__item"><NavLink className="footer__link" to="/not-found">Privacy Policy</NavLink></li>
                        <li className="list__item"><NavLink className="footer__link" to="/not-found">Subscription Policy</NavLink></li>
                    </ul>
                    <p className="footer__text">©Copyright  © 2020 PlantIn. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}