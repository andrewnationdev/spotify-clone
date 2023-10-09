import '../styles/pages.css';

export default function CircleDarkerButtonComponent(props: {
    icon: string
}){
    return(
        <div className="circle-darker-button">
            <i className="material-icons">{props?.icon}</i>
        </div>
    )
}