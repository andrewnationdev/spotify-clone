import '../../styles/home.css';

export default function SectionCardComponent(props: {
    data: {
        title: string;
        isArtistCard: boolean;
        cover: string;
        description: string;
    }
}) {
    return (
        <div className="section-card-container">
            <div className="section-card-main">
                <img className="section-card-picture" src={props?.data?.cover} alt="" />
                <i className="material-icons card-play-button">play_circle_filled</i>
            </div>
            <div className="section-card-info">
                <span className="section-card-title">{props?.data?.title}</span>
                <span className="section-card-description">{props?.data?.description}</span>
            </div>
        </div>
    )
}