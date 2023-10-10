import {useState} from 'react';

export default function FavoriteComponent(){
    const [selected, setSelected] = useState<boolean>(false);

    return(
        <div className={""}>
            <i className="material-icons">favorite</i>
        </div>
    );
}