import SidebarSectionComponent from './SidebarSection.component';
import SidebarLargeButtonComponent from './SidebarLargeButton.component';

export default function SidebarComponent(){
    return(
        <div>
            <SidebarSectionComponent>
                <SidebarLargeButtonComponent
                    icon={""}
                    title={""}
                />
                <SidebarLargeButtonComponent
                    icon={""}
                    title={""}
                />
            </SidebarSectionComponent>
            <SidebarSectionComponent>
                <></>
            </SidebarSectionComponent>
        </div>
    );
}