import SidebarSectionComponent from './SidebarSection.component';
import SidebarLargeButtonComponent from './SidebarLargeButton.component';

export default function SidebarComponent(){
    return(
        <div>
            <SidebarSectionComponent>
                <SidebarLargeButtonComponent
                    icon={"home"}
                    title={"Inicio"}
                />
                <SidebarLargeButtonComponent
                    icon={"search"}
                    title={"Buscar"}
                />
            </SidebarSectionComponent>
            <SidebarSectionComponent>
                <></>
            </SidebarSectionComponent>
        </div>
    );
}