import '../styles/sidebar.css';

export default function CircleIconButtonComponent(props: {
    icon: string
}){
    return(
        <div className="circle-icon-button">
            <i className="material-icons">{props?.icon}</i>
        </div>
    )
}