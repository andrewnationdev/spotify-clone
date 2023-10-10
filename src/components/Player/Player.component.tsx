import '../../styles/player.css';
import ButtonIconComponent from './ButtonIcon.component';

export default function PlayerComponent(){
    return(
        <div className="player-container">
            <div className="player-left-area"></div>
            <div className="player-center-area">
                <div className="buttons-container">
                    <ButtonIconComponent isPlayButton={false}
                        icon={"shuffle"}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={"skip_previous"}
                    />
                    <ButtonIconComponent isPlayButton={true}
                        icon={"play_circle_filled"}
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