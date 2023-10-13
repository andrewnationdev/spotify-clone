import '../../styles/home.css';
import SingleSectionComponent from './SingleSection.component';
import {userMock} from '../mock/userMock';

export default function SectionsComponent(){
    return(
        <div className="home-page-v">
            <SingleSectionComponent data={userMock?.section}/>
        </div>
    )
}