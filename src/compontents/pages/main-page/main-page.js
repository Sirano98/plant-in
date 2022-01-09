import { Fragment, useState, useEffect } from 'react';
import { Navigation } from '../../navigation/Navigation';
import { Banner } from '../../banner/Banner';
import { News } from '../../news/News';
import { Top } from '../../top/Top';
import { Interesting } from '../../interesting/Interesting';
import { Context } from "../../../context";
import PostService from "../../../services/post-service";

export const MainPage = () => {

    const postService = new PostService();
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState([]);
    const [load, setLoad] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const changeSearchValue = (value) => {
        setSearchValue(value);
    }

    useEffect(() => {
        if (load) {
            getData();
        }
    }, [load])

    useEffect(() => {
        filterItems();
    }, [posts, searchValue])

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
            .finally(() => setLoad(() => false))
    }

    const filterItems = () => {
        if (searchValue.trim()) {
            setVisiblePosts(posts.filter(({ title }) => title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))

        } else {
            setVisiblePosts(posts);
        }
    }

    return (
        <Context.Provider value={{ changeSearchValue, filterItems, searchValue }}>
            <Fragment>
                <Navigation />
                <main>
                    <Banner />
                    {
                        searchValue
                            ? null
                            : <Fragment><News /><Top /></Fragment>
                    }
                    <Interesting posts={visiblePosts} load={load} />
                </main>
            </Fragment>
        </Context.Provider>
    )
}