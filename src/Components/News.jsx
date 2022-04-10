import '../App.css';
import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";

function News() {
    const mediaMatch = window.matchMedia('(max-width: 768px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener("change", handler);
        return () => mediaMatch.removeEventListener("change", handler);
    });

    return (
        <>
            <div style={styles.grid(matches)}>
                <Button variant="outlined" sx={styles.btn(matches)}>
                    دیدن همه
                </Button>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000000',
                    direction: 'rtl',
                    gridArea: matches ? '1/2/2/3' : '1/3/2/4',
                }}>اخبار</span>
                <a href="#" style={{
                    ...styles.gridItem,
                    gridArea: '2/1/7/3'
                }}>
                    <img src={require("./Assets/news (1).png")} alt='news'
                         style={{width: '100%', height: '100%', zIndex: -1}}/>
                    <span style={{
                        ...styles.newsTitle(matches),
                        right: matches ? '2vw' : '1vw',
                        bottom: matches ? '8vw' : '4vw',
                        fontSize: matches ? '3vw' : '1.5vw',
                    }}>لویجی صلاخی شد!</span>
                    <span style={{
                        ...styles.newsTime(matches),
                        right: matches ? '2vw' : '1vw',
                        bottom: matches ? '4vw' : '2vw',
                        fontSize: matches ? '1.6vw' : '0.8vw',
                    }}>2 ساعت پیش</span>
                </a>
                <a href="#" style={{
                    ...styles.gridItem,
                    gridArea: '7/1/10/2',
                }}>
                    <img src={require("./Assets/news (3).jpg")} alt='news'
                         style={{width: '100%', height: '100%', zIndex: -1}}/>
                    <span
                        style={styles.newsTitle(matches)}>لویجی صلاخی شد!</span>
                    <span style={styles.newsTime(matches)}>2 ساعت پیش</span>
                </a>
                <a href="#" style={{
                    ...styles.gridItem,
                    gridArea: '7/2/10/3',
                }}>
                    <img src={require("./Assets/news (4).jpg")} alt='news'
                         style={{width: '100%', height: '100%', zIndex: -1}}/>
                    <span
                        style={styles.newsTitle(matches)}>لویجی صلاخی شد!</span>
                    <span style={styles.newsTime(matches)}>2 ساعت پیش</span>
                </a>
                {!matches &&
                <>
                    <a href="#" style={{
                        ...styles.gridItem,
                        gridArea: '2/3/5/4',
                    }}>
                        <img src={require("./Assets/news (1).jpg")} alt='news'
                             style={{width: '100%', height: '100%', zIndex: -1}}/>
                        <span
                            style={styles.newsTitle(matches)}>لویجی صلاخی شد!</span>
                        <span style={styles.newsTime(matches)}>2 ساعت پیش</span>
                    </a>
                    <a href="#" style={{
                        ...styles.gridItem,
                        gridArea: '5/3/8/4',
                    }}>
                        <img src={require("./Assets/news (2).jpg")} alt='news'
                             style={{width: '100%', height: '100%', zIndex: -1}}/>
                        <span
                            style={styles.newsTitle(matches)}>لویجی صلاخی شد!</span>
                        <span style={styles.newsTime(matches)}>2 ساعت پیش</span>
                    </a>
                    <a href="#" style={{
                        ...styles.gridItem,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gridArea: '8/3/10/4',
                    }}>
                        <img style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            zIndex: -1,
                            filter: 'brightness(50%)'
                        }} src={require("./Assets/nature.jpg")} alt="news"/>
                        <span style={{fontSize: '1.5vw'}}>اخبار بیشتر</span>
                    </a>
                </>}
            </div>
        </>
    );
}

const styles =
    {
        grid: matches => ({
            fontFamily: 'Segoe UI Light',
            marginLeft: 30,
            marginTop: 30,
            display: 'grid',
            width: '70%',
            height: '80vh',
            gridTemplateRows: 'repeat(9, 1fr)',
            gridTemplateColumns: matches ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gridGap: '1vw',
            color: 'white',
        }),
        btn: matches => ({
            fontSize: matches ? '2vw' : '1.1vw',
            fontFamily: 'Segoe UI Light',
            borderRadius: 50,
            backgroundColor: 'white',
            boxShadow: '0 0 4px #777777',
            border: 0,
            color: '#000000',
            gridArea: '1/1/1/2',
            width: matches ? '16vw' : '8.2vw',
            height: '75%'
        })
        ,
        newsTitle: matches => ({
            position: 'absolute',
            right: matches ? '2vw' : '1vw',
            bottom: matches ? '5vw' : '2vw',
            fontSize: matches ? '2.5vw' : '1vw',
            direction: 'rtl'
        }),
        newsTime: matches => ({
            position: 'absolute',
            right: matches ? '2vw' : '1vw',
            bottom: matches ? '2vw' : '1vw',
            fontSize: matches ? '1.8vw' : '0.6vw',
            direction: 'rtl'
        }),
        gridItem: {
            display: 'block',
            color: 'white',
            textDecoration: 'none',
            position: 'relative',
        }
    }

export default News;
