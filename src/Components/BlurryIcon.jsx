import React from "react";
import BlurryDiv from './BlurryDiv';

export default function BlurryIcon({icon, count = 0}) {

    return (
        <div style={{width: '3.5vw', height: '3.5vw', position: 'relative', cursor: 'pointer'}}>
            <BlurryDiv width={'3.5vw'} height={'3.5vw'} borderRadius={200}>
                <img style={{color: 'white', width: '2vw', height: '2vw'}} src={icon} alt={'User'}/>
            </BlurryDiv>
            {count !== 0 && <div style={{
                width: '1.2vw',
                height: '1.2vw',
                borderRadius: 50,
                backgroundColor: 'red',
                position: 'absolute',
                bottom: -3,
                right: -3,
                fontFamily: "B Nazanin",
                color: "white",
                textAlign: 'center',
                fontSize: '0.9vw'
            }}>
                {count}
            </div>}
        </div>

    );
}