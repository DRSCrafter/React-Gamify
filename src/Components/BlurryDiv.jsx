import React from "react";
import BackdropFilter from 'react-backdrop-filter';

function BlurryDiv({children, width, height, style}) {
    return (
        <div style={[{backgroundImage: `url(${require('./Assets/nature.jpg')})`, width: '100vw', height: '100vh'}, style]}>
            <div style={{width: {width}, height: {height}, borderRadius: 20, overflow: "hidden", position: "absolute"}}>
                <BackdropFilter filter={"blur(10px) sepia(50%)"}>
                    <div
                        style={{
                            display: 'inline-block',
                            minWidth: {width},
                            maxWidth: {width},
                            minHeight: {height},
                            maxHeight: {height}
                        }}>
                        {children}
                    </div>
                </BackdropFilter>
            </div>
        </div>
    );
}

export default BlurryDiv;