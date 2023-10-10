import '../styles/sidebar.css';

export default function PlaylistsLibraryCardComponent(props: {
    title: string,
    creator: string,
    cover: string,
    songs: number
}){
    return(
        <div className="playlist-card-container">
            <div>
                <img className="playlist-card-picture" src="https://th.bing.com/th/id/OIP.k8VgOI80DfmuekaKmRDY5wHaHa?pid=ImgDet&rs=1" alt="" />
            </div>
            <div className="playlist-card-info-container">
                <span className="playlist-card-title">{props?.title}</span>
                <span className="playlist-card-description">Playlist • {props?.creator}</span>
            </div>
        </div>
    );
}