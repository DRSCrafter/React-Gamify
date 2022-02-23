import React from "react";
import BlurryDiv from './BlurryDiv';

export default function BlurryIcon({size, icon, count}) {
    const iconRadius = size / 2;

    const iconSize = size * 3 / 5;

    const tagSize = size * 2 / 5;
    const tagRadius = size * 1 / 5;
    const tagDistance = size * (-3 / 50);

    return (
        <div style={{width: size, height: size, position: 'relative', cursor: 'pointer'}}>
            <BlurryDiv width={size} height={size} borderRadius={iconRadius}>
                <img style={{color: 'white', width: iconSize, height: iconSize}} src={icon} alt={'User'}/>
            </BlurryDiv>
            {count !== 0 && <div style={{
                width: tagSize,
                height: tagSize,
                borderRadius: tagRadius,
                backgroundColor: 'red',
                position: 'absolute',
                bottom: tagDistance,
                right: tagDistance,
                fontFamily: "B Nazanin",
                color: "white",
                textAlign: 'center',
            }}>
                {count}
            </div>}
        </div>

    );
}