import "./Post.css";

export const Post = ({ img }) => {
    return (
        <article className="post">
            <div className="img__wrapper">
                <img src={img} alt="post img" className="post__img" />
            </div>
            <div className="post__content">
                <p className="post__date">{"Feb " + 23} · {8} min read</p>
                <p className="post__title">Professional Repot</p>
                <p className="post__text">Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...</p>
            </div>
        </article>
    )
}