import '../App.css';
import React from 'react';
import chevronLeft from '../Assets/chevron-left.svg';
import chevronRight from '../Assets/chevron-right.svg';
import Indicator from "../Components/Indicator";
import SearchBar from "../Components/SearchBar";
import BlurryIcon from "../Components/BlurryIcon";
import Account from '../Assets/user.svg'
import Bag from '../Assets/bag-shopping.svg'
import NavBar from "../Components/NavBar";
import LightSwitch from "../Components/LightSwitch";

import Logo from '../Assets/Logo.svg';
import PS4 from '../Assets/PS4.svg';
import PS5 from '../Assets/PS5.svg';
import Switch from '../Assets/Switch.svg';
import Xbox from '../Assets/XBOX.svg';
import Nintendo from '../Assets/Nintendo.svg';
import PS from '../Assets/Playstation.svg';
import Steam from '../Assets/Steam.svg';
import Origin from '../Assets/Origin.svg';
import XBOXLogo from '../Assets/XBOXL.svg';
import Chair from '../Assets/Chair.svg';
import MouseKeyboard from '../Assets/MK.svg';
import Monitor from '../Assets/Monitor.svg';

const items = [
    {
        title: 'گیفت کارت', values: [
            {name: 'Nintendo', image: Nintendo},
            {name: 'PlayStation', image: PS},
            {name: 'Steam', image: Steam},
            {name: 'Origin', image: Origin},
            {name: 'Microsoft XBOX', image: XBOXLogo},]
    },
    {
        title: 'لوازم جانبی', values: [
            {name: 'Nintendo', image: Nintendo},
            {name: 'PlayStation', image: PS},
            {name: 'Microsoft XBOX', image: XBOXLogo},
            {name: 'Gaming Chair', image: Chair},
            {name: 'Mouse & Keyboard', image: MouseKeyboard},
            {name: 'Monitor', image: Monitor}]
    },
    {
        title: 'بازی', values: [
            {name: 'Nintendo Switch', image: Switch},
            {name: 'PlayStation 5', image: PS5},
            {name: 'PlayStation 4', image: PS4},
            {name: 'Microsoft XBOX', image: Xbox},
        ]
    },
    {
        title: 'کنسول', values: [
            {name: 'Nintendo Switch', image: Switch},
            {name: 'PlayStation 5', image: PS5},
            {name: 'PlayStation 4', image: PS4},
            {name: 'Microsoft XBOX', image: Xbox},
        ]
    },
]

function Banner() {
    const [index, setIndex] = React.useState(0);

    return (
        <>
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),  url(${require(`../Assets/Wallpaper/${index}.jpg`)})`,
                backgroundSize: 'cover',
                position: 'relative',
                zIndex: 999
            }}>
                <img src={chevronLeft}
                     style={{width: 25, height: 25, position: 'absolute', left: 5, top: '50vh', cursor: 'pointer'}}
                     alt={'chevronLeft'} onClick={() => index !== 0 ? setIndex(index - 1) : null}/>
                <img src={chevronRight}
                     style={{width: 25, height: 25, position: 'absolute', right: 5, top: '50vh', cursor: 'pointer'}}
                     alt={'chevronRight'} onClick={() => index !== 4 ? setIndex(index + 1) : null}/>

                <div style={{
                    position: 'absolute',
                    top: '2vh',
                    left: '3vw',
                    fontFamily: 'Debby Script',
                    fontSize: '2.5rem',
                    color: 'white',
                }}>
                    <img style={{width: '8vw', height: '8vw'}} src={Logo} alt='logo'/>
                    <span style={{position: 'absolute', top: '5vh', marginLeft: '1vw'}}>Gamify</span>
                </div>

                <div style={{position: 'absolute', top: '4vh', right: '4vw'}}>
                    <BlurryIcon icon={Bag} count={1}/>
                </div>
                <div style={{position: 'absolute', top: '4vh', right: '8.5vw'}}>
                    <BlurryIcon icon={Account}/>
                </div>
                <div style={{position: 'absolute', top: '4vh', right: '34vw'}}>
                    <SearchBar isEnglish={false}/>
                </div>
                <div style={{position: 'absolute', left: '25vw', bottom: '20vh'}}>
                    <NavBar items={items}/>
                </div>
                <div style={{position: "absolute", left: '43vw', bottom: '20vh'}}>
                    <Indicator index={index} onSwitch={(index) => setIndex(index)}/>
                </div>
                <div style={{position: 'absolute', bottom: '4vh', right: '3vw'}}>
                    <LightSwitch/>
                </div>
            </div>
        </>
    );
}

export default Banner;