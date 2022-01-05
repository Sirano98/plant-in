import { Post } from "../post/Post";
import "./Top.css";
import topImg from "../../assets/img/article_image-top.png"
import { Fragment } from "react";
import { Loader } from "../loader/Loader";

export const Top = () => {
    return (
        <Fragment>
            <div className="section__line" ></div>
            <h3 className="section__text">TOP of the Day </h3>
            <section className="top">
                <Post img={topImg} />
                <Loader />
                {/* <Post img={topImg} /> */}
            </section>
        </Fragment>
    )
}