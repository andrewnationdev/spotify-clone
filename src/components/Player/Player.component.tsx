import '../../styles/player.css';
import ButtonIconComponent from './ButtonIcon.component';
import FavoriteComponent from './favorite.component';

interface IPlayer {
    cover: string;
    singer: string;
    title: string;
    isFavorite: boolean;
}

export default function PlayerComponent() {
    return (
        <div className="player-container">
            <div className="player-left-area">
                <img className="player-cover-picture" src="https://1734811051.rsc.cdn77.org/data/images/full/359628/sea-of-thieves-logo.jpg" alt="" />
                <div>
                    <span className="player-music-name">Título da Música</span>
                    <span className="player-music-singer">Cantor</span>
                </div>
                <FavoriteComponent />
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
                <div className="playback-container">
                    <span style={{
                        fontSize: 12
                    }}>00:00</span>
                    <input type="range" className="playbrack-track"/>
                    <span style={{
                        fontSize: 12
                    }}>02:40</span>
                </div>
            </div>
            <div className="player-right-area">
                <ButtonIconComponent icon={"art_track"} smaller/>
                <ButtonIconComponent icon={"important_devices"} smaller/>
                <ButtonIconComponent icon={"volume_up"} smaller isVolumeButton/>
                <ButtonIconComponent icon={"picture_in_picture"} smaller/>
            </div>
        </div>
    );
}