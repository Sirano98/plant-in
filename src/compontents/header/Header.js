import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <nav className="header__nav">
                        <a href="#" className="nav__link">Discover</a>
                        <a href="#" className="nav__link">My Plants</a>
                        <a href="#" className="nav__link">Diseases</a>
                        <a href="#" className="nav__link">Blog</a>
                        <a href="#" className="nav__link">FAQ</a>
                        <a href="#" className="nav__link">Contact Us</a>
                    </nav>
                    <div className="header__block">
                        <button className="header__search">
                            <svg viewBox="0 0 19 19" fill="none" className="search__icon">
                                <path d="M13 13L18 18M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#C5D1DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="header__user">
                            <svg className="user__icon" viewBox="0 0 28 28" fill="none">
                                <g clipPath="url(#clip0_1864_3)">
                                    <circle cx="14" cy="14" r="12.6" fill="#F1F2F6" stroke="#E0E7F1" strokeWidth="1.2" />
                                    <ellipse cx="14" cy="25.5" rx="11" ry="9.5" fill="#ADB8C8" />
                                    <circle cx="14" cy="10" r="4" fill="#ADB8C8" />
                                </g>
                                <path d="M14 24.8C8.03533 24.8 3.2 19.9647 3.2 14H0.8C0.8 21.2902 6.70984 27.2 14 27.2V24.8ZM24.8 14C24.8 19.9647 19.9647 24.8 14 24.8V27.2C21.2902 27.2 27.2 21.2902 27.2 14H24.8ZM14 3.2C19.9647 3.2 24.8 8.03533 24.8 14H27.2C27.2 6.70984 21.2902 0.8 14 0.8V3.2ZM14 0.8C6.70984 0.8 0.8 6.70984 0.8 14H3.2C3.2 8.03533 8.03533 3.2 14 3.2V0.8Z" fill="#C5D1DB" />
                                <defs>
                                    <clipPath id="clip0_1864_3">
                                        <path d="M2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14Z" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};