import '../App.css';
import React from "react";
import magnifyingGlass from '../Assets/magnifying-glass.svg';
import BlurryDiv from "./BlurryDiv";

export default function SearchBar({onClick = () => console.log('Clicked!'), isEnglish = false}) {

    return (
        <BlurryDiv width={'20vw'} height={'3.5vw'} borderRadius={'1.75vw'}>
                    <span style={{width: '16.5vw', height: '3.5vw', paddingRight: 20, color: '#ffffff'}}>
                        <input style={{
                            width: '100%',
                            height: '100%',
                            background: 'none',
                            outline: 'none',
                            fontSize: '1vw',
                            border: 0
                        }} className={'input ' + `${isEnglish ? 'input--english' : 'input--farsi'}`}
                               placeholder={'میان محصولات ما جستجو کنید'}/>
                    </span>
            <img onClick={onClick}
                 style={{width: '1.75vw', height: '1.75vw', paddingRight: 13, cursor: 'pointer'}}
                 src={magnifyingGlass} alt={'Glass'}/>
        </BlurryDiv>
    );
}