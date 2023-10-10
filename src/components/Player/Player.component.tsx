import '../../styles/player.css';

export default function PlayerComponent(){
    return(
        <div className="player-container">
            <div className="player-left-area"></div>
            <div className="player-center-area">
                <div>
                    <ButtonIconComponent isPlayButton={false}
                        icon={""}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={""}
                    />
                    <ButtonIconComponent isPlayButton={true}
                        icon={""}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={""}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={""}
                    />
                </div>
            </div>
            <div className="player-right-area"></div>
        </div>
    );
}