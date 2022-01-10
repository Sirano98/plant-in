import { Post } from "../post/Post";
import { Subscribe } from "../subscribe/Subscribe";
import React, { Fragment } from "react";
import { Loader } from "../loader/Loader";
import "./Interesting.css";

export const Interesting = React.memo(({ posts, load }) => {
    let order = 0;

    const showPosts = (posts) => {
        return posts.map(({ img, date, time, title, text }, index) => {
            order = 1 + index;
            return <Post img={img} date={date} time={time} title={title} text={text} key={order} number={order} />
        })
    }

    return (
        <Fragment>
            <div className="section__line" ></div>
            <h3 className="section__text">Interesting</h3>
            <section className="interesting">
                <Subscribe />
                {showPosts(posts)}
                {load ? <Fragment> <Loader number={order} /><Loader number={order} /><Loader number={order} /> </Fragment> : null}
            </section>
        </Fragment>
    )
});