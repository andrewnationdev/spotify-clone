import '../../styles/home.css';
import SectionCardComponent from './SectionCard.component';

export default function SingleSectionComponent(props: {
    title: string;
    data: {
        title: string;
        isArtistCard: boolean;
        cover: string;
        description: string;
    }[]
}) {
    return (
        <section className="section-container">
            <div className="section-header">
                <span className="section-title">{props?.title}</span>
                <span className="section-show-more">Mostrar mais</span>
            </div>
            <div className="section-cards">
                <SectionCardComponent title={props?.data[0]?.title} data={props?.data[0]} />
            </div>
        </section>
    )
}