import '../../styles/home.css';

export default function SectionCardComponent() {
    return (
        <div className="section-card-container">
            <div className="section-card-main">
                <img className="section-card-picture" src="" alt="" />
                <i className="material-icons card-play-button">play_circle_filled</i>
            </div>
            <div className="section-card-info">
                <span className="section-card-title"></span>
                <span className="section-card-description"></span>
            </div>
        </div>
    )
}