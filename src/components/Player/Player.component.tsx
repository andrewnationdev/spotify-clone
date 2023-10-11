import '../../styles/player.css';
import ButtonIconComponent from './ButtonIcon.component';
import FavoriteComponent from './favorite.component';
import { useState } from 'react';

interface IPlayer {
    cover: string;
    singer: string;
    title: string;
    isFavorite: boolean;
    length?: number;
}

export default function PlayerComponent() {
    const [progress, setProgress] = useState<number>(0);

    const convertSecondsToMinutes = (second: number) => {
        const minutes = Math.floor(second / 60);
        const remainingSeconds = second % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

        return timeString;
    }

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
                    }}>
                        {convertSecondsToMinutes(progress)}
                    </span>

                    <div className="progress-bar">
                        <div className="progress-bar-fill"></div>
                        <input type="range" className="progress-slider"
                            min={0}
                            max={200}
                            onChange={(e) => setProgress(Number(e?.target?.value))}
                            step={1}
                            value={progress}
                        />
                    </div>

                    <div style={{
                        width: '402px',
                        height: '4px',
                        backgroundColor: '#212121'
                    }}>
                        <div style={{
                            width: '50%',
                            backgroundColor: '#fff'
                        }}></div>
                    </div>

                    <span style={{
                        fontSize: 12
                    }}>{convertSecondsToMinutes(200)}</span>
                </div>
            </div>
            <div className="player-right-area">
                <ButtonIconComponent icon={"art_track"} smaller />
                <ButtonIconComponent icon={"important_devices"} smaller />
                <ButtonIconComponent icon={"volume_up"} smaller isVolumeButton />
                <ButtonIconComponent icon={"picture_in_picture"} smaller />
            </div>
        </div>
    );
}

/**
 * 
 *                     <input type="range" className="playbrack-track"
                        min={0}
                        max={200}
                        onChange={(e) => setProgress(Number(e?.target?.value))}
                        step={1}
                        value={progress}
                    />
 */