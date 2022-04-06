import React from "react";

function Availabilty({isAvailable}) {
    return (
        <div style={{
            position: 'absolute',
            fontFamily: 'Segoe UI Light',
            fontSize: 10,
            padding: 3,
            top: 10,
            right: 15,
            border: `${isAvailable ? '1px solid green' : '1px solid red'}`,
            // borderColor: `${isAvailable ? 'green' : 'red'}`,
            borderRadius: 5,
            color: `${isAvailable ? 'green' : 'red'}`
        }}>{isAvailable ? 'موجود' : 'ناموجود'}
        </div>
    );
}

export default Availabilty;