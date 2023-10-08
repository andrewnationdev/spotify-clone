import '../styles/sidebar.css';
import CircleIconButtonComponent from './CircleIconButtonComponent.component';

export default function LibrarySidebarHeader(){
    return(
        <div className="library-sidebar-header">
            <div className="library-header-title">
                <i className="material-icons"></i>
                <span></span>
            </div>
            <div>
                <CircleIconButtonComponent icon=""/>
                <CircleIconButtonComponent icon=""/>
            </div>
        </div>
    );
}