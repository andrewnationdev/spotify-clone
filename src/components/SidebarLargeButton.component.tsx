export default function SidebarLargeButtonComponent(props: {
    icon: string,
    title: string
}){
    return(
        <>
            <i class="material-icons">{props?.icon}</i>
            <span>{props?.title}</span>
        </>
    );
}