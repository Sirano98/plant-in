import "./Post.css";

export const Post = ({ img, date, time, title, text, number }) => {
    return (
        <article className="post" style={{ order: number ? number : "" }}>
            <div className="img__wrapper">
                <img src={img} alt="post img" className="post__img" />
            </div>
            <div className="post__content">
                <p className="post__date">{date} · {time} min read</p>
                <p className="post__title">{title}</p>
                <p className="post__text">{text}</p>
            </div>
        </article>
    )
}