import '../../styles/player.css';

export default function PlayerComponent(){
    return(
        <div className="player-container">
            <div className="player-left-area"></div>
            <div className="player-center-area">
                <div>
                    <ButtonIconComponent isPlayButton={false}
                        icon={"shuffle"}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={"skip_previous"}
                    />
                    <ButtonIconComponent isPlayButton={true}
                        icon={"play_circle-filled"}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={"skip_next"}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={"repeat"}
                    />
                </div>
            </div>
            <div className="player-right-area"></div>
        </div>
    );
}