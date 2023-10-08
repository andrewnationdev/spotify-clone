import '../styles/sidebar.css';

export default function SidebarSectionComponent(props: {children: React.ReactNode}){
    return(
        <div className="left-sidebar-section">
            {props.children}
        </div>
    );
}