import SidebarComponent from '../components/Sidebar.component';
import '../styles/pages.css';
import CircleDarkerButtonComponent from '../components/CircleDarkerButton.component';

export default function HomeScreen(){
    return(
        <div className="page-container">
            <header>
                <div>
                    <CircleDarkerButtonComponent icon="keyboard_arrow_left"/>
                    <CircleDarkerButtonComponent icon="keyboard_arrow_right"/>
                </div>
                <div>

                </div>
            </header>
        </div>
    );
}