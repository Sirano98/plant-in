import { Fragment, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { NotFound } from '../pages/404-page/404-page';
import { MainPage } from '../pages/main-page/main-page';
import { Context } from "../../context";
import PostService from "../../services/post-service";
import './App.css';

function App() {

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
        <Fragment>
            <Context.Provider value={{ changeSearchValue, filterItems, searchValue, visiblePosts, load }}>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            path="/"
                            element={<MainPage />}
                            exatc
                        />
                        <Route
                            path="/not-found"
                            element={<NotFound />}
                        />
                    </Routes>
                </div>
            </Context.Provider>
            <Footer />
        </Fragment>
    );
}

export default App;