import '../../styles/player.css'

export default function ButtonIconComponent(props: {
    isPlayButton?: boolean,
    icon: string,
    smaller?: boolean,
    isVolumeButton?: boolean
}) {
    return (
        <div className={`
                ${props.smaller ? 'button-icon-smaller' : 'button-icon-large'}
                ${props.isPlayButton ? 'play-button-white' : ''}
            `}>
            <i className="material-icons">{props.icon}</i>
            {isVolumeButton && <>
                <i clasName="material-icons">{props.icon}</i>
                <input type="range" name="" id="" />
            </>}
        </div>
    )
}