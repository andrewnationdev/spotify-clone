import { useState } from 'react';

export default function FavoriteComponent() {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div className={""} styles={{
            color: selected ? '' : ''
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