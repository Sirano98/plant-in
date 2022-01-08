import { NavLink } from "react-router-dom";
import "./404-page.css";

export const NotFound = () => {
    return (
        <section className="notFound">
            <h1 className="notFound__title">404</h1>
            <h2 className="notFound__subtitle">Oops! This Page Could Not Be Found</h2>
            <p className="notFound__text">Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
            <NavLink className="notFound__button" to="/">Go To Homepage</NavLink>
        </section>
    )
}