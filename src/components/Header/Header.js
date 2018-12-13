import React from 'react';
import style from './Header.css';
import {Link, NavLink} from "react-router-dom";
import {FaHome} from 'react-icons/fa'

const header = () => {
    return (
        <div className={style.Header}>
            <div>
                <Link to="/"><FaHome/></Link>
            </div>
            <nav>
                <ul className={style.ItemsList}>
                    <li className={style.Item}>
                        <NavLink to="/create-script">Create script</NavLink>
                    </li>
                    <li className={style.Item}>
                        <NavLink to="/scripts">Scripts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default header;