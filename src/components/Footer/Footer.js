import React from 'react';
import style from './Footer.css';

const footer = () => {
    return (
        <footer className={style.Footer}>
            <a href="http://pragmasoft.com.ua">
                © 2002 Pragmasoft. All rights reserved
            </a>
            <a href="http://pragmasoft.com.ua/en/contactus">
                Contact us
            </a>
        </footer>
    );
};

export default footer;