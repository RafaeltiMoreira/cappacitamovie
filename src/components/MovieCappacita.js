import React, { useState } from 'react';
import './MovieCappacita.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow  = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listTotal = items.results.length * 150;
        if ((window.innerWidth - listTotal) > x) {
            x = (window.innerWidth - listTotal) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movie">
            <h2>{ title }</h2>

            <div className="movie-before" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movie-next" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movie-listarea">
                <div className="movie-list" style={{ 
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}>

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movie-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}