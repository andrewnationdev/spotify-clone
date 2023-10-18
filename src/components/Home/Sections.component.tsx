import '../../styles/home.css';
import SingleSectionComponent from './SingleSection.component';
import useSpotifyStore from '../../modules/store';

export default function SectionsComponent() {
    const { data, updateData } = useSpotifyStore()

    const { sections } = data;

    return (
        <div className="home-page-v">
            {sections.length > 0 && sections?.map((section) => <SingleSectionComponent
                title={section?.title}
                data={section?.data}
            />)}
        </div>
    )
}

