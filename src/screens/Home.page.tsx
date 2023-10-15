import SidebarComponent from '../components/Sidebar.component';
import '../styles/pages.css';
import CircleDarkerButtonComponent from '../components/CircleDarkerButton.component';
import AvatarCircleComponent from '../components/AvatarCircle.component';
import {userMock} from '../mock/userMock';
import SectionsComponent from '../components/Home/Sections.component';
import {SpotifyContext, useSpotifyContext} from '../context/context';
import React, {useContext, useCallback, useState, useEffect}  from 'react';
import { IAPIResponse } from '../types/API';

export default function HomeScreen() {
    const context = useContext(SpotifyContext);

    const [data, setData] = useState<IAPIResponse>({
        name: '',
        avatar: '',
        playlists: [],
        currentlyPlaying: {
            title: '',
            singer: '',
            cover: '',
            isFavorite: false,
        },
        sections: [],
    });

    useEffect(()=>{
        setData(context.data)
    }, [context.data])

    return (
        <div className="page-container">
            <header>
                <div className="circle-darker-buttons-container">
                    <CircleDarkerButtonComponent icon="keyboard_arrow_left" />
                    <CircleDarkerButtonComponent icon="keyboard_arrow_right" />
                </div>
                <div className="right-header-container">
                    <button className="pill-button-header white-pill">Ver planos Premium</button>
                    <button className="pill-button-header black-pill">
                        <i className="bi bi-save"></i>
                        Instalar aplicativo
                    </button>
                    <CircleDarkerButtonComponent icon="notifications_none"/>
                    <AvatarCircleComponent avatarURL={data.avatar}/>
                </div>
            </header>
            <div className="main-page-section">
                <SectionsComponent/>
            </div>
        </div>
    );
}