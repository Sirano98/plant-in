import { Post } from "../post/Post";
import { Fragment, useState, useEffect } from "react";
import { Loader } from "../loader/Loader";
import PostService from "../../services/post-service";
import "./News.css";

export const News = () => {

    const postService = new PostService();
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        postService.getNews().then(res => {
            setPosts([...posts, ...res])
            setLoad(false)
        })
    }, [])

    return (
        <Fragment>
            <div className="news__flag">New</div>
            <section className="news">
                {
                    load
                        ? <Loader />
                        : posts.map(({ img, date, time, title, text, id }, index) => {
                            return <Post img={img} date={date} time={time} title={title} text={text} key={id + index} />
                        })
                }
            </section>
        </Fragment>
    )
}