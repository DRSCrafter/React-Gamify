import '../App.css';
import React from "react";
import magnifyingGlass from '../Assets/magnifying-glass.svg';
import BlurryDiv from "./BlurryDiv";

export default function SearchBar({onClick, width, height, isEnglish}) {
    const size = height / 2;
    const searchWidth = width - height;

    return (
        <BlurryDiv width={width} height={height} borderRadius={size}>
                    <span style={{width: searchWidth, height: height, paddingRight: 20, color: '#ffffff'}}>
                        <input style={{
                            width: '100%',
                            height: '100%',
                            background: 'none',
                            outline: 'none',
                            fontSize: 16,
                            border: 0
                        }} className={'input ' + `${isEnglish ? 'input--english' : 'input--farsi'}`}
                               placeholder={'میان محصولات ما جستجو کنید'}/>
                    </span>
            <img onClick={onClick}
                 style={{color: 'white', width: size, height: size, paddingRight: 13, cursor: 'pointer'}}
                 src={magnifyingGlass} alt={'Glass'}/>
        </BlurryDiv>
    );
}