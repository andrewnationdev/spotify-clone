export default function AvatarCircleComponent(props: {
    avatarURL: string
}){
    return(
        <img src={props?.avatarURL} alt=""  />
    )
}