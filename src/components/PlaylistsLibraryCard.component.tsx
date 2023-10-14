import '../styles/sidebar.css';
import truncateText from '../../utils/Truncate';

export default function PlaylistsLibraryCardComponent(props: {
    title: string,
    creator: string,
    cover: string,
    songs: number
}) {
    const limit: number = 17;

    return (
        <div className="playlist-card-container">
            <div>
                <img className="playlist-card-picture" src="https://th.bing.com/th/id/OIP.k8VgOI80DfmuekaKmRDY5wHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <div className="playlist-card-info-container">
                <span className="playlist-card-title">
                    {truncateText(props?.title, limit)}
                </span>
                <span className="playlist-card-description">
                    Playlist • {props?.creator}
                </span>
            </div>
        </div>
    );
}