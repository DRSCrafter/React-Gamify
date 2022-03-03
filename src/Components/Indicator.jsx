import React from "react";
import DotIndicator from '@mui-treasury/components/indicator/dot';

export default function Indicator({index, onSwitch}){
    return (
        <div>
            {[0, 1, 2, 3, 4].map(i => (
                <DotIndicator
                    key={i}
                    active={i === index}
                    onClick={() => onSwitch(i)}
                />
            ))}
        </div>
    );
}