import '../../styles/player.css';
import ButtonIconComponent from './ButtonIcon.component';
import FavoriteComponent from './favorite.component';
import { useState, useRef, useEffect } from 'react';
import useSpotifyStore from '../../modules/store';

interface IPlayer {
    cover: string;
    singer: string;
    title: string;
    isFavorite: boolean;
    length?: number;
}

export default function PlayerComponent() {
    //const [progress, setProgress] = useState<number>(0);
    const progress = useRef(0);
    const barWidth = useRef(`0%`);
    const [isPlaying, setPlaying] = useState<boolean>(false);

    const { data, updateData } = useSpotifyStore()

    const { currentlyPlaying } = data;

    const convertSecondsToMinutes = (second: number) => {
        const minutes = Math.floor(second / 60);
        const remainingSeconds = second % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;

        return timeString;
    }

    useEffect(() => {
        setTimeout(() => {
            if (isPlaying && progress?.current < data?.currentlyPlaying?.trackLength) {
                progress.current += 1;
                barWidth.current = `${(progress?.current / data?.currentlyPlaying?.trackLength) * 100}%`
            }
        }, 1000)

    }, [progress.current])

    return (
        <div className="player-container">
            <div className="player-left-area">
                <img className="player-cover-picture" src={currentlyPlaying.cover} alt="" />
                <div className="player-music-info">
                    <span className="player-music-name">{currentlyPlaying.title}</span>
                    <span className="player-music-singer">{currentlyPlaying.singer}</span>
                </div>
                <FavoriteComponent isFavorite={currentlyPlaying.isFavorite} />
            </div>
            <div className="player-center-area">
                <div className="buttons-container">
                    <ButtonIconComponent isPlayButton={false}
                        icon={"shuffle"}
                    />
                    <ButtonIconComponent isPlayButton={false}
                        icon={"skip_previous"}
                    />
                    {!isPlaying ? <ButtonIconComponent isPlayButton={true}
                        icon={"play_circle_filled"}
                        onClick={() => setPlaying(true)}
                    /> : <ButtonIconComponent isPlayButton={true}
                        icon={"pause_circle_filled"}
                        onClick={() => setPlaying(false)}
                    />}
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
                        {convertSecondsToMinutes(progress?.current)}
                    </span>

                    <div className="track-progressbar">
                        <div style={{
                            width: barWidth?.current,
                            backgroundColor: '#fff',
                            height: '5px'
                        }}></div>
                    </div>

                    <span style={{
                        fontSize: 12
                    }}>{convertSecondsToMinutes(data?.currentlyPlaying?.trackLength)}</span>
                </div>
            </div>
            <div className="player-right-area">
                <ButtonIconComponent icon={"file-play"} smaller isBootstrap />
                <ButtonIconComponent icon={"question-circle"} smaller isBootstrap />
                <ButtonIconComponent icon={"question-circle"} smaller isBootstrap />
                <ButtonIconComponent icon={"speaker"} smaller isBootstrap />
                <ButtonIconComponent icon={"question-circle"} smaller isVolumeButton isBootstrap />
                <ButtonIconComponent icon={"pip"} smaller isBootstrap />
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
 */