import SidebarComponent from '../components/Sidebar.component';
import '../styles/pages.css';
import CircleDarkerButtonComponent from '../components/CircleDarkerButton.component';
import AvatarCircleComponent from '../components/AvatarCircle.component';
import {userMock} from '../mock/userMock';
import SectionsComponent from '../components/Home/Sections.component';
import React, {useState, useEffect}  from 'react';
import { IAPIResponse } from '../types/API';
import useSpotifyStore from '../modules/store';

export default function HomeScreen() {
    const { data, updateData } = useSpotifyStore()

    const {avatar} = data;

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
                    <AvatarCircleComponent avatarURL={avatar}/>
                </div>
            </header>
            <div className="main-page-section">
                <SectionsComponent/>
            </div>
        </div>
    );
}