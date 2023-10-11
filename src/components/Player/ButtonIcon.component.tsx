import '../../styles/player.css'
import {useState} from 'react';

export default function ButtonIconComponent(props: {
    isPlayButton?: boolean,
    icon: string,
    smaller?: boolean,
    isVolumeButton?: boolean
}) {
    const [volume, setVolume] = useState<number>(100);

    const getIconFromVolume = (volume: number) => {
        if(volume == 0){
            return 'volume_off'
        } else if(volume > 0 && volume < 25){
            return 'volume_down'
        } else if(volume > 25 && volume < 75){
            return 'volume_down'
        } else if(volume > 75){
            return 'volume_on'
        }
    }

    return (
        <div className={`
                ${props?.smaller ? 'button-icon-smaller' : 'button-icon-large'}
                ${props?.isPlayButton ? 'play-button-white' : ''}
            `}>
            {props?.isVolumeButton ? <>
                <i className="material-icons">{getIconFromVolume(volume)}</i>
                
                <div className="track-progressbar volume-bar">
                        <div style={{
                            width: '75%',
                            backgroundColor: '#fff',
                            height: '5px'
                        }}></div>
                    </div>
            </> : <i className="material-icons">{props?.icon}</i>}
        </div>
    )
}