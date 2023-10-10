import '../styles/pages.css';

export default function AvatarCircleComponent(props: {
    avatarURL: string
}){
    return(
        <img className="avatar-header" src={props?.avatarURL} alt=""  />
    )
}