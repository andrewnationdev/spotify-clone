import '../../styles/player.css'
import { useState } from 'react';

export default function ButtonIconComponent(props: {
    isPlayButton?: boolean,
    icon: string,
    smaller?: boolean,
    isVolumeButton?: boolean,
    isBootstrap?: boolean
}) {
    const [volume, setVolume] = useState<number>(100);

    const getIconFromVolume = (volume: number) => {
        if (volume == 0) {
            return <i className={`bi bi-volume-mute button-icon-smaller`}></i>
        } else if (volume > 0 && volume < 25) {
            return <i className={`bi bi-volume-off button-icon-smaller`}></i>
        } else if (volume > 25 && volume < 75) {
            return <i className={`bi bi-volume-down button-icon-smaller`}></i>
        } else if (volume > 75) {
            return <i className={`bi bi-volume-up button-icon-smaller`}></i>
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
                {getIconFromVolume(volume)}
                <div className="track-progressbar volume-bar">
                    <div style={{
                        width: '75%',
                        backgroundColor: '#fff',
                        height: '5px'
                    }}></div>
                </div>
            </div> :
                props?.isBootstrap ?
                    <i className={`bi bi-${props?.icon}`}></i> :
                    <i className="material-icons">{props?.icon}</i>
            }
        </div>
    )
}