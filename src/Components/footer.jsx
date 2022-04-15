import React, {useEffect, useState} from "react";
import chevronLeft from '../Assets/chevron-left.svg';
import mail from '../Assets/mail.svg';
import phone from '../Assets/phone-office.svg';
import facebook from '../Assets/facebook.svg';
import linkedin from '../Assets/Linkedin.svg';
import telegram from '../Assets/telegram.svg';
import instagram from '../Assets/instagram.svg';
import github from '../Assets/github.svg';

function Footer() {
    const mediaMatch = window.matchMedia('(max-width: 1024px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener("change", handler);
        return () => mediaMatch.removeEventListener("change", handler);
    });

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: "100vw",
                    height: "40vh",
                    background: "linear-gradient(rgba(14,36,51,1) 0%, rgba(36,32,59,1) 35%, rgba(58,25,65,1) 100%)",
                    color: 'white',
                    fontFamily: 'Segoe UI Light',
                    marginTop: '4vw'
                }}
            >
                <span style={{
                    display: 'flex',
                    height: '75%',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    direction: 'rtl'
                }}>
                    <div style={{fontSize: matches ? '2vw' : '1.3vw', marginBottom: '1.2vw'}}>تماس با ما</div>
                    <div style={{display: 'flex', alignItems: 'center', fontSize: matches ? '1.85vw' : '1.1vw'}}>
                        <img style={{width: '2.3vw', height: '2.3vw', marginLeft: '2.2vw'}} src={phone} alt="phone"/>
                        09156461700
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', fontSize: matches ? '1.85vw' : '1.1vw'}}>
                        <img style={{width: '2.3vw', height: '2.3vw', marginLeft: '2.2vw'}} src={mail} alt="mail"/>
                        Drsprogramming2020@gmail.com
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '90%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                        <img style={styles.icon(matches)} src={linkedin} alt="linkedin"/>
                        <img style={styles.icon(matches)} src={telegram} alt="telegram"/>
                        <img style={styles.icon(matches)} src={facebook} alt="facebook"/>
                        <img style={styles.icon(matches)} src={instagram} alt="instagram"/>
                        <img style={styles.icon(matches)} src={github} alt="github"/>
                    </div>
                </span>

                <span style={{
                    display: 'flex',
                    width: '25%',
                    flexDirection: 'column',
                    direction: 'rtl',
                    height: '70%',
                    justifyContent: 'space-around'
                }}>
                    <div style={{fontSize: matches ? '2vw' : '1.3vw'}}>درباره گیمیفای</div>
                    <div style={{textAlign: 'justify', fontSize: matches ? '1.8vw' : '1vw'}}>
                        گیمیفای به منظور فعالیت در زمینه ی فروش محصولات گیمینگ با بهترین کیفیت به منظور پوشش دقیق اخبار و مقالات صنعت بازی‌های رایانه‌ای در اسفندماه سال 1400 فعالیت خود را آغاز نمود. امید است که بتوانیم، بهترین‌ها را برای شما خوبان محیا کنیم. در صورت تمایل به ارتباط جهت همکاری می توانید به پیج اینستاگرام گیمیفای در دایرکت پیام دهید.
                    </div>
                </span>

                <span style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: matches ? '1.75vw' : '0.9vw',
                    direction: 'rtl',
                    height: '75%',
                    justifyContent: 'space-around'
                }}>
                    <div style={{marginBottom: '1.1vw', fontSize: matches ? '2vw' : '1.3vw'}}>حساب کاربری</div>
                    <div>
                        <img src={chevronLeft} style={styles.chevron} alt="chevron"/>
                        <a href="#" style={styles.link}>سفارشات من</a>
                    </div>
                    <div>
                        <img src={chevronLeft} style={styles.chevron} alt="chevron"/>
                        <a href="#" style={styles.link}>صورت های مالی من</a>
                    </div>
                    <div>
                        <img src={chevronLeft} style={styles.chevron} alt="chevron"/>
                        <a href="#" style={styles.link}>آدرس های من</a>
                    </div>
                    <div>
                        <img src={chevronLeft} style={styles.chevron} alt="chevron"/>
                        <a href="#" style={styles.link}> شخصی</a>
                    </div>
                    <div>
                        <img src={chevronLeft} style={styles.chevron} alt="chevron"/>
                        <a href="#" style={styles.link}>تخفیف های من</a>
                    </div>
                </span>
            </div>
        </>
    );
}

const styles = {
    chevron: {
        width: '0.6vw', height: '0.6vw', marginLeft: '1vw'
    },
    link: {
        textDecoration: 'none', color: 'white'
    },
    icon: matches => ({
        width: matches ? '3.5vw' : '2.3vw', height: matches ? '3.5vw' : '2.3vw', cursor: 'pointer'
    })
}

export default Footer;