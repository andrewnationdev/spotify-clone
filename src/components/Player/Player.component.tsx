import '../../styles/player.css';
import ButtonIconComponent from './ButtonIcon.component';
import FavoriteComponent from './favorite.component';

export default function PlayerComponent(){
    return(
        <div className="player-container">
            <div className="player-left-area">
                <img src="" alt="" srcset="" />
                <span></span>
                <FavoriteComponent/>
            </div>
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
                <div>
                    <span>00:00</span>
                    <input type="range"></input>
                    <span>02:40</span>
                </div>
            </div>
            <div className="player-right-area"></div>
        </div>
    );
}