import { Post } from "../post/Post";
import { Subscribe } from "../subscribe/Subscribe";
import { Fragment, useState, useEffect } from "react";
import { Loader } from "../loader/Loader";
import PostService from "../../services/post-service";
import "./Interesting.css";

export const Interesting = () => {

    const postService = new PostService();
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(true);
    let order = 0;

    useEffect(() => {
        if (load) {
            getData();
        }
    }, [load])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    const scrollHandler = (e) => {
        let scroll = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if (scroll > 50 && scroll < 100) {
            setLoad(true)
        }
    }

    const getData = () => {
        return postService.getInterestingPosts()
            .then(res => {
                setPosts([...posts, ...res]);
            })
            .finally(() => setLoad(false));
    }

    const showPosts = () => {
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
                {showPosts()}
                {load ? <Fragment> <Loader number={order} /><Loader number={order} /><Loader number={order} /> </Fragment> : null}
            </section>
        </Fragment>
    )
}