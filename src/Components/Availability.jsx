import React from "react";

function Availabilty({isAvailable, styles}) {
    return (
        <div style={{
            ...styles,
            border: `${isAvailable ? '1px solid green' : '1px solid red'}`,
            color: `${isAvailable ? 'green' : 'red'}`
        }}>{isAvailable ? 'موجود' : 'ناموجود'}
        </div>
    );
}

export default Availabilty;