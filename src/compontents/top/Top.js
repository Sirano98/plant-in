import { Post } from "../post/Post";
import { Fragment, useState, useEffect } from "react";
import { Loader } from "../loader/Loader";
import PostService from "../../services/post-service";
import "./Top.css";

export const Top = () => {

    const postService = new PostService();
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        postService.getTopPosts().then(res => {
            setPosts([...posts, ...res])
            setLoad(false)
        });
    }, [])


    return (
        <Fragment>
            <div className="section__line" ></div>
            <h3 className="section__text">TOP of the Day </h3>
            <section className="top">
                {
                    load
                        ? <Fragment><Loader /><Loader /></Fragment>
                        : posts.map(({ img, date, time, title, text, id }, index) => {
                            return <Post img={img} date={date} time={time} title={title} text={text} key={id + index} />
                        })
                }
            </section>
        </Fragment>
    )
}