import { useContext } from "react";
import { Context } from "../../context";
import "./Search-form.css";

export const SearchForm = () => {
    const { changeSearchValue, searchValue } = useContext(Context);

    return (
        <form className="input__wrapper" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <input className="search__input banner__input-header" id="banner__input" placeholder="Search" onChange={(e) => changeSearchValue(e.target.value)} value={searchValue} />
            <button className="search__button search__button-banner" type="submit">
                <svg viewBox="0 0 19 19" fill="none" className="search__icon">
                    <path d="M13 13L18 18M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#C5D1DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    )
}