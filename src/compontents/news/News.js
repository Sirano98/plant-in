import { Post } from "../post/Post";
import "./News.css";
import img from "../../assets/img/article_image-news.png"
import { Fragment } from "react";
import { Loader } from "../loader/Loader";

export const News = () => {
    return (
        <Fragment>
            <div className="news__flag">New</div>
            <section className="news">
                {/* <article className="post">
                    <div className="img__wrapper">
                        <img src={img} alt="post img" className="post__img" />
                    </div>
                    <div className="post__content">
                        <p className="post__date">{"Feb " + 23} · {8} min read</p>
                        <p className="post__title">{"Tips & Tricks For Cutting"}</p>
                        <p className="post__text">Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or...</p>
                    </div>
                </article> */}
                <Loader />
            </section>
        </Fragment>
    )
}