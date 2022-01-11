import { Fragment, useContext } from 'react';
import { Navigation } from '../../navigation/Navigation';
import { Banner } from '../../banner/Banner';
import { News } from '../../news/News';
import { Top } from '../../top/Top';
import { Interesting } from '../../interesting/Interesting';
import { Context } from "../../../context";

export const MainPage = () => {

    const { searchValue, visiblePosts, load } = useContext(Context);

    return (
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
    )
}