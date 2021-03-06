import Header from '../../Header/header.js';
import Footer from '../../Footer/footer.js';
import Title from '../../Header/Title/title';
import Links from '../../Header/Links/links';
import Banner from '../../Content/Banner/banner';
import BestSellers from '../../Content/BestSeller/bestSellers';
import Newsletter from '../../Content/Newsletter/newsletter';
import Banner2 from '../../Content/Banner2/banner-2';
import Categories from '../../Footer/Categories/categories';
import { useSelector } from 'react-redux';
import {useEffect, useCallback} from 'react';
import IndexCSS from './index.css';

const Index = () => {
    const newsletterDisplay = useSelector( state => state.newsletter);
    const newsletterelem = (newsletterDisplay === 1)?"":<Newsletter classsName="newsletter"/>;

    const getResponse = useCallback(async function getResponse(){
        const response = fetch('http://localhost:8080/api/user/login', {
            method:'POST',
            body: {
                user: "Victor"
            }
        }).then(res => res.json());
        console.log(response);
    });
    useEffect(() => {
        getResponse();
    });
    return (
            <div className = "container" style={IndexCSS}>
                {newsletterelem}
                <div className="App">
                <Header/>
                <span className="line-title"></span>
                <Title/>
                <Links/>
                </div>
                <Banner/>
                <div className = "App">
                <BestSellers/>
                </div>
                <Banner2/>
                <div className = "App">
                    <Categories/>
                    <Footer/>
                </div>
            </div>
    );
}

export default Index;
