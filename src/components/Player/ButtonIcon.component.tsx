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
            return <i className="material-icons">volume_mute</i>
        } else if(volume > 0 && volume < 25){
            return <i className="material-icons">volume_off</i>
        } else if(volume > 25 && volume < 75){
            return <i className="material-icons">volume_on</i>
        } else if(volume > 75){
            return <i className="material-icons">volume_up</i>
        }
    }

    return (
        <div className={`
                ${props?.smaller ? 'button-icon-smaller' : 'button-icon-large'}
                ${props?.isPlayButton ? 'play-button-white' : ''}
            `}>
            {props?.isVolumeButton ? <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                
                
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