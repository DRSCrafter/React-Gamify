import React from 'react';
import Availability from "./Availability";

function ProductItem({image, title, price, isAvailable = false}) {
    return (
        <div style={{padding: 40}}>
            <div style={{
                width: '19vh',
                height: '28vh',
                border: '1px solid rgba(0, 0, 0, 0.5)',
                borderRadius: 15,
                padding: 10,
                paddingBottom: 20,
                display: "flex",
                position: 'relative',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Availability isAvailable={isAvailable}/>
                <img src={image} alt={'Product Image'} style={{width: "16vh", height: "22vh"}}/>
                <p style={{marginBottom: 4, fontSize: 10, textAlign: 'center'}}>{title}</p>
                <p style={{fontSize: 18, fontFamily: 'Segoe UI Light', marginBottom: 4, direction: 'rtl'}}>{price}
                    تومان
                </p>
            </div>
        </div>
    );
}

export default ProductItem;
