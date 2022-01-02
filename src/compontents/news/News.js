import { Post } from "../post/Post";
import "./News.css";
import newsImg from "../../assets/img/article_image-news.png"
import { Fragment } from "react";

export const News = () => {
    return (
        <Fragment>
            <div className="news__flag">New</div>
            <section className="news">
                <Post img={newsImg} />
            </section>
        </Fragment>
    )
}