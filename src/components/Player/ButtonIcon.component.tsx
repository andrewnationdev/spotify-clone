import '../../styles/player.css'

export default function ButtonIconComponent(props: {
    isPlayButton?: boolean,
    icon: string,
    smaller?: boolean,
    isVolumeButton?: boolean
}) {
    return (
        <div className={`
                ${props?.smaller ? 'button-icon-smaller' : 'button-icon-large'}
                ${props?.isPlayButton ? 'play-button-white' : ''}
            `}>
            {props?.isVolumeButton ? <>
                <i className="material-icons">{props?.icon}</i>
                <input type="range" name="" id="" />
            </> : <i className="material-icons">{props?.icon}</i>}
        </div>
    )
}