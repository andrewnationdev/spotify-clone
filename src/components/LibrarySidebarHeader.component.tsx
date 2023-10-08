import '../styles/sidebar.css';
import CircleIconButtonComponent from './CircleIconButton.component';

export default function LibrarySidebarHeaderComponent(){
    return(
        <div className="library-sidebar-header">
            <div className="library-header-title">
                <i className="material-icons"></i>
                <span>Sua Biblioteca</span>
            </div>
            <div className="library-header-icons-container">
                <CircleIconButtonComponent icon="add"/>
                <CircleIconButtonComponent icon="arrow_forward"/>
            </div>
        </div>
    );
}