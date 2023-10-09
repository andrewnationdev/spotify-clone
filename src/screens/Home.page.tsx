import SidebarComponent from '../components/Sidebar.component';
import '../styles/pages.css';
import CircleDarkerButtonComponent from '../components/CircleDarkerButton.component';

export default function HomeScreen(){
    return(
        <div className="page-container">
            <header>
                <div className="circle-darker-buttons-container">
                    <CircleDarkerButtonComponent icon="keyboard_arrow_left"/>
                    <CircleDarkerButtonComponent icon="keyboard_arrow_right"/>
                </div>
                <div className="right-header-container">
                   <button className="pill-button-header white-pill">Ver planos Premium</button> 
                   <button className="pill-button-header black-pill">Instalar aplicativo</button>
                </div>
            </header>
        </div>
    );
}