import React from 'react';
import Availability from "./Availability";

function ProductItem({image, title, price, isAvailable = false, styles}) {
    return (
        <div
            className="scale-container shadow-container"
            style={styles.container}>
            <Availability isAvailable={isAvailable} styles={styles.tag}/>
            <img src={image} alt={'Product Image'} style={styles.image}/>
            <p style={styles.title}>{title}</p>
            <p style={styles.price}>{price}
                تومان
            </p>
        </div>
);
}

export default ProductItem;
