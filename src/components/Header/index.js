import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://fontmeme.com/permalink/210911/c5b9725259d3da34841f0aeec571c54b.png" alt="Cappacita Movie"/>
                </a>
            </div>
        </header>
    );
}