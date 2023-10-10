import {useState} from 'react';

export default function FavoriteComponent(){
    const [selected, setSelected] = useState<boolean>(false);

    return(
        <div className={""} styles={{
            color: selected ? '' : ''
        }} onClick={() => setSelected(!selected)}>
            <i className="material-icons">favorite</i>
        </div>
    );
}