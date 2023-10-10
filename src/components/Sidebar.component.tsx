import SidebarSectionComponent from './SidebarSection.component';
import SidebarLargeButtonComponent from './SidebarLargeButton.component';
import LibrarySidebarHeaderComponent from './LibrarySidebarHeader.component';
import '../styles/pages.css';
import CircleIconButtonComponent from './CircleIconButton.component';
import PlaylistsLibraryCardComponent from './PlaylistsLibraryCard.component';
import { userMock } from '../mock/userMock';

export default function SidebarComponent() {
    return (
        <div>
            <SidebarSectionComponent>
                <SidebarLargeButtonComponent
                    icon={"home"}
                    title={"Inicio"}
                />
                <SidebarLargeButtonComponent
                    icon={"search"}
                    title={"Buscar"}
                />
            </SidebarSectionComponent>
            <SidebarSectionComponent>
                <LibrarySidebarHeaderComponent />
                <div className="horizontal-buttons-container">
                    <button className="pill-button-sidebar">Playlists</button>
                    <button className="pill-button-sidebar">Artistas</button>
                    <button className="pill-button-sidebar">Álbums</button>
                </div>
                <div className="evenly-spaced-sidebar-container">
                    <CircleIconButtonComponent icon="search" />
                    <a className="clickable-text">
                        Recentes
                        <i className="material-icons">arrow_drop_down</i>
                    </a>
                </div>
                <div className="playlists-vertical">
                    {userMock!.playlists.map((playlist) =>
                    <PlaylistsLibraryCardComponent
                        title={playlist.title}
                        creator={playlist.creator}
                        cover={playlist.cover}
                        songs={playlist.songs}
                    />)}
                </div>
            </SidebarSectionComponent>
        </div>
    );
}