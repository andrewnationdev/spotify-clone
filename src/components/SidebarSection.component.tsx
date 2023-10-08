import '../styles/sidebar.css';

export default function SidebarSectionComponent({children}){
    return(
        <div className="left-sidebar-section">
            {children}
        </div>
    );
}