import "./Loader.css";

export const Loader = ({ number }) => {
    return (
        <div className="loader" style={{ order: number ? number : "" }}>
            <span className="loader__img"></span>
            <div className="loader__wrapper">
                <span className="loader__date"></span>
                <span className="loader__title"></span>
                <span className="loader__text"></span>
            </div>
        </div>
    )
}