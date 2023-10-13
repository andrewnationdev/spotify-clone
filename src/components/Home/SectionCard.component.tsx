import '../../styles/home.css';

export default function SectionCardComponent(props: {
    data: {
        title: string;
        isArtistCard: boolean;
        cover: string;
        description: string;
    }
}) {

    const titleLimit = 14;
    const descriptionLimit = 25;

    function truncateText(text: string, limit: number) {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    }

    return (
        <div className="section-card-container">
            <div className="section-card-main">
                <img className="section-card-picture" src={props?.data?.cover} alt="" />
                <i className="material-icons card-play-button">play_circle_filled</i>
            </div>
            <div className="section-card-info">
                <span
                    className="section-card-title">
                    {truncateText(props?.data?.title, titleLimit)}
                </span>
                <span className="section-card-description">
                    {truncateText(props?.data?.description, titleLimit)}
                </span>
            </div>
        </div>
    )
}