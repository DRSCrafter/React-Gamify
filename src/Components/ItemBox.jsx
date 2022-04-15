import '../App.css';
import '../Styles/Style.css'
import React, {useEffect, useState} from 'react';
import ProductItem from "../Components/ProductItem";

function ItemBox({data, title}) {

    const mediaMatch = window.matchMedia('(max-width: 1024px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener("change", handler);
        return () => mediaMatch.removeEventListener("change", handler);
    });

    const shortList = data.slice(0, 3);

    const items = matches ? shortList : data;

    return (
        <>
            <div
                className="shadow-sm-container"
                style={{...Styles.container(matches), marginTop: '3vw'}}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '10%',
                    position: 'relative',
                    margin: 'auto',
                }}>
                    <span style={Styles.listTag}>{title}</span>
                </div>
                <div style={Styles.list(matches)}>
                    {items.map(item => (
                        <ProductItem
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            isAvailable={item.isAvailable}
                            styles={Styles.item(matches)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

const Styles = {
    container: matches => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: matches ? '95vw' : '80vw',
        height: matches ? '35vw' : '26vw',
        fontFamily: 'Segoe Ui Light',
        borderRadius: '4vw',
        margin: "auto",
        backgroundImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
    }),
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '90%'
    },
    listTag: {
        fontSize: '1.2vw',
        padding: 10,
        opacity: '80%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    item: matches => ({
        container: {
            width: matches ? '16vw' : '7vw',
            height: matches ? '20vw' : '13vw',
            backgroundColor: "white",
            opacity: '65%',
            border: '1px solid rgba(0, 0, 0, 0.5)',
            borderRadius: matches ? '3vw' : '2vw',
            padding: '3vw',
            display: "flex",
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',
        },
        image: {
            width: matches ? '95%' : '155%',
        },
        title: {
            fontSize: matches ? '1.25vw' : '0.6vw',
            marginBottom: matches ? -5 : 0,
            whiteSpace: 'nowrap',
            textAlign: 'center'
        },
        price: {
            fontSize: matches ? '1.8vw' : '1.1vw',
            whiteSpace: 'nowrap',
            marginBottom: 4,
            direction: 'rtl'
        },
        tag: {
            position: 'absolute',
            fontSize: matches ? '1.2vw' : '0.7vw',
            padding: 3,
            top: '0.7vw',
            right: '0.9vw',
            borderRadius: 5,
        }
    }),

}

export default ItemBox;
