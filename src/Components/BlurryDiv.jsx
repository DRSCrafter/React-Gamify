import React from "react";
import BackdropFilter from 'react-backdrop-filter';

function BlurryDiv({children, width, height, borderRadius= 200}) {
    return (
        <div style={{
            width: width,
            height: height,
            overflow: "hidden",
            position: "absolute",
            borderRadius: borderRadius
        }}>
            <BackdropFilter filter={"blur(10px) sepia(50%)"}>
                <div
                    style={{
                        display: 'flex',
                        minWidth: width,
                        maxWidth: width,
                        minHeight: height,
                        maxHeight: height,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    {children}
                </div>
            </BackdropFilter>
        </div>
    );
}

export default BlurryDiv;