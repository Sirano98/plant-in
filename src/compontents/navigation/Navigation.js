import "./Navigation.css";

export const Navigation = () => {
    return (
        <div className="navigation">
            <span className="navigation__text">Home</span>
            <svg className="navigation__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.3333 6L16 12L10.3333 18L9 16.5882L13.3333 12L9 7.41177L10.3333 6Z" fill="#D8E1ED" />
            </svg>
            <span className="navigation__text">Blog</span>
            <svg className="navigation__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.3333 6L16 12L10.3333 18L9 16.5882L13.3333 12L9 7.41177L10.3333 6Z" fill="#D8E1ED" />
            </svg>

            <svg className="navigation__icon-mobile" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.3333 6L16 12L10.3333 18L9 16.5882L13.3333 12L9 7.41177L10.3333 6Z" fill="#D8E1ED" />
            </svg>
            <span className="navigation__text navigation__text-mobile">Home</span>
        </div>
    )
}