import '../styles/sidebar.css';

export default function SidebarLargeButtonComponent(props: {
    icon: string,
    title: string
}){
    return(
        <div className="sidebar-large-button">
            <i className="material-icons">{props?.icon}</i>
            <span>{props?.title}</span>
        </div>
    );
}