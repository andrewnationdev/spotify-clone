export default function SidebarLargeButtonComponent(props: {
    icon: string, "Home" "search"
    title: string "Inicio" "buscar"
}){
    return(
        <>
            <i class="material-icons">{props?.icon}</i>
            <span>{props?.title}</span>
        </>
    );
}