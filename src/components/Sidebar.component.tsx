import SidebarSectionComponent from './SidebarSection.component';
import SidebarLargeButtonComponent from './SidebarLargeButton.component';
import LibrarySidebarHeaderComponent from './LibrarySidebarHeader.component';
import '../styles/pages.css';

export default function SidebarComponent(){
    return(
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
                <LibrarySidebarHeaderComponent/>
                <div className="horizontal-buttons-container">
                    <button>Playlists</button> 
                    <button>Artistas</button>
                    <button>Álbums</button>
                </div>
            </SidebarSectionComponent>
        </div>
    );
}