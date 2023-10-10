import '../../styles/player.css'

export default function ButtonIconComponent(props: {
    isPlayButton: boolean,
    icon: string
}) {
    return (
        <div className={`button-icon-large ${props.isPlayButton ? 'play-button-white' : ''}`}>
            <i className="material-icons">{props.icon}</i>
        </div>
    )
}