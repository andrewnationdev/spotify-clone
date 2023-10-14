import { useState } from 'react';

export default function FavoriteComponent() {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div className={""} style={{
            color: selected ? '#71d962' : '#a7a7a7',
            fontSize: '1.15rem'
        }} onClick={() => setSelected(!selected)}>
            {selected 
                ? 
                <i className="material-icons">favorite</i> 
                : 
                <i className="material-icons">favorite_border</i>
            }
        </div>
    );
}