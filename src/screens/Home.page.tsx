import SidebarComponent from '../components/Sidebar.component';
import '../styles/pages.css';
import CircleDarkerButtonComponent from '../components/CircleDarkerButton.component';
import AvatarCircleComponent from '../components/AvatarCircle.component';
import {userMock} from '../mock/userMock';
import SectionsComponent from '../components/Home/Sections.component';

export default function HomeScreen() {
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
                        <i className="material-icons">get_app</i>
                        Instalar aplicativo
                    </button>
                    <AvatarCircleComponent avatarURL={userMock.avatar}/>
                </div>
            </header>
            <div>
                <SectionsComponent></SectionsComponent>
            </div>
        </div>
    );
}