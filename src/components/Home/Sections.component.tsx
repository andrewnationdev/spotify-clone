import '../../styles/home.css';
import SingleSectionComponent from './SingleSection.component';
import { userMock } from '../../mock/userMock';

export default function SectionsComponent() {
    return (
        <div className="home-page-v">
            {userMock?.sections?.map((section) => <SingleSectionComponent
                title={section?.title}
                data={section?.data}
            />)}
        </div>
    )
}

