import '../style/sidebar.css';

export default function PlaylistsLibraryCardComponent(props: {
    title: string
    creator: string
    cover: string
    songs: number
}){
    return(
        <div className="playlist-card-container">
            <div>
            </div>
            <div>
                <span className="playlist-card-title">Imagine Dragons Best Of</span>
                <span>Playlist</span>
            </div>
        </div>
    );
}