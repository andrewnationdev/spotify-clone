import '../../styles/player.css'
import { useState } from 'react';

export default function ButtonIconComponent(props: {
    isPlayButton?: boolean,
    icon: string,
    smaller?: boolean,
    isVolumeButton?: boolean,
    isBootstrap?: boolean,
    onClick?: () => void
}) {
    const [volume, setVolume] = useState<number>(100);

    const getIconFromVolume = (volume: number) => {
        if (volume == 0) {
            return <i className={`bi bi-volume-mute`}></i>
        } else if (volume > 0 && volume < 25) {
            return <i className={`bi bi-volume-off`}></i>
        } else if (volume > 25 && volume < 75) {
            return <i className={`bi bi-volume-down`}></i>
        } else if (volume > 75) {
            return <i className={`bi bi-volume-up`}></i>
        }
    }

    return (
        <div className={`
                ${props?.smaller ? 'button-icon-smaller' : 'button-icon-large'}
                ${props?.isPlayButton ? 'play-button-white' : ''}
            `} onClick={() => { if (props!.onClick) props!.onClick() }}>
            {props?.isVolumeButton ? <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }} className={"button-icon-smaller"}>
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