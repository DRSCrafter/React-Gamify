import React from 'react';
import Banner from "../../Components/Banner";
import News from "../../Components/News";
import ItemBox from "../../Components/ItemBox";
import Footer from "../../Components/footer";

const data = [
    {
        image: require('./Assets/chair.png'),
        title: "صندلی گیمینگ باحال خارق العاده",
        price: "13,000,000",
        isAvailable: true,
    },
    {
        image: require('./Assets/chair.png'),
        title: "صندلی گیمینگ باحال خارق العاده",
        price: "13,000,000",
        isAvailable: true,
    },
    {
        image: require('./Assets/chair.png'),
        title: "صندلی گیمینگ باحال خارق العاده",
        price: "13,000,000",
        isAvailable: true,
    },
    {
        image: require('./Assets/chair.png'),
        title: "صندلی گیمینگ باحال خارق العاده",
        price: "13,000,000",
        isAvailable: true,
    },
    {
        image: require('./Assets/chair.png'),
        title: "صندلی گیمینگ باحال خارق العاده",
        price: "13,000,000",
        isAvailable: true,
    },
]

function HomePage() {

    return (
        <>
            <Banner/>
            <News/>
            <ItemBox data={data} title="بازی ها"/>
            <ItemBox data={data} title="کنسول ها"/>
            <ItemBox data={data} title="لوازم جانبی"/>
            <Footer/>
        </>
    );
}

export default HomePage;
