import { Post } from "../post/Post";
import "./Interesting.css";
import articleImg from "../../assets/img/article_image-interesting.png";
import { Subscribe } from "../subscribe/Subscribe";
import { Fragment } from "react";
import { Loader } from "../loader/Loader";

export const Interesting = () => {
    return (
        <Fragment>
            <div className="section__line" ></div>
            <h3 className="section__text">Interesting</h3>
            <section className="interesting">
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Subscribe />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Post img={articleImg} />
                <Loader />
            </section>
        </Fragment>
    )
}